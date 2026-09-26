# Portfolio MVP smoke evidence

## Release under test

- Production: https://software-delivery-portfolio.vercel.app
- Vercel project: `software-delivery-portfolio`, scope `tmdev`
- Deployment: `dpl_EJjpMmoMUFsUspTdEiTnhyEsdcUP` — READY
- Application source commit: `8a5c81b`
- Test date: 2026-09-26
- Runner: Playwright 1.63.0, Linux, two workers, no retries
- Desktop viewport: 1440 × 1000; mobile viewport: 390 × 844
- Local runtime: all required sections, valid anchors, no horizontal overflow at 375/390/768/1440 pixels, no console or page errors
- Production HTTP: 200
- Moya Glow production HTTP: 200 (read-only check)
- GitHub profile and Moya Glow repository: HTTP 200
- LinkedIn link: exact supplied destination confirmed; third-party authenticated content not tested

## Executed results

The first production run used installed Chrome 154.0.8037.57 through Playwright's Chromium engine while the bundled Chromium download was in progress:

```sh
BASE_URL=https://software-delivery-portfolio.vercel.app PLAYWRIGHT_CHANNEL=chrome npx playwright test
```

Initial run: 9 passed, 1 failed. SMOKE-007 used an exact text match that did not account for the step number in the list item. The application displayed the correct text. The test was fixed to locate the QA flow list item containing `Release Assessment`. See `initial-results.json` and closed test issue QA-001.

Corrected run: **10 passed, 0 failed, 0 skipped, 0 flaky** in 31.9 seconds. No application source changes were needed.

| ID        | Check                                                                      | Result |
| --------- | -------------------------------------------------------------------------- | ------ |
| SMOKE-001 | Homepage HTTP 200, title, operations, stakeholders, no console/page errors | PASS   |
| SMOKE-002 | Hero heading, subheading, GitHub and LinkedIn links                        | PASS   |
| SMOKE-003 | Manifesto and completion standard                                          | PASS   |
| SMOKE-004 | Capability matrix and 11 capability cards                                  | PASS   |
| SMOKE-005 | Moya Glow shipped card and six planned projects                            | PASS   |
| SMOKE-006 | Exact Moya Glow URL, new tab and safe rel attributes                       | PASS   |
| SMOKE-007 | QA process with nine steps and release assessment                          | PASS   |
| SMOKE-008 | Delivery lifecycle with 12 stages                                          | PASS   |
| SMOKE-009 | Mobile viewport, section boundaries and no horizontal overflow             | PASS   |
| SMOKE-010 | Navigation clicks, hero actions and valid internal anchor targets          | PASS   |

## Final bundled Chromium run

```sh
npx playwright install chromium --no-shell
BASE_URL=https://software-delivery-portfolio.vercel.app npx playwright test
```

Full Chromium 153.0.8010.12 is used in headless mode; a separate legacy headless-shell binary is unnecessary. Installation completed successfully.

Final result: **10 passed, 0 failed, 0 skipped, 0 flaky** in 22.7 seconds. Started at `2026-09-26T14:06:08.896Z`. See `results.json` and `run-context.json`. Earlier Chrome pass is retained in `chrome-results.json`.

## Artifacts

- `results.json`: final Playwright JSON results
- `initial-results.json`: initial test-selector failure evidence
- `screenshots/desktop.png`: full production desktop page
- `screenshots/mobile.png`: full production mobile page
- `screenshots/desktop-hero.png`: desktop hero visual review
- `screenshots/mobile-hero.png`: mobile hero visual review
- `DEFECT_LOG.csv`: resolved test automation issue
- `RELEASE_ACCEPTANCE.md`: acceptance checklist and release limitations

Initial JSON includes references to ignored temporary Playwright traces; those temporary traces are not retained in Git. The error and test result remain in the JSON.

No open application defects from executed checks.

This is MVP smoke validation only. No deep QA, exhaustive browser coverage, load testing or security audit is claimed.
