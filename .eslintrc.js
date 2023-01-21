/**
 * ESLint config
 *
 * @see https://eslint.org/docs/latest/user-guide/configuring/configuration-files
 */

/** Internal tsconfig paths */
const importInternalTSConfigPathsRegex = "^@demo/";

const sourceExtends = [
  // https://github.com/jsx-eslint/eslint-plugin-react
  "plugin:react/recommended",
  // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
  "plugin:react-hooks/recommended",
  // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
  "plugin:jsx-a11y/recommended",
  // https://github.com/import-js/eslint-plugin-import
  "plugin:import/recommended",
];

/** @type {import('@types/eslint').Linter.Config["rules"]} */
const sourceRules = {
  // Gatsby required rules
  "no-anonymous-exports-page-templates": ["warn"],
  "limited-exports-page-templates": ["warn"],

  // Enable the css attribute as we're using styled-components
  "react/no-unknown-property": ["error", { ignore: ["css"] }],

  "jsx-a11y/anchor-is-valid": [
    "error",
    {
      components: ["Link"],
      specialLink: ["to"],
    },
  ],

  "import/first": ["warn"],
  "import/no-amd": ["error"],
  "import/no-commonjs": ["error"],
  "import/no-extraneous-dependencies": [
    "error",
    {
      devDependencies: ["**/*.{test,spec}.{js,jsx,ts,tsx}"],
      peerDependencies: false,
      packageDir: __dirname,
    },
  ],
  "import/no-deprecated": ["warn"],
  "import/order": [
    "warn",
    {
      "newlines-between": "always",
      alphabetize: {
        order: "asc",
        caseInsensitive: true,
      },
    },
  ],
  "import/newline-after-import": ["warn"],
  "import/no-duplicates": ["warn"],
  // Getting false positives for React
  "import/default": ["off"],
};

/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  // Catch-all config
  ignorePatterns: [
    "/.cache",
    "/public",
    "/*/*/src/**/*.js",
    "/*/*/src/**/*.jsx",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/internal-regex": importInternalTSConfigPathsRegex,
  },
  plugins: ["@nrwl/nx"],
  extends: [
    "eslint:recommended",
    ...sourceExtends,
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": ["warn", {}, { usePrettierrc: true }],
    ...sourceRules,
  },
  overrides: [
    // nx monorepo rules
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "@nrwl/nx/enforce-module-boundaries": [
          "error",
          {
            enforceBuildableLibDependency: true,
            allowCircularSelfDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: "scope:shared",
                onlyDependOnLibsWithTags: ["scope:shared"],
              },
              {
                sourceTag: "scope:admin",
                onlyDependOnLibsWithTags: ["scope:shared", "scope:admin"],
              },
              {
                sourceTag: "scope:client",
                onlyDependOnLibsWithTags: ["scope:shared", "scope:client"],
              },
            ],
          },
        ],
      },
    },
    {
      files: ["*.{ts,tsx}"],
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/consistent-type-imports": ["warn"],
      },
    },
    // Main source
    {
      files: ["**/src/**/*.{ts,tsx}"],
      env: {
        browser: true,
      },
      globals: {
        graphql: true,
        __PATH_PREFIX__: true,
        __TRAILING_SLASH__: true,
        __BASE_PATH__: true,
      },
      extends: [
        ...sourceExtends,
        "plugin:import/typescript",
        // https://typescript-eslint.io/rules/
        "plugin:@typescript-eslint/recommended",
        // https://github.com/prettier/eslint-plugin-prettier
        "plugin:prettier/recommended",
      ],
      rules: {
        "prettier/prettier": ["warn", {}, { usePrettierrc: true }],

        ...sourceRules,

        "@typescript-eslint/consistent-type-imports": ["warn"],

        // Allow unused vars starting with _
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            vars: "all",
            args: "after-used",
            ignoreRestSiblings: false,
            varsIgnorePattern: "^_",
            argsIgnorePattern: "^_",
          },
        ],
      },
      settings: {
        react: {
          version: "detect",
        },
        "import/internal-regex": importInternalTSConfigPathsRegex,
        "import/resolver": {
          typescript: {
            project: [
              "apps/*/tsconfig.app.json",
              "libs/*/tsconfig.lib.json",
              "tsconfig.app.json",
              "tsconfig.lib.json",
            ],
          },
        },
        "jsx-a11y": {
          components: {
            // MUI components
            Typography: {
              props: {
                variant: {
                  undefined: "p",
                  p: "p",
                  h1: "h1",
                  h2: "h2",
                  h3: "h3",
                  h4: "h4",
                  h5: "h5",
                  h6: "h6",
                },
              },
            },
            Button: "button",
            Switch: "input",
          },
        },
      },
    },
    // Root configs
    {
      files: ["*.{js,ts}", "apps/*/*.{js,ts}", "libs/*/*.{js,ts}"],
      env: {
        // Some Gatsby files touch `window`
        browser: true,
        node: true,
      },
      parserOptions: {
        ecmaVersion: 10,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        "import/internal-regex": importInternalTSConfigPathsRegex,
      },
      rules: {
        "import/no-commonjs": ["off"],
        "import/no-extraneous-dependencies": ["off"],
        "import/no-unresolved": ["off"],
      },
    },
    // Jest
    {
      files: ["*.spec.ts", "*.spec.tsx", "*.spec.js", "*.spec.jsx"],
      excludedFiles: "*/*-e2e/src/**/*.spec.{ts,js}",
      env: {
        jest: true,
      },
    },
    // E2E
    {
      files: ["apps/*-e2e/src/**/*.spec.{ts,js}"],
      extends: [
        ...sourceExtends,
        "plugin:playwright/playwright-test",
        "plugin:prettier/recommended",
      ],
      env: {
        jest: false,
      },
    },
  ],
};
