---
title: 霜折博客维护手册：写作、配置与发布
published: 2026-10-14
description: 一份按当前博客实际配置整理的 Shirone 中文操作手册，涵盖文章、图片、实验记录、私人空间、评论、站点配置和 Git 发布。
category: 博客教程
tags: [Shirone, Astro, Markdown, 博客维护, Git]
pinned: true
draft: false
---

这份手册用于维护我自己的 Shirone 博客。它不讨论主题开发的全部技术细节，只保留日常最常用的操作：写文章、插图片、整理实验记录、更新 Protocol、使用私人空间、修改站点资料，以及检查和发布网站。

原始 Shirone 文档站仍可作为完整参考，但平时维护这个博客，先查这篇文章就够了。

## 一、先认识几个常用目录

| 目录或文件 | 用途 |
| --- | --- |
| `src/content/posts/` | 公开博客文章，发布后进入主页、归档、分类和搜索 |
| `src/content/private/` | 私人空间文章，构建后正文以密文形式出现在 `/private/` |
| `src/content/series/` | 系列介绍和系列默认分类 |
| `public/images/` | 可通过网址直接访问的图片 |
| `src/config/` | 站点功能和行为配置 |
| `src/data/` | 友链、游戏、音乐等页面的数据 |
| `src/config/profileConfig.ts` | 名称、头像、简介和个人链接 |
| `src/config/siteConfig.ts` | 域名、站点标题、主题色和背景图 |
| `src/config/commentConfig.ts` | Giscus 评论配置 |
| `src/config/musicConfig.ts` | 音乐播放器和网易云歌曲 ID |
| `src/config/privateSpaceConfig.ts` | 私人空间开关、密码和密码提示 |

可以先用一个简单原则判断应该改哪里：文章正文放 `content`，列表数据放 `data`，功能开关和站点行为放 `config`。

## 二、新建和编辑公开文章

公开文章都是 `src/content/posts/` 下的 `.md` 或 `.mdx` 文件。可以复制已有文章，也可以在项目目录运行：

```powershell
pnpm.cmd new-post article-name
```

文件名建议使用小写英文、数字和短横线，例如：

```text
rh7777-cell-recovery.md
npc1l1-weekly-progress.md
western-blot-protocol.md
```

每篇文章开头都要有 Frontmatter：

```yaml
---
title: 文章标题
published: 2026-10-14
description: 用一句话概括文章内容。
category: 实验进展
tags: [NPC1L1, 细胞培养]
draft: false
---
```

常用字段如下：

| 字段 | 作用 |
| --- | --- |
| `title` | 文章标题，必填 |
| `published` | 发布日期，必填，推荐使用 `YYYY-MM-DD` |
| `publishedAt` | 同一天有多篇文章时，用完整时间控制顺序 |
| `updated` | 最近修改日期 |
| `description` | 首页卡片、搜索和分享时使用的摘要 |
| `category` | 单个分类，例如“实验进展”或“博客教程” |
| `tags` | 多个关键词 |
| `image` | 封面图片路径 |
| `pinned` | `true` 表示置顶 |
| `draft` | `true` 表示草稿，正式构建时不发布 |
| `series` | 所属系列的标识 |
| `seriesOrder` | 系列中的阅读顺序 |
| `comment` | 当前文章是否显示评论，默认开启 |

文章标题已经由 `title` 生成，正文通常从二级标题开始：

```md
## 实验目标

正文写在这里。

## 实验结果

继续写结果。
```

更完整的 Markdown 写法见站内的 [Markdown 写作速查](/posts/markdown-cheatsheet/)，公式和 LaTeX 用法见 [LaTeX 公式速查](/posts/latex-math-cheatsheet/)。

## 三、实验记录和 Protocol 怎么发布

实验记录与普通文章没有区别，都会显示在主页。区别只在于使用哪个系列进行整理。

每日实验记录使用：

```yaml
category: 实验进展
series: daily-lab-notes
```

Protocol 使用：

```yaml
category: 实验 Protocol
series: lab-protocols
```

