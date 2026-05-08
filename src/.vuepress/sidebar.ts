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
      prefix: "kafka/",
      link: "kafka/",
      children: "structure",
    },
  ],
   "/java-guide-middle/": [
    "",
    {
      text: "限流",
      icon: "book",
      prefix: "limit/",
      link: "limit/",
      children: "structure",
    },
  ],
});
