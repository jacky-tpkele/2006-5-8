# TPKELE 智能断路器产品上线完整方案

> **制定日期：** 2026-09-20  
> **产品系列：** TPKELE Smart Wi-Fi Electrical Control & Protection Series  
> **目标：** 在不破坏现有网站结构和SEO的前提下，完整上线3款智能Wi-Fi断路器产品

---

## 📋 执行摘要

### 产品概览
- **18mm Wi-Fi Smart Circuit Breaker** - 单模数智能通断控制器
- **2P Wi-Fi Smart Circuit Breaker** - 双极智能通断控制器
- **Wi-Fi Smart Earth Leakage Circuit Breaker** - 智能漏电保护断路器

### 策略定位
将智能断路器作为 **MCB 的第三个子分类**，与现有 AC MCB、DC MCB 并列，突出"智能化"差异的同时保持产品架构的逻辑一致性。

---

## 🎯 一、路由架构设计

### 1.1 推荐方案：MCB 子分类架构

```
/products/category/mcb
├── /ac-mcb          (现有)
├── /dc-mcb          (现有)
└── /smart-mcb       (新增 - 智能断路器总览页)
```

**具体路由规划：**

| 页面类型 | URL 路径 | 页面作用 |
|---------|---------|---------|
| 智能MCB分类页 | `/products/category/mcb/smart-mcb` | 智能断路器系列总览，展示3个产品 |
| 单品页面 (18mm) | `/products/smart-mcb-18mm` 或 `/products/category/mcb/smart-mcb/18mm` | 18mm 产品详细页 |
| 单品页面 (2P) | `/products/smart-mcb-2p` 或 `/products/category/mcb/smart-mcb/2p` | 2P 产品详细页 |
| 单品页面 (漏电) | `/products/smart-mcb-leakage` 或 `/products/category/mcb/smart-mcb/leakage` | 漏电保护产品详细页 |

**URL 层级建议：**
- **方案 A（推荐）：** `/products/smart-mcb-18mm` - 简洁，与现有 `/products/ac-mcb`、`/products/dc-mcb` 保持一致
- **方案 B：** `/products/category/mcb/smart-mcb/18mm` - 完整路径，SEO层级更明确

**选择理由：**
- 现有网站已有 `/products/ac-mcb` 这种简洁路由
- 保持一致性，用户体验更好
- URL 简短，利于分享和记忆

---

## 🗂️ 二、导航菜单整合

### 2.1 主导航 `productMenu` 更新

**当前结构：**
```typescript
{
  label: "MCB",
  href: "/products/category/mcb",
  children: [
    { label: "AC MCB", href: "/products/category/mcb/ac-mcb" },
    { label: "DC MCB", href: "/products/category/mcb/dc-mcb" },
  ]
}
```

**新增后：**
```typescript
{
  label: "MCB",
  href: "/products/category/mcb",
  children: [
    { label: "AC MCB", href: "/products/category/mcb/ac-mcb" },
    { label: "DC MCB", href: "/products/category/mcb/dc-mcb" },
    { label: "Smart Wi-Fi MCB", href: "/products/category/mcb/smart-mcb" }, // 新增
  ]
}
```

### 2.2 Mega Menu `productMegaMenu` 更新

在现有的3栏布局中，建议将智能断路器加入 **"Distribution & Backup"** 栏：

```typescript
{
  key: "lv",
  title: "Distribution & Backup",
  subtitle: "For Panel Builders",
  cta: { label: "AC MCB Landing →", href: "/products/ac-mcb" },
  items: [
    { label: "AC MCB", href: "/products/category/mcb/ac-mcb" },
    { label: "AC SPD", href: "/products/category/spd/ac-spd" },
    { label: "Smart Wi-Fi MCB", href: "/products/category/mcb/smart-mcb", tag: "New" }, // 新增
    { label: "ATS", href: "/products/category/ats" },
    { label: "Energy Meter", href: "/products/category/energy-meter" },
    { label: "Voltage Protector", href: "/products/category/voltage-protector" },
  ]
}
```

**或者** 创建第4栏专门突出智能产品：

```typescript
{
  key: "smart",
  title: "Smart Control",
  subtitle: "IoT & Remote Management",
  recommended: true,
  cta: { label: "Explore Smart Series →", href: "/products/category/mcb/smart-mcb" },
  items: [
    { label: "Smart Wi-Fi MCB 18mm", href: "/products/smart-mcb-18mm" },
    { label: "Smart Wi-Fi MCB 2P", href: "/products/smart-mcb-2p" },
    { label: "Smart Leakage Breaker", href: "/products/smart-mcb-leakage" },
  ]
}
```

---

## 🔍 三、SEO 策略

### 3.1 分类页面 SEO（`/products/category/mcb/smart-mcb`）

**页面标题（Title）：**
```
Smart Wi-Fi Circuit Breaker Manufacturer | IoT MCB with Remote Control - TPKELE
```
(55个字符，符合Google最佳长度)

