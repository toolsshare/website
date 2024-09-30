import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '让需要的人用得起软件，让炒冷饭的游戏狗带',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://toolsshare.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/website',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'toolsshare', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  deploymentBranch: 'gh-page',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-hans',
    locales: ['zh-hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/toolsshare/website//blob/main/',
        },
        blog: {
          blogTitle: 'Blog!',
          // routeBasePath: '/', 首页更改为 blog，记得要删除 src/pages/index.tsx
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            //copyright: `Copyright © ${new Date().getFullYear()} EveryOne, Inc.`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
          //blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/toolsshare/website//blob/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          // https://docusaurus.io/zh-CN/docs/styling-layout
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  themeConfig: {
    // TODO Replace with your project's social card
    image: 'img/logo.png',
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'forest'},
    },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    blog: {
      sidebar: {
        groupByYear: true,
      },
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // announcementBar: {
    //  id: 'support_us',
    //  content:
    //    '',
    //  backgroundColor: '#fafbfc',
    //  textColor: '#091E42',
    //  isCloseable: true,
    // },
    navbar: {
      title: 'Tools Share',
      hideOnScroll: true,
      // style: 'dark',
      logo: {
        alt: 'the qube',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
        href: '/',
        target: '_self',
        width: 32,
        height: 32,
        className: 'custom-navbar-logo-class',
        //style: {border: 'solid red'},
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '使用指南',
        },
        // {to: '/blog', label: 'News', position: 'left'},
        {
          type: 'dropdown',
          label: '工具',
          position: 'left',
          items: [
            {
              to: '/docs/jb',
              label: 'jetbrains助手',
            },
            {
              to: '/docs/office',
              label: 'office全家桶',
            },
          ],
        },
        {
          href: 'https://github.com/toolsshare/website/',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
        // {
        //   type: 'html',
        //   position: 'right',
        //   value: '<button>Give feedback</button>',
        // },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} EveryOne, Inc. Built with Docusaurus.`,
    },
    prism: {
      // default: https://github.com/FormidableLabs/prism-react-renderer/blob/master/packages/generate-prism-languages/index.ts#L9-L23
      // all: https://prismjs.com/#supported-languages
      // all: node_modules/prismjs/components
      additionalLanguages: ['powershell', 'csharp', 'java'],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
};

export default config;
