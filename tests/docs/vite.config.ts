import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    svgr(),
  ],
  esbuild: {
    loader: "tsx",
    include: /\/.*\.[tj]sx?$/,
    exclude: [],
  },
  optimizeDeps: {},
});
