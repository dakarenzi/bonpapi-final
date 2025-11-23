import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// IMPORTANT: Cloudflare Pages must use static output
export default defineConfig({
  site: "https://bonpapi-final.pages.dev",
  output: "static",

  integrations: [
    sitemap()
  ],

  vite: {
    ssr: {
      noExternal: [/./], // keep safe; optional
    },
  }
});