实验记录建议包含：

1. 实验目标；
2. 样品、批次和关键条件；
3. 操作摘要；
4. 实际观察；
5. 结果与问题；
6. 原因分析；
7. 下一步计划。

Protocol 建议包含：

1. 适用范围；
2. 材料、试剂和仪器；
3. 溶液配制；
4. 操作步骤；
5. 关键参数；
6. 常见问题；
7. 安全注意事项；
8. 版本和修改日期。

观察结果与自己的解释要分开写。无法确认的原因应写成“推测”“可能”或“仍需验证”，不要把单次观察直接写成结论。

## 四、在文章中插入图片

### 方法一：放在 public 目录

把图片保存到：

```text
public/images/experiments/2026-10-14/cell-result.jpg
```

文章中写：

```md
![RH7777 细胞复苏后的镜下状态](/images/experiments/2026-10-14/cell-result.jpg)
```

`public` 不会出现在网址里。文件位于 `public/images/a.jpg`，网页路径就是 `/images/a.jpg`。

### 方法二：文章和图片放在同一目录

多图文章可以使用目录形式：

```text
src/content/posts/cell-recovery/
├── index.md
├── day-1.jpg
└── day-3.jpg
```

在 `index.md` 中使用相对路径：

```md
![复苏第一天](./day-1.jpg)
```

图片文件名尽量只用英文、数字和短横线。图片说明应写清对象、时间或处理组，不要只写“图一”。

:::warning[敏感图片]
放在 `public/` 中的图片可以直接通过网址访问。未公开的实验原图不要放入公开静态目录。
:::

## 五、私人空间

私人文章放在：

```text
src/content/private/
```

文件示例：

```md
---
title: 内部实验讨论记录
published: 2026-10-14
description: 仅供获准成员查看。
---

正文写在这里。
```

重新构建后，私人文章会统一出现在 `/private/`。访客输入一次私人空间密码后，可以查看该空间内的全部文章；会话有效期内刷新页面不需要重复输入。

私人空间的配置位于：

```text
src/config/privateSpaceConfig.ts
```

修改 `password` 后必须重新构建和部署。当前仓库仍是公开仓库，因此 GitHub 上的 Markdown 源文件和配置密码仍可被查看；网页构建产物中的私人正文是加密的。真正需要保密的资料，后续应迁到私有内容仓库。

## 六、评论系统

本站使用 Giscus，评论数据保存在 GitHub Discussions 中。配置位于：

```text
src/config/commentConfig.ts
```

目前已经配置：

- 评论仓库：`iceyan134/discussion`
- 映射方式：按页面路径 `pathname`
- 评论语言：简体中文
- 输入框位置：评论列表底部

读者需要登录 GitHub 才能留言。若某篇文章不希望开放评论，在 Frontmatter 中添加：

```yaml
comment: false
```

如果评论区没有出现，依次检查：

1. `commentConfig.enable` 是否为 `true`；
2. 仓库是否开启 Discussions；
3. Giscus App 是否已安装到评论仓库；
4. `repoId` 和 `categoryId` 是否仍然正确；
5. 浏览器是否拦截了 `giscus.app`。

## 七、修改个人资料、背景和导航

个人资料在 `src/config/profileConfig.ts`：

```ts
avatar: "assets/images/shuangzhe-avatar.png",
name: "霜折",
bio: "个人简介",
```

域名、站点标题、主题色和背景图在 `src/config/siteConfig.ts`。导航栏入口在 `src/config/navBarConfig.ts`，侧栏组件在 `src/config/sidebarConfig.ts`。

修改配置时尽量沿用现有对象结构，只改值，不随意删除不理解的字段。路径应使用项目中的相对路径或以 `/` 开头的站内路径，不要把 Windows 的 `C:\...` 本地路径直接写进网页配置。

## 八、友链、音乐和番剧

### 添加友链

编辑 `src/data/friends.ts`，在 `friendsData` 中加入：

