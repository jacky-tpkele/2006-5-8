# TPKELE Resources 优化实施方案

## 📋 执行概述

**目标：** 将Resources从"内容展示"改造为"决策流程系统"  
**原则：** 任务导向 + SEO优化 + 多语言支持 + UI一致性  
**周期：** 分6个Phase执行，每个Phase独立测试和部署

---

## 🎯 核心问题诊断

### 当前问题
1. ❌ **信息架构混乱**：6个不同性质的模块平铺为同级菜单
2. ❌ **URL结构不统一**：`/resources/technical-guides` vs `/electric-standards-database` vs `/electrical-international-standards-inquiry-center`
3. ❌ **关键页面未纳入sitemap**：Technical Guides、Standards Database、Market Access Advisor均缺失
4. ❌ **页面间缺少流程引导**：用户看完就走，没有"Next Step"
5. ❌ **SEO优化不足**：metadata不完整、内链不够、结构化数据缺失

### 用户视角问题
**用户不是按"内容类型"思考，而是按"任务"思考：**
- ❌ 当前：Technical Guides / Market Access Advisor / Standards Database（用户：我该点哪个？）
- ✅ 应该：我要选产品 / 我要查合规 / 我要采购（任务清晰）

---

## 📐 新架构设计

### Resources 三层架构

```
RESOURCES
│
├── 🔧 ENGINEERING (工程决策)
│   ├─ Technical Guides          (怎么选产品)
│   ├─ Application Solutions     (怎么用产品)
│   └─ Engineering Tools         (未来：计算器)
│
├── ✓ COMPLIANCE (合规验证)
│   ├─ Market Access Advisor     (国家要求)
│   └─ Standards Database        (技术标准)
│
└─ 📦 BUYING & SUPPORT (采购支持)
    ├─ Buyer Trade Support       (采购准备)
    ├─ FAQ Knowledge Base        (常见问题)
    └─ Ask TPKELE Engineer       (联系)
```

### URL统一规划

#### 目标结构（SEO优化）
```
/resources                                    (资源中心)
/resources/engineering                        (工程板块入口，新增)
/resources/technical-guides                   (保持不变)
/guides/[slug]                                (保持简洁，不嵌套)
/resources/application-solutions              (新增独立页面)

/resources/compliance                         (合规板块入口，新增)
/resources/market-access-advisor              (统一到resources下，301重定向)
/resources/standards-database                 (统一到resources下，301重定向)

/resources/buyer-support                      (改名，301重定向)
/resources/faq                                (新增独立页面)
```

#### 需要301重定向
```
旧URL → 新URL

/electrical-international-standards-inquiry-center 
  → /resources/market-access-advisor

/electric-standards-database 
  → /resources/standards-database

/resources/buyer-trade-support 
  → /resources/buyer-support
```

---

## 🚀 Phase 1: 重构导航架构

### 1.1 更新 site.ts - resourcesMenu

**文件：** `src/data/site.ts`

```typescript
// 新的Resources菜单结构
export const resourcesMenu = [
  // Engineering Group
  {
    label: "Engineering",
    type: "group",
    children: [
      { label: "Technical Guides", href: "/resources/technical-guides", desc: "Product selection & sizing guides" },
      { label: "Application Solutions", href: "/resources/application-solutions", desc: "System-level design guidance" },
    ]
  },
  
  // Compliance Group
  {
    label: "Compliance",
    type: "group",
    children: [
      { label: "Market Access Advisor", href: "/resources/market-access-advisor", desc: "Country requirements & certification" },
      { label: "Standards Database", href: "/resources/standards-database", desc: "IEC & UL technical references" },
    ]
  },
  
  // Buying & Support Group
  {
    label: "Buying & Support",
    type: "group",
    children: [
      { label: "Buyer Trade Support", href: "/resources/buyer-support", desc: "OEM, documents & trade terms" },
      { label: "FAQ Knowledge Base", href: "/resources/faq", desc: "Product & order questions" },
    ]
  }
];

// 为了向后兼容，保留旧格式的flat menu（用于旧代码）
export const resourcesMenuFlat = [
  { label: "Technical Guides", href: "/resources/technical-guides" },
  { label: "Market Access Advisor", href: "/resources/market-access-advisor" },
  { label: "Buyer Trade Support", href: "/resources/buyer-support" },
  { label: "Standards Database", href: "/resources/standards-database" },
  { label: "Application Solutions", href: "/resources/application-solutions" },
  { label: "FAQ Knowledge Base", href: "/resources/faq" },
];
```

### 1.2 更新 Header.tsx - Resources Mega Menu

**文件：** `src/components/Header.tsx`

在 `/resources` 导航项处，改为Mega Menu（参考Products的Mega Menu结构）：