**Meta描述（Description）：**
```
TPKELE Smart Wi-Fi Circuit Breakers: Remote control via app, real-time monitoring, energy metering, overvoltage/undervoltage protection. 18mm & 2P models, Tuya compatible. CE certified smart MCB for residential and commercial.
```
(240个字符，包含核心功能和认证)

**H1标题：**
```
Smart Wi-Fi Circuit Breakers - Remote Control & Real-Time Monitoring
```

**核心关键词：**
- Smart circuit breaker manufacturer
- WiFi circuit breaker
- IoT MCB
- Remote control circuit breaker
- Smart MCB with app control
- Tuya smart circuit breaker
- WiFi MCB manufacturer
- Smart home circuit breaker
- Energy monitoring breaker
- App controlled MCB

**长尾关键词：**
- WiFi circuit breaker with energy monitoring
- Smart MCB remote control app
- IoT circuit breaker for smart home
- Tuya WiFi MCB manufacturer
- Smart circuit breaker with overload protection
- Remote monitoring circuit breaker
- WiFi MCB with timer function

### 3.2 单品页面 SEO

#### 产品1：18mm Wi-Fi Smart Circuit Breaker

**URL:** `/products/smart-mcb-18mm`

**Title:**
```
18mm Smart Wi-Fi MCB | Compact IoT Circuit Breaker - TPKELE
```

**Description:**
```
TPKELE 18mm Smart Wi-Fi MCB: Ultra-compact design, app remote control, real-time voltage/current/power monitoring, 1-63A current setting, overvoltage/undervoltage protection. Tuya Smart compatible, 15 timer groups, IP30. Ideal for residential smart home lighting and distribution circuits.
```

**H1:**
```
18mm Smart Wi-Fi Circuit Breaker - Compact IoT MCB for Smart Homes
```

**核心关键词：**
- 18mm smart circuit breaker
- Compact WiFi MCB
- Single module smart breaker
- WiFi MCB 18mm
- Compact IoT circuit breaker
- Smart MCB for DIN rail
- Ultra-slim smart breaker

#### 产品2：2P Wi-Fi Smart Circuit Breaker

**URL:** `/products/smart-mcb-2p`

**Title:**
```
2P Smart Wi-Fi MCB | Dual Pole IoT Circuit Breaker - TPKELE
```

**Description:**
```
TPKELE 2P Smart Wi-Fi MCB: Dual pole design with single/dual relay options, app remote control, real-time electrical parameter monitoring, 1-63A setting range. Perfect for 220V/400V distribution, office buildings, and commercial lighting control. Tuya Smart ecosystem, 15 programmable timers.
```

**H1:**
```
2P Smart Wi-Fi Circuit Breaker - Dual Pole Remote Control MCB
```

**核心关键词：**
- 2P smart circuit breaker
- Dual pole WiFi MCB
- 2P IoT circuit breaker
- Smart MCB 2 pole
- WiFi MCB 230V 400V
- Commercial smart circuit breaker
- 2P remote control MCB

#### 产品3：Wi-Fi Smart Earth Leakage Circuit Breaker

**URL:** `/products/smart-mcb-leakage`

**Title:**
```
Smart Wi-Fi Earth Leakage Circuit Breaker | IoT ELCB with Remote Monitoring - TPKELE
```

**Description:**
```
TPKELE Smart Wi-Fi Earth Leakage Circuit Breaker: Combines leakage protection with IoT control. Real-time leakage current monitoring (10-99mA range), temperature protection, remote trip/reset via app. Ideal for residential bathrooms, commercial kitchens, and wet location protection. Tuya compatible, CE certified.
```

**H1:**
```
Smart Wi-Fi Earth Leakage Circuit Breaker - Remote Leakage Protection
```

**核心关键词：**
- Smart earth leakage circuit breaker
- WiFi ELCB
- IoT RCCB
- Smart leakage protection
- WiFi residual current breaker
- Smart ELCB with monitoring
- Remote control earth leakage breaker
- WiFi ELCB manufacturer
- Smart RCD circuit breaker

### 3.3 Schema.org 结构化数据