```ts
{
  id: 5,
  title: "站点名称",
  imgurl: "https://example.com/avatar.png",
  desc: "一句话介绍",
  siteurl: "https://example.com/",
  tags: ["Blog", "Friend"],
},
```

每个 `id` 必须唯一。

### 添加网易云歌曲

编辑 `src/config/musicConfig.ts` 中的 `meting.id`。多首歌曲使用逗号连接歌曲 ID：

```ts
id: "1390540736,462698581",
```

歌曲名称和歌手由音乐接口读取，不需要手写“吉他 Mix”等附加名称。

### 更新 B 站追番

当前 B 站 UID 已配置为 `71259129`。需要更新本地快照时运行：

```powershell
pnpm.cmd anime:sync --provider bilibili
```

同步完成后检查追番页面，再提交生成的快照和封面文件。列表是否能同步取决于 B 站隐私设置和接口状态。

## 九、本地预览与检查

在项目目录打开终端，安装依赖：

```powershell
pnpm.cmd install
```

启动本地预览：

```powershell
pnpm.cmd dev --port 4321
```

浏览器打开：

```text
http://localhost:4321
```

修改文章后通常可以直接刷新查看。正式提交前至少运行：

```powershell
npx.cmd astro check
pnpm.cmd build
```

`astro check` 应显示 0 errors。`pnpm.cmd build` 会生成 `dist/`，同时检查本地图标、图片、搜索索引和字体资源。

如果修改后页面没有变化：

1. 确认改的是正确文件；
2. 检查 `draft` 是否为 `false`；
3. 停止并重新启动开发服务器；
4. 清理 `.astro/data-store.json` 后重启；
5. 查看构建日志是否报错；
6. 线上站点等待部署完成后再强制刷新。

## 十、Git 提交与发布

每次修改后的基本流程是：

```powershell
git status --short
git add -- 修改过的文件
git commit -m "docs(posts): update article"
git push origin master
```

推送后由部署平台自动重新构建。只有 GitHub 已收到提交并且线上构建成功，网站才会发生变化。

常见提交类型：

| 类型 | 用途 |
| --- | --- |
| `docs` | 新增或修改文章 |
| `feat` | 新增网站功能 |
| `fix` | 修复错误 |
| `refactor` | 调整结构但不改变主要功能 |
| `chore` | 维护、依赖或构建配置 |

不要直接修改 `dist/`。它是构建生成的文件，下次构建会被覆盖。

## 十一、常见问题

### 为什么文章没有出现在主页

检查文件是否位于 `src/content/posts/`、Frontmatter 是否正确，以及 `draft` 是否为 `false`。日期写错到未来也可能影响显示顺序。

### 为什么分类数量不正确

分类来自每篇文章的 `category`，没有显式分类时可能使用系列的默认分类。部署后看到旧数字时，先等待构建完成并刷新页面。

### 为什么图片显示不出来

检查文件是否真实存在、大小写是否一致，以及 `public` 是否被错误写入网址。网页路径中使用 `/`，不要使用 Windows 的反斜杠。

### 为什么评论区为空

检查 GitHub 登录状态、Discussions、Giscus App 和浏览器网络拦截。评论组件采用懒加载，需要滚动到文章底部才会开始加载。

### 为什么推送后网站没有变化

依次确认：提交是否成功、是否推送到 `master`、部署平台是否开始新构建、构建是否报错、域名是否仍指向正确项目。

## 十二、我的日常维护清单

- [ ] 文章标题和摘要能否说明内容；
- [ ] 日期、分类、标签和系列是否正确；
- [ ] 实验事实与原因推测是否分开；
- [ ] 图片路径、说明和敏感性是否检查；
- [ ] 草稿状态是否正确；
- [ ] `npx.cmd astro check` 是否为 0 错误；
- [ ] 正式构建是否成功；
- [ ] 是否只暂存本次修改的文件；
- [ ] Git 是否已经提交并推送；
- [ ] 线上部署完成后是否检查页面。

这篇手册记录的是当前博客的实际使用方式。以后功能或目录发生变化时，应同步更新这里，避免操作说明与网站现状脱节。
