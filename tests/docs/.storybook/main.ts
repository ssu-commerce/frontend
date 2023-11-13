import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-styling-webpack"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-jest"),
    getAbsolutePath("@storybook/addon-postcss"),
  ],
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, { configType }) {
    if (configType === "DEVELOPMENT") {
      // Your development configuration goes here
    }
    if (configType === "PRODUCTION") {
      // Your production configuration goes here.
    }
    return mergeConfig(config, {
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
    });
  },
};
export default config;
