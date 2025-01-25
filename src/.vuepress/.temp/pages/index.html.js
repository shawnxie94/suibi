import comp from "/Users/shawn/Documents/GitHub/suibi/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"house\",\"title\":\"主页\",\"heroText\":\"肖恩聊技术\",\"heroFullScreen\":false,\"tagline\":\"持续提供有价值的技术内容\",\"bgImage\":\"https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/2.png\",\"projects\":[{\"icon\":\"newspaper\",\"name\":\"肖恩技术周刊\",\"desc\":\"记录有价值的技术内容\",\"link\":\"https://weekly.shawnxie.top/\"},{\"icon\":\"book\",\"name\":\"代码可视化\",\"desc\":\"通过可视化方式去探索代码的潜在力量\",\"link\":\"https://code-visualization.shawnxie.top/\"}],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://shawnxie.top/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"肖恩聊技术\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2025-01-25T02:01:07.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2025-01-25T02:01:07.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"主页\\\"}\"]]},\"headers\":[],\"git\":{\"createdTime\":1737710464000,\"updatedTime\":1737770467000,\"contributors\":[{\"name\":\"xiexiao6\",\"username\":\"xiexiao6\",\"email\":\"xiexiao6@jd.com\",\"commits\":2,\"url\":\"https://github.com/xiexiao6\"}]},\"readingTime\":{\"minutes\":0.52,\"words\":157},\"filePathRelative\":\"README.md\",\"localizedDate\":\"2025年1月24日\",\"excerpt\":\"<!-- 这是一个博客主页的案例。\\n\\n要使用此布局，你应该在页面前端设置 `layout: BlogHome` 和 `home: true`。\\n\\n相关配置文档请见 [博客主页](https://theme-hope.vuejs.press/zh/guide/blog/home.html)。 -->\\n\"}")
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
