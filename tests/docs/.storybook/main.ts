import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";
import type { AddonOptionsVite } from "@storybook/addon-coverage";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const coverageConfig: AddonOptionsVite = {
  include: ["**/stories/**"],
  exclude: ["**/exampleDirectory/**"],
  excludeNodeModules: true,
};

const config: StorybookConfig = {
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-styling-webpack"),
    getAbsolutePath("@storybook/addon-jest"),
    getAbsolutePath("@storybook/addon-postcss"),
    {
      name: getAbsolutePath("@storybook/addon-coverage"),
      options: {
        istanbul: {
          ...coverageConfig,
        },
      },
    },
  ],
  docs: {
    autodocs: "tag",
  },
};
export default config;
