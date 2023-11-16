/* eslint-disable import/no-default-export -- config file is ignore */
import sharedConfig from "@sc-config/tailwind/tailwind.config";
import type { Config } from "tailwindcss/types";

const config: Pick<Config, "prefix" | "presets"> = {
  prefix: "ui-",
  presets: [sharedConfig],
};

export default config;
