<template><div><h1 id="代码可视化-code-visualization" tabindex="-1"><a class="header-anchor" href="#代码可视化-code-visualization"><span>代码可视化(Code Visualization)</span></a></h1>
<blockquote>
<p>Code visualization is the process of creating graphical representations of source code to help understand and analyze it.<br>
代码可视化是创建源代码的图形表示以帮助理解和分析它的过程。</p>
</blockquote>
<p><strong>个人理解</strong>：通过使用图形化手段（架构图、依赖图、分布式追踪、类图、火焰图、CallGraph等）使代码在某些特征上变得可观测，用于辅助开发人员理解分析项目或建设一些自动化工具。</p>
<!-- more -->
<h2 id="为什么需要代码可视化" tabindex="-1"><a class="header-anchor" href="#为什么需要代码可视化"><span>为什么需要代码可视化?</span></a></h2>
<p>下面通过几个场景来说明开发、测试同学为什么需要代码可视化功能：</p>
<h3 id="场景1-代码逻辑理解困难" tabindex="-1"><a class="header-anchor" href="#场景1-代码逻辑理解困难"><span>场景1：代码逻辑理解困难</span></a></h3>
<p>项目代码量很大且需求迭代快，每次梳理的文档很快就过时了。新同学入手困难苦不堪言，老手也很难对项目整体的业务逻辑有一个全面的认知，常常需要重新梳理逻辑。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/202501251311287.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="场景2-代码改动影响面难以评估" tabindex="-1"><a class="header-anchor" href="#场景2-代码改动影响面难以评估"><span>场景2：代码改动影响面难以评估</span></a></h3>
<p>需求的诉求是修改A页面的逻辑，但由于后端代码很多公用逻辑且调用层级很深，上线才后发现影响了B页面的逻辑，造成了线上事故。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/202501251311465.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="场景3-遗留项目重构缺少抓手" tabindex="-1"><a class="header-anchor" href="#场景3-遗留项目重构缺少抓手"><span>场景3：遗留项目重构缺少抓手</span></a></h3>
<p>老旧遗留项目经过长时间迭代和多次更换团队，导致内部代码逻辑十分混乱且没人能完全讲明白所有逻辑。但新的业务迭代需求源源不断，在原有项目上修改成本越来越高，亟需重构以获得更高地研发效率。</p>
<figure><img src="https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/202501251311868.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>其他场景</strong>：代码改动影响面评估不准导致自动化case编写困难，回归也常常覆盖不到关联逻辑；线上问题排查困难，难以快速定位到出错代码......</p>
<h2 id="怎么实现代码可视化" tabindex="-1"><a class="header-anchor" href="#怎么实现代码可视化"><span>怎么实现代码可视化?</span></a></h2>
<p>实现过程大体可以分两步走：</p>
<ul>
<li>第一步<strong>程序分析</strong>：获取到源码、各种中间表示方式或其他方式采集的数据形成可视化的数据基础；</li>
<li>第二步<strong>数据可视化</strong>：根据想要观测的视角选择对应的图表类型，将第一步获取的数据进行可视化展示。</li>
</ul>
<p>当然对于实际应用场景完成可视化也只是刚刚开始，之后会基于可观测的部分再结合自己的诉求建设更复杂的工具。后面将从理论和实践两部分进行展开阐述：</p>
<ul>
<li>了解实现代码可视化需要掌握的基础理论，例如：AST生成、CFG和DFG等；</li>
<li>实践部分会实现“<strong>CallGraph可视化</strong>”并提供基于Git Diff的代码影响变更分析功能；</li>
<li>也会罗列一些业界已知的实践方案供大家参考学习。</li>
</ul>
<p>相关内容会逐步汇总到”代码可视化“书籍：<a href="https://code-visualization.shawnxie.top/" target="_blank" rel="noopener noreferrer">code-visualization-book</a>.</p>
<div style="text-align: center;"> —— 完 —— </div>
<hr>
<p>关注“<strong>肖恩聊技术</strong>”公众号，原创技术文章第一时间推送~</p>
<img src="https://cdn.jsdelivr.net/gh/Xiaoxie1994/images/images/20241103221454.png" alt="公众号二维码" width="300">
</div></template>


