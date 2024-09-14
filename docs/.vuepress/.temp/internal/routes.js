export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/helllo.html", { loader: () => import(/* webpackChunkName: "helllo.html" */"F:/markdown/vuepress-site/docs/.vuepress/.temp/pages/helllo.html.js"), meta: {"title":"hello"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/markdown/vuepress-site/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
