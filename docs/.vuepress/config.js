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

  }),
  bundler: viteBundler(),
})