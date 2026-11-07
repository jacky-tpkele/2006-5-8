# TPKELE 全站优化执行计划（完整版）

**制定日期**: 2024年12月
**执行周期**: 90天（3个月）
**核心目标**: 
1. 解决"有展示无点击"问题，产品词CTR从0%提升到3%+
2. 解决导航混乱问题，用户和Google都能快速找到产品详情页
3. 流量权重聚合，让分散的流量集中到主产品页
4. 询盘量增长50%+

---

## 第一部分：全站产品架构梳理

### 1.1 产品分类体系（当前状态）

**7个主要产品类别**：

| 类别 | 主产品 | 子型号数量 | 当前URL结构问题 |
|------|--------|-----------|----------------|
| **MCB** | DC MCB, AC MCB, Smart MCB, RCBO | 12个型号 | 3层URL重复（详情页/分类页/落地页） |
| **SPD** | DC SPD, AC SPD | 4个型号 | 同上 |
| **Combiner Box** | PV Combiner Box | 2个系列 | 分类页=主页面 |
| **Voltage Protector** | PN2系列, STATS系列, CZVA系列 | 13个型号 | 只有分类页，缺主产品页 |
| **ATS** | ATS-ST, ATS-W2R, STQ1, STQ2 | 10个型号 | 只有分类页 |
| **Energy Meter** | DIN Rail Meter | 5个型号 | 只有分类页 |
| **Smart WiFi MCB** | 18mm, 36mm, Earth Leakage | 3个型号 | 有独立主页面 |

**总计**: 61个产品页面

---

### 1.2 URL架构重构方案

#### 目标架构（三层金字塔）

```
┌─────────────────────────────────────────────────────┐
│  第1层：主产品页（SEO主战场）                           │
│  - 7个核心产品主页面                                   │
│  - 优先级 0.95                                        │
│  - 接收所有权重                                        │
└─────────────────────────────────────────────────────┘
                      ↓ hasPart Schema
┌─────────────────────────────────────────────────────┐
│  第2层：子型号详情页（长尾词）                          │
│  - 49个具体型号页面                                   │
│  - 优先级 0.80                                        │
│  - 通过 isPartOf 把部分权重传递给父页面                 │
└─────────────────────────────────────────────────────┘
                      ↓ Canonical标签
┌─────────────────────────────────────────────────────┐
│  第3层：辅助页面（引流+转化）                           │
│  - 分类聚合页（/products/category/xxx）               │
│  - 制造商落地页（/xxx-manufacturer）                   │
│  - 解决方案页（/solutions/xxx）                        │
│  - 优先级 0.70-0.85，通过Canonical指向第1层            │
└─────────────────────────────────────────────────────┘
```

#### 具体映射表（所有61个产品）

**MCB产品族（12个页面）**

| 页面类型 | URL | 层级 | Canonical指向 | 优先级 |
|---------|-----|------|--------------|-------|
| 主产品页 | /products/dc-mcb | 1层 | 自己 | 0.95 |
| 子型号 | /products/dc-mcb-1p | 2层 | 自己 | 0.80 |
| 子型号 | /products/dc-mcb-2p | 2层 | 自己 | 0.80 |
| 子型号 | /products/dc-mcb-3p | 2层 | 自己 | 0.80 |
| 子型号 | /products/dc-mcb-4p | 2层 | 自己 | 0.80 |
| 分类页 | /products/category/mcb/dc-mcb | 3层 | /products/dc-mcb | 0.65 |
| 落地页 | /dc-mcb-manufacturer | 3层 | 自己（独立） | 0.80 |
| 主产品页 | /products/ac-mcb | 1层 | 自己 | 0.95 |
| 子型号 | /products/ac-mcb-1p | 2层 | 自己 | 0.80 |
| 子型号 | /products/ac-mcb-2p | 2层 | 自己 | 0.80 |
| 子型号 | /products/ac-mcb-3p | 2层 | 自己 | 0.80 |
| 子型号 | /products/ac-mcb-4p | 2层 | 自己 | 0.80 |
| 分类页 | /products/category/mcb/ac-mcb | 3层 | /products/ac-mcb | 0.65 |
| 落地页 | /ac-mcb-manufacturer | 3层 | 自己（独立） | 0.80 |
| 落地页（通用） | /mcb-manufacturer | 3层 | 自己（独立） | 0.85 |
| 主产品页 | /products/smart-circuit-breaker | 1层 | 自己 | 0.95 |
| 子型号 | /products/wifi-smart-mcb-1p | 2层 | 自己 | 0.80 |
| 子型号 | /products/wifi-smart-mcb-2p | 2层 | 自己 | 0.80 |
| 子型号 | /products/wifi-earthleakage-mcb | 2层 | 自己 | 0.80 |
| 分类页 | /products/category/rcbo | 1层 | 自己 | 0.90 |
| 子型号 | /products/1pn-rcbo | 2层 | 自己 | 0.80 |
| 落地页 | /rcbo-manufacturer | 3层 | 自己（独立） | 0.80 |

**SPD产品族（4个页面）**

| 页面类型 | URL | 层级 | Canonical指向 | 优先级 |
|---------|-----|------|--------------|-------|
| 主产品页 | /products/dc-spd | 1层 | 自己 | 0.95 |
| 分类页 | /products/category/spd/dc-spd | 3层 | /products/dc-spd | 0.65 |
| 主产品页 | /products/ac-spd | 1层 | 自己 | 0.95 |
| 分类页 | /products/category/spd/ac-spd | 3层 | /products/ac-spd | 0.65 |
| 子型号 | /products/green-spd-series | 2层 | 自己 | 0.75 |
| 子型号 | /products/white-spd-series | 2层 | 自己 | 0.75 |
| 落地页 | /spd-manufacturer | 3层 | 自己（独立） | 0.80 |

**Combiner Box产品族（3个页面）**

| 页面类型 | URL | 层级 | Canonical指向 | 优先级 |
|---------|-----|------|--------------|-------|
| 主产品页 | /products/combiner-box | 1层 | 自己 | 0.95 |
| 分类页 | /products/category/combiner-box | 3层 | /products/combiner-box | 0.65 |
| 子型号 | /products/plastic-box-series | 2层 | 自己 | 0.80 |
| 子型号 | /products/metal-box-series | 2层 | 自己 | 0.80 |
| 落地页 | /combiner-box-manufacturer | 3层 | 自己（独立） | 0.80 |

**Voltage Protector产品族（13个页面）**

| 页面类型 | URL | 层级 | Canonical指向 | 优先级 |
|---------|-----|------|--------------|-------|
| 主产品页/分类页 | /products/category/voltage-protector | 1层 | 自己 | 0.90 |
| 子型号 | /products/pn2-va2 | 2层 | 自己 | 0.80 |
| 子型号 | /products/pn2-va3 | 2层 | 自己 | 0.80 |
| 子型号 | /products/pn2-va4 | 2层 | 自己 | 0.80 |
| 子型号 | /products/pn2-va5 | 2层 | 自己 | 0.80 |
| 子型号 | /products/pn2-vak | 2层 | 自己 | 0.80 |
| 子型号 | /products/pn2-vafdm | 2层 | 自己 | 0.80 |
| 子型号 | /products/stats-03 | 2层 | 自己 | 0.80 |
| 子型号 | /products/stats-04 | 2层 | 自己 | 0.80 |
| 子型号 | /products/stats-05 | 2层 | 自己 | 0.80 |
| 子型号 | /products/stats-06 | 2层 | 自己 | 0.80 |
| 子型号 | /products/czva1 | 2层 | 自己 | 0.80 |
| 子型号 | /products/czva2 | 2层 | 自己 | 0.80 |
| 子型号 | /products/czva3 | 2层 | 自己 | 0.80 |
| 落地页 | /voltage-protector-manufacturer | 3层 | 自己（独立） | 0.80 |

**ATS产品族（10个页面）**

| 页面类型 | URL | 层级 | Canonical指向 | 优先级 |
|---------|-----|------|--------------|-------|
| 主产品页/分类页 | /products/category/ats | 1层 | 自己 | 0.90 |
| 子型号 | /products/ats-st-2p | 2层 | 自己 | 0.80 |
| 子型号 | /products/ats-st-4p | 2层 | 自己 | 0.80 |
| 子型号 | /products/ats-w2r-2p | 2层 | 自己 | 0.80 |
| 子型号 | /products/ats-w2r-3p | 2层 | 自己 | 0.80 |
| 子型号 | /products/ats-w2r-4p | 2层 | 自己 | 0.80 |
| 子型号 | /products/stq1-2p | 2层 | 自己 | 0.80 |
| 子型号 | /products/stq1-3p | 2层 | 自己 | 0.80 |
| 子型号 | /products/stq1-4p | 2层 | 自己 | 0.80 |
| 子型号 | /products/stq2-2p | 2层 | 自己 | 0.80 |
| 子型号 | /products/stq2-3p | 2层 | 自己 | 0.80 |
| 子型号 | /products/stq2-4p | 2层 | 自己 | 0.80 |
| 落地页 | /ats-manufacturer | 3层 | 自己（独立） | 0.80 |

**Energy Meter产品族（5个页面）**

| 页面类型 | URL | 层级 | Canonical指向 | 优先级 |
|---------|-----|------|--------------|-------|
| 主产品页/分类页 | /products/category/energy-meter | 1层 | 自己 | 0.90 |
| 子型号 | /products/add-single-phase-energy-meter | 2层 | 自己 | 0.80 |
| 子型号 | /products/d52-2068-energy-meter | 2层 | 自己 | 0.80 |
| 子型号 | /products/ddr-din-rail-meter | 2层 | 自己 | 0.80 |
| 子型号 | /products/dds-series-energy-meter | 2层 | 自己 | 0.80 |
| 子型号 | /products/qy2p-display-meter | 2层 | 自己 | 0.80 |
| 落地页 | /energy-meter-manufacturer | 3层 | 自己（独立） | 0.80 |

