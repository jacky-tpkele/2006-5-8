# RCBO 产品线实施总结

## 已完成改动

### 1. 数据结构 (`src/data/site.ts`)
- 添加 `"RCBO"` 到 `ProductCategory` 类型
- 添加 `"RCBO"` 到 `categories` 数组
- 添加 `RCBO: "rcbo"` 到 `categorySlugMap`
- 添加完整的 RCBO 分类内容到 `categoryContent`：
  - hero, intro, bullets, applications, buyerPersona, faq
  - SEO: title, description, keywords
- 添加 RCBO 到 `productMenu`，包含两个子项：
  - "RCBO for Australia & NZ" → `/products/rcbo-australia-new-zealand`
  - "1P+N 18mm RCBO" → `/products/rcbo-1pn-18mm-6ka`
- 添加 RCBO 到 `productMegaMenu` 的 "lv" (Distribution & Backup) 栏
- 添加产品条目 `rcbo-1pn-18mm-6ka` 到 `products` 数组：
  - 基于你提供的 XYDL6-40 技术参数（TPL6-40 系列）
  - 1P+N, 18mm, 1-40A, 6kA, Type A/AC, 10/30/50/100mA
  - 完整的 technicalSpecs
- 添加 RCBO 默认规格到 `defaultTechnicalSpecsByCategory`
- 添加 RCBO 特性到 `extraKeyFeaturesByCategory`

### 2. 路由和页面
- **大类页面**: `src/app/[locale]/products/category/rcbo/page.tsx`
  - 复用现有 CategoryProductGrid 组件
  - 显示分类介绍、产品列表、FAQ
- **澳新落地页**: `src/app/[locale]/products/rcbo-australia-new-zealand/page.tsx`
  - 专门面向澳新市场的落地页
  - 突出 AS/NZS 61009.1、RCM、Type A、一机一路等卖点
  - 完整的合规说明、产品矩阵、FAQ、OEM 部分

### 3. 多语言 (`messages/en.json`)
- 添加 `"rcbo": "RCBO"` 到 `megaMenu.items`
- 添加 `"rcbo": "RCBO Manufacturer"` 到 `manufacturerMenu`

### 4. 导航组件 (`src/components/Header.tsx`)
- 添加 `/products/category/rcbo` → `"rcbo"` 到 `MEGA_ITEM_KEYS`
- 添加 `/rcbo-manufacturer` → `"rcbo"` 到 `MFR_MENU_KEYS`

### 5. Sitemap (`src/app/sitemap.ts`)
- 添加 `/rcbo-manufacturer` 到静态路径
- 添加 `/products/rcbo-australia-new-zealand` 到静态路径
- RCBO 大类页和产品详情页会自动通过动态路由生成

### 6. SEO 和索引 (`public/llms.txt`)
- 添加 RCBO 产品线到 Product Categories 部分
- 添加 RCBO Manufacturer 到 Manufacturer Landing Pages 部分

### 7. 占位图片
- 创建目录 `public/assets/products/rcbo-1pn-18mm/`
- 复制现有 MCB 图片作为占位：
  - `rcbo-1pn-18mm-front.webp`
  - `rcbo-1pn-18mm-side.webp`
  - `rcbo-1pn-18mm-dimensions.webp`

## 新增 URL 结构

```
/products/category/rcbo                    ← RCBO 大类页
/products/rcbo-australia-new-zealand       ← 澳新专属落地页（推荐 SEO）
/products/rcbo-1pn-18mm-6ka                ← 产品详情页（TPL6-40）
/rcbo-manufacturer                         ← 制造商页面（占位，后续创建）
```

## 待补充内容

1. **真实产品图片**：替换 `public/assets/products/rcbo-1pn-18mm/` 下的三张占位图
2. **制造商页面**：创建 `/rcbo-manufacturer` 落地页（参考 `/mcb-manufacturer`）
3. **俄语翻译**：`src/data/site.ru.ts` 加入 RCBO 分类和产品的俄文翻译
4. **更多产品型号**：如需要 2P、3P+N、EV 专用 Type B 等型号，照抄 `rcbo-1pn-18mm-6ka` 格式添加

## 技术参数来源

基于你提供的 **XYDL6-40** 技术资料：
- 1P+N, 18mm (1 模块)
- 1A–40A 可选
- 230V AC, 6kA
- Type A / Type AC
- 10/30/50/100mA
- B/C 脱扣曲线
- IEC 61009-1

## 编译状态

✅ `npm run build` 通过，所有路由生成成功。
