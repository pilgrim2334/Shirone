---
title: 实验专区
status: ongoing
defaultCategory: 实验记录
---

这里是实验工作的总入口，内容分为两个栏目：

- [每日实验记录总结](/series/daily-lab-notes/)：按发布日期归档实验目的、操作摘要、结果、问题与下一步计划。
- [实验 Protocol 收集](/series/lab-protocols/)：像普通文章一样公开归档实验室常用流程、试剂配置、关键参数和注意事项。

这两个栏目及其中的普通文章默认公开，任何访客都可以阅读。新建文章时，将 frontmatter 中的 `series` 分别设为 `daily-lab-notes` 或 `lab-protocols`，文章就会自动进入相应归档。

只有确实需要限制访问的后续文章，才单独设置 `encrypted: true`、`password` 和 `passwordHint`。加密文章的标题和日期仍会公开显示，正文需要密码解锁；未设置加密的实验文章始终公开。
