window.BENCHMARK_DATA = {
  "lastUpdate": 1788307347440,
  "repoUrl": "https://github.com/cplieger/xmlx",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "cplieger",
            "username": "cplieger",
            "email": "917744+cplieger@users.noreply.github.com"
          },
          "committer": {
            "name": "Christopher Plieger",
            "username": "cplieger",
            "email": "917744+cplieger@users.noreply.github.com"
          },
          "id": "a66dd3d4479d96bf77d84ed08b78651e2477d1f4",
          "message": "fix: measure the weekly benchmarks instead of reporting an empty run green\n\nThe fanout discovered repos with a jq filter that emits one name per line, then tested enrolment with a space-delimited substring match. A newline is not a space, so every enrolled repo was rejected as not live, the matrix came out empty, the run job skipped on its non-empty guard, and the leg reported success having measured nothing. Confirmed by the absence of a benchmarks branch on all four enrolled repos despite three consecutive green runs.\n\nFlattens the discovery output, then makes the two silent paths fail closed: a hardcoded enrolment list resolving to zero live repos is a defect rather than a weekly state, and an empty matrix now fails instead of skipping the run job. Also guards the HEAD lookup, which had the same unguarded shape that took down the sibling mutation-testing fanout in August.",
          "timestamp": "2026-08-21T11:04:22Z",
          "url": "https://github.com/cplieger/ci/commit/a66dd3d4479d96bf77d84ed08b78651e2477d1f4"
        },
        "date": 1787310753063,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkBudgetCharge - B/op",
            "value": 0,
            "range": "± 0.0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkBudgetCharge - allocs/op",
            "value": 0,
            "range": "± 0.0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkBudgetCharge",
            "value": 143.05,
            "range": "± 3.5",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10 - B/op",
            "value": 0,
            "range": "± 0.0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10 - allocs/op",
            "value": 0,
            "range": "± 0.0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10",
            "value": 4168.5,
            "range": "± 128.0",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100 - B/op",
            "value": 0,
            "range": "± 0.0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100 - allocs/op",
            "value": 0,
            "range": "± 0.0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100",
            "value": 39099.5,
            "range": "± 1213.0",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000 - B/op",
            "value": 0,
            "range": "± 0.0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000 - allocs/op",
            "value": 0,
            "range": "± 0.0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000",
            "value": 388872.5,
            "range": "± 9404.0",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000 - B/op",
            "value": 0,
            "range": "± 0.0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000 - allocs/op",
            "value": 0,
            "range": "± 0.0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000",
            "value": 3889204.5,
            "range": "± 48328.0",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run - B/op",
            "value": 24,
            "range": "± 0.0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run - allocs/op",
            "value": 1,
            "range": "± 0.0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run",
            "value": 1176.5,
            "range": "± 15.0",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token - B/op",
            "value": 24,
            "range": "± 0.0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token - allocs/op",
            "value": 1,
            "range": "± 0.0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token",
            "value": 277709,
            "range": "± 9943.0",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep - B/op",
            "value": 24,
            "range": "± 0.0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep - allocs/op",
            "value": 1,
            "range": "± 0.0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep",
            "value": 1539.5,
            "range": "± 34.0",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs - B/op",
            "value": 24,
            "range": "± 0.0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs - allocs/op",
            "value": 1,
            "range": "± 0.0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs",
            "value": 224.55,
            "range": "± 5.6",
            "unit": "ns/op",
            "extra": "10 samples, median"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Christopher Plieger",
            "username": "cplieger",
            "email": "917744+cplieger@users.noreply.github.com"
          },
          "committer": {
            "name": "Christopher Plieger",
            "username": "cplieger",
            "email": "917744+cplieger@users.noreply.github.com"
          },
          "id": "9b784475c83b9540230831ae3621fc38e5d80686",
          "message": "fix: revert the benchmark attribution change that broke publishing\n\nThe attempted fix set GITHUB_REPOSITORY on the publish step to redirect the action commit lookup at the repo being benchmarked. That cannot work: GitHub reserves the default GITHUB_* variables and the runner value wins at process level, so the step env block printed the override while the lookup still targeted cplieger/ci. Passing the consumer SHA as ref then asked ci for an object it does not have, and all four repos failed with \"No commit found for SHA\".\n\nRestores the previous behaviour, which publishes correctly but attributes each data point to a cplieger/ci commit. That attribution defect is real and still open; it needs either an upstream owner/repo input for the commit lookup, a post-processing pass over the published data, or running the benchmark in the consumer own workflow context.",
          "timestamp": "2026-08-21T12:10:35Z",
          "url": "https://github.com/cplieger/ci/commit/9b784475c83b9540230831ae3621fc38e5d80686"
        },
        "date": 1787314989210,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkBudgetCharge - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkBudgetCharge - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkBudgetCharge",
            "value": 132,
            "range": "± 0.5",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10",
            "value": 4342,
            "range": "± 212",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100",
            "value": 40294,
            "range": "± 829",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000",
            "value": 403581.5,
            "range": "± 8797",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000",
            "value": 4047136.5,
            "range": "± 315338",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run",
            "value": 1057,
            "range": "± 9",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token",
            "value": 245481,
            "range": "± 1543",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep",
            "value": 1588.5,
            "range": "± 104",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs",
            "value": 218.25,
            "range": "± 3.5",
            "unit": "ns/op",
            "extra": "10 samples, median"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Christopher Plieger",
            "username": "cplieger",
            "email": "917744+cplieger@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a08acdfead36a7e33101ce5ef72cbd8563435a44",
          "message": "chore(sync): synced file(s) with cplieger/ci (#79)\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-21T12:17:37Z",
          "url": "https://github.com/cplieger/xmlx/commit/a08acdfead36a7e33101ce5ef72cbd8563435a44"
        },
        "date": 1787316320132,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkBudgetCharge - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkBudgetCharge - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkBudgetCharge",
            "value": 142.95,
            "range": "± 1.3",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10",
            "value": 4169,
            "range": "± 41",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100",
            "value": 39096,
            "range": "± 2351",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000",
            "value": 388324.5,
            "range": "± 7753",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000",
            "value": 3885316,
            "range": "± 35323",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run",
            "value": 1180,
            "range": "± 6",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token",
            "value": 277697.5,
            "range": "± 1391",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep",
            "value": 1541,
            "range": "± 4",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs",
            "value": 230.2,
            "range": "± 4",
            "unit": "ns/op",
            "extra": "10 samples, median"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Christopher Plieger",
            "username": "cplieger",
            "email": "917744+cplieger@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d2157697221292a7a8477e269be6a0e3e285eee5",
          "message": "chore(sync): synced file(s) with cplieger/ci (#80)\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-21T13:23:09Z",
          "url": "https://github.com/cplieger/xmlx/commit/d2157697221292a7a8477e269be6a0e3e285eee5"
        },
        "date": 1787320247049,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkBudgetCharge - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkBudgetCharge - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkBudgetCharge",
            "value": 132,
            "range": "± 1.1",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10",
            "value": 4330,
            "range": "± 74",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100",
            "value": 40688,
            "range": "± 2447",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000",
            "value": 404509.5,
            "range": "± 11906",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000",
            "value": 4031652,
            "range": "± 76250",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run",
            "value": 1054.5,
            "range": "± 3",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token",
            "value": 246034.5,
            "range": "± 1369",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep",
            "value": 1585.5,
            "range": "± 37",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs",
            "value": 214.8,
            "range": "± 5.1",
            "unit": "ns/op",
            "extra": "10 samples, median"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Christopher Plieger",
            "username": "cplieger",
            "email": "917744+cplieger@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d2157697221292a7a8477e269be6a0e3e285eee5",
          "message": "chore(sync): synced file(s) with cplieger/ci (#80)\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-21T13:23:09Z",
          "url": "https://github.com/cplieger/xmlx/commit/d2157697221292a7a8477e269be6a0e3e285eee5"
        },
        "date": 1787321226098,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkBudgetCharge - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkBudgetCharge - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkBudgetCharge",
            "value": 188.65,
            "range": "± 4.4",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10",
            "value": 3953.5,
            "range": "± 98",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100",
            "value": 36308,
            "range": "± 117",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000",
            "value": 360644,
            "range": "± 3639",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000",
            "value": 3609008.5,
            "range": "± 33870",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run",
            "value": 2015.5,
            "range": "± 24",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token",
            "value": 227500.5,
            "range": "± 2107",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep",
            "value": 1484,
            "range": "± 7",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs",
            "value": 244.8,
            "range": "± 4.7",
            "unit": "ns/op",
            "extra": "10 samples, median"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Christopher Plieger",
            "username": "cplieger",
            "email": "917744+cplieger@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "879847011e94b1cfb646178d1a3b59663fb04ddb",
          "message": "chore(sync): synced file(s) with cplieger/ci (#87)\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T08:16:43Z",
          "url": "https://github.com/cplieger/xmlx/commit/879847011e94b1cfb646178d1a3b59663fb04ddb"
        },
        "date": 1787697625972,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkBudgetCharge - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkBudgetCharge - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkBudgetCharge",
            "value": 132.15,
            "range": "± 0.45",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10",
            "value": 4363,
            "range": "± 30",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100",
            "value": 40825,
            "range": "± 285.5",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000",
            "value": 406920.5,
            "range": "± 2963",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000",
            "value": 4074153.5,
            "range": "± 41041.5",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run",
            "value": 1054,
            "range": "± 2.5",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token",
            "value": 246338,
            "range": "± 1230",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep",
            "value": 1583,
            "range": "± 5",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs",
            "value": 213.55,
            "range": "± 1.7",
            "unit": "ns/op",
            "extra": "10 samples, median"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Christopher Plieger",
            "username": "cplieger",
            "email": "917744+cplieger@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "822d171a5f32be94ba624a25f4e5ebc8c1f4fceb",
          "message": "chore(deps): update dependency go to v1.27.1 (#112)",
          "timestamp": "2026-09-01T21:16:59Z",
          "url": "https://github.com/cplieger/xmlx/commit/822d171a5f32be94ba624a25f4e5ebc8c1f4fceb"
        },
        "date": 1788307346696,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "BenchmarkBudgetCharge - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkBudgetCharge - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkBudgetCharge",
            "value": 141.7,
            "range": "± 0.8",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10",
            "value": 4411.5,
            "range": "± 30",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_100",
            "value": 40634.5,
            "range": "± 140.5",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_1000",
            "value": 405758,
            "range": "± 3234",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000 - B/op",
            "value": 0,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000 - allocs/op",
            "value": 0,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflight/elements_10000",
            "value": 4071357,
            "range": "± 26595.5",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_text_run",
            "value": 1678,
            "range": "± 13.5",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/oversized_token",
            "value": 239940.5,
            "range": "± 21434",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_deep",
            "value": 1649,
            "range": "± 10",
            "unit": "ns/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs - B/op",
            "value": 24,
            "range": "± 0",
            "unit": "B/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs - allocs/op",
            "value": 1,
            "range": "± 0",
            "unit": "allocs/op",
            "extra": "10 samples, median"
          },
          {
            "name": "BenchmarkPreflightRejection/too_many_attrs",
            "value": 259.65,
            "range": "± 1.4",
            "unit": "ns/op",
            "extra": "10 samples, median"
          }
        ]
      }
    ]
  }
}