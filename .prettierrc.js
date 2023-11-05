module.export = {
  semi: true,
  useTabs: false,
  arrowParens: "always",
  trailingComma: "all",
  bracketSpacing: true,
  quoteProps: "as-needed",
  singleQuote: true,
  tabWidth: 2,
  printWidth: 80,
  rangeStart: 0,
  rangeEnd: Infinity,
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  plugins: [
    "@svgr/plugin-prettier",
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      files: ["*.mjs", "*.cjs", "*.js"],
      options: {
        parser: "babel",
      },
    },

    {
      files: ["*.mts", "*.cts", "*.ts"],
      options: {
        parser: "typescript",
      },
    },

    {
      files: ["*.json", "*.jsonc", "*.json5"],
      options: {
        singleQuote: false,
        parser: "json",
      },
    },
  ],
};
