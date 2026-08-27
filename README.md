# lloyd

Created by ALPHACI as a Next.js app standalone repository.

This starter already includes source files, package scripts, TypeScript, ESLint, Jest coverage, SonarQube metadata, branch protections, and ALPHACI workflow files that match the selected stack. Use it as the first working baseline, then replace the starter code with your application code.

## Project structure

- `src/app/layout.tsx` provides the App Router root layout.
- `src/app/page.tsx` is the starter page.
- `tests/unit/` holds the unit test suites; CI verifies this folder exists.
- `next.config.ts` and the shared TypeScript/Jest/ESLint configs are ready for the generated workflow.

## Branch strategy

| Branch  | Purpose |
|---------|---------|
| main    | Production - protected |
| uat     | Integration and test - protected |
| develop | Development integration - unprotected, no CI pipeline |

## CI/CD

Workflow files live in `.github/workflows/`. The CI pipeline runs on `uat` and `main` only. `develop` and user-created branches do not trigger workflows. Push to `uat` to trigger your first run.

## Getting started

```bash
npm install
npm run lint
npm test
npm run build
```

Create a feature branch, open a pull request into `uat`, and let ALPHACI promote green changes to `main`.