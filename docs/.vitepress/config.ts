import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/contribute/",

  title: "MarcAlexiei's contributing",
  description: "Instructions for CONTRIBUTING in my few repos",
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
        items: [{ text: "PNPM and NVM Setup", link: "/pnpm-nvm-setup" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/marcalexiei/contribute" },
    ],
  },
});
