const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/react",
  ].map(require.resolve),
  overrides: [
    {
      files: ["*.config.js", "*.config.ts"],
      env: {
        node: true,
      },
    },
  ],
  parserOptions: {
    project,
  },
  globals: {
    JSX: true,
    React: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
      node: {
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js", "**/*.css"],
  rules: {
    "import/no-default-export": "off",
    "jsx-a11y/no-autofocus": [
      2,
      {
        ignoreNonDOM: true,
      },
    ],
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
          kebabCase: true,
        },
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "enum",
        format: ["PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      {
        selector: ["variable"],
        modifiers: ["const"],
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      {
        selector: ["typeParameter"],
        format: ["PascalCase"],
      },
      {
        selector: ["interface"],
        format: ["PascalCase"],
      },
      {
        selector: ["function"],
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
    ],
    "react/display-name": "off",
    "eslint-comments/require-description": "off",
    "no-prototype-builtins": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};
