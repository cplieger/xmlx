# xmlx

[![Go Reference](https://pkg.go.dev/badge/github.com/cplieger/xmlx.svg)](https://pkg.go.dev/github.com/cplieger/xmlx)
[![Go version](https://img.shields.io/github/go-mod/go-version/cplieger/xmlx)](https://github.com/cplieger/xmlx/blob/main/go.mod)
[![Test coverage](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cplieger/xmlx/badges/coverage.json)](https://github.com/cplieger/xmlx/actions/workflows/coverage.yml)
[![Mutation](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/cplieger/xmlx/badges/mutation.json)](https://github.com/cplieger/xmlx/issues?q=label%3Agremlins-tracker)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/13796/badge)](https://www.bestpractices.dev/projects/13796)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/cplieger/xmlx/badge)](https://scorecard.dev/viewer/?uri=github.com/cplieger/xmlx)

> Bound the work an untrusted XML document can cost, before and during an encoding/xml decode

A standalone, stdlib-only Go library for programs that parse XML they did not write: a syndication feed, a third-party API response, an upstream service's reply.

A byte cap on the response body is not a bound on decoding. `encoding/xml` materializes each token before any caller-side check can run, so a wire-capped body still forces allocations far past its own size:

- **One token can be as large as the body.** A single text node, attribute value, or start tag inside an 8 MB response is an 8 MB allocation before your struct field sees it, and the decoder's internal buffer never shrinks, so the largest token is a high-water mark for the whole decode.
- **Element count amplifies.** Millions of three-byte elements fit in a few megabytes of wire and expand into a decoded object graph many times larger.
- **Nesting grows the decoder's element stack.** The tokenizer pushes one heap-allocated entry per open element. `Unmarshal` does carry a fixed internal ceiling on its own recursion (10000 open elements, 5000 on wasm; introduced for CVE-2022-30633 and rebuilt for CVE-2026-56859, which closed a `DecodeElement` bypass), but the decoder samples it only where its schema recursion goes, and every child your schema does not model goes through `Decoder.Skip`, which is iterative and has no depth bound. Measured on go1.27.0: a document 349,525 elements deep decodes clean under a schema that models only the root.
- **Concurrency multiplies all three.** Each in-flight request holds its own copy of the worst case.

`xmlx` closes that gap with two primitives, one per place the cost is paid.

## Install

```sh
go get github.com/cplieger/xmlx@latest
```

## Usage

`Preflight` is a lexical gate over the raw bytes, run before the decoder sees them. One sequential pass, no allocation, no copies:

```go
if err := xmlx.Preflight(body, xmlx.DefaultLimits()); err != nil {
	return err // *xmlx.LimitError, naming the bound and the byte offset
}

var doc feed
if err := xml.Unmarshal(body, &doc); err != nil {
	return err
}
```

`Budget` is the decode-time accounting a schema decoder charges each retained value against, applied before the value is stored. Thread one `Budget` through the document's decoders, here as the `item`'s `budget` field:

```go
budget, err := xmlx.NewBudget(4<<10, 4<<20) // per value, per document
if err != nil {
	return err
}

func (it *item) UnmarshalXML(d *xml.Decoder, _ xml.StartElement) error {
	for {
		tok, err := d.Token()
		if err != nil {
			return err
		}
		switch t := tok.(type) {
		case xml.StartElement:
			switch t.Name.Local {
			case "title":
				it.Title, err = it.budget.DecodeText(d) // bounded as it accumulates
			case "guid":
				it.GUID, err = it.budget.DecodeText(d)
			default:
				err = d.Skip() // unknown child, never materialized
			}
			if err != nil {
				return err
			}
		case xml.EndElement:
			return nil
		}
	}
}
```

For a value `encoding/xml` has already handed you whole, such as an attribute off a `StartElement.Attr`, charge it before storing it:

```go
for _, a := range start.Attr {
	if a.Name.Local == "url" {
		if err := budget.Charge(a.Value); err != nil {
			return err
		}
		enc.URL = a.Value
	}
}
```

Retrofitting a live integration? Run the gate in observe-only mode first, so a mis-sized bound shows up in your logs instead of breaking a working feed:

```go
if err := xmlx.Preflight(body, lim); err != nil {
	slog.Warn("xml document outside the preflight bounds", "error", err)
	// fall through and decode anyway until the numbers are proven
}
```

## API

- `Preflight(body []byte, lim Limits) error`: one allocation-free scan of the raw document. Rejects an overlong raw text or CDATA run, an overlong markup token, a start tag with too many XML attributes, too many elements, nesting past the depth bound, and any XML directive. `body` is neither modified nor retained.
- `Limits` + `DefaultLimits()`: the lexical bounds. `MaxTextRunBytes`, `MaxTokenBytes`, `MaxTagAttrs`, `MaxDepth`, `MaxElements`.
- `NewBudget(maxFieldBytes, maxTotalBytes int) (*Budget, error)` + `DefaultBudget()`: decode-time text accounting for one document, with `Total()`, `Remaining()`, `MaxFieldBytes()`, `MaxTotalBytes()`.
- `Budget.DecodeText(d *xml.Decoder) (string, error)`: replaces `d.DecodeElement(&s, &start)` for a text field. Accumulates under the per-value cap and the document's remaining allowance, stopping at the token that would cross either. Nested markup is skipped whole; comments and processing instructions are ignored; on success the end tag is consumed. Any error means the document is over. The swap is byte-identical to `DecodeElement` for every value inside `encoding/xml`'s acceptance set, with one measured exception at the decoder's own depth ceiling (below).
- `Budget.Charge(s string) error`: account one already-decoded value against both caps before storing it. Charge each value exactly once; a value returned by `DecodeText` is already charged.
- `LimitError` + `Kind` + `ErrLimit`: every rejection names its bound and, for `Preflight`, the byte offset. Match the class with `errors.Is(err, xmlx.ErrLimit)`; read the bound with `errors.AsType[*xmlx.LimitError](err)` for the `Kind`, `Limit` and `Offset`.
- `ConfigError` + `ErrInvalidLimits`: a non-positive bound is a caller mistake, reported separately from a document rejection.

## Design notes

- **Two quantities, two bounds.** Raw bytes and decoded text are not the same measurement, and neither substitutes for the other. Entity references expand (`&quot;` is six raw bytes for one decoded), CDATA seams split one value across many tokens, and repeated elements overwrite one field while costing many decodes. `Limits` bounds what arrives; `Budget` bounds what is kept. Size the raw text bound _looser_ than the decoded value cap: 6 to 1 is the floor set by the widest predefined entity, and the defaults leave more.
- **Bound the peak, not the net.** `MaxDepth` caps the greatest number of simultaneously open elements, which is what the decoder's stack holds, and popped entries are recycled through a free list so live cost really does track the peak. A self-closing element counts: the decoder pushes `<e/>` and pops it on the synthesized end tag, so `<a><b/></a>` reaches depth 2. Tracking only the net change would admit a document one level past your bound through a self-closing leaf.
- **The decoder's own ceiling bounds a different question, so keep `MaxDepth` under it.** `encoding/xml` guards its unmarshal recursion at 10000 open elements (5000 on wasm), but it samples that count only on each entry into the recursion, never as the document's peak, so it says nothing about the part your schema does not model. Two consequences, both measured on go1.27.0. Under a schema that models only the root, a 349,525-deep document decodes clean and `Decoder.Skip` walks it unbounded, which is what `MaxDepth` is for. Under a schema nested as deeply as the document, the region of `MaxDepth` above 10000 is unreachable: at `MaxDepth` 10001 a 10001-deep document passes `Preflight` and `xml.Unmarshal` then refuses it with an unexported, unwrapped `errors.New("exceeded max depth")` that no `errors.Is` can classify. Set `MaxDepth` at or below 10000 in that case and `xmlx` reports the rejection instead, as `KindDepth` wrapping `ErrLimit`.
- **Two measurement bases, named.** `MaxTextRunBytes` measures character _data_ (a raw run, a CDATA section's content), because that is what the decoder hands back as a `CharData` token. `MaxTokenBytes` measures a markup _token_ whole, delimiters included, so the same configured number means the same thing for a tag, a comment and a processing instruction.
- **No silent defaults.** Every bound is explicit, and a non-positive one is a configuration mistake (`ErrInvalidLimits`), never read as "unbounded". A bounds library whose zero value bounds nothing is the failure it exists to prevent.
- **Preflight bounds materialization; Budget bounds retention.** Only the raw-byte gate can stop the decoder from building an oversized token in the first place. `Budget` sees values the decoder has already produced, and stops them before they are concatenated and kept. That is why the two are complements rather than alternatives.
- **Rejections mutate nothing.** A refused value leaves the budget exactly as it was, so a caller that treats one field as skippable is not silently drained.
- **Errors carry a bound and an offset, never document bytes.** An excerpt of the offending input would be an unbounded, unsanitized string on its way to a log line: the amplification this library exists to stop, reintroduced through its own diagnostics. A byte offset is one bounded integer with no attacker-chosen content, and it is what turns "text run longer than 65536" into something you can find in a saved payload.
- **Judgment-free about schemas.** How many `<item>` elements a document may carry is your contract, and it is one comparison at your decode site. The vocabulary-free total is `MaxElements`, which protects a plain `xml.Unmarshal` consumer that has no custom decode site to put such a rule in.

## Sizing the bounds

`DefaultLimits` and `DefaultBudget` are sized for a small structured document: short fields, a handful of attributes per element, shallow nesting, thousands of elements rather than millions. They are a starting point.

A catalogue-scale consumer, such as one parsing a multi-megabyte metadata dump, will exceed `MaxElements` and `Budget`'s document cap on its first real payload. That is the bound working, but it is worth discovering deliberately: set `MaxElements` and `maxTotalBytes` from that document's real ceiling. If the body arrives compressed, remember the preflight runs on the _inflated_ bytes, so the transport cap is not the bound that matters.

## Unsupported by Design

- **XML directives.** `Preflight` refuses every `<!` form that is not a comment or a CDATA section: `<!DOCTYPE`, `<!ENTITY`, `<!ATTLIST`, `<!NOTATION`. `encoding/xml` tokenizes a directive by tracking nested `<`/`>` pairs, with quoting and nested comments, accumulating until a `>` at depth zero. A scan that merely stopped at the first unquoted `>` would report a short token where the decoder retains one the size of the whole body: a bound that reads as protection and is not. The objection is not that reproducing that tokenizer is laborious, it is that a silent divergence in a copied tokenizer is unfalsifiable at the call site while a refusal is falsifiable immediately. Rejecting the class by default is also the ecosystem norm for untrusted XML. Legacy RSS 0.91 did require a DOCTYPE, so the class is not extinct; a document that carries one cannot use `Preflight` and should be decoded under a byte cap and a `Budget` instead.
- **XXE and entity expansion.** Not this library's concern, because `encoding/xml` does not resolve external entities and does not expand a DTD's internal entities. The directive rejection closes that surface as a side effect.
- **Round-trip stability.** A different hardening axis. Go's XML parser uniquely accepts leading and trailing garbage around the document element, which was the mechanism behind a real authentication bypass (CVE-2020-16250). If your security depends on the document's _shape_ rather than its _cost_, pair `Preflight` with a round-trip validator such as [mattermost/xml-roundtrip-validator](https://github.com/mattermost/xml-roundtrip-validator); the two sit alongside each other and neither replaces the other.
- **Schema validation, namespace policy, character-encoding conversion, well-formedness.** All `encoding/xml`'s. `Preflight` reads surface structure only, enough to know where one token ends and the next begins. The converse does not hold: malformed input can still trip a bound, so a rejection means the document was outside the contract, not that it was oversized.
- **Streaming.** `Preflight` takes the whole body, because the gate's value is refusing a document before decoding it, and the caller already holds the bytes from a byte-capped read.
- **Per-name cardinality.** "At most N `<item>` elements" needs your vocabulary and reads better with a name from it. `MaxElements` covers the vocabulary-free total.
- **Recursion depth inside `DecodeText`.** `Budget.DecodeText` is iterative (`Token` plus `Skip`), so unlike `DecodeElement` it does not enter `encoding/xml`'s unmarshal recursion and does not inherit that recursion's depth ceiling. Measured on go1.27.0 by entering an element at a known open depth: the two return the same value through 10000 open elements (5000 on wasm), and one element deeper `DecodeElement` refuses while `DecodeText` still returns the value. `DecodeText` is therefore the looser of the two above that depth. That is the intended split rather than a gap. A `Budget` bounds bytes retained and never document shape, `DecodeText` carries no recursion for a ceiling to protect, and nesting is `Preflight`'s bound. A caller that wants the ceiling enforced sets `MaxDepth` at or below it, which also turns an unclassifiable stdlib error into `KindDepth` wrapping `ErrLimit`.
- **Non-default decoder configuration.** The bounds model `Strict` enabled, no `AutoClose`, no caller-supplied `Entity` map, no `CharsetReader`. With `Strict` disabled a bare attribute name becomes an attribute the lexical count cannot see; an `Entity` map can expand a short reference after the raw bound has passed. Either keeps the token, depth and element bounds and makes the attribute and text bounds advisory.

## Contributing

See [CONTRIBUTING.md](https://github.com/cplieger/.github/blob/main/CONTRIBUTING.md).

## Disclaimer

This project is built with care and follows security best practices, but it is intended for personal / self-hosted use. No guarantees of fitness for production environments. Use at your own risk.

This project was built with AI-assisted tooling using [Claude](https://claude.com), [GPT](https://openai.com), and [Kiro](https://kiro.dev). The human maintainer defines architecture, supervises implementation, and makes all final decisions.

## License

Apache-2.0. See [LICENSE](LICENSE).
