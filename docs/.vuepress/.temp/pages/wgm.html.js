import comp from "F:/markdown/vuepress-site/docs/.vuepress/.temp/pages/wgm.html.vue"
const data = JSON.parse("{\"path\":\"/wgm.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1726285810000,\"contributors\":[{\"name\":\"attract123\",\"email\":\"2910698502@qq.com\",\"commits\":1}]},\"filePathRelative\":\"wgm.md\"}")
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
