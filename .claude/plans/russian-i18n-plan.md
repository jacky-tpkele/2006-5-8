# 俄语站多语言实施方案

## 目标

在现有 `www.tpkele.com` 下新增俄语版本，使用子目录架构 `/ru/*`，保持英语为默认语言，不破坏现有功能（SEO、重定向、sitemap、IndexNow）。

---

## 一、架构设计

### 1.1 URL 结构

```
www.tpkele.com/products/ac-mcb-1p        → 英文（默认）
www.tpkele.com/ru/products/ac-mcb-1p     → 俄语
```

- 英文不带 `/en` 前缀（保持现有 URL，避免破坏已提交给搜索引擎的收录）
- 俄语用 `/ru` 前缀

### 1.2 技术选型

**使用 `next-intl` v4**（Next.js App Router 官方推荐的多语言方案）

**为什么不用其他方案：**
- Next.js 15/16 已移除内置 i18n 配置，必须用第三方库
- `next-intl` 是 App Router 生态最成熟的方案，支持动态路由、中间件、服务端组件
- 如果以后要加德语、西班牙语，同一套架构直接扩展

---

## 二、目录结构改造

### 2.1 当前结构（英文单语言）

```
src/app/
├── layout.tsx
├── page.tsx
├── about/page.tsx
├── products/page.tsx
├── products/[slug]/page.tsx
├── products/category/[slug]/page.tsx
└── ...
```

### 2.2 改造后结构（支持多语言）

```
src/app/
├── [locale]/                     ← 新增：动态语言段
│   ├── layout.tsx               ← 语言特定的 layout
│   ├── page.tsx                 ← 首页
│   ├── about/page.tsx
│   ├── products/page.tsx
│   ├── products/[slug]/page.tsx
│   └── ...
├── layout.tsx                    ← 根 layout（保留，包裹 HTML）
└── page.tsx                      ← 根首页重定向到 /en 或 /ru
```

**但为了保持英文 URL 不变（`/products` 而非 `/en/products`），我们需要特殊处理：**

```
src/app/
├── [locale]/                     ← 仅俄语 /ru/* 走这里
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
├── layout.tsx                    ← 英文页面的 layout
├── page.tsx                      ← 英文首页
├── about/page.tsx                ← 英文 about
├── products/                     ← 英文产品页
└── ...
```

**问题：这样会导致代码重复（英文和俄语各写一遍）。**

**更好的方案：用 middleware 重写，让英文和俄语都走 `[locale]` 路由：**

```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 如果 URL 不以 /ru 开头，视为英文，内部重写为 /en/*
  if (!pathname.startsWith('/ru') && !pathname.startsWith('/_next')) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    return NextResponse.rewrite(url);
  }
  
  // 保留现有的 301 重定向逻辑
  // ...
}
```

这样：
- 用户访问 `/products` → middleware 内部重写为 `/en/products` → 路由到 `[locale]/products/page.tsx` locale=en
- 用户访问 `/ru/products` → 路由到 `[locale]/products/page.tsx` locale=ru
- **URL 栏显示的仍然是 `/products` 和 `/ru/products`，符合预期**

---

## 三、数据层改造

### 3.1 site.ts 数据结构现状

- 3187 行，包含所有产品、分类、博客、FAQ 的英文文案
- 数据结构混合了**语言无关数据**（规格参数、图片路径）和**需翻译文案**（name, description, FAQ）

### 3.2 拆分策略

**方案 A（推荐）：保持 site.ts 为英文主数据源，新建 site.ru.ts 只存俄语覆盖**

```
src/data/
├── site.ts              ← 英文主数据 + 所有语言无关数据（规格、图片）
├── site.ru.ts           ← 俄语覆盖（只包含需翻译的字段）
└── i18n/
    ├── en.json          ← UI 文案（按钮、表单、导航）
    └── ru.json
```

**site.ru.ts 示例结构：**

