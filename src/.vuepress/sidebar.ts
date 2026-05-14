import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/demo/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "",
      link: "",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "",
      children: "structure",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
  "/java-guide-low/": [
    "",
    {
      text: "Kafka",
      icon: "book",
      collapsible: true,
      expanded: true,
      children: "structure",
    },
  ],
   "/java-guide-middle/": [
    "",
    {
      text: "限流",
      icon: "book",
      collapsible: true,
      expanded: true,
      children: "structure",
    },
  ],
  "/java-interview-travel/": [
    "",
    {
      text: "面试旅程",
      icon: "book",
      collapsible: true,
      expanded: true,
      children:  "structure",
    },
  ],
});
