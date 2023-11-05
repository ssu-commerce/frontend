import type { Config } from "tailwindcss";
import sharedConfig from "@sc/tailwind-config/tailwind.config";

const config: Pick<Config, "prefix" | "presets"> = {
  prefix: "sc-",
  presets: [sharedConfig],
};

export default config;