```typescript
export const productsRu: Record<string, Partial<Product>> = {
  "ac-mcb-1p": {
    name: "1P автоматический выключатель переменного тока",
    description: "Однополюсный автоматический выключатель...",
    application: "Жилые, коммерческие и промышленные...",
  },
  // ...
};

export const categoryContentRu: Record<ProductCategory, Partial<CategoryContent>> = {
  MCB: {
    hero: "Производитель MCB — автоматические выключатели переменного и постоянного тока",
    intro: "...",
  },
};
```

**合并逻辑：**

```typescript
// src/lib/i18n.ts
export function getProduct(slug: string, locale: string): Product {
  const base = products.find(p => p.slug === slug);
  if (locale === 'ru' && productsRu[slug]) {
    return { ...base, ...productsRu[slug] };
  }
  return base;
}
```

**方案 B（备选）：完全重写 site.ru.ts 为 3187 行的俄语版**

- 优点：简单粗暴，不用合并逻辑
- 缺点：维护噩梦——以后加新产品要同步改两个文件，规格参数改了容易忘记同步

**采用方案 A**。

### 3.3 需要翻译的字段清单

#### 产品相关（products 数组，476-2374 行）
- `name` ✓
- `shortName` ✓
- `summary` ✓
- `description` ✓
- `application` ✓
- `specs[]` — **规格参数，暂不翻译**（俄语工程师习惯看英文/数字参数）
- `seoKeywords[]` ✓
- `specTable.title` / `specTable.rows[].category` ✓

#### 分类页（categoryContent，2410-2562 行）
- `hero` ✓
- `intro` ✓
- `bullets[]` ✓
- `checklistTitle` / `checklist[].title` / `checklist[].text` ✓
- `whyTitle` / `whyIntro` / `whyCards[].title` / `.text` ✓
- `processTitle` / `processIntro` / `processSteps[].title` / `.text` ✓
- `faq[].q` / `.a` ✓
- `seoTitle` / `seoDescription` ✓

#### UI 文案（导航、按钮、表单）
- Header 导航：Products, Solutions, About, Blog, Contact
- Footer 链接标题
- 按钮：Request a Quote, View Details, Contact Sales
- 表单：Name, Email, Message, Submit
- 产品页：Specifications, Applications, Gallery, Download Datasheet

#### 博客（blogPosts，2686-2759 行）
- **暂不翻译**，继续用英文

---

## 四、组件改造

### 4.1 需要改动的组件

| 组件 | 改动内容 |
|---|---|
| `Header.tsx` | 加语言切换按钮、导航菜单翻译 |
| `Footer.tsx` | 链接标题翻译 |
| `InquiryModal.tsx` | 表单标签翻译 |
| 所有页面组件 | 从 `useTranslations()` 读取 UI 文案 |

### 4.2 语言切换器设计

**位置：** Header 右上角，搜索按钮左侧

**交互：**
- 当前语言显示为按钮（EN / RU）
- 点击切换，跳转到当前页面的另一语言版本
- 如果俄语页面不存在（比如博客），跳转到俄语首页

**实现：**

```tsx
// components/LanguageSwitcher.tsx
"use client";
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  
  const otherLocale = locale === 'en' ? 'ru' : 'en';
  const toggleHref = locale === 'en' 
    ? `/ru${pathname}` 
    : pathname.replace(/^\/ru/, '') || '/';
  
  return (
    <Link href={toggleHref} className="lang-switcher">
      {otherLocale.toUpperCase()}
    </Link>
  );
}
```

---

## 五、SEO 基础设施适配

### 5.1 Sitemap

**当前 sitemap.ts 生成 73 条英文 URL，需改为生成 73 × 2 = 146 条（英文 + 俄语）**

```typescript
// src/app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'ru'];
  const routes = [];
  
  for (const locale of locales) {
    const prefix = locale === 'en' ? '' : '/ru';
    
    // 静态页面
    staticRoutes.forEach(path => {
      routes.push({
        url: `${site.url}${prefix}${path}`,
        lastModified: new Date(),
        alternates: { languages: {
          en: `${site.url}${path}`,
          ru: `${site.url}/ru${path}`,
        }},
      });
    });
    
    // 产品页、分类页...
  }
  
  return routes;
}
```

