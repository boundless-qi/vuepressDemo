module.exports = {
  title: "首页",
  base: "/",
  description: "前端记录",
  dest: "./dist",
  head: [["link", { rel: "icon", href: "/role.jpg" }]],
  themeConfig: {
    logo: "/role.jpg",
    lastUpdated: "lastUpdate", // string | boolean
    searchMaxSuggestions: 10,
    nav: [
      { text: "首页", link: "/" },
      {
        text: "分类",
        icon: "reco-document",
        items: [
          { text: "文章", link: "/dev_specification/" },
          { text: "主要", link: "/dev_specification/" }
        ]
      },
      { text: "Github", link: "https://github.com/vuejs/vuepress" }
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      "/dev_specification/": [
        {
          title: "开发规范",
          collapsable: true,
          children: ["base/css", "base/javascript", "", "base/vue"]
        },
        {
          title: "命名规范",
          collapsable: true,
          children: []
        },
        {
          title: "接口规范",
          collapsable: true,
          children: [""]
        }
      ]
    }
  }
};
