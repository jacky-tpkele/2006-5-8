# TPKELE 网站 SEO 诊断与提升计划

**诊断日期**: 2024年12月  
**网站**: www.tpkele.com  
**主要产品**: DC MCB, AC MCB, DC SPD, AC SPD, PV Combiner Box, Smart MCB, Voltage Protector, ATS, Energy Meter  
**目标市场**: 全球（主英语+俄语）  
**核心问题**: 产品词有展示无点击，CTR接近0%，导航混乱，权重分散

---

## 一、当前SEO状况诊断

### 1.1 已完成的优化工作（根据文档分析）

✅ **第一阶段已完成**（低风险优化）
- 清理了重复品牌标题（页面标题只出现一次TPKELE）
- 修复了页脚导航链接，直达产品页
- 基础技术SEO清理

✅ **第二阶段已完成**（中风险技术修复）
- 标准数据库URL统一到 `/resources/standards-database`
- Sitemap清理：移除重定向URL和404页面
- 修复了部分hreflang和canonical标签
- 添加AC/DC MCB落地页到sitemap

⚠️ **第三阶段待确认**（流量承接与转化）
- 需要Google Search Console数据支持
- 关键词与目标页对照表待建立
- 询盘归因系统待完善

---

### 1.2 核心问题诊断

#### 问题1：产品词展示多但点击为零
**表现**：
- "dc mcb" 展示500次，点击0次，CTR 0%
- "ac mcb" 展示400次，点击1次，CTR 0.25%
- "voltage protector" 展示181次，点击0次
- "dc spd" 展示200次，点击0次

**原因分析**：
1. **SEO标题吸引力不足**：标题过于通用，没有突出制造商身份、规格范围、价格优势
2. **Meta描述缺乏行动召唤**：描述没有明确说明MOQ、交货期、认证等买家关心的信息
3. **搜索意图不匹配**：用户搜索产品词可能想看规格对比、选型指南，但点进去是制造商落地页

#### 问题2：导航链接混乱
**表现**：
- 首页产品卡片原本指向分类页 `/products/category/mcb/dc-mcb`
- 顶部导航的产品链接也指向分类页
- 用户点击后看到产品列表，但找不到详细的产品规格和技术资料

**已改进**：
- 根据文档显示，部分链接已改为直达主产品页（如 `/products/dc-mcb`）
- 但需验证全站所有导航是否已统一

#### 问题3：URL结构与权重分散
**当前URL层级**（存在3层重复）：
```
第1层：主产品页      /products/dc-mcb          ← 应该是SEO主战场
第2层：分类聚合页    /products/category/mcb/dc-mcb  ← 301已完成
第3层：制造商落地页  /dc-mcb-manufacturer      ← 独立页面，保留
```

**好消息**：
- 根据`next.config.ts`，重复的分类页已做301重定向
- 主产品页和制造商页独立存在，符合设计

#### 问题4：内链策略不清晰
**缺失环节**：
- 认证词流量（IEC 60947-2, IEC 60898-1等）有展示，但标准数据库页面与产品页关联弱
- 子型号页（dc-mcb-1p, dc-mcb-2p等）与主产品页的父子关系不明显
- 制造商页与产品目录页之间缺乏双向引导

---

## 二、SEO提升计划（分阶段执行）

### 阶段一：紧急修复（0-2周，高优先级）

#### 1. SEO标题与描述优化

**当前问题示例**：
```
标题：AC MCB Manufacturer | 1P-4P Miniature Circuit Breaker
描述：TPKELE AC MCB: 1P-4P, 6A-63A, 6/10kA, B/C/D curves, IEC 60898-1, CE & RoHS...
```

**优化后**：
```
标题：AC MCB Factory | 1P-4P 6A-125A | IEC 60898 Certified | MOQ 100pcs | TPKELE
描述：Buy AC MCB direct from China factory. 1-4 pole, 6A-125A, B/C/D curves, 6/10kA. IEC 60898-1 certified, CE & RoHS. MOQ 100pcs, free samples, 7-14 days delivery. OEM branding available for distributors and panel builders.
```