### 5.2 hreflang 标签

每个页面的 `<head>` 需要加：

```html
<link rel="alternate" hreflang="en" href="https://www.tpkele.com/products/ac-mcb-1p" />
<link rel="alternate" hreflang="ru" href="https://www.tpkele.com/ru/products/ac-mcb-1p" />
<link rel="alternate" hreflang="x-default" href="https://www.tpkele.com/products/ac-mcb-1p" />
```

`next-intl` 自动生成，只需在 layout 配置：

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const { locale } = await params;
  return {
    alternates: {
      canonical: locale === 'en' ? `/products` : `/ru/products`,
      languages: {
        en: `/products`,
        ru: `/ru/products`,
        'x-default': `/products`,
      },
    },
  };
}
```

### 5.3 robots.txt

保持现有内容，俄语页面自动包含在 sitemap 里，不需要单独配置。

### 5.4 IndexNow

CRM 发布文章时，推送两条 URL（英文 + 俄语）：

```javascript
notifyIndexNow(buildBlogUrl(slug));          // /blog/xxx
notifyIndexNow(`/ru${buildBlogUrl(slug)}`);  // /ru/blog/xxx
```

---

## 六、实施步骤

### 阶段 1：基础架构搭建（不破坏现有功能）

1. 安装 `next-intl`：`npm install next-intl`
2. 创建 `src/i18n/request.ts`（next-intl 配置文件）
3. 创建 `src/i18n/routing.ts`（定义支持的语言：en, ru）
4. 修改 `middleware.ts`：
   - 加入 `next-intl` 的 `createMiddleware`
   - 保留现有的 301 重定向逻辑
   - 英文 URL 不带前缀的重写逻辑
5. 改造目录结构：
   - 创建 `src/app/[locale]/layout.tsx`
   - 移动所有现有页面到 `[locale]/` 下（Git 会自动识别为 rename，保留历史）
6. 测试：`npm run dev`，确保 `/products` 和 `/ru/products` 都能访问

**此时俄语页面显示的还是英文内容，但路由已通。**

### 阶段 2：UI 文案国际化

1. 创建 `messages/en.json` 和 `messages/ru.json`
2. 提取 Header / Footer / 按钮 / 表单的硬编码文案到 JSON
3. 组件里用 `useTranslations()` 替换硬编码
4. 加入语言切换器到 Header

**此时导航、按钮已经俄语化，但产品内容还是英文。**

### 阶段 3：产品数据国际化

1. 创建 `src/data/site.ru.ts`，定义俄语覆盖数据结构
2. 创建 `src/lib/i18n.ts`，实现 `getProduct(slug, locale)` / `getCategoryContent(category, locale)` 等合并函数
3. 修改所有产品页 / 分类页组件，从 `getProduct()` 读取数据而非直接从 `site.ts` 导入
4. **翻译内容**：
   - 用 AI 翻译工具（DeepL / GPT-4）批量翻译 site.ts 的文案字段
   - 人工校对关键页面（首页、分类页、主力产品）
5. 填充 `site.ru.ts`

**此时俄语站全站可用。**

### 阶段 4：SEO 收尾

1. 修改 `sitemap.ts` 生成双语 URL
2. 每个页面的 `generateMetadata` 加 `alternates.languages`
3. 修改 CRM 的 `notifyIndexNow()` 推送双语博客 URL
4. 提交新 sitemap 到 GSC / Bing / Yandex
5. 在 Yandex Webmaster 单独注册 `/ru` 子目录（Yandex 支持子目录作为独立站点）

---

## 七、翻译工作量评估

### 需要翻译的内容量

| 类别 | 条目数 | 字段数/条 | 总量（估算） |
|---|---|---|---|
| 产品（products） | 48 个 | name, summary, description, application, seoTitle, seoDescription | ~300 字/个 × 48 = 14,400 字 |
| 分类页（categoryContent） | 6 个 | hero, intro, bullets, FAQ, process 等 | ~2000 字/个 × 6 = 12,000 字 |
| Manufacturer 页 | 6 个 | 同分类页 | ~2000 字/个 × 6 = 12,000 字 |
| UI 文案（导航、按钮） | — | ~50 条短句 | 500 字 |
| 首页、About、Contact | 3 页 | — | 3,000 字 |
| **总计** | | | **~42,000 字（中文字符）** |

### 翻译方式

**推荐：AI 翻译 + 人工校对**

1. 用 DeepL API 或 GPT-4 批量翻译 `site.ts` 的文案字段
2. 人工校对：
   - 首页、6 个分类页、6 个 manufacturer 页（关键转化路径）— 重点校对
   - 48 个产品页 — 抽查 10 个主力产品
3. 预计人工校对时间：2-3 天（如果你懂俄语）；如果不懂，找俄语母语者校对

**我可以帮你生成翻译脚本**，把 site.ts 的文案提取出来，调用翻译 API，生成 site.ru.ts 骨架。

---

## 八、风险与注意事项

### 8.1 不会破坏的现有功能

✅ 英文 URL 完全不变（`/products` 保持原样）
✅ 已提交给 Google 的 73 条 URL 收录不受影响
✅ 现有的 301 重定向继续生效
✅ IndexNow、sitemap、robots.txt 逻辑兼容扩展

### 8.2 需要注意的坑

⚠️ **middleware 执行顺序**：`next-intl` 的 middleware 要在 301 重定向逻辑之前，否则重定向会拦截语言切换

⚠️ **动态路由 slug 冲突**：产品 slug 是英文（`ac-mcb-1p`），俄语页面的 URL 也是 `/ru/products/ac-mcb-1p`（不翻译 slug，避免 URL 管理混乱）

⚠️ **图片 alt 文本**：需要翻译，但可以放到第二阶段

⚠️ **structured data (JSON-LD)**：需要根据语言动态生成（name、description 字段要用对应语言）

---

## 九、后续扩展

如果以后要加德语、西班牙语：

1. `src/i18n/routing.ts` 加 `de`, `es`
2. 创建 `messages/de.json`, `site.de.ts`
3. sitemap 自动扩展到 73 × 4 = 292 条
4. 语言切换器改成下拉菜单（EN / RU / DE / ES）

**架构完全支持，不需要重构。**

---

## 十、需要你确认的问题

1. **翻译方式**：我用 AI 翻译脚本生成 site.ru.ts 草稿，你找人校对？还是你有现成的翻译团队？
2. **博客翻译**：第一阶段跳过博客，还是也要翻译 6 篇现有文章？
3. **规格参数表**：`specs[]` 和 `specTable` 里的技术参数（"IEC 60898-1", "6kA", "1P/2P/3P/4P"）要翻译成俄语吗？我建议保持英文，俄语工程师看参数都是用拉丁字母。
4. **SEO 标题长度**：俄语单词比英语长，之前优化过的 title（50-60 字符）翻译成俄语可能超标，是压缩俄语文案，还是允许俄语 title 稍长？
5. **Yandex Webmaster**：你有 Yandex 账号吗？需要在那边单独注册 `/ru` 子目录作为站点。

---

## 十一、时间估算

| 阶段 | 工作内容 | 预计时间 |
|---|---|---|
| 阶段 1：架构搭建 | 安装库、改 middleware、移动文件、测试 | 2-3 小时 |
| 阶段 2：UI 国际化 | 提取文案、翻译、加语言切换器 | 1-2 小时 |
| 阶段 3：数据国际化 | 生成翻译脚本、AI 翻译、人工校对、填充数据 | 1 天（AI）+ 2-3 天（校对）|
| 阶段 4：SEO 收尾 | sitemap、hreflang、提交搜索引擎 | 1-2 小时 |
| **总计** | | **开发 1 天 + 翻译校对 2-3 天** |

如果你现在确认这个方案，我可以先做阶段 1 + 2（架构 + UI），让你看到一个能切换语言的俄语框架站，然后我们再处理翻译内容的事。