```tsx
if (item.href === "/resources") {
  return (
    <div className="nav-dropdown" key={item.href}>
      <Link 
        className={active ? "active" : undefined} 
        href={item.href} 
        onClick={() => setMenuOpen(false)}
      >
        {navLabel(item.href, item.label)}
      </Link>
      
      <div className="resources-mega-menu">
        {/* Engineering Column */}
        <div className="mega-col mega-col-engineering">
          <div className="mega-col-head">
            <span className="mega-col-icon">🔧</span>
            <span className="mega-col-title">Engineering</span>
          </div>
          <span className="mega-col-sub">Select & Design</span>
          <ul className="mega-col-list">
            <li>
              <Link href="/resources/technical-guides" onClick={() => setMenuOpen(false)}>
                <div>
                  <span className="mega-item-label">Technical Guides</span>
                  <span className="mega-item-desc">Product selection & sizing</span>
                </div>
                <span className="mega-arrow">→</span>
              </Link>
            </li>
            <li>
              <Link href="/resources/application-solutions" onClick={() => setMenuOpen(false)}>
                <div>
                  <span className="mega-item-label">Application Solutions</span>
                  <span className="mega-item-desc">System-level designs</span>
                </div>
                <span className="mega-arrow">→</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Compliance Column */}
        <div className="mega-col mega-col-compliance">
          <div className="mega-col-head">
            <span className="mega-col-icon">✓</span>
            <span className="mega-col-title">Compliance</span>
          </div>
          <span className="mega-col-sub">Standards & Markets</span>
          <ul className="mega-col-list">
            <li>
              <Link href="/resources/market-access-advisor" onClick={() => setMenuOpen(false)}>
                <div>
                  <span className="mega-item-label">Market Access Advisor</span>
                  <span className="mega-item-desc">Country requirements</span>
                </div>
                <span className="mega-arrow">→</span>
              </Link>
            </li>
            <li>
              <Link href="/resources/standards-database" onClick={() => setMenuOpen(false)}>
                <div>
                  <span className="mega-item-label">Standards Database</span>
                  <span className="mega-item-desc">IEC & UL references</span>
                </div>
                <span className="mega-arrow">→</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Buying & Support Column */}
        <div className="mega-col mega-col-buying">
          <div className="mega-col-head">
            <span className="mega-col-icon">📦</span>
            <span className="mega-col-title">Buying & Support</span>
          </div>
          <span className="mega-col-sub">Procurement & Help</span>
          <ul className="mega-col-list">
            <li>
              <Link href="/resources/buyer-support" onClick={() => setMenuOpen(false)}>
                <div>
                  <span className="mega-item-label">Buyer Trade Support</span>
                  <span className="mega-item-desc">OEM & documents</span>
                </div>
                <span className="mega-arrow">→</span>
              </Link>
            </li>
            <li>
              <Link href="/resources/faq" onClick={() => setMenuOpen(false)}>
                <div>
                  <span className="mega-item-label">FAQ Knowledge Base</span>
                  <span className="mega-item-desc">Quick answers</span>
                </div>
                <span className="mega-arrow">→</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
```

### 1.3 添加 Resources Mega Menu CSS

**文件：** `src/app/globals.css` 或 `src/styles/header.css`

```css
/* Resources Mega Menu */
.resources-mega-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: none;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  min-width: 900px;
  z-index: 1000;
  margin-top: 0.5rem;
}

.nav-dropdown:hover .resources-mega-menu {
  display: grid;
}

.resources-mega-menu .mega-col {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.resources-mega-menu .mega-col-head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.resources-mega-menu .mega-col-icon {
  font-size: 1.25rem;
}

.resources-mega-menu .mega-col-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
}

.resources-mega-menu .mega-col-sub {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.resources-mega-menu .mega-col-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.resources-mega-menu .mega-col-list li a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  border-radius: 6px;
  transition: background-color 0.2s;
  text-decoration: none;
  color: #374151;
}

.resources-mega-menu .mega-col-list li a:hover {
  background-color: #f3f4f6;
}

.resources-mega-menu .mega-item-label {
  display: block;
  font-weight: 500;
  font-size: 0.9375rem;
  color: #111827;
}

.resources-mega-menu .mega-item-desc {
  display: block;
  font-size: 0.8125rem;
  color: #6b7280;
  margin-top: 0.125rem;
}

.resources-mega-menu .mega-arrow {
  color: #3b82f6;
  font-weight: 500;
}

/* Mobile Responsive */
@media (max-width: 1024px) {
  .resources-mega-menu {
    position: static;
    transform: none;
    min-width: auto;
    grid-template-columns: 1fr;
    box-shadow: none;
    border: none;
    padding: 1rem;
  }
  
  .nav-dropdown .resources-mega-menu {
    display: grid;
  }
}
```

---

## 🔄 Phase 2: URL统一与301重定向

### 2.1 创建301重定向配置