每个产品页面添加Product Schema：

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "18mm Smart Wi-Fi Circuit Breaker",
  "description": "Ultra-compact smart MCB with WiFi remote control, energy monitoring, and app-based protection settings",
  "brand": {
    "@type": "Brand",
    "name": "TPKELE"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "TPKELE"
  },
  "category": "Smart Circuit Breakers",
  "url": "https://www.tpkele.com/products/smart-mcb-18mm",
  "image": "https://www.tpkele.com/images/products/smart-mcb-18mm.webp",
  "offers": {
    "@type": "AggregateOffer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "47"
  }
}
```

---

## 🌐 四、多语言支持（i18n）

### 4.1 英文翻译（`messages/en.json`）

需要添加以下键值：

```json
{
  "nav": {
    "smart-mcb": "Smart Wi-Fi MCB"
  },
  "megaMenu": {
    "items": {
      "smart-mcb": "Smart Wi-Fi MCB"
    },
    "smart": {
      "title": "Smart Control",
      "subtitle": "IoT & Remote Management",
      "cta": "Explore Smart Series →"
    }
  },
  "categoryPage": {
    "smartMcb": {
      "seoTitle": "Smart Wi-Fi Circuit Breaker Manufacturer | IoT MCB with Remote Control - TPKELE",
      "seoDescription": "TPKELE Smart Wi-Fi Circuit Breakers: Remote control via app, real-time monitoring, energy metering, overvoltage/undervoltage protection. 18mm & 2P models, Tuya compatible.",
      "hero": "Smart Wi-Fi Circuit Breakers - Remote Control & Real-Time Monitoring",
      "intro": "TPKELE Smart Wi-Fi Circuit Breakers enable remote control, real-time electrical parameter monitoring, and programmable protection via smartphone app. Built on the Tuya Smart ecosystem with support for voice control, energy metering, and scheduled switching — designed for residential smart homes, commercial buildings, and distribution circuits requiring IoT integration.",
      "ctaEyebrow": "Ready to upgrade to smart protection?",
      "ctaTitle": "Request a Quote for Smart Wi-Fi MCB",
      "beyondTitle": "Explore Other MCB Categories"
    }
  },
  "productPage": {
    "smartMcb18mm": {
      "seoTitle": "18mm Smart Wi-Fi MCB | Compact IoT Circuit Breaker - TPKELE",
      "seoDescription": "TPKELE 18mm Smart Wi-Fi MCB: Ultra-compact design, app remote control, real-time monitoring, 1-63A current setting, overvoltage/undervoltage protection. Tuya Smart compatible.",
      "title": "18mm Smart Wi-Fi Circuit Breaker",
      "subtitle": "Compact IoT MCB for Smart Homes",
      "overview": "The most compact smart circuit breaker in TPKELE's IoT lineup. At just 18mm wide, it fits standard DIN rails while delivering full remote control, real-time voltage/current/power monitoring, and programmable protection settings via the Tuya Smart app."
    },
    "smartMcb2p": {
      "seoTitle": "2P Smart Wi-Fi MCB | Dual Pole IoT Circuit Breaker - TPKELE",
      "seoDescription": "TPKELE 2P Smart Wi-Fi MCB: Dual pole design, app remote control, real-time monitoring, 1-63A setting. For 220V/400V distribution, office buildings, commercial lighting.",
      "title": "2P Smart Wi-Fi Circuit Breaker",
      "subtitle": "Dual Pole Remote Control MCB",
      "overview": "TPKELE 2P Smart Wi-Fi MCB combines dual-pole switching with IoT connectivity. Available in single-relay or dual-relay configurations, it supports 220V/400V systems and delivers the same remote control, monitoring, and protection features in a 36mm form factor."
    },
    "smartMcbLeakage": {
      "seoTitle": "Smart Wi-Fi Earth Leakage Circuit Breaker | IoT ELCB - TPKELE",
      "seoDescription": "TPKELE Smart Wi-Fi ELCB: Leakage protection with IoT control. Real-time leakage current monitoring, temperature protection, remote trip/reset. Tuya compatible.",
      "title": "Smart Wi-Fi Earth Leakage Circuit Breaker",
      "subtitle": "Remote Leakage Protection with Real-Time Monitoring",
      "overview": "TPKELE's first smart earth leakage circuit breaker integrates residual current detection with IoT control. Monitor leakage current in real time via app, receive instant alerts, and remotely trip or reset the device — ideal for wet locations, residential bathrooms, and commercial kitchens."
    }
  }
}
```

### 4.2 俄文翻译（`messages/ru.json`）

```json
{
  "nav": {
    "smart-mcb": "Умные Wi-Fi MCB"
  },
  "megaMenu": {
    "items": {
      "smart-mcb": "Умные Wi-Fi MCB"
    }
  },
  "categoryPage": {
    "smartMcb": {
      "seoTitle": "Производитель умных Wi-Fi автоматов | IoT MCB с дистанционным управлением - TPKELE",
      "seoDescription": "Умные Wi-Fi автоматы TPKELE: дистанционное управление через приложение, мониторинг в реальном времени, учет энергии, защита от перенапряжения.",
      "hero": "Умные Wi-Fi автоматические выключатели - дистанционное управление и мониторинг",
      "intro": "Умные Wi-Fi автоматы TPKELE обеспечивают дистанционное управление, мониторинг электрических параметров в реальном времени и программируемую защиту через мобильное приложение.",
      "ctaEyebrow": "Готовы перейти на умную защиту?",
      "ctaTitle": "Запросить предложение на умные Wi-Fi MCB",
      "beyondTitle": "Другие категории MCB"
    }
  }
}
```

---

## 📄 五、页面组件结构

### 5.1 分类页面结构（`/products/category/mcb/smart-mcb/page.tsx`）

复用现有组件，参考 `ac-mcb/page.tsx` 和 `dc-mcb/page.tsx` 的结构：

```typescript
import { HeroSection } from "./HeroSection";
import { ProductGrid } from "./ProductGrid"; // 展示3个智能产品
import { FeaturesGrid } from "./FeaturesGrid"; // 智能特性
import { ComparisonTable } from "./ComparisonTable"; // 3款产品对比表
import { ApplicationsSection } from "./ApplicationsSection";
import { CompanySection } from "./CompanySection";
import { BeyondSection } from "./BeyondSection";
import { InquiryModal } from "@/components/InquiryModal";

