/// <reference types="vite-plugin-svgr/client" />

import type { Preview } from "@storybook/react";
import "../styles/style.css";
import "@sc/components/style.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
