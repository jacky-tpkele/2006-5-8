# CLAUDE.md — TPKELE 官网项目说明书

> 这个文件是给 AI 助手（Claude 等）读的项目说明书。
> 每次开新会话，AI 会先读它，就不用再从零理解整个项目。
> 你（网站管理员）也可以读它，作为操作手册。

---

## 0. 最重要的一条

**做任何改动之前，先读本文件第 6 节「绝对不能做的事」。**

这个网站已经上线（www.tpkele.com），跑在 GitHub + Vercel 上。
推送到 `main` 分支会自动触发线上部署。**改坏了就是线上坏了。**

---

## 1. 项目是什么

TPKELE 是一家低压电气保护元器件的 B2B 制造商官网（温州），
面向海外买家：分销商、盘柜厂、电气承包商、OEM 客户。

网站是营销 + 获客工具，核心目标是拿到询盘（inquiry / quotation）。

**技术栈**

| 项目 | 版本 / 说明 |
|---|---|
| 框架 | Next.js 16（App Router） |
| React | 19 |
| 语言 | TypeScript 5.9 |
| 多语言 | next-intl 4（英文 + 俄文） |
| 邮件 | resend（询盘表单发信） |
| 部署 | GitHub → Vercel 自动部署 |
| 仓库 | https://github.com/jacky-tpkele/2006-5-8.git（分支 main） |

**常用命令**

```bash
npm run dev        # 本地开发，看 http://localhost:3000
npm run build      # 生产构建（推送前必须跑通）
npm run typecheck  # 类型检查（推送前必须跑通）
```

---

## 2. 目录结构（只列你会用到的）

```
src/
├─ app/
│  └─ [locale]/              ← 所有页面都在这里，[locale] = en 或 ru
│     ├─ page.tsx            ← 首页
│     ├─ products/
│     │  ├─ page.tsx         ← 产品总页
│     │  ├─ [slug]/page.tsx  ← ★ 通用产品详情模板（66 个产品都走这个）
│     │  ├─ category/        ← 产品分类页
│     │  ├─ ac-mcb/          ← 手写落地页（特殊，见第 5 节）
│     │  ├─ dc-mcb/          ← 手写落地页
│     │  ├─ rcbo-australia-new-zealand/  ← 手写落地页
│     │  └─ smart-circuit-breaker/       ← 手写落地页
│     ├─ blog/
│     │  ├─ page.tsx         ← 博客列表页
│     │  ├─ [slug]/page.tsx  ← ★ 博客文章模板（自动生成 Schema）
│     │  ├─ components/      ← 富文本文章组件（采购导航式）
│     │  └─ selection-guides/ 等  ← 博客分类页
│     ├─ guides/[slug]/      ← 技术指南模板
│     └─ resources/          ← 资源中心（7 个子页）
│
├─ data/                     ← ★★★ 内容都在这里，改内容先来这里
│  ├─ site.ts                ← 主数据：产品、分类、认证、导航（204KB）
│  ├─ site.ru.ts             ← 俄文翻译覆盖（209KB）
│  ├─ standards.ts           ← 国际标准数据库
│  ├─ guides/                ← 技术指南内容（每个指南一个文件）
│  └─ blog/
│     └─ rcbo-au-nz-guide.ts ← 采购导航式文章的专属内容
│
├─ components/               ← 可复用组件（Header / Footer / 询盘弹窗等）
├─ lib/                      ← 工具函数（blog.ts 负责博客逻辑）
└─ app/globals.css           ← 全局样式（5283 行，设计 token 在开头）
```

**图片位置**

```
public/
├─ assets/products/gallery/  ← 产品详情图（命名：{产品slug}-{1..3}.webp）
├─ assets/products/          ← 产品系列图
├─ images/blog/{slug}/       ← 博客配图
├─ images/guides/{slug}/     ← 指南配图
└─ market-access/            ← 市场准入相关
```

---

## 3. 日常操作配方（照着做）

### 3.1 新增一个产品

**改 1 个文件：`src/data/site.ts`**，在 `export const products: Product[] = [` 数组里加一个对象。

必填字段：