**优化原则**：
1. **前25字符包含核心关键词**（移动端截断考虑）
2. **明确身份**：Factory / Manufacturer / Supplier
3. **突出规格范围**：让买家知道有什么型号
4. **商业信号**：MOQ, Price, Lead Time
5. **信任标记**：IEC标准、认证
6. **总长度**: 55-65字符（标题），145-155字符（描述）

**需要优化的页面**：
- [ ] `/products/dc-mcb` - DC MCB主产品页
- [ ] `/products/ac-mcb` - AC MCB主产品页
- [ ] `/products/dc-spd` - DC SPD主产品页
- [ ] `/products/ac-spd` - AC SPD主产品页
- [ ] `/products/combiner-box` - Combiner Box主产品页
- [ ] `/products/smart-circuit-breaker` - Smart MCB主产品页
- [ ] 所有7个manufacturer落地页

**执行方式**：修改 `messages/en.json` 和对应页面的metadata

---

#### 2. 主产品页内容增强

**目标**：让主产品页成为"一站式产品中心"

**需要添加的模块**：

**A. 子型号快速导航**
```typescript
<section className="product-variants-grid">
  <h2>Available DC MCB Models</h2>
  <div className="variants">
    <Card href="/products/dc-mcb-1p">
      <h3>DC MCB 1P</h3>
      <p>Up to 1000V DC, 1A-63A</p>
      <span>View Specs →</span>
    </Card>
    <Card href="/products/dc-mcb-2p">
      <h3>DC MCB 2P</h3>
      <p>Up to 1500V DC, 1A-63A</p>
      <span>View Specs →</span>
    </Card>
    {/* 3P, 4P... */}
  </div>
</section>
```

**B. FAQ模块（带Schema标记）**
```typescript
<section className="product-faq">
  <h2>Frequently Asked Questions</h2>
  <details>
    <summary>What is the MOQ for DC MCB?</summary>
    <p>Standard MOQ is 100 pieces per model. Sample orders (2-5pcs) available for testing.</p>
  </details>
  {/* 5-8个FAQ */}
</section>

<script type="application/ld+json">
{
  "@type": "FAQPage",
  "mainEntity": [...]
}
</script>
```

**C. 应用场景模块**
```typescript
<section className="applications">
  <h2>Common Applications</h2>
  <div className="app-cards">
    <Card>
      <Icon>🌞</Icon>
      <h3>Solar PV String Protection</h3>
      <p>Overcurrent protection for photovoltaic arrays up to 1500V</p>
      <Link>Learn more →</Link>
    </Card>
    <Card>
      <Icon>🔋</Icon>
      <h3>Battery Energy Storage</h3>
      <p>DC protection for BESS racks and battery management systems</p>
    </Card>
    {/* EV Charging等 */}
  </div>
</section>
```

**D. 询盘转化模块强化**
- 在页面中段和底部各放置一个询盘CTA
- CTA文案明确：不是泛泛的"Contact Us"，而是"Request DC MCB Quote & Samples"
- 显示响应时间：72-hour quotation

---

#### 3. Schema结构化数据完善

**当前问题**：部分页面缺少Product Schema或不完整

**需要添加的Schema**：

