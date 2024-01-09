import React from "react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { Global } from "@emotion/react";
import { globalStyle } from "@sc-config/emotion";

const GlobalStyles = () => <Global styles={globalStyle} />;

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