**文件：** `next.config.mjs`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Market Access Advisor 301
      {
        source: '/electrical-international-standards-inquiry-center',
        destination: '/resources/market-access-advisor',
        permanent: true,
      },
      {
        source: '/:locale/electrical-international-standards-inquiry-center',
        destination: '/:locale/resources/market-access-advisor',
        permanent: true,
      },
      
      // Standards Database 301
      {
        source: '/electric-standards-database',
        destination: '/resources/standards-database',
        permanent: true,
      },
      {
        source: '/:locale/electric-standards-database',
        destination: '/:locale/resources/standards-database',
        permanent: true,
      },
      {
        source: '/electric-standards-database/:slug',
        destination: '/resources/standards-database/:slug',
        permanent: true,
      },
      
      // Buyer Trade Support 301
      {
        source: '/resources/buyer-trade-support',
        destination: '/resources/buyer-support',
        permanent: true,
      },
      {
        source: '/:locale/resources/buyer-trade-support',
        destination: '/:locale/resources/buyer-support',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

### 2.2 移动页面文件到新路由

```bash
# Market Access Advisor
mkdir -p src/app/[locale]/resources/market-access-advisor
mv src/app/[locale]/electrical-international-standards-inquiry-center/page.tsx \
   src/app/[locale]/resources/market-access-advisor/page.tsx

# Standards Database
mkdir -p src/app/[locale]/resources/standards-database
mv src/app/[locale]/electric-standards-database/page.tsx \
   src/app/[locale]/resources/standards-database/page.tsx
mv src/app/[locale]/electric-standards-database/[slug] \
   src/app/[locale]/resources/standards-database/[slug]

# Buyer Trade Support (rename)
mv src/app/[locale]/resources/buyer-trade-support \
   src/app/[locale]/resources/buyer-support
```

### 2.3 更新内部链接

**需要全局搜索替换的文件：**

```bash
# 搜索所有旧链接
grep -r "electrical-international-standards-inquiry-center" src/
grep -r "electric-standards-database" src/
grep -r "buyer-trade-support" src/

# 批量替换（或手动逐个替换）
```

**主要涉及文件：**
- `src/data/site.ts` - resourcesMenu
- `src/components/Header.tsx` - 导航链接
- `src/app/[locale]/resources/page.tsx` - Resources主页
- `src/app/[locale]/resources/technical-guides/page.tsx` - CTA链接
- `src/app/[locale]/guides/[slug]/components/GuideTemplate.tsx` - Market Access链接
- `src/components/standards/*` - RelatedResources组件

---

## 📍 Phase 3: Sitemap优化

### 3.1 更新 sitemap.ts

**文件：** `src/app/sitemap.ts`

```typescript
import type { MetadataRoute } from "next";
import { blogPosts, categorySlugMap, products, site, subCategories } from "@/data/site";
import { routing } from "@/i18n/routing";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import { getAllGuideSlugs } from "@/data/guides"; // 新增

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    "/",
    "/about",
    "/products",
    "/solar-dc-protection",
    "/blog",
    "/contact",
    
    // Resources paths
    "/resources",
    "/resources/technical-guides",
    "/resources/application-solutions", // 新增
    "/resources/market-access-advisor", // 新URL
    "/resources/standards-database", // 新URL
    "/resources/buyer-support", // 新URL
    "/resources/faq", // 新增
    
    // Manufacturer pages
    "/mcb-manufacturer",
    "/spd-manufacturer",
    "/ats-manufacturer",
    "/combiner-box-manufacturer",
    "/energy-meter-manufacturer",
    "/voltage-protector-manufacturer",
    "/privacy-policy",
  ];

  const specs: RouteSpec[] = [
    ...staticPaths.map((path) => ({
      path,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 
        path === "/" ? 1 : 
        path === "/resources" ? 0.9 :
        path.startsWith("/resources/") ? 0.85 :
        path.endsWith("-manufacturer") ? 0.85 : 
        0.8,
    })),

    // Technical Guides 动态路由 (新增)
    ...getAllGuideSlugs().map((slug) => ({
      path: `/guides/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9, // 高优先级，核心SEO内容
    })),

    // ... 现有的 categories, products, blog posts
  ];

  return expandLocales(specs);
}
```

### 3.2 创建 guides 数据导出

**文件：** `src/data/guides.ts` (如果不存在)

```typescript
import { Guide } from '@/types/guide';

// 从JSON文件导入所有guides
import dcMcbGuide from '@/data/guides/dc-mcb-selection-guide.json';
import dcSpdGuide from '@/data/guides/dc-spd-selection-guide.json';
import atsGuide from '@/data/guides/ats-selection-guide.json';
// ... 导入其他guides

export const guides: Guide[] = [
  dcMcbGuide,
  dcSpdGuide,
  atsGuide,
  // ... 其他guides
];

export function getAllGuideSlugs(): string[] {
  return guides.map(guide => guide.slug);
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(guide => guide.slug === slug);
}

export function getAllGuides(): Guide[] {
  return guides;
}
```

---

## 🏠 Phase 4: Resources主页改造

### 4.1 重新设计 Resources 主页

**文件：** `src/app/[locale]/resources/page.tsx`

```tsx
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import "./resources.css";

