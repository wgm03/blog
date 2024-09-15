export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/hi.html", { loader: () => import(/* webpackChunkName: "hi.html" */"F:/markdown/vuepress-site/docs/.vuepress/.temp/pages/hi.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/markdown/vuepress-site/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"hello"} }],
  ["/foo/bar.html", { loader: () => import(/* webpackChunkName: "foo_bar.html" */"F:/markdown/vuepress-site/docs/.vuepress/.temp/pages/foo/bar.html.js"), meta: {"title":""} }],
  ["/guide/ts/", { loader: () => import(/* webpackChunkName: "guide_ts_index.html" */"F:/markdown/vuepress-site/docs/.vuepress/.temp/pages/guide/ts/index.html.js"), meta: {"title":"这是ts中的README文件"} }],
  ["/guide/ts/test1.html", { loader: () => import(/* webpackChunkName: "guide_ts_test1.html" */"F:/markdown/vuepress-site/docs/.vuepress/.temp/pages/guide/ts/test1.html.js"), meta: {"title":"这是ts中的test1"} }],
  ["/guide/ts/test2.html", { loader: () => import(/* webpackChunkName: "guide_ts_test2.html" */"F:/markdown/vuepress-site/docs/.vuepress/.temp/pages/guide/ts/test2.html.js"), meta: {"title":"这是ts中的test2"} }],
  ["/guide/css/01%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D%E4%B8%8E%E7%9B%B8%E5%AF%B9%E5%AE%9A%E4%BD%8D.html", { loader: () => import(/* webpackChunkName: "guide_css_01绝对定位与相对定位.html" */"F:/markdown/vuepress-site/docs/.vuepress/.temp/pages/guide/css/01绝对定位与相对定位.html.js"), meta: {"title":"绝对定位和相对定位"} }],
  ["/guide/vue/test1.html", { loader: () => import(/* webpackChunkName: "guide_vue_test1.html" */"F:/markdown/vuepress-site/docs/.vuepress/.temp/pages/guide/vue/test1.html.js"), meta: {"title":"这是vue中的test1"} }],
  ["/guide/vue/test2.html", { loader: () => import(/* webpackChunkName: "guide_vue_test2.html" */"F:/markdown/vuepress-site/docs/.vuepress/.temp/pages/guide/vue/test2.html.js"), meta: {"title":"这是vue中test2"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/markdown/vuepress-site/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
