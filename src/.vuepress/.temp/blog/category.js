export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"AI探索\":{\"path\":\"/category/ai%E6%8E%A2%E7%B4%A2/\",\"indexes\":[0,1]},\"历史考究\":{\"path\":\"/category/%E5%8E%86%E5%8F%B2%E8%80%83%E7%A9%B6/\",\"indexes\":[2]},\"技术提效\":{\"path\":\"/category/%E6%8A%80%E6%9C%AF%E6%8F%90%E6%95%88/\",\"indexes\":[3,4,5,6]},\"肖恩杂谈\":{\"path\":\"/category/%E8%82%96%E6%81%A9%E6%9D%82%E8%B0%88/\",\"indexes\":[7]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"AI\":{\"path\":\"/tag/ai/\",\"indexes\":[0,1]},\"智能体\":{\"path\":\"/tag/%E6%99%BA%E8%83%BD%E4%BD%93/\",\"indexes\":[0,1]},\"技术调研\":{\"path\":\"/tag/%E6%8A%80%E6%9C%AF%E8%B0%83%E7%A0%94/\",\"indexes\":[1]},\"编程史\":{\"path\":\"/tag/%E7%BC%96%E7%A8%8B%E5%8F%B2/\",\"indexes\":[2]},\"Docker Hub\":{\"path\":\"/tag/docker-hub/\",\"indexes\":[6]},\"代理\":{\"path\":\"/tag/%E4%BB%A3%E7%90%86/\",\"indexes\":[6]},\"教程\":{\"path\":\"/tag/%E6%95%99%E7%A8%8B/\",\"indexes\":[3,4,5,6]},\"Mac\":{\"path\":\"/tag/mac/\",\"indexes\":[3,5]},\"终端\":{\"path\":\"/tag/%E7%BB%88%E7%AB%AF/\",\"indexes\":[3]},\"桌面应用\":{\"path\":\"/tag/%E6%A1%8C%E9%9D%A2%E5%BA%94%E7%94%A8/\",\"indexes\":[5]},\"图床\":{\"path\":\"/tag/%E5%9B%BE%E5%BA%8A/\",\"indexes\":[4]},\"自动化\":{\"path\":\"/tag/%E8%87%AA%E5%8A%A8%E5%8C%96/\",\"indexes\":[4]},\"写作工具\":{\"path\":\"/tag/%E5%86%99%E4%BD%9C%E5%B7%A5%E5%85%B7/\",\"indexes\":[4]},\"年度总结\":{\"path\":\"/tag/%E5%B9%B4%E5%BA%A6%E6%80%BB%E7%BB%93/\",\"indexes\":[7]},\"个人成长\":{\"path\":\"/tag/%E4%B8%AA%E4%BA%BA%E6%88%90%E9%95%BF/\",\"indexes\":[7]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

