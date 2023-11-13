import type { Config } from "tailwindcss";
import sharedConfig from "@sc-config/tailwind/tailwind.config";

const config: Pick<Config, "prefix" | "presets"> = {
  prefix: "ui-",
  presets: [sharedConfig],
};

export default config;
