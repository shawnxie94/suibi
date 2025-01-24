import comp from "/Users/xiexiao6/repo/github/suibi/src/.vuepress/.temp/pages/article/2024/打造更好用的Mac终端.html.vue"
const data = JSON.parse("{\"path\":\"/article/2024/%E6%89%93%E9%80%A0%E6%9B%B4%E5%A5%BD%E7%94%A8%E7%9A%84Mac%E7%BB%88%E7%AB%AF.html\",\"title\":\"打造更好用的Mac终端：iTerm2 + zsh + OhMyZsh\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"en-to-square\",\"date\":\"2024-11-28T00:00:00.000Z\",\"category\":[\"技术提效\"],\"tag\":[\"Mac\",\"终端\",\"教程\"],\"gitInclude\":[],\"description\":\"Mac 自带的终端很简陋，缺少很多必要的功能，用户体验较差。但一个好用的终端将直接给开发人员的工作效率带来极大提升，毕竟很多操作是直接在命令行上执行的。笔者对终端有几个基本的诉求： 好看的界面，并包含一些关键信息，如：用户名、文件路径以及git相关信息等； 关键字高亮，让命令行更加易读易懂； 自动补全，根据历史命令和当前输入内容，自动推荐可能的命令。 ...\"},\"headers\":[{\"level\":2,\"title\":\"工具介绍\",\"slug\":\"工具介绍\",\"link\":\"#工具介绍\",\"children\":[{\"level\":3,\"title\":\"Homebrew\",\"slug\":\"homebrew\",\"link\":\"#homebrew\",\"children\":[]},{\"level\":3,\"title\":\"iTerm2\",\"slug\":\"iterm2\",\"link\":\"#iterm2\",\"children\":[]},{\"level\":3,\"title\":\"zsh\",\"slug\":\"zsh\",\"link\":\"#zsh\",\"children\":[]},{\"level\":3,\"title\":\"Oh My Zsh\",\"slug\":\"oh-my-zsh\",\"link\":\"#oh-my-zsh\",\"children\":[]}]},{\"level\":2,\"title\":\"配置流程\",\"slug\":\"配置流程\",\"link\":\"#配置流程\",\"children\":[{\"level\":3,\"title\":\"第一步：安装 Homebrew\",\"slug\":\"第一步-安装-homebrew\",\"link\":\"#第一步-安装-homebrew\",\"children\":[]},{\"level\":3,\"title\":\"第二步：安装 iTerm 2\",\"slug\":\"第二步-安装-iterm-2\",\"link\":\"#第二步-安装-iterm-2\",\"children\":[]},{\"level\":3,\"title\":\"第三步：安裝 zsh\",\"slug\":\"第三步-安裝-zsh\",\"link\":\"#第三步-安裝-zsh\",\"children\":[]},{\"level\":3,\"title\":\"第四步：安装 Oh My Zsh 并配置\",\"slug\":\"第四步-安装-oh-my-zsh-并配置\",\"link\":\"#第四步-安装-oh-my-zsh-并配置\",\"children\":[]}]},{\"level\":2,\"title\":\"结语\",\"slug\":\"结语\",\"link\":\"#结语\",\"children\":[]}],\"git\":{},\"readingTime\":{\"minutes\":6.41,\"words\":1924},\"filePathRelative\":\"article/2024/打造更好用的Mac终端.md\",\"localizedDate\":\"2024年11月28日\",\"excerpt\":\"\\n<p>Mac 自带的终端很简陋，缺少很多必要的功能，用户体验较差。但一个好用的终端将直接给开发人员的工作效率带来极大提升，毕竟很多操作是直接在命令行上执行的。笔者对终端有几个基本的诉求：</p>\\n<ul>\\n<li><strong>好看的界面</strong>，并包含一些<strong>关键信息</strong>，如：用户名、文件路径以及git相关信息等；</li>\\n<li><strong>关键字高亮</strong>，让命令行更加易读易懂；</li>\\n<li><strong>自动补全</strong>，根据历史命令和当前输入内容，自动推荐可能的命令。</li>\\n</ul>\\n<p>当然还有一些非必要的功能，有的话可以锦上添花，例如：</p>\\n<ul>\\n<li><strong>快速访问</strong>，快速跳转到常用目录；</li>\\n<li><strong>Git命令缩写</strong>，有的命令着实有点长了，能够有效的减少命令输入量；</li>\\n<li><strong>模糊搜索</strong>，快速搜索历史命令、文件、目录等。</li>\\n</ul>\\n<p>笔者目前的终端是基于 <strong>iTerm2 + zsh + Oh My Zsh</strong> 打造的，这套组合基本能满足上述诉求。这些工具不算新了，笔者第一份工作时mentor就给我推荐了。由于存在一定的配置成本，每次更换电脑都需要重新配置，为方便后续配置有迹可循，就有了这篇文章。</p>\\n\",\"autoDesc\":true}")
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
