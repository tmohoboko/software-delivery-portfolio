# Software Delivery & QA Portfolio

A standalone React + Vite portfolio for Tshepo Mohoboko, covering software development, QA, delivery and operations.

## Run locally

```sh
npm install
npm run dev
npm run build
```

## Smoke tests

```sh
npx playwright install chromium
BASE_URL=https://software-delivery-portfolio.vercel.app npm test
```

Exactly 10 Chromium MVP smoke tests. See `qa/` for executed production evidence. These checks are not comprehensive QA or an accessibility audit.

## Delivery

- Repository: https://github.com/tmohoboko/software-delivery-portfolio
- Vercel project: `software-delivery-portfolio`
- Build: `npm run build`; output: `dist`
- Production: https://software-delivery-portfolio.vercel.app
- No environment variables or backend required.
- Deploy from this directory with `npx vercel --prod`, after confirming `.vercel/project.json` names this project.
- Recovery: promote a previously verified deployment in this project's Vercel dashboard, then rerun the smoke suite.

Moya Glow is an external project reference only. Its repository, files and deployment are not part of this project. Planned cards describe future work, not completed work.
