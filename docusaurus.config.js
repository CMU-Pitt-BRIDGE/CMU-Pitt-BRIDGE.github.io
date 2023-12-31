const environment = process.env.NODE_ENV || "development";
require("dotenv").config({ path: `./.env.${environment}.local` });

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ABRIDGED",
  tagline: "BRIDGE Documentation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://CMU-Pitt-BRIDGE.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: "CMU-Pitt-BRIDGE.github.io", // Usually your repo name.
  organizationName: "CMU-Pitt-BRIDGE", // Usually your GitHub org/user name.
  deploymentBranch: "main",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/CMU-Pitt-BRIDGE/CMU-Pitt-BRIDGE.github.io/tree/main/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/CMU-Pitt-BRIDGE/CMU-Pitt-BRIDGE.github.io/tree/main/",
        // },
        // theme: {
        //   customCss: require.resolve("./src/css/custom.css"),
        // },
        blog: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/bridge-social-card.png",
      navbar: {
        title: "Abridged",
        logo: {
          alt: "BRIDGE Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "sopsSidebar",
            position: "left",
            label: "SOPs",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/CMU-Pitt-BRIDGE/CMU-Pitt-BRIDGE.github.io/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "SOPs",
                to: "/docs/sop_intro",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "Website",
                href: "https://www.bridge-center.org/home/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/CMU-Pitt-BRIDGE/CMU-Pitt-BRIDGE.github.io/",
              },
              {
                label: "Core Marketplace",
                href: "https://www.coremarketplace.org/?FacilityID=1696",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BRIDGE Center.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
