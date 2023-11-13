const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  globals: {
    JSX: true,
  },
  env: { browser: true, es2020: true, node: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  plugins: ["@typescript-eslint", "react-refresh", "react-hooks", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js"],
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-function-return-type": "error",
  },
};
