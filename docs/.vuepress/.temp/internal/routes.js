export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/hi.html", { loader: () => import(/* webpackChunkName: "hi.html" */"F:/markdown/vuepress-site/docs/.vuepress/.temp/pages/hi.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/markdown/vuepress-site/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"hello"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/markdown/vuepress-site/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
