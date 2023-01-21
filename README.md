# Nx + Gatsby + Vercel starter

An example [Nx](https://nx.dev/) monorepo with [Gatsby](https://www.gatsbyjs.com/) hosted on [Vercel](https://vercel.com/dashboard).

The [@nrwl/gatsby](https://www.npmjs.com/package/@nrwl/gatsby) NX plugin is [deprecated](https://github.com/nrwl/nx-labs/tree/e61d0cd4167ddcde40417e8d866cc4bcde01c4a7/packages/gatsby) and doesn't have any useful README anymore.  
Generators aren't really needed - you just need to take care of changing paths in app's `project.json`.

## Getting started

1. Install a package manager, like [pnpm](https://pnpm.io/) or [Yarn](https://yarnpkg.com/getting-started/install) (examples use Yarn).
2. Run `yarn` or equivalent to install dependencies.
3. Run `yarn nx run first dev` (or `second` depending on what you want to work on).  
   Or run `yarn run-many dev` to run all dev servers at once.

4. Go to:

- First site: <http://localhost:8000>
- Second site: <http://localhost:8001>

## What's included

- Multiple [Gatsby](https://www.gatsbyjs.com/) sites using [Nx](https://nx.dev/) monorepo approach.
- [TypeScript](https://www.typescriptlang.org/) with custom paths
- [styled-components](https://styled-components.com/)
- [ESLint](https://eslint.org/) with various rules, see [eslintrc.js](./.eslintrc.js)
- [Jest](https://jestjs.io/) for testing
- [Cypress](https://www.cypress.io/) for end-to-end testing

## Monorepo details

This is a monorepo using [Nx](https://nx.dev/).

- `/apps` directory is for different websites.
- `/libs` directory is for shared libraries.

### Useful monorepo commands

- Run a target for all projects: `yarn run-many <target name>` (e.g. `build`)
  - Run a dev server for all projects: `yarn run-many dev`
  - Build all projects: `yarn run-many build`
- Lint: `yarn run-many lint` (but `yarn run lint` works too)
- Typechecking: `yarn run typecheck` (can add `--watch`)
- Print affected projects since the last commit: `yarn nx print-affected --base=main --head=HEAD --target=build --select=tasks.target.project`

## Customization

### Changing TSConfig paths

- Change paths in [tsconfig.base.json](./tsconfig.base.json).
- Change the `importInternalTSConfigPathsRegex` regex in [eslintrc.js](./.eslintrc.js)

### Changing app ports

Look in `apps/<app>/.env` and in `apps/<app-e2e>/.env` for the `PORT` environment variable. You can also override it in `apps/<app>/.local.env` (see [docs](https://nx.dev/recipes/environment-variables/define-environment-variables)).
You will also need to change the `port` option for the `serve` target in `apps/<app>/project.json`.
