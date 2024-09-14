import comp from "F:/markdown/vuepress-site/docs/.vuepress/.temp/pages/helllo.html.vue"
const data = JSON.parse("{\"path\":\"/helllo.html\",\"title\":\"hello\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"vuepress\",\"slug\":\"vuepress\",\"link\":\"#vuepress\",\"children\":[]}],\"git\":{\"updatedTime\":1726283020000,\"contributors\":[{\"name\":\"attract123\",\"email\":\"2910698502@qq.com\",\"commits\":3}]},\"filePathRelative\":\"helllo.md\"}")
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
