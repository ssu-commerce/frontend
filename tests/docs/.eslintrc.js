module.exports = {
  extends: ["sc/react", "sc/storybook"],
  plugins: ["@emotion"],
  rules: {
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
  },
};
