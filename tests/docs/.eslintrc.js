module.exports = {
  extends: ["sc/storybook"],
  plugins: ["@emotion"],
  rules: {
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
  },
};