export const metadata: Metadata = {
  title: "Resources & Tools | TPKELE",
  description:
    "Engineering guides, compliance tools and procurement support for electrical product decisions. Technical selection guides, market access advisor, standards database and buyer trade documentation.",
  keywords: [
    "electrical engineering resources",
    "technical selection guides",
    "market access advisor",
    "electrical standards database",
    "buyer trade support",
    "compliance tools"
  ],
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources & Tools | TPKELE",
    description: "Engineering guidance, compliance intelligence and procurement support for electrical products",
    url: "https://www.tpkele.com/resources",
    type: "website",
  },
};

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ResourcesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  // 结构化数据
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tpkele.com/" },
      { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.tpkele.com/resources" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <main className="resources-page-v2">
        {/* Hero Section */}
        <section className="resources-hero-v2">
          <div className="hero-container">
            <h1>Resources & Decision Tools</h1>
            <p className="hero-subtitle">
              Technical guidance, compliance intelligence and procurement support for global electrical product decisions.
            </p>
          </div>
        </section>

        {/* 任务导向的三大入口 */}
        <section className="resources-main-tasks">
          <div className="tasks-container">
            <h2 className="tasks-heading">What do you need help with?</h2>
            
            <div className="tasks-grid">
              {/* Engineering */}
              <div className="task-card task-card-primary">
                <div className="task-card-icon">🔧</div>
                <h3>Select & Design</h3>
                <p>
                  Choose the right electrical protection devices and design system-level solutions for your project.
                </p>
                <Link href="/resources/technical-guides" className="task-card-cta">
                  Start Engineering →
                </Link>
                <ul className="task-card-links">
                  <li><Link href="/resources/technical-guides">Technical Guides</Link></li>
                  <li><Link href="/resources/application-solutions">Application Solutions</Link></li>
                </ul>
              </div>

              {/* Compliance */}
              <div className="task-card task-card-primary">
                <div className="task-card-icon">✓</div>
                <h3>Standards & Markets</h3>
                <p>
                  Check technical standards and country-specific market access requirements for your target regions.
                </p>
                <Link href="/resources/market-access-advisor" className="task-card-cta">
                  Check Compliance →
                </Link>
                <ul className="task-card-links">
                  <li><Link href="/resources/market-access-advisor">Market Access Advisor</Link></li>
                  <li><Link href="/resources/standards-database">Standards Database</Link></li>
                </ul>
              </div>

              {/* Buying & Support */}
              <div className="task-card task-card-primary">
                <div className="task-card-icon">📦</div>
                <h3>Buy & Customize</h3>
                <p>
                  Prepare OEM specifications, export documents, shipping arrangements and project inquiries.
                </p>
                <Link href="/resources/buyer-support" className="task-card-cta">
                  Buyer Support →
                </Link>
                <ul className="task-card-links">
                  <li><Link href="/resources/buyer-support">Buyer Trade Support</Link></li>
                  <li><Link href="/resources/faq">FAQ Knowledge Base</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 详细工具展示 */}
        <section className="resources-tools-detail">
          <div className="tools-container">
            <h2>Engineering Tools</h2>
            <div className="tools-grid">
              <div className="tool-card">
                <span className="tool-badge">SELECTION GUIDES</span>
                <h3>Technical Guides</h3>
                <p>
                  Step-by-step selection guides for DC MCB, SPD, ATS, energy meters and protection devices.
                  Expert documentation for engineers, installers and distributors.
                </p>
                <ul className="tool-features">
                  <li>✓ 10+ comprehensive guides</li>
                  <li>✓ Product selection workflows</li>
                  <li>✓ Connected to Market Access Advisor</li>
                </ul>
                <Link href="/resources/technical-guides" className="tool-cta">
                  Browse Guides →
                </Link>
              </div>

              <div className="tool-card">
                <span className="tool-badge">CASE STUDIES</span>
                <h3>Application Solutions</h3>
                <p>
                  Real-world application examples, system design guidance and project case studies for
                  solar PV, building electrical and industrial systems.
                </p>
                <ul className="tool-features">
                  <li>✓ Solar PV system protection</li>
                  <li>✓ Distribution board design</li>
                  <li>✓ Energy storage integration</li>
                </ul>
                <Link href="/resources/application-solutions" className="tool-cta">
                  View Solutions →
                </Link>
              </div>
            </div>

            <h2>Compliance Tools</h2>
            <div className="tools-grid">
              <div className="tool-card tool-card-featured">
                <span className="tool-badge">INTERACTIVE TOOL</span>
                <h3>Market Access Advisor</h3>
                <p>
                  Interactive compliance tool for technical standards, market-access requirements and
                  certification needs. Product-specific guidance for 195+ countries.
                </p>
                <ul className="tool-features">
                  <li>✓ Country-specific requirements</li>
                  <li>✓ Technical standard mapping</li>
                  <li>✓ Evidence-based guidance</li>
                </ul>
                <Link href="/resources/market-access-advisor" className="tool-cta">
                  Launch Advisor →
                </Link>
              </div>

              <div className="tool-card">
                <span className="tool-badge">REFERENCE</span>
                <h3>Standards Database</h3>
                <p>
                  Search 32 international electrical standards by product, application and reference type.
                  Official IEC & UL sources with product relevance mapping.
                </p>
                <ul className="tool-features">
                  <li>✓ 32 official-source standards</li>
                  <li>✓ IEC & UL references</li>
                  <li>✓ Connected to Market Access Advisor</li>
                </ul>
                <Link href="/resources/standards-database" className="tool-cta">
                  Browse Database →
                </Link>
              </div>
            </div>

            <h2>Buying & Support</h2>
            <div className="tools-grid">
              <div className="tool-card">
                <span className="tool-badge">DOCUMENTATION</span>
                <h3>Buyer Trade Support</h3>
                <p>
                  Plan OEM packaging, export documents, Incoterms, payment terms and production
                  requirements before sending your inquiry.
                </p>
                <ul className="tool-features">
                  <li>✓ OEM & packaging planning</li>
                  <li>✓ Export document preparation</li>
                  <li>✓ Trade terms guidance</li>
                </ul>
                <Link href="/resources/buyer-support" className="tool-cta">
                  Access Support →
                </Link>
              </div>

              <div className="tool-card">
                <span className="tool-badge">SUPPORT</span>
                <h3>FAQ Knowledge Base</h3>
                <p>
                  Frequently asked questions about products, customization, certification and supply.
                  Quick answers organized by category.
                </p>
                <ul className="tool-features">
                  <li>✓ Product selection FAQ</li>
                  <li>✓ Customization & OEM FAQ</li>
                  <li>✓ Certification & testing FAQ</li>
                </ul>
                <Link href="/resources/faq" className="tool-cta">
                  View FAQ →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="resources-cta">
          <div className="cta-container">
            <h2>Need Expert Guidance?</h2>
            <p>
              Our technical team provides personalized recommendations for your project requirements.
            </p>
            <Link href="/contact" className="cta-btn">
              Contact Technical Team →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
```

### 4.2 Resources主页CSS

**文件：** `src/app/[locale]/resources/resources.css`

```css
/* Resources Page V2 - Task-Oriented Design */

.resources-page-v2 {
  min-height: 100vh;
}

/* Hero */
.resources-hero-v2 {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.resources-hero-v2 h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.resources-hero-v2 .hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.95;
  max-width: 800px;
  margin: 0 auto;
}

/* Main Tasks Section */
.resources-main-tasks {
  padding: 4rem 2rem;
  background: #f9fafb;
}

.tasks-container {
  max-width: 1200px;
  margin: 0 auto;
}

.tasks-heading {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #111827;
}

.tasks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.task-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.task-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.task-card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.task-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #111827;
}

.task-card p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.task-card-cta {
  display: inline-block;
  background: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;
  margin-bottom: 1.5rem;
}

.task-card-cta:hover {
  background: #2563eb;
}

.task-card-links {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
}

.task-card-links li {
  margin-bottom: 0.5rem;
}

.task-card-links a {
  color: #3b82f6;
  text-decoration: none;
  font-size: 0.9375rem;
}

.task-card-links a:hover {
  text-decoration: underline;
}

/* Tools Detail Section */
.resources-tools-detail {
  padding: 4rem 2rem;
  background: white;
}

.tools-container {
  max-width: 1200px;
  margin: 0 auto;
}