**辅助内容页面（不计入产品页）**

| 页面类型 | URL | 用途 | 优先级 |
|---------|-----|------|-------|
| 解决方案页 | /solar-dc-protection | 引流到DC MCB/DC SPD | 0.85 |
| 专题落地页 | /products/rcbo-australia-new-zealand | 区域市场 | 0.85 |
| Blog文章 | /blog/* | 内容营销 | 0.60 |
| 技术指南 | /guides/* | SEO长尾词 | 0.85 |
| 标准数据库 | /resources/standards-database/* | 认证词流量 | 0.85 |

---

## 第二部分：导航系统全面重构

### 2.1 顶部Mega Menu优化

#### 当前问题
- 所有链接指向分类页（/products/category/xxx）
- 用户点击后找不到产品详情页
- CTA按钮和列表项链接不一致

#### 优化后的导航结构

**新建文件**: `src/data/navigation-structure.ts`

```typescript
/**
 * 全站导航结构配置
 * 
 * 设计原则：
 * 1. 优先链接到主产品页（1层），而不是分类页（3层）
 * 2. 按应用场景分组，而不是按产品技术分类
 * 3. 每个分组最多4个产品，避免信息过载
 * 4. CTA链接到解决方案页或主产品页
 */

export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
  specs?: string; // 例如："250V-1500V, 1P-4P"
  badge?: "New" | "Popular" | "Recommended";
};

export type NavigationColumn = {
  key: string;
  title: string;
  subtitle: string;
  icon?: string;
  recommended?: boolean;
  items: NavigationItem[];
  cta: {
    label: string;
    href: string;
  };
};

export const productMegaMenuOptimized: NavigationColumn[] = [
  // ===== 列1：Solar PV Protection =====
  {
    key: "solar",
    title: "Solar PV Protection",
    subtitle: "For EPCs & Installers",
    icon: "🌞",
    recommended: true,
    items: [
      {
        label: "DC MCB",
        href: "/products/dc-mcb",  // ← 改为主产品页
        specs: "250V-1500V, 1P-4P",
        badge: "Popular"
      },
      {
        label: "DC SPD",
        href: "/products/dc-spd",  // ← 改为主产品页
        specs: "Type 1+2, 600V-1500V"
      },
      {
        label: "PV Combiner Box",
        href: "/products/combiner-box",  // ← 改为主产品页
        specs: "6-16 strings, IP65"
      },
    ],
    cta: {
      label: "View Solar Solutions →",
      href: "/solar-dc-protection"
    }
  },

  // ===== 列2：AC Distribution & Backup =====
  {
    key: "distribution",
    title: "Distribution & Backup",
    subtitle: "For Panel Builders",
    icon: "🔌",
    items: [
      {
        label: "AC MCB",
        href: "/products/ac-mcb",  // ← 改为主产品页
        specs: "1P-4P, 6A-125A",
        badge: "Popular"
      },
      {
        label: "RCBO",
        href: "/products/category/rcbo",  // ← RCBO保持分类页（暂无独立主页面）
        specs: "Earth leakage protection"
      },
      {
        label: "AC SPD",
        href: "/products/ac-spd",  // ← 改为主产品页
        specs: "Type 1/2/1+2"
      },
      {
        label: "ATS",
        href: "/products/category/ats",  // ← ATS保持分类页
        specs: "63A-100A, dual power"
      },
    ],
    cta: {
      label: "Browse All AC Products →",
      href: "/products"
    }
  },

  // ===== 列3：Smart Control & Monitoring =====
  {
    key: "smart",
    title: "Smart Control & Monitoring",
    subtitle: "IoT & Remote Management",
    icon: "📱",
    recommended: true,
    items: [
      {
        label: "Smart WiFi MCB",
        href: "/products/smart-circuit-breaker",  // ← 主产品页
        specs: "18mm/36mm, app control",
        badge: "New"
      },
      {
        label: "Voltage Protector",
        href: "/products/category/voltage-protector",  // ← 分类页（型号多）
        specs: "Over/under voltage"
      },
      {
        label: "Energy Meter",
        href: "/products/category/energy-meter",  // ← 分类页
        specs: "DIN rail, Modbus"
      },
    ],
    cta: {
      label: "Explore Smart Series →",
      href: "/products/smart-circuit-breaker"
    }
  },

  // ===== 列4：Quick Access =====
  {
    key: "quick",
    title: "Quick Access",
    subtitle: "Popular & Certified",
    items: [
      {
        label: "All Products",
        href: "/products",
        description: "Browse complete catalog"
      },
      {
        label: "IEC Certified Products",
        href: "/resources/standards-database",  // 暂时链接到标准数据库
        description: "Filter by certification"
      },
      {
        label: "For Solar EPCs",
        href: "/solar-dc-protection",
        description: "Complete solar solutions"
      },
      {
        label: "Technical Guides",
        href: "/resources/technical-guides",
        description: "Selection & sizing help"
      },
    ],
    cta: {
      label: "Contact Sales →",
      href: "/contact"
    }
  }
];
```

---

### 2.2 首页产品卡片链接修正

**修改文件**: `src/app/[locale]/page.tsx`

**当前代码（第94-161行）**：

```typescript
// 错误：指向分类页
const solarDcTrack = [
  {
    slug: "dc-mcb",
    href: "/products/category/mcb/dc-mcb",  // ❌
  },
  {
    slug: "dc-spd",
    href: "/products/category/spd/dc-spd",  // ❌
  },
];

const lvTrack = [
  {
    slug: "ac-mcb",
    href: "/products/category/mcb/ac-mcb",  // ❌
  },
];
```

**修改为**：

```typescript
// 正确：直接指向主产品页
const solarDcTrack = [
  {
    slug: "dc-mcb",
    name: t("products.dcMcbName"),
    image: "/assets/home-products-normalized/mcb.webp",
    description: t("products.dcMcbDesc"),
    href: "/products/dc-mcb",  // ✅ 改为主产品页
    count: countBySub("dc-mcb"),
  },
  {
    slug: "dc-spd",
    name: t("products.dcSpdName"),
    image: "/assets/home-products-normalized/spd.webp",
    description: t("products.dcSpdDesc"),
    href: "/products/dc-spd",  // ✅ 改为主产品页
    count: countBySub("dc-spd"),
  },
  {
    slug: "combiner-box",
    name: t("products.combinerBoxName"),
    image: "/assets/home-products-normalized/combiner-box.webp",
    description: t("products.combinerBoxDesc"),
    href: "/products/combiner-box",  // ✅ 改为主产品页
    count: countByParent("Combiner Box"),
  },
];

const lvTrack = [
  {
    slug: "ac-mcb",
    name: t("products.acMcbName"),
    image: "/assets/home-products-normalized/mcb.webp",
    description: t("products.acMcbDesc"),
    href: "/products/ac-mcb",  // ✅ 改为主产品页
    count: countBySub("ac-mcb"),
  },
  {
    slug: "ac-spd",
    name: t("products.acSpdName"),
    image: "/assets/home-products-normalized/spd.webp",
    description: t("products.acSpdDesc"),
    href: "/products/ac-spd",  // ✅ 改为主产品页
    count: countBySub("ac-spd"),
  },
  {
    slug: "ats",
    name: t("products.atsName"),
    image: "/assets/home-products-normalized/ats.webp",
    description: t("products.atsDesc"),
    href: "/products/category/ats",  // ⚠️ ATS保持分类页（暂无主页面）
    count: countByParent("ATS"),
  },
  {
    slug: "voltage-protector",
    name: t("products.voltageProtectorName"),
    image: "/assets/home-products-normalized/over-voltage-protector.webp",
    description: t("products.voltageProtectorDesc"),
    href: "/products/category/voltage-protector",  // ⚠️ 保持分类页
    count: countByParent("Voltage Protector"),
  },
  {
    slug: "energy-meter",
    name: t("products.energyMeterName"),
    image: "/assets/home-products-normalized/din-rail-energy-meter.webp",
    description: t("products.energyMeterDesc"),
    href: "/products/category/energy-meter",  // ⚠️ 保持分类页
    count: countByParent("Energy Meter"),
  },
];
```

---

### 2.3 应用新导航到Header组件

**修改文件**: `src/components/Header.tsx`

**第7行**，修改import：

```typescript
import { productMegaMenuOptimized as productMegaMenu, /* ... */ } from "@/data/navigation-structure";
```

或者直接修改 `src/data/site.ts` 中的 `productMegaMenu`，按照上面的结构调整。

---

### 2.4 移动端导航优化

**修改文件**: `src/components/Header.tsx`（第285-302行）

增加应用场景快捷入口：

```typescript
{/* Mobile Bottom Navigation - 优化版 */}
<nav className="mobile-bottom-nav" aria-label="Mobile quick navigation">
  <Link href="/" className={pathname === "/" ? "active" : ""}>
    <span className="nav-icon">🏠</span>
    <span>Home</span>
  </Link>
  
  {/* 新增：按应用场景快捷入口 */}
  <Link href="/solar-dc-protection" className={pathname.includes("solar") ? "active" : ""}>
    <span className="nav-icon">🌞</span>
    <span>Solar</span>
  </Link>
  
  <Link href="/products" className={pathname.startsWith("/products") ? "active" : ""}>
    <span className="nav-icon">📦</span>
    <span>Products</span>
  </Link>
  
  <Link href="/resources" className={pathname.startsWith("/resources") ? "active" : ""}>
    <span className="nav-icon">📘</span>
    <span>Resources</span>
  </Link>
  
  <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
    <span className="nav-icon">💬</span>
    <span>Contact</span>
  </Link>