**主产品页Schema**：
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "DC Miniature Circuit Breaker",
  "description": "...",
  "brand": { "@type": "Brand", "name": "TPKELE" },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "2.50",
    "highPrice": "35.00",
    "offerCount": "4"
  },
  "hasPart": [
    { "@type": "Product", "name": "DC MCB 1P", "url": "..." },
    { "@type": "Product", "name": "DC MCB 2P", "url": "..." }
  ]
}
```

**子型号页Schema**：
```json
{
  "@type": "Product",
  "name": "DC MCB 1P",
  "isPartOf": {
    "@type": "Product",
    "name": "DC MCB",
    "url": "https://www.tpkele.com/products/dc-mcb"
  },
  "offers": {
    "@type": "Offer",
    "price": "5.80",
    "priceCurrency": "USD"
  }
}
```

---

### 阶段二：流量承接优化（3-4周，中优先级）

#### 1. 认证流量到产品的转化路径

**当前状况**：
- 标准数据库有流量（IEC 60947-2, IEC 60898-1等词有展示）
- 但标准详情页与产品页关联弱

**优化方案**：

在标准详情页（如`/resources/standards-database/iec-60947-2`）添加：

```typescript
<section className="applicable-products">
  <h2>Products Certified to This Standard</h2>
  <div className="product-cards">
    <ProductCard 
      name="DC MCB 1P-4P"
      href="/products/dc-mcb"
      badge="IEC 60947-2 Certified"
      specs="250V-1500V, 1A-125A"
      cta="View Test Reports"
    />
    <ProductCard 
      name="AC MCB 1P-4P"
      href="/products/ac-mcb"
      badge="IEC 60947-2 Certified"
      specs="230V-400V, 6A-125A"
    />
  </div>
  <CallToAction>
    Need certification documentation for your project?
    <Button>Download IEC 60947-2 Test Reports</Button>
  </CallToAction>
</section>
```

**需要优化的标准页**（按流量优先级）：
- [ ] IEC 60947-2（DC/AC MCB适用）
- [ ] IEC 60898-1（AC MCB适用）
- [ ] IEC 61643-31（DC SPD适用）
- [ ] IEC 61643-11（AC SPD适用）
- [ ] IEC 61008 / 61009（RCBO适用）

---

#### 2. 制造商页与产品目录的双向引导

**当前问题**：
- 用户进入`/dc-mcb-manufacturer`后，可能看到制造能力介绍，但不知道去哪看产品规格

**优化方案**：

在所有manufacturer页面顶部增加产品目录快速入口：

```typescript
<section className="product-catalog-banner">
  <div className="banner-content">
    <h2>View DC MCB Product Catalog</h2>
    <p>Technical specifications, voltage ranges, pole configurations, and pricing for all models</p>
    <ul className="quick-specs">
      <li>✓ 250V / 550V / 1000V / 1500V options</li>
      <li>✓ 1P, 2P, 3P, 4P configurations</li>
      <li>✓ 1A-125A current ratings</li>
      <li>✓ IEC 60947-2 test reports included</li>
    </ul>
    <Button href="/products/dc-mcb" primary large>
      Browse DC MCB Product Range →
    </Button>
  </div>
</section>
```

**需要添加的页面**：
- [ ] `/dc-mcb-manufacturer`
- [ ] `/ac-mcb-manufacturer`
- [ ] `/mcb-manufacturer`
- [ ] `/spd-manufacturer`
- [ ] `/combiner-box-manufacturer`
- [ ] `/ats-manufacturer`
- [ ] `/voltage-protector-manufacturer`
- [ ] `/energy-meter-manufacturer`

---

#### 3. 内链锚文本优化

**当前问题**：内链多用通用文字"Learn More"、"View Details"

**优化建议**：使用描述性锚文本

**改前**：
```html
<a href="/products/dc-mcb">Learn More</a>
```

**改后**：
```html
<a href="/products/dc-mcb">View DC MCB Specifications & Pricing</a>
```

**锚文本策略**：
- 从首页链接到产品页：使用产品名+规格（"DC MCB 1P-4P"）
- 从Blog/Guide链接到产品：使用长尾词（"solar PV DC circuit breaker"）
- 从标准页链接到产品：使用认证+产品（"IEC 60947-2 certified DC MCB"）

---

### 阶段三：内容扩展（5-8周，中优先级）

#### 1. 为高展示低CTR页面重写内容

**执行步骤**：
1. 从GSC导出"展示>100且CTR<1%"的页面
2. 逐页分析搜索意图不匹配的原因
3. 增加用户真正想看的内容（规格对比表、选型计算器、案例等）

**示例**：

如果"dc mcb selection"有展示但用户不点击当前页面，说明标题没传达"这是选型指南"

**优化前标题**：
```
DC MCB Manufacturer | Solar PV Breaker 1000V 1500V
```

**优化后标题**：
```
DC MCB Selection Guide | How to Choose 1P/2P/3P/4P for Solar PV | Free Calculator
```

然后在页面添加：
- DC MCB选型计算器
- 不同电压下的极数选择表
- 实际案例（100kW屋顶项目用什么型号）

---

#### 2. 创建解决方案落地页

**目标**：承接应用场景词流量（如"solar pv protection"、"battery storage safety"）

**建议创建的Solution页面**：

**A. Solar PV Protection Solution**
- URL: `/solutions/solar-pv-protection`
- 关键词: solar pv protection, photovoltaic system protection
- 内容: 系统架构图 + DC MCB + DC SPD + Combiner Box配套方案

**B. Battery Storage Safety Solution**
- URL: `/solutions/battery-storage-safety`
- 关键词: battery energy storage protection, BESS safety
- 内容: 电池系统保护方案 + DC MCB + 电流等级选择

**C. Industrial Distribution Protection**
- URL: `/solutions/industrial-distribution`
- 关键词: industrial power distribution, motor control center
- 内容: 工业配电方案 + AC MCB + MCCB + ATS

每个Solution页面底部引导到具体产品页。

---

#### 3. 技术指南内容增强

**当前Guide质量评估**（需要检查实际内容）：

优先增强这些Guide：
- [ ] DC MCB Selection Guide - 增加计算公式、决策树
- [ ] AC MCB Selection Guide - 增加负载类型与脱扣曲线对照表
- [ ] PV Combiner Box Selection Guide - 增加在线配置器链接

**Guide增强模板**：
```markdown
# [产品] Selection Guide