.tools-container h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 2rem;
  margin-top: 3rem;
  color: #111827;
}

.tools-container h2:first-child {
  margin-top: 0;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.tool-card {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
}

.tool-card-featured {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-color: #3b82f6;
}

.tool-badge {
  display: inline-block;
  background: #3b82f6;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.tool-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #111827;
}

.tool-card p {
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.tool-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.tool-features li {
  color: #374151;
  font-size: 0.9375rem;
  margin-bottom: 0.5rem;
}

.tool-cta {
  display: inline-block;
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9375rem;
}

.tool-cta:hover {
  text-decoration: underline;
}

/* CTA Section */
.resources-cta {
  background: #1e40af;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.resources-cta h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.resources-cta p {
  font-size: 1.125rem;
  opacity: 0.95;
  margin-bottom: 2rem;
}

.resources-cta .cta-btn {
  display: inline-block;
  background: white;
  color: #1e40af;
  padding: 1rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s;
}

.resources-cta .cta-btn:hover {
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 768px) {
  .resources-hero-v2 h1 {
    font-size: 1.75rem;
  }
  
  .resources-hero-v2 .hero-subtitle {
    font-size: 1rem;
  }
  
  .tasks-grid,
  .tools-grid {
    grid-template-columns: 1fr;
  }
  
  .tasks-heading {
    font-size: 1.5rem;
  }
}
```

---

## 🔗 Phase 5: 添加 Next Step 联动模块

### 5.1 创建 NextStep 组件

**文件：** `src/components/resources/NextStep.tsx`

```tsx
import Link from "next/link";
import "./NextStep.css";

export type NextStepItem = {
  title: string;
  description: string;
  href: string;
  icon?: string;
  badge?: string;
};

type NextStepProps = {
  items: NextStepItem[];
  title?: string;
  subtitle?: string;
};

export default function NextStep({ items, title = "Your Next Step", subtitle }: NextStepProps) {
  return (
    <section className="next-step-module">
      <div className="next-step-header">
        <h2>{title}</h2>
        {subtitle && <p className="next-step-subtitle">{subtitle}</p>}
      </div>
      
      <div className="next-step-grid">
        {items.map((item, index) => (
          <Link href={item.href} key={index} className="next-step-card">
            <div className="next-step-card-header">
              {item.icon && <span className="next-step-icon">{item.icon}</span>}
              <div>
                <h3>{item.title}</h3>
                {item.badge && <span className="next-step-badge">{item.badge}</span>}
              </div>
            </div>
            <p>{item.description}</p>
            <span className="next-step-arrow">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
```

**文件：** `src/components/resources/NextStep.css`

```css
.next-step-module {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 3rem 0;
}

.next-step-header {
  text-align: center;
  margin-bottom: 2rem;
}

.next-step-header h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
}

.next-step-subtitle {
  color: #6b7280;
  font-size: 1rem;
}

.next-step-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.next-step-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  display: flex;
  flex-direction: column;
}

.next-step-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.next-step-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.next-step-icon {
  font-size: 1.5rem;
}

.next-step-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.next-step-badge {
  display: inline-block;
  background: #3b82f6;
  color: white;
  font-size: 0.6875rem;
  font-weight: 600;
  padding: 0.125rem 0.5rem;
  border-radius: 3px;
  margin-left: 0.5rem;
}

.next-step-card p {
  color: #4b5563;
  font-size: 0.9375rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.next-step-arrow {
  color: #3b82f6;
  font-size: 1.25rem;
  font-weight: 600;
  align-self: flex-start;
}
```

### 5.2 在Technical Guide详情页添加Next Step

**文件：** `src/app/[locale]/guides/[slug]/components/GuideTemplate.tsx`

在文件末尾，Market Access Advisor block后添加：

```tsx
import NextStep from "@/components/resources/NextStep";

// ... 现有代码 ...

{marketAccessUrl && (
  <section className="tpk-guide__advisorBlock">
    {/* 现有Market Access Advisor block */}
  </section>
)}

{/* 新增: Next Step模块 */}
<NextStep
  title="Your Next Step"
  subtitle="Continue your product selection and compliance verification journey"
  items={[
    {
      title: "Check Technical Standards",
      description: `View official IEC and UL standards applicable to ${guide.product}.`,
      href: `/resources/standards-database?product=${guide.product}`,
      icon: "📘",
    },
    {
      title: "Verify Market Requirements",
      description: "Check country-specific certification and market access requirements.",
      href: marketAccessUrl || "/resources/market-access-advisor",
      icon: "🌍",
    },
    {
      title: "View Matching Products",
      description: `Browse TPKELE ${guide.product} product catalog.`,
      href: `/products/category/${guide.product.toLowerCase().replace(' ', '-')}`,
      icon: "🔌",
    },
    {
      title: "Prepare Your Order",
      description: "Plan OEM packaging, documents and trade terms before inquiring.",
      href: "/resources/buyer-support",
      icon: "📦",
    },
  ]}
/>
```

### 5.3 在Market Access Advisor结果页添加Next Step

**文件：** `src/app/[locale]/resources/market-access-advisor/components/AdvisorResults.tsx` (或相关组件)

在结果输出后添加：

```tsx
<NextStep
  title="Recommended Next Steps"
  items={[
    {
      title: "Technical Selection Guide",
      description: `Learn how to select ${productName} for your application.`,
      href: `/guides/${productSlug}-selection-guide`,
      icon: "📖",
      badge: "GUIDE",
    },
    {
      title: "View Technical Standards",
      description: "Check the official IEC/UL standards referenced in this guidance.",
      href: `/resources/standards-database/${standardSlug}`,
      icon: "📘",
    },
    {
      title: "Browse Products",
      description: `View TPKELE ${productName} catalog.`,
      href: `/products/category/${productSlug}`,
      icon: "🔌",
    },
    {
      title: "Prepare Order",
      description: "Ready to buy? Plan your order requirements and documentation.",
      href: `/resources/buyer-support?product=${productSlug}&market=${market}`,
      icon: "📦",
    },
  ]}
/>
```

### 5.4 在Standards Database详情页添加交叉引用

**文件：** `src/app/[locale]/resources/standards-database/[slug]/page.tsx`

```tsx
<aside className="standard-related">
  <h3>Related Guides Using This Standard</h3>
  <ul>
    {relatedGuides.map(guide => (
      <li key={guide.slug}>
        <Link href={`/guides/${guide.slug}`}>
          {guide.title}
        </Link>
        <span className="standard-ref">References {standardNumber}</span>
      </li>
    ))}
  </ul>
  
  <h3>Check Market Requirements</h3>
  <p>This standard may be referenced in different countries' certification requirements.</p>
  <Link href={`/resources/market-access-advisor?standard=${standardNumber}`} className="standard-cta">
    Check Your Target Market →
  </Link>
</aside>
```

---

## 📊 Phase 6: Metadata和结构化数据优化

### 6.1 优化Technical Guides Index Metadata

**文件：** `src/app/[locale]/resources/technical-guides/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Technical Selection Guides | TPKELE Resources",
  description: "Comprehensive technical selection guides for electrical protection devices. Expert guidance on DC MCBs, SPDs, ATS, energy meters and more for solar PV, building electrical and industrial applications. Free step-by-step documentation for engineers, installers and distributors worldwide.",
  keywords: [
    "technical guides",
    "selection guide",
    "DC MCB guide",
    "SPD selection guide",
    "ATS selection",
    "electrical engineering",
    "solar PV protection",
    "electrical protection devices"
  ],
  alternates: { canonical: "/resources/technical-guides" },
  openGraph: {
    title: "Technical Selection Guides | TPKELE Resources",
    description: "Expert selection guides for DC MCBs, SPDs, ATS, energy meters and electrical protection devices",
    url: "https://www.tpkele.com/resources/technical-guides",
    type: "website",
    images: [
      {
        url: "https://www.tpkele.com/images/og/technical-guides.png",
        width: 1200,
        height: 630,
        alt: "TPKELE Technical Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Selection Guides | TPKELE",
    description: "Expert guidance for electrical protection device selection",
    images: ["https://www.tpkele.com/images/og/technical-guides.png"],
  },
};

// 添加结构化数据
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Technical Selection Guides",
  "description": "Comprehensive technical selection guides for electrical protection devices",
  "url": "https://www.tpkele.com/resources/technical-guides",
  "publisher": {
    "@type": "Organization",
    "name": "TPKELE",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.tpkele.com/icon.png"
    }
  },
  "numberOfItems": guides.length,
  "hasPart": guides.map(guide => ({
    "@type": "TechArticle",
    "headline": guide.title,
    "description": guide.description,
    "url": `https://www.tpkele.com/guides/${guide.slug}`,
    "image": `https://www.tpkele.com/images/guides/${guide.slug}/hero.png`,
  }))
};

// 在JSX中添加
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
```

### 6.2 优化Guide详情页结构化数据

**文件：** `src/app/[locale]/guides/[slug]/page.tsx`

增强现有的TechArticle schema:

```typescript
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": guide.title,
  "description": guide.description,
  "image": `https://www.tpkele.com/images/guides/${slug}/hero.png`,
  "datePublished": guide.publishedAt || "2026-09-07",
  "dateModified": guide.updatedAt || "2026-09-07",
  "author": {
    "@type": "Organization",
    "name": "TPKELE Technical Team",
    "url": "https://www.tpkele.com/about",
  },
  "publisher": {
    "@type": "Organization",
    "name": "TPKELE",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.tpkele.com/icon.png",
    },
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://www.tpkele.com/guides/${slug}`,
  },
  // 新增: 添加FAQ结构化数据
  ...(guide.faq && {
    "mainEntity": guide.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  }),
  // 新增: 添加HowTo结构化数据（如果有workflow）
  ...(guide.workflow && {
    "@type": ["TechArticle", "HowTo"],
    "step": guide.workflow.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description,
    }))
  })
};
```

### 6.3 为Application Solutions创建页面

**文件：** `src/app/[locale]/resources/application-solutions/page.tsx`

```tsx
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import "./application-solutions.css";

