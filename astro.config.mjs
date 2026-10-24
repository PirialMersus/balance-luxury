import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://balance-yoga.odessa.ua",
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    format: "directory"
  }
});