```ts
{
  slug: "ac-mcb-1p",                    // URL 用，小写连字符，别改已上线的
  name: "AC MCB 1P",                    // 页面 H1
  shortName: "AC 1P",                   // 卡片短名
  category: "MCB",                      // 见下方 ProductCategory 枚举
  parentCategory: "MCB",
  subCategorySlug: "ac-mcb",            // 可选，归属子分类
  series: "AC/1P",
  application: "AC distribution protection",
  image: "/assets/products/gallery/ac-mcb-1p-1.webp",   // 列表缩略图
  summary: "单行概述",
  description: "1–2 句完整描述（会用于 SEO description）",
  specs: ["1 Pole AC", "DIN rail mount"],   // 关键特性，显示在页面上
  seoKeywords: ["AC MCB 1P", "1P AC circuit breaker"],
  gallery: [                            // 可选，产品详情图轮播
    "/assets/products/gallery/ac-mcb-1p-1.webp",
    "/assets/products/gallery/ac-mcb-1p-2.webp",
  ],
  technicalSpecs: [                     // 可选，键值规格表
    { label: "Poles", value: "1P" },
  ],
  specMatrices: [                       // 可选，矩阵表（多产品横向对比）
    { title: "型号对比", headers: ["型号","A","B"], rows: [["额定电流","6A","10A"]] },
  ],
  certIecDescription: "...",            // 可选，覆盖认证条 IEC 那格文字
  relatedReading: [                     // 可选，相关阅读卡片
    { title: "…", href: "/blog/…", description: "…" },
  ],
}
```

**ProductCategory 只能是这 7 个值之一：**
`"MCB"` / `"RCBO"` / `"SPD"` / `"Voltage Protector"` / `"ATS"` / `"Combiner Box"` / `"Energy Meter"`

**加完后**

1. 图片放到 `public/assets/products/gallery/`，命名 `{slug}-1.webp` 起
2. 跑 `npm run build` 确认通过
3. 产品会自动出现在：产品总页、所属分类页、sitemap

**规格表三级回退机制**（不用你操心，但要理解）：
- 有 `subCategorySlug` 且子分类配了 `specTable` → 用分组规格表
- 否则有 `specMatrices` → 用矩阵表
- 否则有 `technicalSpecs` → 用键值表
- 都没有 → 用 `defaultTechnicalSpecsByCategory` 按类别给默认值

**所以：加产品不需要写任何页面代码，只加数据。**

---

### 3.2 新增一篇博客（普通文章）

**改 1 个文件：`src/data/site.ts`**，在 `export const blogPosts: BlogPost[] = [` 数组里加对象。

```ts
{
  slug: "your-article-slug",            // URL: /blog/your-article-slug
  title: "文章标题（用于 H1）",
  seoTitle: "SEO 标题（用于浏览器标签和搜索结果）",
  seoDescription: "SEO 描述，140–160 字符",
  date: "2026-10-04",                   // YYYY-MM-DD
  image: "/images/blog/{slug}/hero.webp",
  excerpt: "列表页显示的摘要",
  intent: "这篇文章帮助买家解决什么问题",
  body: [
    {
      heading: "小标题",
      paragraphs: ["段落一", "段落二（支持 markdown 链接）"],
      bullets: ["要点一", "要点二"],     // 可选
    },
  ],
  faq: [{ question: "问题", answer: "答案" }],   // 可选，会自动生成 FAQ Schema
  relatedProducts: ["1pn-rcbo"],                 // 可选，关联产品 slug
}
```

**博客分类**（决定文章出现在哪个分类页）：
`product-knowledge` / `selection-guides` / `comparisons` / `application-scenarios` / `faqs`

> 注意：静态 `blogPosts` 数组里的文章目前**不带分类**。
> 如果需要分类归属，要用下面的富文本方式，或走 Supabase。

**加完后**：图片放 `public/images/blog/{slug}/`，跑 `npm run build`。

**自动获得**（不用手写）：
- Article Schema、Breadcrumb Schema、FAQ Schema（内联 JSON-LD）
- 页面 <title> / description / canonical / OG
- sitemap 收录、博客列表页收录
- 上一篇/下一篇、相关产品区块

---

### 3.3 新增一篇「采购导航式」博客（高级文章）

适用于需要 sticky 采购导航、On This Page 侧栏、资源联动卡片的重点文章。

**看样板：`src/data/blog/rcbo-au-nz-guide.ts`**

这种文章不用 markdown，而是用结构化 block 描述：

| block 类型 | 用途 |
|---|---|
| `p` | 段落（html 字符串，可含链接） |
| `figure` | 图片（WebP + PNG fallback） |
| `table` | 表格（移动端自动横向滚动） |
| `comparison` / `specGrid` / `documentGrid` | 卡片网格 |
| `contextAction` | 情境 CTA |
| `resourceStrip` / `resourceHub` / `purchaseSteps` | 资源联动 |
| `productAction` | 产品 CTA 卡 |

**改 1 个文件**：在 `rcbo-au-nz-guide.ts` 的 `richBlogArticles` 里注册新文章即可，
`/blog/[slug]` 路由会自动识别并切换到富文本模板。