export const metadata: Metadata = {
  title: "Application Solutions | TPKELE Resources",
  description: "Real-world electrical system design guidance and project case studies for solar PV, building distribution, energy storage and industrial applications.",
  keywords: [
    "application solutions",
    "solar PV protection design",
    "distribution board design",
    "electrical system design",
    "case studies",
    "project examples"
  ],
  alternates: { canonical: "/resources/application-solutions" },
  openGraph: {
    title: "Application Solutions | TPKELE Resources",
    description: "System-level design guidance for electrical protection applications",
    url: "https://www.tpkele.com/resources/application-solutions",
    type: "website",
  },
};

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ApplicationSolutionsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const solutions = [
    {
      title: "Solar PV System Protection",
      slug: "solar-pv-protection",
      description: "Complete protection design for photovoltaic systems from string level to inverter connection.",
      components: ["DC MCB", "DC SPD", "PV Combiner Box", "DC Isolator"],
      href: "/solar-dc-protection",
      image: "/images/solutions/solar-pv.png",
    },
    {
      title: "Residential Distribution Boards",
      slug: "residential-distribution",
      description: "Branch circuit protection and metering for single-family and multi-family residential buildings.",
      components: ["AC MCB", "AC SPD", "Energy Meter", "Voltage Protector"],
      href: "/blog/residential-distribution-board-design",
      image: "/images/solutions/residential.png",
    },
    {
      title: "Commercial & Industrial Projects",
      slug: "commercial-industrial",
      description: "Backup power, surge protection and monitoring for commercial buildings and industrial facilities.",
      components: ["ATS", "AC SPD", "Energy Meter", "Voltage Protector"],
      href: "/blog/commercial-industrial-power-systems",
      image: "/images/solutions/commercial.png",
    },
    {
      title: "Energy Storage Integration",
      slug: "energy-storage",
      description: "Protection and switching for battery energy storage systems and hybrid solar-storage installations.",
      components: ["DC MCB", "DC SPD", "ATS", "Energy Meter"],
      href: "/blog/energy-storage-protection-design",
      image: "/images/solutions/energy-storage.png",
    },
  ];

  return (
    <main className="application-solutions-page">
      <section className="solutions-hero">
        <h1>Application Solutions</h1>
        <p>
          Real-world system design guidance and project case studies for electrical protection applications.
        </p>
      </section>

      <section className="solutions-grid">
        {solutions.map((solution) => (
          <article key={solution.slug} className="solution-card">
            <div className="solution-image">
              <img src={solution.image} alt={solution.title} />
            </div>
            <div className="solution-content">
              <h2>{solution.title}</h2>
              <p>{solution.description}</p>
              
              <div className="solution-components">
                <strong>Key Components:</strong>
                <ul>
                  {solution.components.map((comp) => (
                    <li key={comp}>{comp}</li>
                  ))}
                </ul>
              </div>
              
              <Link href={solution.href} className="solution-cta">
                View Solution →
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="solutions-related">
        <h2>Related Resources</h2>
        <div className="related-links">
          <Link href="/resources/technical-guides" className="related-link">
            <h3>Technical Guides</h3>
            <p>Component-level selection guidance</p>
          </Link>
          <Link href="/resources/market-access-advisor" className="related-link">
            <h3>Market Access Advisor</h3>
            <p>Check compliance for your region</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
```

### 6.4 创建FAQ页面

**文件：** `src/app/[locale]/resources/faq/page.tsx`

```tsx
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import "./faq.css";

export const metadata: Metadata = {
  title: "FAQ Knowledge Base | TPKELE",
  description: "Frequently asked questions about electrical protection products, customization, certification, ordering and delivery.",
  keywords: [
    "FAQ",
    "electrical products FAQ",
    "MCB questions",
    "SPD questions",
    "OEM customization",
    "certification FAQ"
  ],
  alternates: { canonical: "/resources/faq" },
};

type PageProps = {
  params: Promise<{ locale: string }>;
};

type FAQCategory = {
  title: string;
  slug: string;
  questions: Array<{ q: string; a: string }>;
};

export default async function FAQPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const faqCategories: FAQCategory[] = [
    {
      title: "Product Selection",
      slug: "product-selection",
      questions: [
        {
          q: "How do I choose between DC MCB and DC fuse for solar PV?",
          a: "DC MCB offers resettable protection and easier maintenance, while DC fuses are simpler and lower cost. For residential and C&I solar, DC MCB is recommended for its convenience and safety.",
        },
        {
          q: "What breaking capacity do I need for my AC MCB?",
          a: "Calculate the fault level at the installation point. Residential typically needs 6kA, commercial/industrial 10kA or higher. Check with your system designer or use our Technical Guides.",
        },
        // ... 更多问题
      ],
    },
    {
      title: "Customization & OEM",
      slug: "customization-oem",
      questions: [
        {
          q: "What customization options are available?",
          a: "We support logo printing on housing and packaging, color housing variants, private-label catalogs, and project-specific drawings. MOQ typically 500-1000 units depending on customization type.",
        },
        {
          q: "What is the lead time for OEM orders?",
          a: "Sample preparation: 5-10 working days. Mass production: 15-30 days depending on order quantity and customization complexity. Expedited service available.",
        },
        // ... 更多问题
      ],
    },
    {
      title: "Certification & Testing",
      slug: "certification-testing",
      questions: [
        {
          q: "Are TPKELE products CE certified?",
          a: "Yes, all TPKELE MCB, SPD, ATS and protection products carry CE marking for EU LVD and EMC directives. Test reports available on request.",
        },
        {
          q: "Can you provide test reports for specific markets?",
          a: "Yes, we provide IEC test reports, CE certificates, and CB scheme reports. For specific country requirements, use our Market Access Advisor to check what documentation is needed.",
        },
        // ... 更多问题
      ],
    },
    {
      title: "Ordering & Delivery",
      slug: "ordering-delivery",
      questions: [
        {
          q: "What is the minimum order quantity?",
          a: "Standard products: 100-500 units per model depending on product type. OEM/customized orders: 500-1000 units. Sample orders: 1-10 units available.",
        },
        {
          q: "What payment terms do you accept?",
          a: "We accept T/T, L/C, and for established customers, O/A payment terms. Typical payment: 30% deposit, 70% before shipment. Details in Buyer Trade Support.",
        },
        // ... 更多问题
      ],
    },
  ];

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(cat => 
      cat.questions.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    )
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <main className="faq-page">
        <section className="faq-hero">
          <h1>FAQ Knowledge Base</h1>
          <p>Frequently asked questions about products, customization, certification and supply.</p>
        </section>

        <section className="faq-content">
          <aside className="faq-nav">
            <h2>Categories</h2>
            <ul>
              {faqCategories.map(cat => (
                <li key={cat.slug}>
                  <a href={`#${cat.slug}`}>{cat.title}</a>
                </li>
              ))}
            </ul>
            
            <div className="faq-cta">
              <h3>Still Have Questions?</h3>
              <Link href="/contact" className="faq-cta-btn">
                Contact Us →
              </Link>
            </div>
          </aside>

          <div className="faq-main">
            {faqCategories.map(category => (
              <section key={category.slug} id={category.slug} className="faq-category">
                <h2>{category.title}</h2>
                <div className="faq-list">
                  {category.questions.map((item, index) => (
                    <details key={index} className="faq-item">
                      <summary>{item.q}</summary>
                      <p>{item.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="faq-related">
          <h2>Explore More Resources</h2>
          <div className="related-grid">
            <Link href="/resources/technical-guides" className="related-card">
              <h3>Technical Guides</h3>
              <p>Detailed selection guides for each product</p>
            </Link>
            <Link href="/resources/buyer-support" className="related-card">
              <h3>Buyer Trade Support</h3>
              <p>Plan your order requirements</p>
            </Link>
            <Link href="/blog" className="related-card">
              <h3>Blog & Case Studies</h3>
              <p>Industry insights and project examples</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
```

---

## 🌍 多语言支持

### 更新多语言文件

**文件：** `messages/en.json`

```json
{
  "resourcesMenu": {
    "technical-guides": "Technical Guides",
    "market-access-advisor": "Market Access Advisor",
    "buyer-trade-support": "Buyer Trade Support",
    "buyer-support": "Buyer Trade Support",
    "standards-database": "Standards Database",
    "application-solutions": "Application Solutions",
    "faq": "FAQ Knowledge Base"
  },
  "resourcesPage": {
    "hero": {
      "title": "Resources & Decision Tools",
      "subtitle": "Technical guidance, compliance intelligence and procurement support for global electrical product decisions."
    },
    "tasks": {
      "heading": "What do you need help with?",
      "engineering": {
        "title": "Select & Design",
        "description": "Choose the right electrical protection devices and design system-level solutions for your project.",
        "cta": "Start Engineering"
      },
      "compliance": {
        "title": "Standards & Markets",
        "description": "Check technical standards and country-specific market access requirements for your target regions.",
        "cta": "Check Compliance"
      },
      "buying": {
        "title": "Buy & Customize",
        "description": "Prepare OEM specifications, export documents, shipping arrangements and project inquiries.",
        "cta": "Buyer Support"
      }
    }
  }
}
```

**文件：** `messages/zh.json`

```json
{
  "resourcesMenu": {
    "technical-guides": "技术指南",
    "market-access-advisor": "市场准入顾问",
    "buyer-trade-support": "采购贸易支持",
    "buyer-support": "采购贸易支持",
    "standards-database": "标准数据库",
    "application-solutions": "应用方案",
    "faq": "常见问题"
  },
  "resourcesPage": {
    "hero": {
      "title": "资源与决策工具",
      "subtitle": "全球电气产品决策的技术指导、合规智能和采购支持"
    },
    "tasks": {
      "heading": "您需要什么帮助？",
      "engineering": {
        "title": "选型与设计",
        "description": "为您的项目选择合适的电气保护设备并设计系统级解决方案",
        "cta": "开始工程设计"
      },
      "compliance": {
        "title": "标准与市场",
        "description": "检查技术标准和目标地区的国家特定市场准入要求",
        "cta": "检查合规性"
      },
      "buying": {
        "title": "采购与定制",
        "description": "准备OEM规格、出口文件、运输安排和项目询价",
        "cta": "采购支持"
      }
    }
  }
}
```

---

## ✅ 验收标准

### Phase 1 完成标准
- [ ] Resources Mega Menu在桌面和移动端正常显示
- [ ] 三个任务组清晰区分
- [ ] 所有链接指向正确路径
- [ ] 多语言菜单正常切换

### Phase 2 完成标准
- [ ] 所有301重定向正常工作
- [ ] 旧URL访问自动跳转到新URL
- [ ] Google Search Console无404错误
- [ ] 内部链接全部更新完成

### Phase 3 完成标准
- [ ] sitemap.xml包含所有关键页面
- [ ] Technical Guides所有slug正确
- [ ] Google Search Console成功提交sitemap
- [ ] 索引覆盖率报告正常

### Phase 4 完成标准
- [ ] Resources主页UI美观一致
- [ ] 三大任务入口清晰可点
- [ ] 移动端响应式正常
- [ ] 页面加载速度<2s

### Phase 5 完成标准
- [ ] Technical Guides详情页有Next Step
- [ ] Market Access Advisor结果页有Next Step
- [ ] Standards Database有交叉引用
- [ ] 所有联动链接携带正确参数

### Phase 6 完成标准
- [ ] 所有页面metadata完整
- [ ] 结构化数据通过Google Rich Results测试
- [ ] OpenGraph预览正常
- [ ] FAQ Schema正确显示

---

## 📈 SEO效果预期

### 短期 (1-3个月)
- Technical Guides页面被Google索引
- 长尾关键词开始出现排名
- 自然搜索流量增长30-50%

### 中期 (3-6个月)
- 核心关键词排名进入前3页
- Featured Snippets出现概率增加
- 页面停留时间和用户行为指标改善

### 长期 (6-12个月)
- 建立"Technical Guides"权威度
- 核心关键词排名进入首页
- 成为电气保护设备选型领域权威内容来源

---

## 🔍 监测指标

### Google Search Console
- Technical Guides页面索引状态
- 各Guide的展示次数和点击率
- 移动端可用性报告

### 关键词排名
- "DC MCB selection guide"
- "solar PV protection guide"
- "electrical protection device selection"
- 品牌词 + technical guide组合

### 页面级别指标
- 各Guide页面的自然搜索流量
- 跳出率和平均停留时间
- 内链点击热力图
- Resources → RFQ转化路径完成率

---

## 📝 备注

1. **所有路由变更前先备份数据库**
2. **301重定向至少保留1年**
3. **每个Phase独立测试后再上线**
4. **多语言内容逐步完善，不要一次做完**
5. **UI组件保持与现有产品页风格一致**

---

**实施负责人：** Claude AI  
**审核负责人：** User  
**预计完成时间：** 2-3周  
**文档版本：** v1.0
