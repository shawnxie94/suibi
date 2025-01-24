import comp from "/Users/xiexiao6/repo/github/suibi/src/.vuepress/.temp/pages/blogs/index.html.vue"
const data = JSON.parse("{\"path\":\"/blogs/\",\"title\":\"文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"文章\",\"index\":false,\"icon\":\"pen-to-square\",\"article\":false,\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://shawnxie.top/blogs/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"肖恩聊技术\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"文章\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"文章\\\"}\"]]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0.04,\"words\":13},\"filePathRelative\":\"blogs/README.md\",\"excerpt\":\"\"}")
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
