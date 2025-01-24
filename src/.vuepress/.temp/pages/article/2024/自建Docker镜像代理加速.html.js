import comp from "/Users/xiexiao6/repo/github/suibi/src/.vuepress/.temp/pages/article/2024/自建Docker镜像代理加速.html.vue"
const data = JSON.parse("{\"path\":\"/article/2024/%E8%87%AA%E5%BB%BADocker%E9%95%9C%E5%83%8F%E4%BB%A3%E7%90%86%E5%8A%A0%E9%80%9F.html\",\"title\":\"自建Docker镜像代理加速\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"en-to-square\",\"date\":\"2024-09-05T00:00:00.000Z\",\"category\":[\"技术提效\"],\"tag\":[\"Docker Hub\",\"代理\",\"教程\"],\"gitInclude\":[],\"description\":\"Docker Hub 是一个容器注册表，专为开发人员和开源贡献者构建，用于查找、使用和共享其容器镜像。但从2023年5月中旬，hub.docker.com “不知” 何种原因国内均无法正常访问了，好在国内各大高校和容器技术社区提供了加速站点，国内开发者还是能获取到各种镜像。 好景不长，今年6月份各大高校和容器技术社区由于一些不可抗因素，纷纷关闭了镜像加...\"},\"headers\":[{\"level\":2,\"title\":\"部署DockerHub代理\",\"slug\":\"部署dockerhub代理\",\"link\":\"#部署dockerhub代理\",\"children\":[{\"level\":3,\"title\":\"fork仓库CF-Workers-docker.io\",\"slug\":\"fork仓库cf-workers-docker-io\",\"link\":\"#fork仓库cf-workers-docker-io\",\"children\":[]},{\"level\":3,\"title\":\"部署到Cloudflare的pages中\",\"slug\":\"部署到cloudflare的pages中\",\"link\":\"#部署到cloudflare的pages中\",\"children\":[]}]},{\"level\":2,\"title\":\"如何配置镜像加速\",\"slug\":\"如何配置镜像加速\",\"link\":\"#如何配置镜像加速\",\"children\":[{\"level\":3,\"title\":\"官方镜像路径前加域名\",\"slug\":\"官方镜像路径前加域名\",\"link\":\"#官方镜像路径前加域名\",\"children\":[]},{\"level\":3,\"title\":\"设置镜像加速docker配置\",\"slug\":\"设置镜像加速docker配置\",\"link\":\"#设置镜像加速docker配置\",\"children\":[]}]}],\"git\":{},\"readingTime\":{\"minutes\":1.57,\"words\":471},\"filePathRelative\":\"article/2024/自建Docker镜像代理加速.md\",\"localizedDate\":\"2024年9月5日\",\"excerpt\":\"\\n<p>Docker Hub 是一个容器注册表，专为开发人员和开源贡献者构建，用于查找、使用和共享其容器镜像。但从2023年5月中旬，<a href=\\\"http://hub.docker.com\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">hub.docker.com</a> “不知” 何种原因国内均无法正常访问了，好在国内各大高校和容器技术社区提供了加速站点，国内开发者还是能获取到各种镜像。</p>\\n<figure><img src=\\\"https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/202411270017430.png\\\" alt=\\\"\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption></figcaption></figure>\\n<p>好景不长，今年6月份各大高校和容器技术社区由于一些不可抗因素，纷纷关闭了镜像加速站点，这极大地影响了工作效率和开发进度。</p>\\n<p>为了继续使用DockerHub获取各种各样的镜像数据，我们可以尝试自己搭建代理，中转对Docker官方镜像仓库的请求，解决一些访问限制和加速访问的问题。下文介绍基于Cloudflare Workers的Docker镜像代理部署和使用。</p>\\n\",\"autoDesc\":true}")
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