</nav>
```

---

## 第三部分：Canonical标签与权重聚合

### 3.1 创建产品层级配置文件

**新建文件**: `src/data/product-hierarchy.ts`

```typescript
/**
 * 产品层级与Canonical映射
 * 
 * 这个文件定义：
 * 1. 哪些页面是主产品页（接收权重）
 * 2. 哪些页面是辅助页面（贡献权重，通过Canonical指向主页面）
 * 3. 页面之间的父子关系（Schema hasPart/isPartOf）
 */

export type ProductHierarchyConfig = {
  // 主产品页信息
  primary: {
    slug: string;
    path: string;
    name: string;
  };
  
  // 子型号页面
  variants: Array<{
    slug: string;
    path: string;
    name: string;
  }>;
  
  // 辅助页面（需要Canonical指向主页面）
  auxiliaryPages: Array<{
    path: string;
    type: "category" | "manufacturer" | "landing";
    canonicalTo: "primary" | "self";  // "self"表示独立页面
    reason: string;
  }>;
};

// ===== 所有产品的层级配置 =====

export const productHierarchies: ProductHierarchyConfig[] = [
  // 1. DC MCB 产品族
  {
    primary: {
      slug: "dc-mcb",
      path: "/products/dc-mcb",
      name: "DC MCB"
    },
    variants: [
      { slug: "dc-mcb-1p", path: "/products/dc-mcb-1p", name: "DC MCB 1P" },
      { slug: "dc-mcb-2p", path: "/products/dc-mcb-2p", name: "DC MCB 2P" },
      { slug: "dc-mcb-3p", path: "/products/dc-mcb-3p", name: "DC MCB 3P" },
      { slug: "dc-mcb-4p", path: "/products/dc-mcb-4p", name: "DC MCB 4P" },
    ],
    auxiliaryPages: [
      {
        path: "/products/category/mcb/dc-mcb",
        type: "category",
        canonicalTo: "primary",
        reason: "分类聚合页，内容与主产品页重复80%，权重应聚合到主页面"
      },
      {
        path: "/dc-mcb-manufacturer",
        type: "manufacturer",
        canonicalTo: "self",
        reason: "落地页侧重制造能力和OEM，内容差异大，保持独立排名"
      }
    ]
  },

  // 2. AC MCB 产品族
  {
    primary: {
      slug: "ac-mcb",
      path: "/products/ac-mcb",
      name: "AC MCB"
    },
    variants: [
      { slug: "ac-mcb-1p", path: "/products/ac-mcb-1p", name: "AC MCB 1P" },
      { slug: "ac-mcb-2p", path: "/products/ac-mcb-2p", name: "AC MCB 2P" },
      { slug: "ac-mcb-3p", path: "/products/ac-mcb-3p", name: "AC MCB 3P" },
      { slug: "ac-mcb-4p", path: "/products/ac-mcb-4p", name: "AC MCB 4P" },
    ],
    auxiliaryPages: [
      {
        path: "/products/category/mcb/ac-mcb",
        type: "category",
        canonicalTo: "primary",
        reason: "分类页内容重复"
      },
      {
        path: "/ac-mcb-manufacturer",
        type: "manufacturer",
        canonicalTo: "self",
        reason: "独立落地页"
      },
      {
        path: "/mcb-manufacturer",
        type: "manufacturer",
        canonicalTo: "self",
        reason: "通用MCB制造商页，同时推荐DC和AC MCB"
      }
    ]
  },

  // 3. DC SPD 产品族
  {
    primary: {
      slug: "dc-spd",
      path: "/products/dc-spd",
      name: "DC SPD"
    },
    variants: [
      { slug: "green-spd-series", path: "/products/green-spd-series", name: "Green SPD Series" },
      { slug: "white-spd-series", path: "/products/white-spd-series", name: "White SPD Series" },
    ],
    auxiliaryPages: [
      {
        path: "/products/category/spd/dc-spd",
        type: "category",
        canonicalTo: "primary",
        reason: "分类页内容重复"
      }
    ]
  },

  // 4. AC SPD 产品族
  {
    primary: {
      slug: "ac-spd",
      path: "/products/ac-spd",
      name: "AC SPD"
    },
    variants: [],
    auxiliaryPages: [
      {
        path: "/products/category/spd/ac-spd",
        type: "category",
        canonicalTo: "primary",
        reason: "分类页内容重复"
      },
      {
        path: "/spd-manufacturer",
        type: "manufacturer",
        canonicalTo: "self",
        reason: "SPD制造商页，覆盖DC和AC SPD"
      }
    ]
  },

  // 5. Combiner Box 产品族
  {
    primary: {
      slug: "combiner-box",
      path: "/products/combiner-box",
      name: "PV Combiner Box"
    },
    variants: [
      { slug: "plastic-box-series", path: "/products/plastic-box-series", name: "Plastic Box Series" },
      { slug: "metal-box-series", path: "/products/metal-box-series", name: "Metal Box Series" },
    ],
    auxiliaryPages: [
      {
        path: "/products/category/combiner-box",
        type: "category",
        canonicalTo: "primary",
        reason: "分类页内容重复"
      },
      {
        path: "/combiner-box-manufacturer",
        type: "manufacturer",
        canonicalTo: "self",
        reason: "独立落地页"
      }
    ]
  },

  // 6. Smart WiFi MCB 产品族
  {
    primary: {
      slug: "smart-circuit-breaker",
      path: "/products/smart-circuit-breaker",
      name: "Smart WiFi Circuit Breaker"
    },
    variants: [
      { slug: "wifi-smart-mcb-1p", path: "/products/wifi-smart-mcb-1p", name: "WiFi Smart MCB 1P" },
      { slug: "wifi-smart-mcb-2p", path: "/products/wifi-smart-mcb-2p", name: "WiFi Smart MCB 2P" },
      { slug: "wifi-earthleakage-mcb", path: "/products/wifi-earthleakage-mcb", name: "WiFi Earth Leakage MCB" },
    ],
    auxiliaryPages: []
  },

  // 7. RCBO 产品族（特殊：只有分类页，暂无主产品页）
  {
    primary: {
      slug: "rcbo",
      path: "/products/category/rcbo",
      name: "RCBO"
    },
    variants: [
      { slug: "1pn-rcbo", path: "/products/1pn-rcbo", name: "1P+N RCBO" },
    ],
    auxiliaryPages: [
      {
        path: "/rcbo-manufacturer",
        type: "manufacturer",
        canonicalTo: "self",
        reason: "独立落地页"
      },
      {
        path: "/products/rcbo-australia-new-zealand",
        type: "landing",
        canonicalTo: "self",
        reason: "区域市场专题页"
      }
    ]
  },

  // 8. Voltage Protector 产品族（特殊：只有分类页作为主页面）
  {
    primary: {
      slug: "voltage-protector",
      path: "/products/category/voltage-protector",
      name: "Voltage Protector"
    },
    variants: [
      { slug: "pn2-va2", path: "/products/pn2-va2", name: "PN2-VA2" },
      { slug: "pn2-va3", path: "/products/pn2-va3", name: "PN2-VA3" },
      { slug: "pn2-va4", path: "/products/pn2-va4", name: "PN2-VA4" },
      { slug: "pn2-va5", path: "/products/pn2-va5", name: "PN2-VA5" },
      { slug: "pn2-vak", path: "/products/pn2-vak", name: "PN2-VAK" },
      { slug: "pn2-vafdm", path: "/products/pn2-vafdm", name: "PN2-VAFDM" },
      { slug: "stats-03", path: "/products/stats-03", name: "STATS-03" },
      { slug: "stats-04", path: "/products/stats-04", name: "STATS-04" },
      { slug: "stats-05", path: "/products/stats-05", name: "STATS-05" },
      { slug: "stats-06", path: "/products/stats-06", name: "STATS-06" },
      { slug: "czva1", path: "/products/czva1", name: "CZVA1" },
      { slug: "czva2", path: "/products/czva2", name: "CZVA2" },
      { slug: "czva3", path: "/products/czva3", name: "CZVA3" },
    ],
    auxiliaryPages: [
      {
        path: "/voltage-protector-manufacturer",
        type: "manufacturer",
        canonicalTo: "self",
        reason: "独立落地页"
      }
    ]
  },

  // 9. ATS 产品族（特殊：只有分类页作为主页面）
  {
    primary: {
      slug: "ats",
      path: "/products/category/ats",
      name: "ATS"
    },
    variants: [
      { slug: "ats-st-2p", path: "/products/ats-st-2p", name: "ATS-ST 2P" },
      { slug: "ats-st-4p", path: "/products/ats-st-4p", name: "ATS-ST 4P" },
      { slug: "ats-w2r-2p", path: "/products/ats-w2r-2p", name: "ATS-W2R 2P" },
      { slug: "ats-w2r-3p", path: "/products/ats-w2r-3p", name: "ATS-W2R 3P" },
      { slug: "ats-w2r-4p", path: "/products/ats-w2r-4p", name: "ATS-W2R 4P" },
      { slug: "stq1-2p", path: "/products/stq1-2p", name: "STQ1 2P" },
      { slug: "stq1-3p", path: "/products/stq1-3p", name: "STQ1 3P" },
      { slug: "stq1-4p", path: "/products/stq1-4p", name: "STQ1 4P" },
      { slug: "stq2-2p", path: "/products/stq2-2p", name: "STQ2 2P" },
      { slug: "stq2-3p", path: "/products/stq2-3p", name: "STQ2 3P" },
      { slug: "stq2-4p", path: "/products/stq2-4p", name: "STQ2 4P" },
    ],
    auxiliaryPages: [
      {
        path: "/ats-manufacturer",
        type: "manufacturer",
        canonicalTo: "self",
        reason: "独立落地页"
      }
    ]
  },

  // 10. Energy Meter 产品族（特殊：只有分类页作为主页面）
  {
    primary: {
      slug: "energy-meter",
      path: "/products/category/energy-meter",
      name: "Energy Meter"
    },
    variants: [
      { slug: "add-single-phase-energy-meter", path: "/products/add-single-phase-energy-meter", name: "ADD Single Phase Meter" },
      { slug: "d52-2068-energy-meter", path: "/products/d52-2068-energy-meter", name: "D52-2068 Meter" },
      { slug: "ddr-din-rail-meter", path: "/products/ddr-din-rail-meter", name: "DDR DIN Rail Meter" },
      { slug: "dds-series-energy-meter", path: "/products/dds-series-energy-meter", name: "DDS Series Meter" },
      { slug: "qy2p-display-meter", path: "/products/qy2p-display-meter", name: "QY2P Display Meter" },
    ],
    auxiliaryPages: [
      {
        path: "/energy-meter-manufacturer",
        type: "manufacturer",
        canonicalTo: "self",
        reason: "独立落地页"
      }
    ]
  },
];

