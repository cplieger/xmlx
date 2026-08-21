window.BENCHMARK_DATA = {
  "lastUpdate": 1787314989686,
  "repoUrl": "https://github.com/cplieger/ci",
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
      }
    ]
  }
}