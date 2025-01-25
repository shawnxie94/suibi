import comp from "/Users/shawn/Documents/GitHub/suibi/src/.vuepress/.temp/pages/category/a/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/a/\",\"title\":\"A 分类\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"A 分类\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"category\",\"name\":\"A\",\"key\":\"category\"},\"layout\":\"BlogCategory\",\"gitInclude\":[]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
