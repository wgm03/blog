import comp from "F:/markdown/vuepress-site/docs/.vuepress/.temp/pages/foo/bar.html.vue"
const data = JSON.parse("{\"path\":\"/foo/bar.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1726291406000,\"contributors\":[{\"name\":\"attract123\",\"email\":\"2910698502@qq.com\",\"commits\":1}]},\"filePathRelative\":\"foo/bar.md\"}")
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
