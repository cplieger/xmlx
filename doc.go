// Package xmlx bounds the work an untrusted XML document can cost before and
// during an encoding/xml decode.
//
// A byte cap on the response body is not a bound on decoding. encoding/xml
// materializes each token before any caller-side check runs, so a wire-capped
// body can still force allocations far past its own size:
//
//   - One token can be as large as the body. A single text node, attribute
//     value, or start tag inside an 8 MB response is an 8 MB allocation before
//     the caller's struct field sees it. The decoder's internal buffer never
//     shrinks, so the largest token is a high-water mark for the whole decode.
//   - Element count amplifies. Millions of three-byte elements fit in a few
//     megabytes of wire and expand into a decoded object graph many times
//     larger.
//   - Nesting grows the decoder's element stack. The tokenizer pushes one
//     heap-allocated entry per open element. Unmarshal does cap its own
//     recursion at a fixed internal ceiling (the fix for CVE-2022-30633), but
//     every child the caller's schema does not model is consumed by
//     Decoder.Skip, which is iterative and has no depth bound at all, so the
//     element stack still grows to the document's true depth. A body of
//     `<a><a><a>...` converts each 3 bytes of wire into a live stack entry.
//   - Concurrency multiplies all three. Each in-flight request holds its own
//     copy of the worst case.
//
// The package is two halves, matching where the cost is paid:
//
//   - [Preflight] is a lexical gate over the RAW bytes, run BEFORE the decoder
//     sees them. It walks the document's surface structure (text runs, tags
//     honoring quoted '>' bytes, comments, processing instructions, CDATA
//     sections) and rejects a body already outside the caller's contract, in one
//     allocation-free scan. Only a gate over the raw bytes can bound what the
//     decoder must materialize.
//   - [Budget] is the decode-time text accounting a schema decoder charges each
//     retained value against: a per-value cap and a cumulative document-wide
//     cap, both applied before the value is stored. It bounds what the program
//     BUILDS and KEEPS, which is the part Preflight cannot see, because raw
//     bytes and decoded text are different quantities.
//
// The two are complements. Preflight alone leaves the caller free to retain
// every byte it admits; Budget alone bounds no element count and no nesting,
// since Decoder.Skip still walks the parts the schema ignores.
//
// Schema decoding stays the caller's. This package owns only the scaffold, the
// part that gets hand-rolled, subtly differently, in every program that parses
// XML it did not write. Per-name cardinality ("at most N <item> elements") needs
// the caller's vocabulary and belongs at the caller's decode site; the
// vocabulary-free total is [Limits.MaxElements].
//
// # Typical use
//
//	if err := xmlx.Preflight(body, xmlx.DefaultLimits()); err != nil {
//		return err
//	}
//	var doc feed
//	if err := xml.Unmarshal(body, &doc); err != nil { // custom UnmarshalXML
//		return err
//	}
//
// with the document's UnmarshalXML methods charging a [Budget] as they decode.
//
// # Fail-closed, no silent defaults
//
// Every bound is explicit. A non-positive limit is a configuration mistake,
// reported as [ErrInvalidLimits], never read as "unbounded": a bounds library
// whose zero value bounds nothing is the failure it exists to prevent. Use
// [DefaultLimits] and [DefaultBudget] as a starting point and size them to the
// document contract.
//
// # XML directives are rejected, deliberately
//
// Preflight refuses every `<!` form that is not a comment or a CDATA section:
// `<!DOCTYPE`, `<!ENTITY`, `<!ATTLIST`, `<!NOTATION`. This is a scope decision.
// encoding/xml tokenizes a directive by tracking nested '<'/'>' pairs, with
// quoting and nested comments, accumulating until a '>' at depth zero. A scan
// that merely stopped at the first unquoted '>' would report a short token where
// the decoder retains one the size of the whole body: a bound that reads as
// protection and is not. The objection is not that reproducing that tokenizer is
// laborious, it is that a silent divergence in a copied tokenizer is
// unfalsifiable at the call site while a refusal is falsifiable immediately.
// Rejecting the class by default also matches the ecosystem norm for untrusted
// XML.
//
// A document that legitimately carries a directive cannot use Preflight; decode
// it under a byte cap and a [Budget] instead. Legacy RSS 0.91 did require a
// DOCTYPE, so the class is not extinct, only absent from the modern dialects.
//
// # Not in scope
//
// XXE and entity expansion are not this package's concern: encoding/xml does not
// resolve external entities and does not expand a DTD's internal entities, and
// the directive rejection closes that surface as a side effect.
//
// Round-trip stability is a different hardening axis and is not covered. Go's XML
// parser uniquely accepts leading and trailing garbage around the document
// element, which was the mechanism behind a real authentication bypass
// (CVE-2020-16250); a caller whose security depends on the document's shape,
// rather than on its cost, wants a round-trip validator alongside Preflight.
//
// Schema validation, namespace policy, character-encoding conversion, and
// well-formedness are all left to encoding/xml. Preflight never validates. The
// converse does not hold: malformed input can still trip a bound, so a rejection
// proves the document was outside the contract, not that it was oversized.
//
// # Decoder configuration
//
// The bounds model the DEFAULT decoder: Strict enabled, AutoClose empty, no
// caller-supplied Entity map, no CharsetReader. Each of those changes what the
// bytes mean, and two change it enough to matter: with Strict disabled a bare
// attribute name becomes an attribute the lexical count cannot see, and an Entity
// map can expand a short reference into an arbitrarily long value after the raw
// bound has passed. A caller that sets either keeps the token, depth and element
// bounds but should treat the attribute and text bounds as advisory.
package xmlx