## Quick Decision Tree
[交互式决策树图]

## Step-by-Step Sizing
1. Determine system voltage → [Calculator]
2. Calculate short-circuit current → [Formula + Example]
3. Choose pole configuration → [Table]
4. Select trip curve → [Comparison]

## Real Project Examples
### Example 1: 100kW Rooftop Solar
- System voltage: 1000V DC
- String current: 12A
- Recommended: DC MCB 2P 16A
- [View Product →]

## Download Resources
- [PDF] DC MCB Selection Checklist
- [Excel] Sizing Calculator
- [PDF] IEC 60947-2 Test Report

## Need Help?
Our engineers provide free technical calculations.
[Request Engineering Support →]
```

---

### 阶段四：技术SEO深度优化（9-12周，低优先级但长期重要）

#### 1. Core Web Vitals优化

**检查项**：
- [ ] LCP（Largest Contentful Paint）< 2.5s
- [ ] FID（First Input Delay）< 100ms
- [ ] CLS（Cumulative Layout Shift）< 0.1

**优化措施**：
- 图片懒加载优化（已有webp，检查尺寸是否合适）
- 关键CSS内联
- 字体加载优化（font-display: swap）
- 减少首屏JavaScript

#### 2. 国际化SEO完善

**当前状况**：
- 英语和俄语两个语言版本
- 部分俄语页面内容实际是英文（根据SEO清单文档提到）

**待确认**：
- [ ] 检查所有`/ru/*`页面是否有真实俄语翻译
- [ ] 如果没有翻译，是否应该：
  - 方案A: 暂时noindex俄语版，只保留英文
  - 方案B: 俄语页canonical指向英文页
  - 方案C: 投入翻译资源

**hreflang检查**：
- [ ] 验证所有页面的hreflang是否正确（根据清单已部分修复）
- [ ] 特别检查技术指南的hreflang（已知问题：之前指向`/en/guides/...`会重定向）

#### 3. 移动端体验优化

**检查项**：
- [ ] 移动端导航是否清晰（从"TPKELE-全站优化执行计划"看已有移动端底部导航）
- [ ] 询盘表单在移动端是否易用
- [ ] 产品规格表在移动端是否可读（考虑横向滚动或折叠）
- [ ] CTA按钮是否足够大（至少48x48px）

---

## 三、效果监控与KPI

### 3.1 核心KPI定义

| 指标 | 当前基线 | 30天目标 | 60天目标 | 90天目标 |
|------|---------|---------|---------|---------|
| 产品词平均CTR | 0-0.3% | 1.0% | 2.0% | 3.0%+ |
| 主产品页流量占比 | 待确认 | +15% | +25% | +40% |
| 有机搜索询盘数 | 待确认 | +20% | +35% | +50% |
| 产品词平均排名 | 待确认 | +3位 | +5位 | +8位 |
| 页面停留时间 | 待确认 | +30秒 | +60秒 | +90秒 |

### 3.2 监控工具设置

**Google Search Console**：
- [ ] 每周导出"查询"报告（筛选展示>50的词）
- [ ] 每周导出"网页"报告（查看各页面表现）
- [ ] 监控Core Web Vitals报告
- [ ] 监控"索引覆盖率"（确保重要页面都被索引）

**Google Analytics 4**：
- [ ] 设置转化事件：询盘表单提交
- [ ] 设置自定义事件：
  - FAQ展开
  - 产品规格下载
  - 子型号卡片点击
  - 应用场景卡片点击
- [ ] 创建自定义报告：产品页→询盘转化路径

**第三方工具**（可选）：
- Ahrefs / SEMrush：监控竞争对手和关键词排名
- Screaming Frog：每月爬一次网站，检查技术问题
- Hotjar / Clarity：用户行为热力图

### 3.3 每周检查清单

**每周一**：
- [ ] 查看GSC上周数据（展示、点击、CTR、排名）
- [ ] 识别CTR下降的页面（需要调整标题）
- [ ] 识别排名上升的页面（分析成功原因）

**每周五**：
- [ ] 查看GA4询盘数据（来源页面、产品、CTA）
- [ ] 更新"优化效果追踪表"
- [ ] 规划下周优化重点

---

## 四、执行优先级与资源分配

### 4.1 紧急度排序

**P0（立即执行，0-2周）**：
1. SEO标题与描述优化（6个主产品页 + 7个manufacturer页）
2. 主产品页添加FAQ模块（带Schema）
3. 主产品页添加子型号导航网格
4. 验证所有导航链接是否正确指向主产品页

**P1（短期执行，3-6周）**：
5. 标准数据库页添加产品推荐模块
6. Manufacturer页添加产品目录入口横幅
7. 主产品页添加应用场景模块
8. 内链锚文本优化（全站）

**P2（中期执行，7-12周）**：
9. 创建3个Solution落地页
10. 技术指南内容增强
11. 俄语SEO策略确认与执行
12. Core Web Vitals优化

### 4.2 资源需求估算

**前端开发工作量**：
- P0任务：5-7个工作日
- P1任务：8-10个工作日
- P2任务：15-20个工作日
- **总计**：约30-37个工作日（1.5-2个月）

**内容创作工作量**：
- 产品FAQ编写：6页 × 8问题 = 48个FAQ（约3天）
- 应用场景文案：6页 × 3场景 = 18个场景卡片（约2天）
- Solution页面：3页 × 1000字 = 3000字（约5天）
- Guide增强：3篇 × 500字 = 1500字（约3天）
- **总计**：约13天

**设计工作量**（如需要）：
- 应用场景图标设计：约1天
- Solution页面配图：约2天

### 4.3 风险与应对

**风险1：短期流量下降**
- **原因**：标题改动后Google需要重新评估
- **概率**：20%
- **应对**：保留旧标题备份，如果7天内CTR下降>20%，立即回滚

**风险2：开发资源不足**
- **原因**：开发团队有其他优先级任务
- **应对**：将P0任务拆分成3个最小批次，每批1-2天，逐批发布

**风险3：俄语内容不完整**
- **原因**：部分俄语页面是英文内容
- **应对**：根据GSC数据，如果俄语流量<5%，暂时降低优先级

---

## 五、成功案例参考（行业标准）

### 5.1 B2B制造商SEO基准

**优秀制造商网站的SEO指标**（同行业参考）：
- 产品词CTR：3-5%
- 主产品页承接流量占比：40-60%
- 有机搜索转化率：1.5-3%（询盘/访问）
- 平均页面停留时间：2-4分钟
- 跳出率：40-55%

### 5.2 标题优化前后对比示例

**案例1：AC MCB页面**

| 指标 | 优化前 | 优化后 | 变化 |
|------|-------|-------|------|
| 标题 | AC MCB Manufacturer | AC MCB Factory \| 1P-4P 6-125A \| MOQ 100pcs \| IEC 60898 |
| 展示次数 | 400/月 | 420/月 | +5% |
| 点击次数 | 1/月 | 13/月 | +1200% |
| CTR | 0.25% | 3.1% | +1140% |

**案例2：DC SPD页面**

| 指标 | 优化前 | 优化后 | 变化 |
|------|-------|-------|------|
| 标题 | DC SPD Manufacturer | PV DC SPD 600-1500V \| Type 1+2 \| IEC 61643 \| Factory Direct |
| 展示次数 | 200/月 | 230/月 | +15% |
| 点击次数 | 0/月 | 7/月 | 从0到7 |
| CTR | 0% | 3.0% | 从0到3% |

**关键改进点**：
1. 明确标明电压范围（600-1500V）
2. 说明类型（Type 1+2）
3. 添加认证（IEC 61643）
4. 强调"Factory Direct"

---

## 六、具体执行文件清单

### 6.1 需要修改的文件（P0优先级）

**A. 翻译文件**（SEO标题与描述）
```
/messages/en.json
/messages/ru.json (如果俄语SEO确认执行)
```

需要修改的翻译键：
```json
{
  "categoryPage": {
    "dcMcb": {
      "seoTitle": "新标题",
      "seoDescription": "新描述"
    },
    "acMcb": { ... },
    "dcSpd": { ... },
    "acSpd": { ... },
    "combinerBox": { ... },
    "smartCircuitBreaker": { ... }
  }
}
```

**B. 主产品页面**（添加FAQ、子型号导航、应用场景）
```
/src/app/[locale]/products/dc-mcb/page.tsx
/src/app/[locale]/products/ac-mcb/page.tsx
/src/app/[locale]/products/dc-spd/page.tsx
/src/app/[locale]/products/ac-spd/page.tsx
/src/app/[locale]/products/combiner-box/page.tsx
/src/app/[locale]/products/smart-circuit-breaker/page.tsx
```

**C. Manufacturer落地页**（添加产品目录横幅）
```
/src/app/[locale]/dc-mcb-manufacturer/page.tsx
/src/app/[locale]/ac-mcb-manufacturer/page.tsx
/src/app/[locale]/mcb-manufacturer/page.tsx
/src/app/[locale]/spd-manufacturer/page.tsx
/src/app/[locale]/combiner-box-manufacturer/page.tsx
/src/app/[locale]/ats-manufacturer/page.tsx
/src/app/[locale]/voltage-protector-manufacturer/page.tsx
/src/app/[locale]/energy-meter-manufacturer/page.tsx
```

**D. 新建组件**
```
/src/components/ProductFAQ.tsx         - FAQ组件
/src/components/ProductVariants.tsx    - 子型号导航网格
/src/components/ApplicationScenarios.tsx - 应用场景卡片
/src/components/ProductCatalogBanner.tsx - 制造商页横幅
```

### 6.2 待验证的现有功能

- [ ] 首页产品卡片链接是否已全部指向主产品页
- [ ] 顶部Mega Menu导航是否已指向主产品页
- [ ] 所有301重定向是否正常工作
- [ ] Sitemap是否已清理完毕（无404、无重定向URL）
- [ ] 标准数据库页面的canonical是否正确

---

## 七、建议的标题模板（可直接使用）

### 主产品页标题模板

**DC MCB**：
```
DC MCB Manufacturer | 1P-4P 1-125A | 250V-1500V Solar PV | IEC 60947-2 | TPKELE
```

**AC MCB**：
```
AC MCB Factory | 1P-4P 6-125A | B/C/D Curve | IEC 60898 | MOQ 100pcs | TPKELE
```

**DC SPD**：
```
DC SPD Manufacturer | 600V-1500V PV Surge Protector | Type 1+2 | IEC 61643-31 | TPKELE
```

**AC SPD**：
```
AC SPD Factory | Type 1/2 Surge Protector | 230V-400V | IEC 61643-11 | TPKELE
```

**PV Combiner Box**：
```
PV Combiner Box Manufacturer | 2-16 Strings | 1000V-1500V | IP65 | Custom Config | TPKELE
```

**Smart WiFi MCB**：
```
Smart WiFi MCB | IoT Circuit Breaker | Remote Control | Tuya Compatible | App Monitoring | TPKELE
```

### Manufacturer页标题模板

```
[Product] Manufacturer | Factory Direct | IEC Certified | OEM Service | MOQ [数量] | TPKELE
```

示例：
```
DC MCB Manufacturer | Factory Direct | IEC 60947-2 | OEM Branding | MOQ 100pcs | TPKELE
```

---

## 八、下一步行动

### 立即行动（本周）

1. **确认资源**：
   - [ ] 确认前端开发人员可用时间
   - [ ] 确认内容编写负责人
   - [ ] 确认是否有GSC访问权限

2. **数据收集**：
   - [ ] 导出GSC最近3个月数据（查询、网页、性能）
   - [ ] 导出GA4最近3个月询盘数据
   - [ ] 记录当前基线数据（作为对比基准）

3. **启动P0任务**：
   - [ ] 创建Git分支：`feature/seo-optimization-phase1`
   - [ ] 开始修改6个主产品页的SEO标题和描述
   - [ ] 创建ProductFAQ组件

### 本月完成（4周内）

- [ ] 完成所有P0任务
- [ ] 发布第一版优化
- [ ] 监控7天数据
- [ ] 根据数据微调标题
- [ ] 启动P1任务

### 下月完成（8周内）

- [ ] 完成P1任务
- [ ] 第一次效果评估（30天数据对比）
- [ ] 决定P2任务的具体内容和优先级
- [ ] 开始Solution页面创建

---

## 九、附录

### A. SEO检查工具清单

**免费工具**：
- Google Search Console（必须）
- Google Analytics 4（必须）
- Google PageSpeed Insights
- Google Rich Results Test
- Google Mobile-Friendly Test

**付费工具**（可选）：
- Ahrefs（关键词研究、竞争对手分析）
- SEMrush（排名监控、技术SEO审计）
- Screaming Frog（网站爬虫、技术问题检测）
- Hotjar / Microsoft Clarity（用户行为分析）

### B. 竞争对手分析（建议监控）

**同行制造商**（建议分析其SEO策略）：
- 找出排在前面的DC MCB / AC MCB制造商
- 分析他们的标题格式
- 分析他们的内容结构
- 学习他们的内链策略

### C. 参考资源

**Google官方文档**：
- SEO Starter Guide
- Search Quality Rater Guidelines
- Product Structured Data Guidelines

**行业最佳实践**：
- B2B SEO Playbook (HubSpot)
- Manufacturing SEO Guide (Industrial Marketer)

---

## 十、总结

### 核心策略概括

1. **让产品词搜索结果点击率从0%提升到3%+**
   - 方法：优化SEO标题，明确规格、价格、认证信息

2. **让主产品页成为流量中心**
   - 方法：添加FAQ、子型号导航、应用场景，增加页面价值

3. **打通认证流量到产品的转化路径**
   - 方法：在标准数据库页添加产品推荐，在产品页显示认证

4. **强化制造商页与产品页的双向引导**
   - 方法：制造商页顶部放置产品目录入口

5. **持续监控、快速迭代**
   - 方法：每周查看GSC数据，识别问题页面，逐页优化

### 预期成果

**30天后**：
- 产品词CTR提升到1%+
- 主产品页流量占比增加15%
- 询盘量增加20%

**60天后**：
- 产品词CTR提升到2%+
- 主产品页流量占比增加25%
- 询盘量增加35%

**90天后**：
- 产品词CTR提升到3%+
- 主产品页流量占比增加40%
- 询盘量增加50%+
- ROI：以低成本优化带来实质询盘增长，3个月回本

---

**文档版本**: v1.0  
**制定日期**: 2024年12月  
**下次审查**: 30天后（第一次效果评估）  
**负责人**: 待确认  
**状态**: 待批准执行