// ===== 辅助函数 =====

/**
 * 获取页面的Canonical URL
 */
export function getCanonicalUrl(currentPath: string): string {
  // 移除语言前缀
  const pathWithoutLocale = currentPath.replace(/^\/[a-z]{2}/, "");
  
  // 查找当前路径属于哪个产品族
  for (const hierarchy of productHierarchies) {
    // 检查是否是辅助页面
    const auxPage = hierarchy.auxiliaryPages.find(aux => aux.path === pathWithoutLocale);
    
    if (auxPage && auxPage.canonicalTo === "primary") {
      // 指向主产品页
      return `https://www.tpkele.com${hierarchy.primary.path}`;
    }
  }
  
  // 没有找到映射，返回当前页面URL（表示这是主页面或独立页面）
  return `https://www.tpkele.com${currentPath}`;
}

/**
 * 获取页面的父产品信息（用于Schema和面包屑）
 */
export function getParentProduct(currentSlug: string): {
  slug: string;
  path: string;
  name: string;
} | null {
  for (const hierarchy of productHierarchies) {
    // 检查是否是子型号页
    const variant = hierarchy.variants.find(v => v.slug === currentSlug);
    
    if (variant) {
      return hierarchy.primary;
    }
  }
  
  return null;
}

/**
 * 获取产品的所有子型号（用于Schema hasPart）
 */
export function getProductVariants(primarySlug: string): Array<{
  slug: string;
  path: string;
  name: string;
}> {
  const hierarchy = productHierarchies.find(h => h.primary.slug === primarySlug);
  
  return hierarchy ? hierarchy.variants : [];
}

/**
 * 判断当前页面是否是辅助页面，是否需要显示"查看主产品页"横幅
 */
export function getAuxiliaryPageInfo(currentPath: string): {
  isAuxiliary: boolean;
  primaryPagePath: string;
  primaryPageName: string;
  shouldShowBanner: boolean;
} {
  const pathWithoutLocale = currentPath.replace(/^\/[a-z]{2}/, "");
  
  for (const hierarchy of productHierarchies) {
    const auxPage = hierarchy.auxiliaryPages.find(aux => aux.path === pathWithoutLocale);
    
    if (auxPage) {
      return {
        isAuxiliary: true,
        primaryPagePath: hierarchy.primary.path,
        primaryPageName: hierarchy.primary.name,
        shouldShowBanner: auxPage.type === "category" // 只有分类页显示横幅
      };
    }
  }
  
  return {
    isAuxiliary: false,
    primaryPagePath: "",
    primaryPageName: "",
    shouldShowBanner: false
  };
}
```

---

### 3.2 应用Canonical标签到所有页面

#### 修改主产品页模板

**以DC MCB为例**，修改 `src/app/[locale]/products/dc-mcb/page.tsx`：

```typescript
import { getCanonicalUrl, getProductVariants } from "@/data/product-hierarchy";
import { localizedPath, alternateLanguages } from "@/lib/locale-path";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "categoryPage" });
  const currentPath = `/products/dc-mcb`;

  return {
    title: t("dcMcb.seoTitle"),
    description: t("dcMcb.seoDescription"),
    alternates: {
      canonical: getCanonicalUrl(localizedPath(currentPath, locale)),
      languages: alternateLanguages(currentPath),
    },
    keywords: [
      "DC miniature circuit breaker supplier",
      "DC MCB manufacturer",
      "1500VDC MCB",
      "PV DC breaker",
      "IEC 60947-2 DC MCB",
    ],
  };
}

export default async function DcCircuitBreakersPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "categoryPage" });
  
  // 获取所有子型号（用于Schema hasPart）
  const variants = getProductVariants("dc-mcb");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://www.tpkele.com/products/dc-mcb",
    name: "DC Miniature Circuit Breaker",
    description: t("dcMcb.seoDescription"),
    url: "https://www.tpkele.com/products/dc-mcb",
    brand: { "@type": "Brand", name: "TPKELE" },
    category: "Electrical Protection Devices",
    
    // 声明所有子型号
    hasPart: variants.map(variant => ({
      "@type": "Product",
      "@id": `https://www.tpkele.com${variant.path}`,
      name: variant.name,
      url: `https://www.tpkele.com${variant.path}`
    })),
    
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "2.50",
      highPrice: "35.00",
      offerCount: variants.length.toString(),
      availability: "https://schema.org/InStock"
    }
  };

  return (
    <main>
      <script type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />
      
      {/* 页面内容 */}
      <HeroSection />
      <OptionsGrid />
      <FeaturesGrid />
      <SpecsSection />
      <TripCurves />
      
      {/* 新增：子型号快速导航 */}
      <section className="variant-navigation section">
        <h2>Available DC MCB Models</h2>
        <p>Choose the right pole configuration for your system voltage:</p>
        <div className="variant-grid">
          {variants.map(variant => {
            // 从site.ts获取完整产品信息
            const product = products.find(p => p.slug === variant.slug);
            return (
              <Link 
                key={variant.slug} 
                href={variant.path}
                className="variant-card"
              >
                <h3>{variant.name}</h3>
                {product && <p>{product.summary}</p>}
                <span className="view-details">View Specifications →</span>
              </Link>
            );
          })}
        </div>
      </section>
      
      <CompanySection />
      <BeyondSection locale={locale} />
      
      <section className="section cta-section">
        <div>
          <p className="eyebrow">{t("dcMcb.ctaEyebrow")}</p>
          <h2>{t("dcMcb.ctaTitle")}</h2>
        </div>
        <InquiryModal 
          triggerLabel={t("dcMcb.requestQuote")} 
          triggerClassName="btn primary" 
          intent="quote" 
          product="DC MCB" 
        />
      </section>
    </main>
  );
}
```

**同样的修改应用到**：
- `/products/ac-mcb/page.tsx`
- `/products/dc-spd/page.tsx`
- `/products/ac-spd/page.tsx`
- `/products/combiner-box/page.tsx`
- `/products/smart-circuit-breaker/page.tsx`

---

#### 修改子型号页模板

**修改文件**: `src/app/[locale]/products/[slug]/page.tsx`

```typescript
import { getCanonicalUrl, getParentProduct } from "@/data/product-hierarchy";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const product = products.find(p => p.slug === slug);
  
  if (!product) return {};
  
  const currentPath = `/products/${slug}`;

  return {
    title: `${product.name} | ${product.specs[0]} | TPKELE`,
    description: product.description,
    alternates: {
      canonical: getCanonicalUrl(localizedPath(currentPath, locale)),
      languages: alternateLanguages(currentPath),
    },
    keywords: product.seoKeywords,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  
  if (!product) return <div>Product not found</div>;
  
  // 获取父产品信息
  const parentProduct = getParentProduct(slug);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `https://www.tpkele.com/products/${slug}`,
    name: product.name,
    description: product.description,
    image: product.image,
    
    // 声明父子关系
    ...(parentProduct && {
      isPartOf: {
        "@type": "Product",
        "@id": `https://www.tpkele.com${parentProduct.path}`,
        name: parentProduct.name,
        url: `https://www.tpkele.com${parentProduct.path}`
      }
    }),
    
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "5.80",
      availability: "https://schema.org/InStock"
    }
  };

  return (
    <main>
      <script type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} 
      />
      
      {/* 面包屑 - 显示父产品 */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="separator">/</span>
        <Link href="/products">Products</Link>
        {parentProduct && (
          <>
            <span className="separator">/</span>
            <Link href={parentProduct.path} className="parent-product-link">
              {parentProduct.name}
            </Link>
          </>
        )}
        <span className="separator">/</span>
        <span className="current">{product.name}</span>
      </nav>

      {/* 返回产品系列链接 */}
      {parentProduct && (
        <div className="back-to-parent">
          <Link href={parentProduct.path} className="back-link">
            ← Back to {parentProduct.name} Overview
          </Link>
        </div>
      )}

      {/* 产品详情内容 */}
      {/* ... */}
    </main>
  );
}
```

---

#### 修改分类聚合页模板

**修改文件**: `src/app/[locale]/products/category/[slug]/[sub]/page.tsx`

```typescript
import { getCanonicalUrl, getAuxiliaryPageInfo } from "@/data/product-hierarchy";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug, sub } = await params;
  const subCategory = subCategoryBySlug[sub];
  const currentPath = `/products/category/${slug}/${sub}`;
  
  return {
    title: subCategory.seoTitle,
    description: subCategory.seoDescription,
    alternates: {
      canonical: getCanonicalUrl(localizedPath(currentPath, locale)),
      languages: alternateLanguages(currentPath),
    },
    keywords: subCategory.seoKeywords,
  };
}

