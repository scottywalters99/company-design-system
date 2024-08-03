import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { navbar, sidebar } from './configs'

const { path } = require('@vuepress/utils')
const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/icons/favicon-16x16.svg' }]
  ],
  title: 'Company Design System',
  description: 'Company Design System is a collection of reusable components, guided by clear standards, that can be assembled together to build digital products.',
  themeConfig: {
    logo: '/images/hero.svg',
    repo: 'scottywalters99/company-design-system',
    editLink: true,
    editLinkText: 'Edit this page on GitHub',
    contributors: false,
    lastUpdated: true,
    navbar: navbar.en,
    sidebar: sidebar.en,
    themePlugins: {
      mediumZoom: true,
      // enable git plugin in production only
      git: isProd,
      // use shiki plugin in production mode
      prismjs: !isProd,
    },
  },
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@src/, path.resolve(__dirname, './../../src')),
    },
    toc: {
      level: [2]
    }
  },
  plugins: [
    path.resolve(__dirname, './plugins/vuepress-plugin-tabs/index.js'),
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components/'),
      }
    ],
    [
      '@vuepress/plugin-search',
      {
        // exclude the homepage in the search index
        isSearchable: (page) => page.path !== '/',
        // allow searching the `tags` frontmatter
        getExtraFields: (page) => page.frontmatter.tags ?? [],
      },
    ],
    [
      '@vuepress/plugin-shiki',
      isProd
        ? {
          theme: 'github-dark',
        }
        : false,
    ],
  ]
})