---

### 3.4 新增一篇技术指南（Guide）

**改 2 个文件**：

1. 新建 `src/data/guides/your-guide-slug.ts`，照 `rccb-rcbo-selection-guide.ts` 的结构写
2. 在 `src/data/guides/index.ts` 里 `import` 并加进 `guides` 数组

指南内容用 HTML 字符串（不是 markdown），每节一个 `id`（用于 On This Page 导航）：

```ts
{
  id: "selection-overview",
  title: "Selection Overview",
  content: `<p>正文</p>`,
}
```

**自动获得**：On This Page 侧栏、相关产品、Continue Your Journey、Market Access CTA。

---

### 3.5 新增页面区块（改 UI）

**先看现有组件能不能用**，能复用就不要新写。可用组件见 `src/components/`。

必须遵守：
- 颜色只用 CSS 变量（见第 4 节），**不要写 `#xxxxxx`**
- 不要写内联 `style={{}}`，除非是动态计算值；静态样式写进 CSS
- 新页面的 CSS 文件只放该页面专属样式，**不要往 `globals.css` 里加**

---

## 4. 设计系统（解决「UI 像打补丁」）

**所有颜色必须用这些变量**，定义在 `src/app/globals.css` 开头：

```css
--green:       #0b9b3f    /* 主色，品牌绿 */
--green-dark:  #066128    /* 主色深版，hover 用 */
--green-soft:  #eaf8ef    /* 主色浅底 */
--ink:         #111718    /* 正文文字 */
--muted:       #5f6d68    /* 次要文字 */
--line:        #e7ece9    /* 边框线 */
--panel:       #ffffff    /* 面板白 */
--wash:        #f5f7f6    /* 浅灰底 */
--footer:      #071011    /* 页脚深色 */
--shadow:      0 18px 45px rgba(13, 34, 28, 0.1)
--max:         1180px     /* 内容最大宽度 */
```

**禁止**：在页面里硬编码 `#009b5a`、`#00a86b` 这类颜色。
目前全站有 759 处硬编码色值 —— 新增代码不要再增加。

**间距节奏**：8 / 12 / 16 / 24 / 32 / 48 / 64 / 96

---

## 5. 手写落地页（特殊页面，谨慎对待）

这几个页面**不走通用模板**，是单独手写的，各自有内联样式：

```
products/ac-mcb/                    （9 个文件）
products/dc-mcb/                    （7 个文件）
products/rcbo-australia-new-zealand/（6 个文件）
products/smart-circuit-breaker/     （5 个文件）
products/ac-spd/  dc-spd/  ats/  combiner-box/  energy-meter/  mcb/  spd/  voltage-protector/
```

**改这些页面时**：
- 它们是为了特定营销目标单独做的，改之前先问清楚目的
- 内部的重复区块（Hero、FeaturesGrid、SpecsSection）可以复用，
  但**不要**为了「统一」而擅自重写整个页面
- 这些页面是「UI 补丁感」的来源之一，新做落地页应优先考虑拼装现有组件

---

## 6. 绝对不能做的事 🚫

1. **不要改已上线页面的 URL（slug）** —— 会导致 404 和 SEO 权重丢失。
   确实要改，必须在 `next.config.ts` 里加 301 重定向。

2. **不要删 `next.config.ts` 里现有的 redirects** —— 这些是历史 URL 的保命规则，
   删了旧链接就 404。**现有 8 类、21 组、共 33 条规则**：

   | 类别（源码里的注释） | 组数 | 说明 |
   |---|---|---|
   | Market Access Advisor 旧址 | 1 | `/electrical-international-standards-inquiry-center` |
   | Standards Database 旧址 | 2 | `/electric-standards-database`（含 `:slug`） |
   | Buyer Trade Support 旧址 | 1 | `/resources/buyer-trade-support` |
   | **接坏链接**（历史笔误） | 3 | 见下方警告 |
   | 旧博客 → 技术指南 | 4 | `/blog/*` → `/guides/*` |
   | 旧产品址 → 新结构 | 1 | `over-voltage-protector` → `voltage-protector` |
   | 旧通用址 → 具体分类 | 3 | `dc-circuit-breakers`、`circuit-breakers` 等 |
   | 语言路由修补 | 2 | `/ru/index.html`、`/privacy.html` |
   | 去掉 `/en` 前缀 | 4 | `/en`、`/en/products`、`/en/blog/:slug` 等 |

   ⚠️ **「接坏链接」这几条看起来像笔误，但绝对不能删** —— 它们专门用来接住
   过去某次工具生成错误产生的坏 URL：

   ```
   /resources/application-solutionsapplication-solutions  →  /resources/application-solutions
   /resources/market-access-advisormarket-access          →  /resources/market-access-advisor
   /projects/zimbabwe-sirdc-solar-projectzimbabwe         →  /projects/zimbabwe-sirdc-solar-project
   /solar-dc-protectionsolar                              →  /products/dc-mcb
   ```

   **看起来奇怪 ≠ 可以删。** 不确定就问。

   ⚠️ `/en` 系列 4 条也很重要：它们保证「带 `/en` 前缀的 URL」自动跳回无前缀版本。
   这是为什么英文 URL 必须不带 `/en`（见第 10 节）。

