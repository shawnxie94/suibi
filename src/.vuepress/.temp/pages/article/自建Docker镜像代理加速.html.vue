<template><div><h1 id="自建docker镜像代理加速" tabindex="-1"><a class="header-anchor" href="#自建docker镜像代理加速"><span>自建Docker镜像代理加速</span></a></h1>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>Docker Hub 是一个容器注册表，专为开发人员和开源贡献者构建，用于查找、使用和共享其容器镜像。但从2023年5月中旬，<a href="http://hub.docker.com" target="_blank" rel="noopener noreferrer">hub.docker.com</a> “不知” 何种原因国内均无法正常访问了，好在国内各大高校和容器技术社区提供了加速站点，国内开发者还是能获取到各种镜像。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/202411270017430.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>好景不长，今年6月份各大高校和容器技术社区由于一些不可抗因素，纷纷关闭了镜像加速站点，这极大地影响了工作效率和开发进度。</p>
<p>为了继续使用DockerHub获取各种各样的镜像数据，我们可以尝试自己搭建代理，中转对Docker官方镜像仓库的请求，解决一些访问限制和加速访问的问题。下文介绍基于Cloudflare Workers的Docker镜像代理部署和使用。</p>
<h2 id="部署dockerhub代理" tabindex="-1"><a class="header-anchor" href="#部署dockerhub代理"><span>部署DockerHub代理</span></a></h2>
<h3 id="fork仓库cf-workers-docker-io" tabindex="-1"><a class="header-anchor" href="#fork仓库cf-workers-docker-io"><span><a href="http://xn--forkCF-Workers-docker-vd47av52v.io" target="_blank" rel="noopener noreferrer">fork仓库CF-Workers-docker.io</a></span></a></h3>
<p><a href="http://xn--CF-Workers-docker-zj85a.io" target="_blank" rel="noopener noreferrer">将CF-Workers-docker.io</a>(<a href="https://github.com/cmliu/CF-Workers-docker.io" target="_blank" rel="noopener noreferrer">https://github.com/cmliu/CF-Workers-docker.io</a>)fork到自己仓库。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/202411270017433.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="部署到cloudflare的pages中" tabindex="-1"><a class="header-anchor" href="#部署到cloudflare的pages中"><span>部署到Cloudflare的pages中</span></a></h3>
<ul>
<li>创建pages应用</li>
</ul>
<figure><img src="https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/202411270017434.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>连接GitHub</li>
</ul>
<figure><img src="https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/202411270017435.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>选择存储库部署</li>
</ul>
<figure><img src="https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/202411270017436.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>等待部署完成</li>
</ul>
<figure><img src="https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/202411270017437.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>获取镜像代理域名</li>
</ul>
<figure><img src="https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/202411270017438.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/202411270017439.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>自定义域名（可选）</li>
</ul>
<figure><img src="https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/202411270017440.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/202411270017441.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/202411270017442.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/202411270017443.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="如何配置镜像加速" tabindex="-1"><a class="header-anchor" href="#如何配置镜像加速"><span>如何配置镜像加速</span></a></h2>
<h3 id="官方镜像路径前加域名" tabindex="-1"><a class="header-anchor" href="#官方镜像路径前加域名"><span>官方镜像路径前加域名</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> dockers.shawnxie.top/library/nginx:latest</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="设置镜像加速docker配置" tabindex="-1"><a class="header-anchor" href="#设置镜像加速docker配置"><span>设置镜像加速docker配置</span></a></h3>
<p>修改文件 /etc/docker/daemon.json（如果不存在则创建）</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mkdir</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/docker</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> tee</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/docker/daemon.json</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x3C;&#x3C;-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">'EOF'</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">  "registry-mirrors": ["https://dockers.shawnxie.top"]  # 请替换为您自己的Worker自定义域名</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EOF</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> docker</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以执行 docker info命令，如果从结果中看到了如下内容，说明配置成功。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> info</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">---</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Registry</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> Mirrors:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">    https://dockers.shawnxie.top</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


