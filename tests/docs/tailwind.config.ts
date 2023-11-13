import type { Config } from "tailwindcss";
import sharedConfig from "@sc-config/tailwind/tailwind.config";

const config: Pick<Config, "presets" | "theme"> = {
  theme: {
    extend: {
      backgroundImage: {
        "stripes-gray":
          "linear-gradient(135deg, rgba(107,114,128,0.2) 10%, rgba(0,0,0,0) 0, rgba(0,0,0,0) 50%, rgba(107,114,128,0.2) 0, rgba(107,114,128,0.2) 60%, rgba(0,0,0,0) 0, rgba(0,0,0,0))",
      },
      backgroundSize: {
        "stripes-gray": "7.07px 7.07px",
      },
    },
  },
  presets: [sharedConfig],
};

export default config;
