import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "文章",
      icon: "pen-to-square",
      prefix: "blogs/",
      link: "/blogs/", 
      children: "structure",
    },
    {
      text: "肖恩技术周刊",
      icon: "newspaper",
      link: "https://weekly.shawnxie.top/",
    },
    {
      text: "小册",
      icon: "book",
      children: [
        {
          text: "《代码可视化》",
          link: "https://code-visualization.shawnxie.top/",
        }
      ]
    }
  ],
});