3. **不要改已上线产品的 slug**。同理，会导致 404。

4. **不要重写 `globals.css` 的全局样式**（如 `body`、`a`、`.btn` 基础定义）。
   5283 行 CSS 是全站共用的，改一处可能影响 100 个页面。
   新增样式请加在页面专属 CSS 里，或追加到文件末尾并加注释。

5. **不要重构整个项目结构**。只做增量修改。

6. **不要改 `site.ts` 里已有产品的 `category` / `parentCategory`** —— 会打乱分类页。

7. **不要移除 `site.ru.ts`** —— 俄文版依赖它。

8. **合规红线**：不要新增未经核实的认证声明。
   - 可以写：`built to AS/NZS 61009.1`、`designed to IEC 61009-1`、`CE marking`
   - **不要写**：`RCM Certified`、`Australia Certified`、`Approved for Australia and New Zealand`
   - 原因：产品外壳上的标准标识 ≠ 该型号已完成 EESS 注册 / RCM 准入。
     除非能提供该具体型号的证书或注册证明，否则一律用谨慎表述。

---

## 7. 发布流程

```bash
npm run typecheck   # 1. 类型检查
npm run build       # 2. 生产构建（必须成功）
git add -A          # 3. 暂存
git commit -m "说明这次改了什么"
git push origin main  # 4. 推送 → Vercel 自动部署（2–4 分钟）
```

**推送前自查**：
- [ ] `npm run build` 通过
- [ ] 没有改动任何已上线的 URL
- [ ] 没有新增硬编码颜色
- [ ] 新增页面在 sitemap 里

---

## 8. 当前已知的技术债

这些是**已知问题，不要求立刻修**，但新代码不要再加重：

| 问题 | 现状 | 改善方向 |
|---|---|---|
| 硬编码颜色 | 759 处 | 改到哪个页面就顺手换成变量 |
| 内联 style | 84 处 | 静态样式移进 CSS |
| `globals.css` 过大 | 5283 行 | 新样式写页面专属文件 |
| 重复定义的类 | `.faq-item` 定义 2 次、`.site-nav` 出现 32 次 | 合并 |
| 手写落地页重复造轮子 | 12 个页面各有自己的 Hero/Spec 区块 | 逐步抽成共享组件 |
| SEO 元数据手写 | 每个页面单独写 title/description | 可规则化的部分自动生成 |

---

## 9. 内容数据在哪（速查）

| 要改什么 | 改哪里 |
|---|---|
| 产品 | `src/data/site.ts` → `products` 数组 |
| 产品分类说明 | `src/data/site.ts` → `categoryContent` |
| 博客文章（普通） | `src/data/site.ts` → `blogPosts` 数组 |
| 博客文章（采购导航式） | `src/data/blog/rcbo-au-nz-guide.ts` |
| 技术指南 | `src/data/guides/*.ts` + `index.ts` 注册 |
| 国际标准 | `src/data/standards.ts` |
| 认证列表 | `src/data/site.ts` → `certifications` |
| 俄文翻译 | `src/data/site.ru.ts` |
| 导航/页脚菜单 | `src/data/site.ts` → `productMenu` / `megaMenu` |
| 界面文案 | `messages/en.json` / `messages/ru.json` |

---

## 10. 多语言规则

- 英文是默认语言，URL **不带**前缀：`/products/1pn-rcbo`
- 俄文带 `/ru` 前缀：`/ru/products/1pn-rcbo`
- 新增页面时，canonical 用 `localizedPath()` 生成，hreflang 用 `alternateLanguages()`
  （都在 `src/lib/locale-path.ts`）
- **不要**给英文 URL 加 `/en` 前缀 —— 会破坏已被搜索引擎收录的 URL

---

## 11. 遇到不确定时

**先问，不要猜。** 特别是：
- 要改 URL 吗？
- 要动 `globals.css` 吗？
- 要删东西吗？
- 涉及认证 / 合规表述吗？

这几类改动风险高，确认清楚再动手。

---

*最后更新：2026-10-04*
