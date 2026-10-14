---
title: 实验专区
status: ongoing
defaultCategory: 实验记录
---

这里是实验工作的总入口，内容分为两个栏目：

- [每日实验记录总结](/series/daily-lab-notes/)：按日期记录实验目的、操作摘要、结果、问题与下一步计划。
- [实验 Protocol 收集](/series/lab-protocols/)：整理实验室常用流程、试剂配置、关键参数和注意事项。

新建文章时，将 frontmatter 中的 `series` 分别设为 `daily-lab-notes` 或 `lab-protocols`。需要限制访问的文章可继续设置 `encrypted: true`、`password` 和 `passwordHint`；每篇文章会单独要求解锁，同一专区可以使用相同密码。

系列目录、文章标题和日期仍会公开显示。加密保护的是网站生成后的文章正文；仓库中的 Markdown 原文和 frontmatter 密码仍然可见。