export default async function SubCategoryPage({ params }: PageProps) {
  const { slug, sub } = await params;
  const subCategory = subCategoryBySlug[sub];
  const currentPath = `/products/category/${slug}/${sub}`;
  
  // 获取辅助页面信息
  const auxInfo = getAuxiliaryPageInfo(currentPath);

  return (
    <main>
      {/* 如果需要显示横幅，引导用户去主产品页 */}
      {auxInfo.shouldShowBanner && (
        <div className="canonical-notice-banner">
          <div className="banner-content">
            <div className="banner-icon">📋</div>
            <div className="banner-text">
              <strong>Looking for complete {auxInfo.primaryPageName} overview?</strong>
              <p>View detailed specifications, applications, certifications, and technical guides</p>
            </div>
            <Link href={auxInfo.primaryPagePath} className="banner-cta btn primary">
              View {auxInfo.primaryPageName} Product Page →
            </Link>
          </div>
        </div>
      )}

      <section className="subcategory-hero">
        <h1>{subCategory.hero}</h1>
        <p className="intro">{subCategory.intro}</p>
      </section>

      {/* 产品列表 */}
      <section className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </section>

      {/* 规格表等 */}
      {/* ... */}

      {/* 底部再次提示主产品页 */}
      {auxInfo.isAuxiliary && (
        <section className="back-to-main-product section">
          <div className="back-content">
            <h3>Want to learn more about {auxInfo.primaryPageName}?</h3>
            <p>
              See application scenarios, case studies, selection guides, 
              and downloadable resources on the main product page.
            </p>
            <Link href={auxInfo.primaryPagePath} className="btn secondary large">
              Go to {auxInfo.primaryPageName} Main Page →
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
```

---

### 3.3 为所有Manufacturer落地页添加产品目录入口

**修改所有manufacturer页面**（7个文件）：
- `dc-mcb-manufacturer/page.tsx`
- `ac-mcb-manufacturer/page.tsx`
- `mcb-manufacturer/page.tsx`
- `spd-manufacturer/page.tsx`
- `ats-manufacturer/page.tsx`
- `voltage-protector-manufacturer/page.tsx`
- `energy-meter-manufacturer/page.tsx`
- `combiner-box-manufacturer/page.tsx`

**统一模板**（以`dc-mcb-manufacturer/page.tsx`为例）：

```typescript
import { getCanonicalUrl } from "@/data/product-hierarchy";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const currentPath = "/dc-mcb-manufacturer";
  
  return {
    title: "DC MCB Manufacturer | Factory Direct Supply | IEC 60947-2 | TPKELE",
    description: "TPKELE DC MCB manufacturer: 1P-4P, 250V-1500V, IEC 60947-2 certified. Factory direct, OEM supported, MOQ 100pcs.",
    alternates: {
      canonical: getCanonicalUrl(localizedPath(currentPath, locale)),
      languages: alternateLanguages(currentPath),
    },
    keywords: [
      "DC MCB manufacturer",
      "DC circuit breaker factory",
      "OEM DC MCB",
      "solar DC breaker manufacturer"
    ],
  };
}

export default async function DcMcbManufacturerPage() {
  return (
    <main>
      {/* Hero */}
      <section className="manufacturer-hero">
        <h1>DC MCB Manufacturer</h1>
        <p className="lead">
          Factory-direct DC miniature circuit breakers for solar EPCs and distributors worldwide.
        </p>
      </section>

      {/* 产品目录CTA - 显眼位置 */}
      <section className="product-catalog-cta section">
        <div className="cta-content">
          <h2>View Our DC MCB Product Catalog</h2>
          <p>
            Technical specifications, voltage ranges, pole configurations, 
            and pricing for all models
          </p>
          <ul className="quick-specs">
            <li>✓ 250V / 550V / 1000V / 1500V options</li>
            <li>✓ 1P, 2P, 3P, 4P configurations</li>
            <li>✓ 1A-125A current ratings</li>
            <li>✓ IEC 60947-2 test reports</li>
          </ul>
          <Link href="/products/dc-mcb" className="btn primary large">
            Browse DC MCB Products →
          </Link>
        </div>
      </section>

      {/* 制造能力、OEM服务、案例等 */}
      {/* ... */}

      {/* 底部再次引导 */}
      <section className="final-product-cta section">
        <h2>Ready to Review Our DC MCB Product Line?</h2>
        <div className="button-row">
          <Link href="/products/dc-mcb" className="btn primary large">
            View DC MCB Products →
          </Link>
          <InquiryModal 
            triggerLabel="Contact Sales"
            triggerClassName="btn secondary large"
          />
        </div>
      </section>
    </main>
  );
}
```

---

## 第四部分：SEO标题与描述全面优化

### 4.1 SEO标题优化策略

**优化原则**：
1. 前20字符最关键（移动端显示限制）
2. 包含核心关键词：产品名 + Manufacturer/Supplier
3. 包含规格范围：让用户知道有什么
4. 包含商业词：Factory Direct, Wholesale, MOQ
5. 包含认证：IEC标准号
6. 总长度60-70字符

**标题模板**：
```
[产品名] Manufacturer | [规格] | [价格优势] | [认证] | TPKELE

示例：
DC MCB Manufacturer | 1P-4P 250V-1500V | Factory Direct | IEC 60947-2 | TPKELE
      ↑              ↑                   ↑                ↑           ↑
   核心词(20字符)    规格吸引点          价格信号          信任信号    品牌
```

---

### 4.2 全产品SEO标题优化表

**修改文件**: `messages/en.json`

```json
{
  "categoryPage": {
    "dcMcb": {
      "seoTitle": "DC MCB Manufacturer | 1P-4P 1A-125A 250V-1500V | Factory Direct | IEC 60947-2 | TPKELE",
      "seoDescription": "Buy DC MCB direct from China factory. 250V/550V/1000V/1500V, 1-4 pole, 1A-125A. IEC 60947-2 & CE certified. MOQ 100pcs, free sample, OEM branding. 72h quotation for solar PV & battery storage.",
      "beyondTitle": "More Than Just a DC MCB Manufacturer",
      "ctaEyebrow": "DC MCB Supply · 72-Hour Quotation",
      "ctaTitle": "Send your project specs — get factory pricing for any DC MCB configuration."
    },
    
    "acMcb": {
      "seoTitle": "AC MCB Manufacturer | 1P-4P 6A-125A B/C/D Curve | Wholesale | IEC 60898-1 | TPKELE",
      "seoDescription": "Wholesale AC MCB from Wenzhou factory. 1-4 pole, 6A-125A, B/C/D curves, 6kA/10kA. IEC 60898-1 & CE certified. MOQ 100pcs, custom logo printing. Fast quote for panel builders and distributors.",
      "beyondTitle": "More Than Just an AC MCB Manufacturer",
      "ctaEyebrow": "AC MCB Supply · 72-Hour Quotation",
      "ctaTitle": "Send your distribution board specs — get pricing for any AC MCB configuration."
    },
    
    "dcSpd": {
      "seoTitle": "DC SPD Manufacturer | PV Surge Protector 600V-1500V | Type 1+2 | IEC 61643-31 | TPKELE",
      "seoDescription": "PV DC SPD for solar combiner boxes. 600V/1000V/1500V Uoc, Type 1+2 & Type 2, 20kA/40kA. IEC 61643-31 certified. Factory direct, MOQ 100pcs, OEM ready. Free technical sizing for solar projects.",
      "beyondTitle": "More Than Just a PV SPD Manufacturer",
      "ctaEyebrow": "DC SPD Supply · Expert Sizing Support",
      "ctaTitle": "Need help sizing DC SPD? Our engineers provide free technical calculations."
    },
    
    "acSpd": {
      "seoTitle": "AC SPD Manufacturer | Type 1 Type 2 Surge Protector | 230V-400V | IEC 61643-11 | TPKELE",
      "seoDescription": "AC surge protector for distribution panels. Type 1, Type 2, Type 1+2 modules, 230V/400V, 20kA/40kA. Remote signaling optional. IEC 61643-11 & CE certified. MOQ 100pcs, OEM branding.",
      "beyondTitle": "More Than Just an SPD Manufacturer",
      "ctaEyebrow": "AC SPD Supply · Multiple Options",
      "ctaTitle": "Browse AC SPD range — pluggable cartridges for fast field replacement."
    },
    
    "combinerBox": {
      "seoTitle": "PV Combiner Box Manufacturer | Solar String Combiner | 1000V-1500V | IP65 | TPKELE",
      "seoDescription": "Solar combiner box for PV systems. 1000V/1500V, 2-16 strings, IP65 enclosure with DC SPD + DC MCB. Plastic & metal options. IEC certified. Custom configuration for rooftop & utility projects.",
      "beyondTitle": "More Than Just a Combiner Box Manufacturer",
      "ctaEyebrow": "PV Combiner Box · Custom Configuration",
      "ctaTitle": "Send your PV system specs — get custom combiner box design & quote."
    },
    
    "smartCircuitBreaker": {
      "seoTitle": "Smart WiFi MCB Manufacturer | IoT Circuit Breaker | Remote Control | Tuya Compatible | TPKELE",
      "seoDescription": "Smart WiFi circuit breaker with app control. Real-time monitoring, energy metering, remote on/off, overvoltage protection. 18mm & 2P models. Tuya Smart compatible. For smart homes & buildings.",
      "beyondTitle": "More Than Just a Smart MCB Manufacturer",
      "ctaEyebrow": "Smart WiFi MCB · IoT Integration",
      "ctaTitle": "Add remote control to your distribution board — app-based monitoring & control."
    }
  }
}
```

**对应的俄语版** (`messages/ru.json`)：需要专业翻译，保持SEO关键词的俄语对应词。

---

### 4.3 Sitemap优先级调整

**修改文件**: `src/app/sitemap.ts`

```typescript
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // 定义主产品页列表（最高优先级）
  const primaryProductPages = [
    "/products/dc-mcb",
    "/products/ac-mcb",
    "/products/dc-spd",
    "/products/ac-spd",
    "/products/combiner-box",
    "/products/smart-circuit-breaker",
  ];

  const specs: RouteSpec[] = [
    // 首页
    { path: "/", lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    
    // 主产品详情页 - 最高优先级
    ...primaryProductPages.map(path => ({
      path,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95
    })),

    // 子型号详情页 - 中高优先级
    ...products
      .filter(p => !primaryProductPages.includes(`/products/${p.slug}`))
      .map((product) => ({
        path: `/products/${product.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.80,
      })),

    // Manufacturer落地页 - 中等优先级
    ...staticPaths
      .filter(p => p.endsWith("-manufacturer"))
      .map(path => ({
        path,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.80,
      })),

    // Resources页面 - 中高优先级
    {
      path: "/resources",
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.90
    },
    ...staticPaths
      .filter(p => p.startsWith("/resources/"))
      .map(path => ({
        path,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.85,
      })),

    // Guides - 中高优先级（SEO长尾词）
    ...getAllGuideSlugs().map((slug) => ({
      path: `/guides/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),

    // 父分类页 - 降低优先级
    ...Object.values(categorySlugMap).map((slug) => ({
      path: `/products/category/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.70,  // 从0.9降到0.70
    })),

    // 子分类页 - 最低优先级（因为设置了Canonical）
    ...subCategories.map((s) => ({
      path: `/products/category/${categorySlugMap[s.parent]}/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.65,  // 从0.88降到0.65
    })),

    // Blog文章
    ...blogEntries,

    // 其他静态页面
    ...staticPaths
      .filter(p => !p.endsWith("-manufacturer") && !p.startsWith("/resources/"))
      .map(path => ({
        path,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 
          path === "/about" ? 0.85 :
          path === "/contact" ? 0.85 :
          path === "/solar-dc-protection" ? 0.85 :
          0.70
      })),
  ];

  return expandLocales(specs);
}
```

---

## 第五部分：内容增强与转化优化

### 5.1 为主产品页增加"Related Applications"模块

**创建组件**: `src/components/RelatedApplications.tsx`

```typescript
import { Link } from "@/i18n/navigation";

type Application = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

type RelatedApplicationsProps = {
  productType: "dc-mcb" | "ac-mcb" | "dc-spd" | "ac-spd" | "combiner-box" | "voltage-protector" | "ats" | "energy-meter";
};

const applicationMap: Record<string, Application[]> = {
  "dc-mcb": [
    {
      title: "Solar PV String Protection",
      description: "Overcurrent protection for photovoltaic arrays up to 1500V",
      icon: "🌞",
      href: "/solar-dc-protection"
    },
    {
      title: "Battery Energy Storage",
      description: "DC protection for BESS racks and battery management systems",
      icon: "🔋",
      href: "/solutions/battery-storage-safety"  // 未来创建
    },
    {
      title: "EV Charging Stations",
      description: "DC bus protection for fast-charging infrastructure",
      icon: "⚡",
      href: "/blog/dc-mcb-for-ev-charging"  // 未来创建
    },
  ],
  "ac-mcb": [
    {
      title: "Distribution Panels",
      description: "Branch circuit protection for residential and commercial boards",
      icon: "🏢",
      href: "/solutions/distribution-panel-protection"  // 未来创建
    },
    {
      title: "Motor Control Centers",
      description: "Feeder and motor circuit protection with coordinated curves",
      icon: "⚙️",
      href: "/blog/ac-mcb-motor-protection"  // 未来创建
    },
    {
      title: "Industrial Switchboards",
      description: "Main and sub-distribution protection for factories",
      icon: "🏭",
      href: "/solutions/industrial-power-distribution"  // 未来创建
    },
  ],
  // ... 其他产品的应用场景
};

export function RelatedApplications({ productType }: RelatedApplicationsProps) {
  const applications = applicationMap[productType] || [];

  if (applications.length === 0) return null;

  return (
    <section className="related-applications section muted">
      <div className="section-heading centered">
        <h2>Common Applications</h2>
        <p>See where our customers use this product</p>
      </div>
      <div className="applications-grid">
        {applications.map((app) => (
          <Link 
            key={app.href} 
            href={app.href}
            className="application-card"
          >
            <div className="app-icon" aria-hidden="true">{app.icon}</div>
            <h3>{app.title}</h3>
            <p>{app.description}</p>
            <span className="text-link">Learn more →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
```

**在主产品页中使用**（`src/app/[locale]/products/dc-mcb/page.tsx`）：

```typescript
import { RelatedApplications } from "@/components/RelatedApplications";

export default async function DcCircuitBreakersPage({ params }: PageProps) {
  // ...
  
  return (
    <main>
      <HeroSection />
      <OptionsGrid />
      <FeaturesGrid />
      <SpecsSection />
      <TripCurves />
      
      {/* 新增：应用场景 */}
      <RelatedApplications productType="dc-mcb" />
      
      <CompanySection />
      <BeyondSection locale={locale} />
      
      <section className="section cta-section">
        {/* ... */}
      </section>
    </main>
  );
}
```

---

### 5.2 为主产品页增加FAQ模块

**创建组件**: `src/components/ProductFAQ.tsx`

```typescript
type FAQ = {
  question: string;
  answer: string;
};

type ProductFAQProps = {
  faqs: FAQ[];
  productName: string;
};

export function ProductFAQ({ faqs, productName }: ProductFAQProps) {
  // FAQ Schema for Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <section className="product-faq section">
      <script type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
      />
      
      <div className="section-heading centered">
        <h2>Frequently Asked Questions</h2>
        <p>Common questions about {productName}</p>
      </div>
      
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <details key={index} className="faq-item">
            <summary>
              <h3>{faq.question}</h3>
              <span className="faq-toggle" aria-hidden="true">+</span>
            </summary>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
```

**DC MCB FAQ内容** (在 `src/app/[locale]/products/dc-mcb/page.tsx`):

```typescript
import { ProductFAQ } from "@/components/ProductFAQ";

const dcMcbFAQs = [
  {
    question: "What is the difference between DC MCB and AC MCB?",
    answer: "DC MCBs are specifically designed for direct current with special arc-quenching chambers because DC arcs don't naturally extinguish at zero-crossing like AC. DC MCBs typically require 2 or more poles in series to safely interrupt high DC voltages."
  },
  {
    question: "How many poles do I need for a 1000V solar PV system?",
    answer: "For 1000V systems, use a 2-pole DC MCB (each pole rated for 500V). For 1500V systems, use 3-pole or 4-pole configurations. Check IEC 60947-2 rated voltage (Ue) specification for your exact model."
  },
  {
    question: "What is the MOQ for DC MCB orders?",
    answer: "Standard MOQ is 100 pieces per model. For custom logo printing or special voltage configurations, MOQ may be 500-1000 pieces. Sample orders (2-5 pieces) are available for testing."
  },
  {
    question: "Do you provide IEC 60947-2 test reports?",
    answer: "Yes, all our DC MCBs come with complete IEC 60947-2 type test reports including DC breaking capacity verification, temperature rise test, and endurance test. Reports are provided in English by default."
  },
  {
    question: "Can DC MCB be used for AC circuits?",
    answer: "No. DC MCBs are optimized for DC arc interruption and may not have proper AC breaking capacity. Always use AC-rated MCB (IEC 60898-1 or IEC 60947-2 AC) for AC circuits."
  },
  {
    question: "What is the lead time for OEM orders?",
    answer: "Standard models: 7-14 days after order confirmation. OEM with custom logo: 15-20 days. Custom voltage or special configurations: 25-30 days. Express production available for urgent projects."
  },
];

export default async function DcCircuitBreakersPage({ params }: PageProps) {
  // ...
  
  return (
    <main>
      {/* ... 其他sections */}
      
      <RelatedApplications productType="dc-mcb" />
      
      {/* 新增：FAQ */}
      <ProductFAQ faqs={dcMcbFAQs} productName="DC MCB" />
      
      <CompanySection />
      <BeyondSection locale={locale} />
      
      <section className="section cta-section">
        {/* ... */}
      </section>
    </main>
  );
}
```

**同样的FAQ应该添加到**：
- AC MCB页面（6-8个问题）
- DC SPD页面（6-8个问题）
- AC SPD页面（6-8个问题）
- Combiner Box页面（6-8个问题）
- Smart MCB页面（6-8个问题）

---

### 5.3 增加价格透明化模块（可选）

**创建组件**: `src/components/PricingHint.tsx`

```typescript
type PriceTier = {
  quantity: string;
  priceRange: string;
  badge?: string;
};

type PricingHintProps = {
  tiers: PriceTier[];
  currency?: string;
  disclaimer: string;
};

export function PricingHint({ tiers, currency = "USD", disclaimer }: PricingHintProps) {
  return (
    <section className="pricing-hint section muted">
      <div className="section-heading centered">
        <h2>Factory Direct Pricing</h2>
        <p>Volume discount available</p>
      </div>
      
      <div className="price-tiers">
        {tiers.map((tier, index) => (
          <div 
            key={index} 
            className={`price-tier ${tier.badge ? 'featured' : ''}`}
          >
            <div className="tier-quantity">{tier.quantity}</div>
            <div className="tier-price">{tier.priceRange}</div>
            {tier.badge && <span className="tier-badge">{tier.badge}</span>}
          </div>
        ))}
      </div>
      
      <p className="pricing-disclaimer">{disclaimer}</p>
      
      <div className="pricing-cta">
        <InquiryModal 
          triggerLabel="Request Exact Quote" 
          triggerClassName="btn primary"
          intent="quote"
        />
      </div>
    </section>
  );
}
```

**使用示例**（DC MCB页面）：

```typescript
const dcMcbPricingTiers = [
  { quantity: "100-499 pcs", priceRange: "$3.50 - $5.80" },
  { quantity: "500-999 pcs", priceRange: "$2.80 - $4.50", badge: "Most Popular" },
  { quantity: "1000+ pcs", priceRange: "$2.20 - $3.80", badge: "Best Value" },
];

<PricingHint 
  tiers={dcMcbPricingTiers}
  disclaimer="* Price varies by pole configuration and voltage rating. Contact for precise quotation based on your specifications."
/>
```

**风险提示**: 
- 价格公开可能影响谈判空间
- 建议使用较宽的价格区间
- 强调"Contact for exact price"

---

## 第六部分：执行时间表（90天计划）

### Week 1-2: 基础架构与数据准备

#### Week 1 (Day 1-7)
- [ ] **Day 1-2**: 创建 `product-hierarchy.ts` 文件，定义所有61个产品的层级关系
- [ ] **Day 3-4**: 创建 `navigation-structure.ts` 文件，重构导航菜单配置
- [ ] **Day 5**: 修改 `src/data/site.ts` 中的 `productMegaMenu`，调整所有链接
- [ ] **Day 6**: 修改首页 `page.tsx` 中的产品卡片链接
- [ ] **Day 7**: 测试导航：从首页、顶部菜单能否直达主产品页

**验收标准**: 
- 用户从任何导航入口都能在2次点击内到达主产品页
- 不再有"找不到产品页"的问题

#### Week 2 (Day 8-14)
- [ ] **Day 8-10**: 为所有主产品页添加Canonical标签和Schema hasPart
  - DC MCB, AC MCB, DC SPD, AC SPD, Combiner Box, Smart MCB
- [ ] **Day 11-12**: 为所有子型号页添加Schema isPartOf
  - 重点：MCB子型号、Voltage Protector子型号、ATS子型号
- [ ] **Day 13**: 为所有分类聚合页添加Canonical标签和横幅提示
- [ ] **Day 14**: 为所有manufacturer落地页添加产品目录CTA

**验收标准**:
- 所有Canonical标签正确指向
- Google Rich Results Test通过
- 分类页顶部有明显的"查看主产品页"横幅

---

### Week 3-4: SEO优化与Sitemap调整

#### Week 3 (Day 15-21)
- [ ] **Day 15-17**: 修改 `messages/en.json` 中所有产品页的SEO标题和描述
  - 6个主产品页
  - 7个manufacturer落地页
- [ ] **Day 18-19**: 修改 `messages/ru.json` (如果需要俄语SEO)
- [ ] **Day 20**: 调整 `sitemap.ts` 中的优先级
- [ ] **Day 21**: 提交新Sitemap到Google Search Console

**验收标准**:
- 所有产品页标题包含：产品名、规格、价格优势、认证
- Sitemap中主产品页优先级 = 0.95

#### Week 4 (Day 22-28)
- [ ] **Day 22-24**: 创建RelatedApplications组件，为主产品页添加应用场景
- [ ] **Day 25-27**: 编写6个主产品的FAQ内容（每个6-8个问题）
- [ ] **Day 28**: 创建ProductFAQ组件，应用到所有主产品页

**验收标准**:
- 每个主产品页有3个应用场景卡片
- 每个主产品页有6-8个FAQ，通过Google FAQ Schema验证

---

### Week 5-6: 内容增强与内链优化

#### Week 5 (Day 29-35)
- [ ] **Day 29-30**: 为主产品页增加"Available Models"型号导航网格
- [ ] **Day 31-32**: 在分类页底部增加"Back to Main Product"模块
- [ ] **Day 33-34**: 在子型号页增加"返回产品系列"面包屑
- [ ] **Day 35**: 全站内链检查（用Screaming Frog）

**验收标准**:
- 主产品页有明显的子型号导航
- 分类页顶部和底部都有去主产品页的链接
- 所有子型号页有父产品面包屑

#### Week 6 (Day 36-42)
- [ ] **Day 36-38**: 创建PricingHint组件（可选）
- [ ] **Day 39-40**: 为主产品页增加价格区间提示（如果决定做）
- [ ] **Day 41**: 移动端导航测试与优化
- [ ] **Day 42**: 页面加载速度优化（图片压缩、代码分割）

**验收标准**:
- 移动端体验流畅，按钮足够大
- Lighthouse Performance分数 > 85

---

### Week 7-8: 监控与数据分析

#### Week 7 (Day 43-49)
- [ ] **Day 43**: 设置Google Analytics事件追踪
  - 导航点击（应用场景 vs 产品类型）
  - 产品页浏览时间
  - FAQ展开次数
  - 询盘表单提交来源
- [ ] **Day 44**: 设置Google Search Console监控仪表板
  - 核心关键词：dc mcb, ac mcb, dc spd, ac spd, combiner box
  - 监控CTR变化
- [ ] **Day 45-47**: 等待Google重新抓取索引（通常3-7天）
- [ ] **Day 48-49**: 第一次数据检查
  - GSC展示次数变化
  - GSC点击次数变化
  - GA流量来源变化

**验收标准**:
- Google Search Console显示新的Canonical标签被识别
- 部分分类页显示为"重复页面"状态（正常）

#### Week 8 (Day 50-56)
- [ ] **Day 50**: 创建优化效果对比表格（基线 vs 当前）
- [ ] **Day 51-53**: 根据第一周数据微调
  - 如果某些页面CTR仍然低，调整标题
  - 如果某些内链点击率低，调整文案
- [ ] **Day 54-56**: 开始准备第二阶段内容（Solution Landing Pages）

**验收标准**:
- 有完整的"优化前 vs 优化后"数据对比
- 识别出效果最好和最差的页面

---

### Week 9-10: 内容扩展（可选，根据效果决定）

#### Week 9 (Day 57-63)
- [ ] **Day 57-59**: 创建第一个Solution Landing Page
  - `/solutions/solar-pv-protection`
  - 系统架构图、产品配套方案、案例
- [ ] **Day 60-62**: 创建认证聚合页
  - `/products/certified/iec-60947-2`
  - 列出所有符合IEC 60947-2的产品
- [ ] **Day 63**: 测试新页面的内链效果

#### Week 10 (Day 64-70)
- [ ] **Day 64-66**: 创建第二个Solution Landing Page
  - `/solutions/industrial-protection`
- [ ] **Day 67-69**: 为Blog文章增加产品内链
  - 找出高流量的Blog文章，增加到主产品页的链接
- [ ] **Day 70**: 全站内链审计

---

### Week 11-12: 效果验证与迭代

#### Week 11 (Day 71-77)
- [ ] **Day 71-73**: 第二次数据检查（30天数据）
  - 产品词CTR是否提升
  - 主产品页流量占比是否增加
  - 询盘来源分布变化
- [ ] **Day 74-76**: A/B测试结果分析
  - 测试不同的SEO标题格式
  - 测试不同的CTA按钮文案
- [ ] **Day 77**: 编写中期优化报告

**验收标准**:
- 产品词CTR从0%提升到1.5-2%+
- 主产品页流量占比从20%提升到30%+

#### Week 12 (Day 78-84)
- [ ] **Day 78-80**: 根据数据调整策略
  - 效果好的页面：增加更多内容
  - 效果差的页面：分析原因，重写标题或内容
- [ ] **Day 81-83**: 用户行为分析
  - 热力图工具（如Hotjar）查看用户点击路径
  - 识别用户卡点
- [ ] **Day 84**: 准备第三个月计划

---

### Week 13: 最终验证与总结

#### Day 85-90
- [ ] **Day 85-87**: 第三次数据检查（60天数据）
  - 完整的"优化前 vs 优化后"对比
  - 询盘数量变化
  - ROI计算
- [ ] **Day 88**: 编写最终优化报告
- [ ] **Day 89**: 与团队review，决定下一步
- [ ] **Day 90**: 制定长期维护计划

**最终验收标准**（90天后）:
- 产品词CTR: 0% → 3%+
- 主产品页流量占比: 20% → 45%+
- 询盘量: 基线 → +50%

---

## 第七部分：效果监控指标

### 7.1 Google Search Console监控表

| 关键词 | 基线展示 | 基线点击 | 基线CTR | 30天后 | 60天后 | 90天后 | 目标CTR |
|--------|---------|---------|---------|--------|--------|--------|---------|
| dc mcb | 500 | 0 | 0% | ___ | ___ | ___ | 3% |
| ac mcb | 400 | 1 | 0.25% | ___ | ___ | ___ | 3% |
| dc mcb manufacturer | 100 | 0 | 0% | ___ | ___ | ___ | 4% |
| dc spd | 200 | 0 | 0% | ___ | ___ | ___ | 2.5% |
| ac spd | 150 | 0 | 0% | ___ | ___ | ___ | 2.5% |
| pv combiner box | 180 | 1 | 0.6% | ___ | ___ | ___ | 3% |
| voltage protector | 181 | 0 | 0% | ___ | ___ | ___ | 2% |
| smart wifi mcb | 50 | 0 | 0% | ___ | ___ | ___ | 3% |
| iec 60947-2 | 34 | 1 | 2.9% | ___ | ___ | ___ | 5% |
| iec 60898-1 | 110 | 3 | 2.7% | ___ | ___ | ___ | 5% |

---

### 7.2 Google Analytics流量来源监控

| 页面类型 | 基线占比 | 30天 | 60天 | 90天 | 目标占比 |
|---------|---------|------|------|------|---------|
| 主产品详情页 | 20% | ___ | ___ | ___ | 45% |
| 子型号页 | 10% | ___ | ___ | ___ | 20% |
| 分类聚合页 | 30% | ___ | ___ | ___ | 10% |
| Manufacturer落地页 | 15% | ___ | ___ | ___ | 10% |
| 认证/标准页 | 15% | ___ | ___ | ___ | 10% |
| Blog/Guides | 10% | ___ | ___ | ___ | 5% |

---

### 7.3 询盘转化监控

| 来源页面 | 基线询盘数 | 30天 | 60天 | 90天 | 目标 |
|---------|----------|------|------|------|------|
| /products/dc-mcb | 2 | ___ | ___ | ___ | 10+ |
| /products/ac-mcb | 1 | ___ | ___ | ___ | 6+ |
| /products/dc-spd | 1 | ___ | ___ | ___ | 4+ |
| /products/combiner-box | 1 | ___ | ___ | ___ | 4+ |
| 子型号页合计 | 2 | ___ | ___ | ___ | 10+ |
| Manufacturer页合计 | 3 | ___ | ___ | ___ | 6+ |
| **总计** | **10** | ___ | ___ | ___ | **40+** |

---

## 第八部分：风险控制与应急预案

### 8.1 潜在风险

#### 风险1: Canonical标签导致短期流量下降
**概率**: 中（30%）
**影响**: Google重新评估页面权重，可能需要2-4周
**缓解措施**:
- 分批部署：先做DC MCB和AC MCB，观察1周
- 如果流量下降超过20%，暂停部署，等待恢复
- 保留GSC历史快照，随时对比

#### 风险2: SEO标题改动后CTR反而下降
**概率**: 低（15%）
**影响**: 新标题不符合用户搜索意图
**缓解措施**:
- 前2周每天监控CTR变化
- 准备3-5个备选标题方案
- 如果CTR下降，立即A/B测试其他标题

#### 风险3: 内链过多导致页面混乱
**概率**: 低（10%）
**影响**: 用户体验变差，跳出率升高
**缓解措施**:
- 使用折叠式组件，默认只显示前3个链接
- 移动端简化显示
- 监控页面停留时间和跳出率

#### 风险4: 开发资源不足，无法按时完成
**概率**: 中（40%）
**影响**: 延期完成，错过最佳优化窗口
**缓解措施**:
- 将90天计划拆分成3个30天冲刺
- 每个冲刺只做核心功能
- 准备最小可行版本（MVP）

---

### 8.2 回滚方案

如果优化效果不理想（60天后流量下降超过20%），执行回滚：

#### 快速回滚（1天内完成）

1. **删除所有Canonical标签**
```typescript
// product-hierarchy.ts
export function getCanonicalUrl(currentPath: string): string {
  // 回滚模式：每个页面返回自己的URL
  return `https://www.tpkele.com${currentPath}`;
}
```

2. **恢复导航链接**
```typescript
// site.ts 或 navigation-structure.ts
// 把所有主产品页链接改回分类页链接
items: [
  { label: "DC MCB", href: "/products/category/mcb/dc-mcb" },  // 恢复
]
```

3. **恢复Sitemap优先级**
```typescript
// sitemap.ts
// 把分类页优先级从0.65改回0.88
```

4. **提交回滚后的Sitemap**

#### 部分回滚（保留有效部分）

如果某些优化有效，某些无效：
- 保留导航优化（用户体验确实改善）
- 回滚Canonical标签（如果流量下降）
- 保留SEO标题优化（如果CTR提升）
- 保留内容增强（FAQ、应用场景）

---

## 第九部分：长期维护计划

### 9.1 每月例行检查（第4-6个月）

**每月第1个周一**:
- [ ] 检查GSC数据，识别新的关键词机会
- [ ] 检查主产品页排名变化
- [ ] 检查竞争对手网站变化

**每月第3个周五**:
- [ ] 更新询盘来源统计
- [ ] 识别高转化页面，增加更多内容
- [ ] 识别低转化页面，分析原因

---

### 9.2 季度内容更新（第6-12个月）

**Q1目标**: 
- 完成6个主产品页优化
- CTR提升到3%+

**Q2目标**:
- 创建4个Solution Landing Pages
- 主产品页增加视频演示

**Q3目标**:
- 创建认证聚合页系列
- 增加客户案例（带logo）

**Q4目标**:
- 多语言SEO优化（俄语、西班牙语、德语）
- 建立外链（行业目录、客户网站）

---

## 第十部分：总结与核心清单

### 10.1 核心改动清单（必做）

**导航系统（Week 1）**:
- [ ] 修改 `src/data/site.ts` 的 `productMegaMenu`
- [ ] 修改 `src/app/[locale]/page.tsx` 的产品卡片链接
- [ ] 修改 `src/components/Header.tsx` 应用新导航

**Canonical标签（Week 2）**:
- [ ] 创建 `src/data/product-hierarchy.ts`
- [ ] 为6个主产品页添加Canonical逻辑
- [ ] 为所有分类页添加Canonical指向主产品页
- [ ] 为所有子型号页添加Schema isPartOf

**SEO优化（Week 3）**:
- [ ] 修改 `messages/en.json` 中6个主产品的标题
- [ ] 调整 `src/app/sitemap.ts` 优先级
- [ ] 提交新Sitemap到GSC

**内容增强（Week 4-6）**:
- [ ] 为主产品页添加FAQ模块
- [ ] 为分类页添加"查看主产品页"横幅
- [ ] 为manufacturer页添加产品目录CTA
- [ ] 为子型号页添加父产品面包屑

---

### 10.2 效果预期（90天后）

| 指标 | 基线 | 目标 | 预期提升 |
|------|------|------|---------|
| 产品词CTR | 0-0.3% | 3%+ | +10倍 |
| 主产品页流量占比 | 20% | 45% | +125% |
| 询盘数量 | 10/月 | 40+/月 | +300% |
| 产品词平均排名 | 20-30位 | 15-20位 | +5-10位 |
| 页面停留时间 | 45秒 | 2分钟+ | +160% |

---

### 10.3 成功标准

**30天验收**：
- ✅ 用户从导航能在2次点击内到达主产品页
- ✅ GSC显示Canonical标签被识别
- ✅ 产品词CTR开始上升（1%+）

**60天验收**：
- ✅ 主产品页流量占比达到35%+
- ✅ 产品词CTR达到2%+
- ✅ 询盘量增长25%+

**90天验收**：
- ✅ 主产品页流量占比达到45%+
- ✅ 产品词CTR达到3%+
- ✅ 询盘量增长50%+
- ✅ 产品词平均排名提升5-10位

---

## 附录：快速执行模板

### 模板A：主产品页完整代码结构

```typescript
// src/app/[locale]/products/[product-name]/page.tsx
import { getCanonicalUrl, getProductVariants } from "@/data/product-hierarchy";
import { RelatedApplications } from "@/components/RelatedApplications";
import { ProductFAQ } from "@/components/ProductFAQ";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "优化后的SEO标题",
    description: "优化后的描述",
    alternates: {
      canonical: getCanonicalUrl("/products/[product-name]", locale),
      languages: alternateLanguages("/products/[product-name]"),
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const variants = getProductVariants("[product-slug]");
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    hasPart: variants.map(v => ({
      "@type": "Product",
      "@id": `https://www.tpkele.com${v.path}`,
      name: v.name,
    })),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "X",
      highPrice: "Y",
    }
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <HeroSection />
      <FeaturesGrid />
      <SpecsSection />
      
      {/* 子型号导航 */}
      <section className="variant-navigation">
        {variants.map(v => <Link href={v.path}>{v.name}</Link>)}
      </section>
      
      {/* 应用场景 */}
      <RelatedApplications productType="[product-type]" />
      
      {/* FAQ */}
      <ProductFAQ faqs={[...]} productName="[Product Name]" />
      
      <CompanySection />
      <BeyondSection />
      <CTASection />
    </main>
  );
}
```

---

### 模板B：分类页完整代码结构

```typescript
// src/app/[locale]/products/category/[slug]/[sub]/page.tsx
import { getCanonicalUrl, getAuxiliaryPageInfo } from "@/data/product-hierarchy";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    alternates: {
      canonical: getCanonicalUrl(currentPath, locale),
    },
  };
}

export default async function SubCategoryPage({ params }: PageProps) {
  const auxInfo = getAuxiliaryPageInfo(currentPath);

  return (
    <main>
      {/* 顶部横幅 - 引导去主产品页 */}
      {auxInfo.shouldShowBanner && (
        <div className="canonical-notice-banner">
          <strong>Looking for {auxInfo.primaryPageName} overview?</strong>
          <Link href={auxInfo.primaryPagePath}>
            View Product Page →
          </Link>
        </div>
      )}

      {/* 分类页内容 */}
      <section className="subcategory-hero">...</section>
      <section className="products-grid">...</section>

      {/* 底部再次提示 */}
      {auxInfo.isAuxiliary && (
        <section className="back-to-main-product">
          <Link href={auxInfo.primaryPagePath}>
            Go to {auxInfo.primaryPageName} Main Page →
          </Link>
        </section>
      )}
    </main>
  );
}
```

---

**计划制定日期**: 2024年12月
**计划执行负责人**: 待指定
**预算**: 前端开发15-20天工作量 + 内容创作10-15天
**预期ROI**: 询盘量增长50%+，3个月回本

---

# 执行准备检查清单

开始执行前，确认：
- [ ] 有前端开发资源（能修改20+个文件）
- [ ] 有内容创作资源（编写FAQ、应用场景）
- [ ] 有Google Search Console和Google Analytics访问权限
- [ ] 有Vercel或服务器部署权限
- [ ] 团队已经review本计划，明确执行优先级
- [ ] 已经创建GitHub branch: `feature/全站SEO优化`

**准备好了？开始执行第1周任务！**
