/* eslint-disable import/no-default-export -- config file is ignore */
import type { Options } from "tsup";
import { defineConfig } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  format: ["esm", "cjs"],
  dts: true,
  minify: true,
  clean: true,
  external: ["react"],
  entry: ["src/index.tsx"],

  ...options,
}));
