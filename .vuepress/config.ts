import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "羽中笔记",
  description: "learn",
  theme: recoTheme({
    base: "/hc-blog.github.io/",
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "hc",
    authorAvatar: "/head.png",
    docsRepo: "https://wjwhch.github.io/hc-blog.github.io/",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/js/": [
        {
          text: "基础",
          children: ["prototype"],
        },
      ],
      "/docs/css/": [
        {
          text: "filter",
          children: [
            "/docs/css/filter/dy",
            "/docs/css/filter/fire",
            "/docs/css/filter/goast",
            "/docs/css/filter/wordblend",
            "/docs/css/filter/smallBallBig",
            "/docs/css/filter/personShadow",
            "/docs/css/filter/magicText",
          ],
        },
      ],
    },
    navbar: [
      { text: "Home", link: "/" },
      {
        text: "Docs",
        children: [
          { text: "js", link: "/docs/js/prototype" },
          { text: "css", link: "/docs/css/filter/dy" },
        ],
      },
    ],
    commentConfig: {
      // type: 'valine',
      // options 与 1.x 的 valineConfig 配置一致
      options: {
        // appId: 'xxx',
        // appKey: 'xxx',
        // placeholder: '填写邮箱可以收到回复提醒哦！',
        // verify: true, // 验证码服务
        // notify: true,
        // recordIP: true,
        hideComments: true, // 隐藏评论
      },
    },
  }),
  // debug: true,
});
