import comp from "/Users/xiexiao6/repo/github/suibi/src/.vuepress/.temp/pages/blogs/tools/docker-proxy.html.vue"
const data = JSON.parse("{\"path\":\"/blogs/tools/docker-proxy.html\",\"title\":\"自建Docker镜像代理加速\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"en-to-square\",\"date\":\"2024-09-05T00:00:00.000Z\",\"category\":[\"技术提效\"],\"tag\":[\"Docker Hub\",\"代理\",\"教程\"],\"gitInclude\":[],\"description\":\"Docker Hub 是一个容器注册表，专为开发人员和开源贡献者构建，用于查找、使用和共享其容器镜像。但从2023年5月中旬，hub.docker.com “不知” 何种原因国内均无法正常访问了，好在国内各大高校和容器技术社区提供了加速站点，国内开发者还是能获取到各种镜像。\"},\"headers\":[{\"level\":2,\"title\":\"部署DockerHub代理\",\"slug\":\"部署dockerhub代理\",\"link\":\"#部署dockerhub代理\",\"children\":[{\"level\":3,\"title\":\"fork仓库CF-Workers-docker.io\",\"slug\":\"fork仓库cf-workers-docker-io\",\"link\":\"#fork仓库cf-workers-docker-io\",\"children\":[]},{\"level\":3,\"title\":\"部署到Cloudflare的pages中\",\"slug\":\"部署到cloudflare的pages中\",\"link\":\"#部署到cloudflare的pages中\",\"children\":[]}]},{\"level\":2,\"title\":\"如何配置镜像加速\",\"slug\":\"如何配置镜像加速\",\"link\":\"#如何配置镜像加速\",\"children\":[{\"level\":3,\"title\":\"官方镜像路径前加域名\",\"slug\":\"官方镜像路径前加域名\",\"link\":\"#官方镜像路径前加域名\",\"children\":[]},{\"level\":3,\"title\":\"设置镜像加速docker配置\",\"slug\":\"设置镜像加速docker配置\",\"link\":\"#设置镜像加速docker配置\",\"children\":[]}]}],\"git\":{},\"readingTime\":{\"minutes\":1.72,\"words\":515},\"filePathRelative\":\"blogs/tools/docker-proxy.md\",\"localizedDate\":\"2024年9月5日\",\"excerpt\":\"\\n<p>Docker Hub 是一个容器注册表，专为开发人员和开源贡献者构建，用于查找、使用和共享其容器镜像。但从2023年5月中旬，<a href=\\\"http://hub.docker.com\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">hub.docker.com</a> “不知” 何种原因国内均无法正常访问了，好在国内各大高校和容器技术社区提供了加速站点，国内开发者还是能获取到各种镜像。</p>\\n\",\"autoDesc\":true}")
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