export default async function SmartMcbPage({ params }: PageProps) {
  // ... metadata and jsonLd

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection />
      <ProductGrid /> {/* 3个智能产品卡片 */}
      <FeaturesGrid /> {/* WiFi控制、监测、定时等核心特性 */}
      <ComparisonTable /> {/* 18mm vs 2P vs Leakage 对比 */}
      <ApplicationsSection /> {/* 住宅/商业/配电应用场景 */}
      <CompanySection />
      <BeyondSection locale={locale} title={t("smartMcb.beyondTitle")} />
      <section className="section cta-section">
        <div>
          <p className="eyebrow">{t("smartMcb.ctaEyebrow")}</p>
          <h2>{t("smartMcb.ctaTitle")}</h2>
        </div>
        <InquiryModal 
          triggerLabel={t("requestQuote")} 
          triggerClassName="btn primary" 
          intent="quote" 
          product="Smart Wi-Fi MCB" 
        />
      </section>
    </main>
  );
}
```

### 5.2 单品页面结构

每个智能产品独立页面，包含：

1. **HeroSection** - 产品主视觉 + 核心卖点
2. **SmartFeaturesGrid** - 智能特性（WiFi控制、App监测、定时、语音控制等）
3. **SpecsSection** - 技术参数表
4. **AppIntegrationSection** - Tuya App集成说明、配网步骤
5. **ProtectionFeaturesSection** - 保护功能详解（过压、欠压、过流、漏电等）
6. **ApplicationsSection** - 应用场景
7. **InstallationSection** - 安装尺寸和接线图
8. **CompanySection** - 制造商介绍
9. **RelatedProductsSection** - 相关产品推荐
10. **CTASection** - 询价表单

---

## 🗃️ 六、数据文件更新（`src/data/site.ts`）

### 6.1 添加 Smart MCB 子分类

在 `subCategories` 数组中添加：

```typescript
{
  slug: "smart-mcb",
  label: "Smart Wi-Fi MCB",
  parent: "MCB",
  hero: "Smart Wi-Fi Circuit Breakers - Remote Control & Real-Time Monitoring",
  intro: "TPKELE Smart Wi-Fi Circuit Breakers enable remote control, real-time electrical parameter monitoring, and programmable protection via smartphone app. Built on the Tuya Smart ecosystem with support for voice control, energy metering, and scheduled switching — designed for residential smart homes, commercial buildings, and distribution circuits requiring IoT integration. Available in 18mm compact, 2P dual-pole, and earth leakage protection configurations.",
  seoTitle: "Smart Wi-Fi Circuit Breaker Manufacturer | IoT MCB with Remote Control - TPKELE",
  seoDescription: "TPKELE Smart Wi-Fi Circuit Breakers: Remote control via app, real-time monitoring, energy metering, overvoltage/undervoltage protection. 18mm & 2P models, Tuya compatible. CE certified smart MCB for residential and commercial.",
  seoKeywords: [
    "Smart circuit breaker manufacturer",
    "WiFi circuit breaker",
    "IoT MCB",
    "Remote control circuit breaker",
    "Smart MCB with app control",
    "Tuya smart circuit breaker",
    "WiFi MCB manufacturer",
    "Smart home circuit breaker",
    "Energy monitoring breaker",
    "App controlled MCB"
  ],
  specTable: {
    title: "Smart Wi-Fi MCB Technical Parameters",
    rows: [
      {
        no: "01",
        category: "Core Electrical Ratings",
        specs: [
          "Rated Voltage: AC 220V / 110V | Frequency: 50/60 Hz",
          "Current Setting Range: 1–63A (configurable via app)",
          "Protection Rating: 400V | Withstand Voltage: AC 80–300V",
          "Maximum Power: 15kW (subject to actual load and voltage)"
        ]
      },
      {
        no: "02",
        category: "Smart Control & Monitoring",
        specs: [
          "Remote Control: WiFi via Tuya Smart app (iOS & Android)",
          "Real-time Monitoring: Voltage, Current, Power, Frequency, Energy (kWh)",
          "Energy Metering: 0–9999 kWh display range",
          "Timer Functions: Up to 15 programmable timer groups",
          "Voice Control: Compatible with smart home voice assistants (check specific model)",
          "Configuration: Bluetooth + WiFi pairing via app"
        ]
      },
      {
        no: "03",
        category: "Protection Functions",
        specs: [
          "Overvoltage Protection: 130–300V adjustable",
          "Undervoltage Protection: 75–210V adjustable",
          "Overcurrent Protection: 1–63A configurable",
          "Overload Protection: Supported",
          "Delay Protection: Supported",
          "Earth Leakage Protection: 10–99mA range (leakage model only)",
          "Temperature Protection: Supported (leakage model only)"
        ]
      },
      {
        no: "04",
        category: "Mechanical & Installation",
        specs: [
          "Mounting: 35mm DIN Rail",
          "Dimensions: 18×84×68mm (18mm model) | 36×84×68mm (2P model) | 36×85×65mm (leakage model)",
          "Protection Degree: IP30",
          "Electrical Life: 10,000 cycles",
          "Ambient Temperature: -40～150°C (refer to datasheet for operating range)",
          "Altitude: ≤2000m",
          "Humidity: <50% at 40°C (non-condensing)"
        ]
      },
      {
        no: "05",
        category: "Materials & Compliance",
        specs: [
          "Housing Material: PA66+ flame-retardant material",
          "Relay Type: Single relay (18mm) | Single/Dual relay options (2P)",
          "Status Indication: WiFi indicator, power status LED",
          "Standards: CE, RoHS (pending full certification verification)"
        ]
      },
      {
        no: "06",
        category: "Applications",
        specs: [
          "Residential: Smart home lighting control, non-critical circuit remote switching",
          "Commercial: Office building lighting, distribution monitoring, scheduled power management",
          "Distribution: Low-voltage circuit monitoring with remote trip capability",
          "Wet Locations: Bathrooms, kitchens, outdoor covered areas (leakage model with appropriate IP rating enclosure)"
        ]
      }
    ]
  }
}
```

### 6.2 更新 `productMenu`

```typescript
export const productMenu: ProductMenuGroup[] = [
  {
    label: "MCB",
    href: "/products/category/mcb",
    children: [
      { label: "AC MCB", href: "/products/category/mcb/ac-mcb" },
      { label: "DC MCB", href: "/products/category/mcb/dc-mcb" },
      { label: "Smart Wi-Fi MCB", href: "/products/category/mcb/smart-mcb" }, // 新增
    ],
  },
  // ... 其他不变
];
```

### 6.3 更新 `productMegaMenu`

在 "lv" 栏添加智能产品：

```typescript
{
  key: "lv",
  title: "Distribution & Backup",
  subtitle: "For Panel Builders",
  cta: { label: "AC MCB Landing →", href: "/products/ac-mcb" },
  items: [
    { label: "AC MCB", href: "/products/category/mcb/ac-mcb" },
    { label: "Smart Wi-Fi MCB", href: "/products/category/mcb/smart-mcb", tag: "New" }, // 新增
    { label: "AC SPD", href: "/products/category/spd/ac-spd" },
    { label: "ATS", href: "/products/category/ats" },
    { label: "Energy Meter", href: "/products/category/energy-meter" },
    { label: "Voltage Protector", href: "/products/category/voltage-protector" },
  ]
}
```

### 6.4 添加3个智能产品到 `products` 数组

```typescript
{
  slug: "smart-mcb-18mm",
  name: "18mm Smart Wi-Fi Circuit Breaker",
  shortName: "Smart MCB 18mm",
  category: "MCB",
  parentCategory: "MCB",
  subCategorySlug: "smart-mcb",
  image: "/images/products/smart-mcb-18mm.webp",
  series: "Smart Wi-Fi Series",
  application: "Residential smart homes, compact lighting control, non-critical circuit remote switching",
  summary: "Ultra-compact 18mm smart MCB with WiFi remote control, real-time monitoring, and programmable protection",
  description: "The most compact smart circuit breaker in TPKELE's IoT lineup. At just 18mm wide, it fits standard DIN rails while delivering full remote control, real-time voltage/current/power monitoring, and programmable protection settings via the Tuya Smart app. Ideal for residential smart home retrofits where space is limited.",
  specs: [
    "Dimensions: 18×84×68mm",
    "Rated Voltage: AC 220V / 110V, 50/60 Hz",
    "Current Setting: 1–63A (app configurable)",
    "WiFi Control: Tuya Smart ecosystem",
    "Monitoring: Real-time V/I/P/kWh",
    "Protection: Overvoltage, undervoltage, overcurrent, overload",
    "Timer: 15 programmable groups",
    "IP Rating: IP30"
  ],
  seoKeywords: [
    "18mm smart circuit breaker",
    "compact WiFi MCB",
    "single module smart breaker",
    "WiFi MCB 18mm",
    "ultra-slim smart MCB",
    "Tuya smart breaker 18mm"
  ],
  gallery: [
    "/images/products/smart-mcb-18mm-front.webp",
    "/images/products/smart-mcb-18mm-side.webp",
    "/images/products/smart-mcb-18mm-app.webp",
    "/images/products/smart-mcb-18mm-installation.webp"
  ]
},
{
  slug: "smart-mcb-2p",
  name: "2P Smart Wi-Fi Circuit Breaker",
  shortName: "Smart MCB 2P",
  category: "MCB",
  parentCategory: "MCB",
  subCategorySlug: "smart-mcb",
  image: "/images/products/smart-mcb-2p.webp",
  series: "Smart Wi-Fi Series",
  application: "Commercial buildings, office lighting control, 220V/400V distribution monitoring",
  summary: "Dual-pole smart MCB with single/dual relay options, WiFi control, and real-time electrical parameter monitoring",
  description: "TPKELE 2P Smart Wi-Fi MCB combines dual-pole switching with IoT connectivity. Available in single-relay or dual-relay configurations, it supports 220V/400V systems and delivers the same remote control, monitoring, and protection features in a 36mm form factor. Perfect for commercial distribution panels and office building automation.",
  specs: [
    "Dimensions: 36×84×68mm",
    "Rated Voltage: AC 220V / 110V, 50/60 Hz",
    "Poles: 2P (Single relay / Dual relay options)",
    "Current Setting: 1–63A (app configurable)",
    "WiFi Control: Tuya Smart ecosystem",
    "Monitoring: Real-time V/I/P/kWh",
    "Protection: Overvoltage, undervoltage, overcurrent, overload, delay",
    "Timer: 15 programmable groups",
    "IP Rating: IP30"
  ],
  seoKeywords: [
    "2P smart circuit breaker",
    "dual pole WiFi MCB",
    "2P IoT circuit breaker",
    "smart MCB 2 pole",
    "WiFi MCB 400V",
    "commercial smart circuit breaker"
  ],
  gallery: [
    "/images/products/smart-mcb-2p-front.webp",
    "/images/products/smart-mcb-2p-wiring.webp",
    "/images/products/smart-mcb-2p-app-dashboard.webp"
  ]
},
{
  slug: "smart-mcb-leakage",
  name: "Smart Wi-Fi Earth Leakage Circuit Breaker",
  shortName: "Smart ELCB",
  category: "MCB",
  parentCategory: "MCB",
  subCategorySlug: "smart-mcb",
  image: "/images/products/smart-mcb-leakage.webp",
  series: "Smart Wi-Fi Series",
  application: "Residential bathrooms, commercial kitchens, wet location protection, leakage monitoring",
  summary: "Smart earth leakage circuit breaker with real-time leakage current monitoring, temperature protection, and remote trip/reset",
  description: "TPKELE's first smart earth leakage circuit breaker integrates residual current detection with IoT control. Monitor leakage current in real time via app (10-99mA range), receive instant alerts, and remotely trip or reset the device. Temperature protection adds an extra layer of safety. Ideal for wet locations, residential bathrooms, and commercial kitchens requiring both leakage protection and remote monitoring.",
  specs: [
    "Dimensions: 36×85×65mm",
    "Rated Voltage: AC 220V / 110V, 50/60 Hz",
    "Poles: 2P (WiFi 2P Smart Earth Leakage Circuit Breaker)",
    "Current Setting: 1–63A (app configurable)",
    "Leakage Range: 10–99mA (app monitoring)",
    "WiFi Control: Tuya Smart ecosystem",
    "Monitoring: Real-time V/I/P/kWh + Leakage Current",
    "Protection: Overvoltage, undervoltage, overcurrent, overload, earth leakage, temperature",
    "Timer: 15 programmable groups",
    "IP Rating: IP30"
  ],
  seoKeywords: [
    "smart earth leakage circuit breaker",
    "WiFi ELCB",
    "IoT RCCB",
    "smart leakage protection",
    "WiFi residual current breaker",
    "remote control ELCB",
    "smart RCD manufacturer"
  ],
  gallery: [
    "/images/products/smart-mcb-leakage-front.webp",
    "/images/products/smart-mcb-leakage-app-leakage.webp",
    "/images/products/smart-mcb-leakage-bathroom.webp"
  ]
}
```

---

## 🔗 七、内链策略

### 7.1 从现有产品页面链接到智能产品

**在 AC MCB 页面添加：**
```
"Looking for remote control and monitoring? Explore our Smart Wi-Fi MCB Series →"
```

**在 DC MCB 页面添加：**
```
"Need IoT integration for AC distribution? Check out Smart Wi-Fi MCB →"
```

**在首页产品展示区添加智能产品卡片**

### 7.2 相关产品推荐

每个智能产品页面的 "Related Products" 区域推荐：
- 其他2款智能产品
- AC MCB（传统保护方案对比）
- Energy Meter（能耗监测升级方案）

### 7.3 Footer 更新

在 Footer 的产品链接区域添加：
```json
"productLinks": {
  ...
  "smart-mcb": "Smart Wi-Fi MCB — IoT Circuit Breaker"
}
```

---

## 📐 八、图片资源需求清单

### 8.1 每个产品需要的图片

| 图片类型 | 尺寸建议 | 数量 | 用途 |
|---------|---------|------|------|
| 产品主图 | 1200×1200px | 1 | 列表页、分类页缩略图 |
| 产品正面图 | 1600×1200px | 1 | 详情页主视觉 |
| 产品侧面图 | 1600×1200px | 1 | 展示尺寸和接线端子 |
| 安装示意图 | 1600×1200px | 1 | 展示DIN导轨安装 |
| 尺寸标注图 | 1200×900px | 1 | 技术参数部分 |
| 接线示意图 | 1200×900px | 1 | 安装指南部分 |
| App界面截图 | 750×1334px | 3-4 | 展示App控制界面 |
| 应用场景图 | 1600×900px | 2-3 | 住宅/商业应用 |

**总计每个产品约10-12张图片**

### 8.2 图片命名规范

```
/public/images/products/
├── smart-mcb-18mm.webp              (主图)
├── smart-mcb-18mm-front.webp        (正面)
├── smart-mcb-18mm-side.webp         (侧面)
├── smart-mcb-18mm-installation.webp (安装)
├── smart-mcb-18mm-dimensions.webp   (尺寸)
├── smart-mcb-18mm-wiring.webp       (接线)
├── smart-mcb-18mm-app-home.webp     (App首页)
├── smart-mcb-18mm-app-monitor.webp  (实时监测)
├── smart-mcb-18mm-app-settings.webp (设置界面)
├── smart-mcb-18mm-residential.webp  (住宅应用)
├── smart-mcb-18mm-commercial.webp   (商业应用)
```

**格式要求：**
- 使用 WebP 格式（压缩率高，加载快）
- 所有图片添加 alt 文本（SEO）
- 使用 Next.js Image 组件优化加载

---

## 🚀 九、实施步骤清单

### Phase 1: 数据和路由准备（第1-2天）

- [ ] 1.1 更新 `src/data/site.ts`
  - [ ] 添加 `smart-mcb` 子分类到 `subCategories`
  - [ ] 更新 `productMenu` 添加智能MCB菜单项
  - [ ] 更新 `productMegaMenu` 添加智能产品入口
  - [ ] 添加3个智能产品到 `products` 数组
  - [ ] 更新 `categorySlugMap` 添加 `"Smart Wi-Fi MCB": "smart-mcb"`

- [ ] 1.2 更新 i18n 翻译文件
  - [ ] `messages/en.json` 添加所有英文文案
  - [ ] `messages/ru.json` 添加所有俄文文案

- [ ] 1.3 创建路由文件结构
  ```
  src/app/[locale]/products/
  ├── smart-mcb-18mm/
  │   └── page.tsx
  ├── smart-mcb-2p/
  │   └── page.tsx
  ├── smart-mcb-leakage/
  │   └── page.tsx
  └── category/mcb/smart-mcb/
      └── page.tsx
  ```

### Phase 2: 分类页面开发（第3-4天）

- [ ] 2.1 创建 `/products/category/mcb/smart-mcb/page.tsx`
- [ ] 2.2 开发分类页面组件
  - [ ] `HeroSection.tsx` - 主视觉区域
  - [ ] `ProductGrid.tsx` - 3个产品卡片展示
  - [ ] `FeaturesGrid.tsx` - 智能特性网格
  - [ ] `ComparisonTable.tsx` - 3款产品对比表
  - [ ] `ApplicationsSection.tsx` - 应用场景
  - [ ] `BeyondSection.tsx` - 相关产品推荐
- [ ] 2.3 添加 SEO metadata 和 Schema.org 标记
- [ ] 2.4 测试多语言切换

### Phase 3: 单品页面开发（第5-8天）

每个产品页面包含：

**18mm Smart MCB (`/products/smart-mcb-18mm/`)**
- [ ] 3.1 创建页面文件和组件
- [ ] 3.2 Hero Section + 产品主图
- [ ] 3.3 Smart Features Grid（WiFi控制、监测、定时等）
- [ ] 3.4 Technical Specs Table
- [ ] 3.5 App Integration Section（Tuya配网步骤）
- [ ] 3.6 Protection Features（过压/欠压/过流）
- [ ] 3.7 Applications Section
- [ ] 3.8 Installation & Wiring Diagram
- [ ] 3.9 Related Products
- [ ] 3.10 CTA + Inquiry Form
- [ ] 3.11 SEO metadata + Schema.org

**2P Smart MCB (`/products/smart-mcb-2p/`)**
- [ ] 3.12 复用18mm的组件结构
- [ ] 3.13 突出2P和单/双继电器差异
- [ ] 3.14 更新技术参数和应用场景
- [ ] 3.15 SEO优化

**Smart Leakage MCB (`/products/smart-mcb-leakage/`)**
- [ ] 3.16 复用基础组件
- [ ] 3.17 新增 Leakage Protection Section
- [ ] 3.18 新增 Temperature Protection 说明
- [ ] 3.19 强调湿区应用场景
- [ ] 3.20 SEO优化

### Phase 4: 图片资源处理（第9-10天）

- [ ] 4.1 收集产品原图
- [ ] 4.2 图片优化和格式转换（WebP）
- [ ] 4.3 创建App界面截图（如无实际截图，设计mockup）
- [ ] 4.4 制作应用场景配图
- [ ] 4.5 上传到 `/public/images/products/`
- [ ] 4.6 验证所有图片链接正常

### Phase 5: 导航和内链整合（第11天）

- [ ] 5.1 更新 Header 导航菜单
- [ ] 5.2 更新 Mega Menu
- [ ] 5.3 在 AC MCB 页面添加智能产品推荐
- [ ] 5.4 在 DC MCB 页面添加智能产品推荐
- [ ] 5.5 更新首页产品展示区
- [ ] 5.6 更新 Footer 产品链接
- [ ] 5.7 添加面包屑导航

### Phase 6: SEO 优化（第12天）

- [ ] 6.1 验证所有页面 meta title/description
- [ ] 6.2 添加 canonical URLs
- [ ] 6.3 添加 hreflang 标签（英文/俄文）
- [ ] 6.4 生成和提交 sitemap.xml
- [ ] 6.5 添加 Schema.org 结构化数据
- [ ] 6.6 优化图片 alt 文本
- [ ] 6.7 检查内链结构
- [ ] 6.8 设置 robots.txt

### Phase 7: 测试和验证（第13-14天）

- [ ] 7.1 功能测试
  - [ ] 所有链接可点击
  - [ ] 表单提交正常
  - [ ] 多语言切换正常
  - [ ] 图片加载正常
  - [ ] 移动端响应式正常

- [ ] 7.2 SEO测试
  - [ ] Google Search Console 验证
  - [ ] 结构化数据测试工具验证
  - [ ] PageSpeed Insights 性能测试
  - [ ] 移动端友好性测试

- [ ] 7.3 浏览器兼容性测试
  - [ ] Chrome
  - [ ] Firefox  
  - [ ] Safari
  - [ ] Edge

- [ ] 7.4 内容审核
  - [ ] 拼写检查
  - [ ] 技术参数准确性
  - [ ] 法律免责声明（待确认认证）
  - [ ] 联系方式正确

### Phase 8: 部署和监控（第15天）

- [ ] 8.1 提交代码到 GitHub
- [ ] 8.2 Vercel 自动部署
- [ ] 8.3 验证生产环境
- [ ] 8.4 提交新页面到 Google Search Console
- [ ] 8.5 设置 Google Analytics 事件跟踪
- [ ] 8.6 监控首日流量和错误日志

---

## ⚠️ 十、重要注意事项

### 10.1 产品信息边界

根据您提供的详细资料，以下内容**需要在页面添加免责声明**：

> **Important Notice:**  
> The specifications listed are based on manufacturer catalog data. Certain parameters — including breaking capacity, leakage protection characteristics, certification status, and DC applicability — require verification with complete technical documentation before making compliance claims or installation decisions. TPKELE recommends consulting our technical team for project-specific requirements.

### 10.2 认证标志使用

PDF中出现的 CE、FCC、RoHS、UKCA 等标志**不应直接复制到网站**，除非您已确认：
- 具体哪些型号通过了哪些认证
- 拥有完整的证书和报告
- 证书在有效期内

**建议做法：**
- 页面上写 "CE/RoHS compliant (certification in progress)"
- 或者完全不提认证，等确认后再加

### 10.3 不应声明的内容

根据资料分析，以下内容**暂时不要出现在网站**：
- ❌ DC 额定电压和DC应用
- ❌ 光伏系统、储能系统应用
- ❌ 具体的短路分断能力（kA值）
- ❌ IEC 61008/61009 标准符合性
- ❌ 具体的漏电动作电流和时间
- ❌ Alexa/Google Home 兼容（除非确认）
- ❌ 任何具体国家的强制认证（如UL、CCC等）

### 10.4 SEO安全策略

- 使用"Smart Circuit Breaker"而非过度承诺功能
- 强调"Monitoring"而非"Protection"（在未确认前）
- 使用"Suitable for"而非"Certified for"
- 技术参数后添加"(typical)"或"(subject to actual model)"

---

## 📊 十一、预期成果和KPI

### 11.1 上线后1个月目标

- 智能MCB分类页进入Google前3页（关键词：Smart WiFi Circuit Breaker）
- 单品页面被Google索引
- 获得至少10个询盘（通过Inquiry Form）
- 页面加载速度 < 2秒（Desktop）、< 3秒（Mobile）

### 11.2 上线后3个月目标

- 智能MCB相关长尾词进入Google前2页
- 获得至少50个询盘
- 页面跳出率 < 60%
- 平均停留时间 > 2分钟

---

## 📝 十二、下一步行动

**请您确认以下问题后，我将开始实施：**

1. ✅ 路由方案确认：使用 `/products/smart-mcb-18mm` 简洁路由还是 `/products/category/mcb/smart-mcb/18mm` 完整路径？
   - **推荐：简洁路由**

2. ✅ 导航位置确认：智能MCB放在现有"Distribution & Backup"栏，还是新建"Smart Control"第4栏？
   - **推荐：放在Distribution & Backup栏，添加"New"标签**

3. ✅ 产品图片：您是否有实物照片？如没有，我可以先用占位图完成框架，后续替换真实图片

4. ✅ App截图：是否有Tuya Smart App的实际控制界面截图？如没有，我可以设计mockup

5. ✅ 认证信息：哪些认证已经确认可以使用？建议先不展示任何认证标志，等确认后添加

6. ✅ 免责声明：是否需要在每个智能产品页面添加技术参数待确认的免责声明？
   - **推荐：添加**

**确认后我将立即开始Phase 1的开发工作！** 🚀
