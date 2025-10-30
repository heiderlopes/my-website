import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Heider Lopes",
  tagline: "Transformando ideias em soluções appicas",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://heiderlopes.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/my-website",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "heiderlopes", // Usually your GitHub org/user name.
  projectName: "my-website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        // docs: {
        //   sidebarPath: "./sidebars.ts",
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        docs: false, // desativa o docs padrão

        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "android",
        path: "docs/android",
        routeBasePath: "android",
        sidebarPath: require.resolve("./sidebars/sidebars.android.ts"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "flutter",
        path: "docs/flutter",
        routeBasePath: "flutter",
        sidebarPath: require.resolve("./sidebars/sidebars.flutter.ts"),
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Heider Lopes",
      logo: {
        alt: "Logo do site",
        src: "img/logo_cartoon_tablet.png",
      },
      items: [
        { to: "/android/intro", label: "Android", position: "left" },
        { to: "/flutter/intro", label: "Flutter", position: "left" },

        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        // { to: "/blog", label: "Blog", position: "left" },
        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Tutorial",
        //       to: "/docs/intro",
        //     },
        //   ],
        // },
        {
          title: "Comunidade",

          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/heider-lopes-a06b2869/",
            },
            {
              label: "GitHub",
              href: "https://github.com/heiderlopes",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Heider Lopes`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
