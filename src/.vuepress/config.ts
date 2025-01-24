import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "肖恩聊技术",
  description: "持续提供有价值的技术内容",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
