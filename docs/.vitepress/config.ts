import { defineConfig } from "vitepress";

const base = "/contribute";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,

  title: "MarcAlexiei's contributing",
  description: "Instructions for CONTRIBUTING in my few repos",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: `${base}/favicon.png`,
      },
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "VCS",
        items: [{ text: "Commit rules", link: "/commit-rules" }],
      },
      {
        text: "Environment setup",
        items: [{ text: "PNPM and NVM Setup", link: "/setup-pnpm-nvm" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/marcalexiei/contribute" },
    ],
  },
});
