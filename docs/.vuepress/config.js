import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  base: '/blog/',
  title: 'VuePress',
  description: 'My first VuePress Site',
  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    navbar: [
      { text: 'Home', link: '/' },
      { text: '打招呼', link: '/hi' },
    ],
    sidebar:[
      {
        text: 'Typescript',
        prefix: '/guide/ts/',
        collapsible: true,
        children: [
          // SidebarItem
          {
            text: 'test1',
            link: 'test1.md',
          },
          {
            text: 'test2',
            link: 'test2.md',
          },
        ],
      },
      {
        text: 'Vue',
        prefix: '/guide/vue/',
        collapsible: true,
        children: [
          // SidebarItem
          {
            text: 'test1',
            link: 'test1.md',
          },
          {
            text: 'test2',
            link: 'test2.md',
          },
        ],
      }
    ]

  }),
  bundler: viteBundler(),
})