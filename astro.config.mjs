import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://letters.halleyfante.com",
  srcDir: "./source",
  outDir: "./distribution",
  output: "static",
  integrations: [mdx(), sitemap()],
});
