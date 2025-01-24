import comp from "/Users/xiexiao6/repo/github/suibi/src/.vuepress/.temp/pages/article/2024/index.html.vue"
const data = JSON.parse("{\"path\":\"/article/2024/\",\"title\":\"2024\",\"lang\":\"zh-CN\",\"frontmatter\":{\"index\":false,\"icon\":\"laptop-code\",\"gitInclude\":[]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"article/2024/README.md\",\"excerpt\":\"\"}")
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
