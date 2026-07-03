import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  redirects: {
    "/": "/2025",
  },
  vite: {
    build: {
      cssMinify: "esbuild",
    },
  },
});
