# MVP release acceptance

Scope: static Software Delivery & QA Portfolio. This release uses basic smoke validation; deep QA follows deployment.

- [x] Separate local directory: `/home/tmdev012/Reception/software-delivery-portfolio`
- [x] Separate Git repository rooted in this directory
- [x] Separate public GitHub repository: `tmohoboko/software-delivery-portfolio`
- [x] Separate Vercel project: `tmdev/software-delivery-portfolio`
- [x] Separate production URL: https://software-delivery-portfolio.vercel.app
- [x] `npm install` passed; dependency audit reported 0 vulnerabilities
- [x] `npm run build` passed locally and on Vercel
- [x] Production deployment READY; HTTPS response HTTP 200
- [x] Hero, manifesto, capability matrix and lifecycle render
- [x] Shipped Moya Glow card and six honestly planned projects render
- [x] QA, operations and stakeholder sections render
- [x] Desktop and mobile checks passed; no horizontal overflow at 375, 390, 768 or 1440 pixels locally
- [x] Internal anchors resolve and primary navigation scrolls to the correct section
- [x] GitHub and LinkedIn anchors match the supplied URLs and open safely in a new tab
- [x] Branch `main`; initial push successful
- [x] Exactly 10 production smoke tests passed after correcting a test locator
- [x] No fatal runtime errors or console errors observed in executed checks
- [x] No open application defects from executed checks
- [x] No obvious secrets detected in staged file scans; auth files and environment files excluded
- [x] Moya Glow untouched by this task and separately accessible: HTTP 200

Final evidence commit, push and clean working tree are verified by the shipping agent after writing this record; the resulting commit is available in Git history.

## Deployment and recovery

Vercel deployment: `dpl_EJjpMmoMUFsUspTdEiTnhyEsdcUP`.
Immutable URL: https://software-delivery-portfolio-frdn20nqy-tmdev.vercel.app
Application source commit: `8a5c81b`.

Vercel CLI authentication and production deployment succeeded. Automatic GitHub repository connection was unavailable; releases use `npx vercel --prod` from this separately linked directory. This does not block the shipped MVP. Roll back by promoting a previously verified deployment within the portfolio Vercel project, then rerun smoke tests.

## Limits

No comprehensive accessibility, performance, security, API or cross-browser audit is claimed. LinkedIn URL correctness is checked; authenticated LinkedIn page content is outside scope. Moya Glow's project description and historical ten-test result were supplied by the project owner; this task only verifies its external URL remains accessible. Lint is not configured and was not introduced for the MVP.
