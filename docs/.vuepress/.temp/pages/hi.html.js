import comp from "F:/markdown/vuepress-site/docs/.vuepress/.temp/pages/hi.html.vue"
const data = JSON.parse("{\"path\":\"/hi.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"genshin  sdjfs\",\"slug\":\"genshin-sdjfs\",\"link\":\"#genshin-sdjfs\",\"children\":[]}],\"git\":{\"updatedTime\":1726287731000,\"contributors\":[{\"name\":\"attract123\",\"email\":\"2910698502@qq.com\",\"commits\":1}]},\"filePathRelative\":\"hi.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
