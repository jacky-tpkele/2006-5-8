# About 页面优化策划方案

**页面URL**: https://www.tpkele.com/about  
**当前状态**: 基础信息完整，但缺乏转化驱动力  
**优化目标**: 从"公司介绍"转变为"信任建立+询盘转化"  
**策划日期**: 2024年12月

---

## 一、当前页面问题诊断

### 1.1 内容结构分析

**现有模块**（按页面顺序）：
1. Hero区 - 公司简介
2. 认证横幅 - CE/RoHS/IEC/ISO/TUV/CB
3. 工厂图片 - 3张工厂照片
4. 展会图片 - 3张展会照片
5. 全球市场 - 6个区域市场列表
6. OEM能力 - 6条能力说明
7. 为什么选择我们 - 5个价值点

**存在的问题**：

❌ **缺乏故事线**：各模块独立展示，没有形成"认识-信任-行动"的递进逻辑

❌ **转化点不明确**：只有2个CTA按钮（Request Factory Profile, Get OEM Proposal），针对性不强

❌ **信任元素薄弱**：
- 没有客户案例/评价
- 没有具体数据支撑（产能、交付记录等）
- 认证只是罗列，没有说明实际价值

❌ **差异化不足**：
- 没有说明为什么选TPKELE而不是其他温州供应商
- 核心竞争力不突出

❌ **视觉呈现单调**：
- 工厂和展会图片堆砌，没有说明具体能力
- 缺少图表、时间线等可视化元素

❌ **SEO元数据一般**：
- 标题：About TPKELE | Solar & Low Voltage Protection Manufacturer
- 描述过于通用，没有突出关键差异化

---

## 二、优化策略框架

### 2.1 重新定义About页面的目的

**从**："这是一个公司"  
**到**："这是一个值得信任、能解决你问题的合作伙伴"

**核心策略**：
1. **前30%建立专业性**（你们是谁、做什么的、多专业）
2. **中间40%建立信任**（为什么可信、客户怎么说、数据证明）
3. **后30%驱动行动**（根据用户角色，提供精准的下一步）

### 2.2 用户角色与需求映射

| 用户角色 | 来About页面想看什么 | 需要的信任元素 | 行动目标 |
|---------|-------------------|--------------|---------|
| **Solar EPC** | 工厂能力、交付记录、项目案例 | 大项目案例、IEC认证、按时交付率 | Request Project Quote |
| **电气分销商** | 产品线宽度、MOQ、OEM能力 | SKU数量、库存能力、其他分销商合作案例 | Request Catalog & Price List |
| **OEM买家** | 定制能力、质量控制、保密性 | OEM案例、样品照片、NDA流程 | Get OEM Proposal |
| **终端用户/工程师** | 技术实力、认证、售后 | 技术指南、测试报告、联系方式 | Contact Technical Support |

**现有About页面问题**：对所有人说同样的话，结果谁都没打动。

---

## 三、优化后的页面结构（详细方案）

### 模块1：Hero区域（重新设计）

**目标**：3秒内让访客明白"你们是谁、为什么相关"

**改前**：
```
标题：Solar & low voltage protection manufacturing for project buyers worldwide.
描述：一大段文字介绍...
CTA：Request Factory Profile（过于宽泛）
```

**改后**：
```typescript
<section className="about-hero">
  <div className="hero-content">
    {/* 主标题 - 差异化定位 */}
    <h1>
      <span className="eyebrow">Since 2013 · Wenzhou, China</span>
      Specialized in <mark>Solar DC Protection</mark> & Low Voltage Components
    </h1>
    
    {/* 副标题 - 核心价值主张 */}
    <p className="hero-lead">
      We manufacture IEC-certified DC MCB, DC SPD, PV combiner boxes and AC protection devices 
      for <strong>solar EPCs, electrical distributors and OEM buyers</strong> who need 
      reliable container-load supply with technical documentation ready for project tenders.
    </p>
    
    {/* 信任信号 - 快速扫描 */}
    <div className="trust-badges">
      <div className="badge">
        <strong>100+</strong>
        <span>Countries Served</span>
      </div>
      <div className="badge">
        <strong>2,000+</strong>
        <span>Projects Completed</span>
      </div>
      <div className="badge">
        <strong>10+ Years</strong>
        <span>Export Experience</span>
      </div>
      <div className="badge">
        <strong>ISO 9001</strong>
        <span>Certified</span>
      </div>
    </div>
    
    {/* 分流CTA - 根据角色 */}
    <div className="hero-cta-group">
      <div className="cta-card">
        <h3>For Project Buyers</h3>
        <p>Solar EPC, contractors, distributors</p>
        <Button primary>Request Project Quote</Button>
      </div>
      <div className="cta-card">
        <h3>For OEM Partners</h3>
        <p>Private-label, custom branding</p>
        <Button secondary>Get OEM Proposal</Button>
      </div>
      <div className="cta-card">
        <h3>For Technical Research</h3>
        <p>Engineers, procurement teams</p>
        <Button ghost>Download Catalog</Button>
      </div>
    </div>
  </div>
  
  {/* 右侧 - 动态内容 */}
  <div className="hero-visual">
    {/* 可以是：工厂视频、产品3D展示、或轮播图 */}
    <VideoPlayer 
      src="/videos/factory-tour-30s.mp4"
      poster="/assets/about/building.webp"
      caption="30-second factory tour"
    />
  </div>
</section>
```

**改进点**：
- ✅ 明确时间线（Since 2013）建立历史感
- ✅ 差异化（Specialized in Solar DC Protection）而不是泛泛的"制造商"
- ✅ 明确目标客户（solar EPCs, distributors, OEM buyers）
- ✅ 数据化信任信号（100+国家、2000+项目）
- ✅ 分流CTA（不同角色看到不同入口）

---

### 模块2：我们的专长（新增模块）

**目标**：用具体事实说明为什么选TPKELE

```typescript
<section className="specialization-section">
  <div className="section-heading centered">
    <p className="eyebrow">Core Expertise</p>
    <h2>What makes TPKELE different from other Wenzhou suppliers</h2>
  </div>
  
  <div className="specialization-grid">
    {/* 专长1 */}
    <div className="spec-card featured">
      <div className="spec-icon">🌞</div>
      <h3>Solar DC Protection Specialist</h3>
      <p>
        While many suppliers offer AC MCB as commodity, we engineer purpose-built 
        <strong>DC MCB, DC SPD and combiner boxes</strong> specifically for photovoltaic systems. 
        Our DC product line covers 250V to 1500V — the complete range for residential, 
        commercial and utility-scale solar.
      </p>
      <ul className="spec-highlights">
        <li>✓ 4 series of DC MCB (1P/2P/3P/4P configurations)</li>
        <li>✓ Type 1+2 & Type 2 DC SPD for all PV voltage classes</li>
        <li>✓ Pre-assembled combiner boxes with custom single-line diagrams</li>
      </ul>
      <Link href="/solar-dc-protection">View Solar DC Range →</Link>
    </div>
    
    {/* 专长2 */}
    <div className="spec-card">
      <div className="spec-icon">📋</div>
      <h3>IEC Standards as Design Foundation</h3>
      <p>
        Every product designed to IEC 60947-2 (MCB), IEC 61643-31 (DC SPD), 
        IEC 60898-1 (AC MCB) — not just tested after the fact. This means 
        our datasheets match tender requirements for EU, MENA, SEA and LATAM projects.
      </p>
      <div className="spec-proof">
        <Image src="/assets/about/test-report-preview.webp" width={200} height={140} />
        <span>Full IEC test reports available for each model</span>
      </div>
    </div>
    
    {/* 专长3 */}
    <div className="spec-card">
      <div className="spec-icon">🏭</div>
      <h3>Vertical Integration for Stability</h3>
      <p>
        We control the full production cycle: injection molding → assembly → 
        electrical testing → packaging. This integration means shorter lead times, 
        better quality traceability and consistent output even during peak season.
      </p>
      <ul className="spec-data">
        <li>In-house mold tooling workshop</li>
        <li>8 automated assembly lines</li>
        <li>100% electrical function testing before shipment</li>
        <li>Average lead time: 15-20 days for standard models</li>
      </ul>
    </div>
    
    {/* 专长4 */}
    <div className="spec-card">
      <div className="spec-icon">🤝</div>
      <h3>Built for B2B Project Supply</h3>
      <p>
        We understand solar EPC procurement: BOMs, single-line diagrams, 
        container load planning, documentation packs for tenders. Our sales team 
        speaks your language — not just taking orders, but helping you size protection 
        and prepare submissions.
      </p>
      <blockquote className="customer-quote">
        "TPKELE provided complete technical documentation pack including datasheets, 
        certificates and sizing calculations within 48 hours — exactly what we needed 
        for our Morocco 50MW tender submission."
        <cite>— Solar EPC, Spain</cite>
      </blockquote>
    </div>
  </div>
</section>
```

**为什么需要这个模块**：
- 现有About页面只说"我们是制造商"，但没说"为什么选你"
- 竞争对手也都是温州制造商，需要明确差异化
- 通过4个专长卡片，分别对应：产品深度、认证能力、制造能力、服务能力

---

### 模块3：认证与合规（重新设计）

**目标**：从"罗列认证标志"到"说明认证的实际价值"

**改前**：
```
只展示6个认证图标 + 简单描述
```

**改后**：
```typescript
<section className="certifications-section">
  <div className="section-heading centered">
    <p className="eyebrow">Quality & Compliance</p>
    <h2>Certifications that open doors to global projects</h2>
    <p className="section-lede">
      We don't just buy certificates — our products are designed to IEC standards 
      from the start, with full type test reports available for tender submissions.
    </p>
  </div>
  
  {/* 认证分类展示 */}
  <div className="cert-categories">
    {/* 类别1：产品认证 */}
    <div className="cert-category">
      <h3>Product Certifications</h3>
      <p>For regulatory compliance and tender submissions</p>
      <div className="cert-items">
        <div className="cert-item">
          <CertIcon code="CE" />
          <div>
            <strong>CE Marking</strong>
            <p>EU Low Voltage Directive 2014/35/EU</p>
            <span className="cert-value">Required for: EU, Turkey, some MENA tenders</span>
          </div>
        </div>
        <div className="cert-item">
          <CertIcon code="RoHS" />
          <div>
            <strong>RoHS Compliance</strong>
            <p>Directive 2011/65/EU on hazardous substances</p>
            <span className="cert-value">Required for: EU public tenders, some corporate procurement</span>
          </div>
        </div>
        <div className="cert-item">
          <CertIcon code="CB" />
          <div>
            <strong>CB Certificates</strong>
            <p>IECEE CB Scheme for select models</p>
            <span className="cert-value">Recognized in: 54 countries, speeds local certification</span>
          </div>
        </div>
      </div>
    </div>
    
    {/* 类别2：标准符合性 */}
    <div className="cert-category">
      <h3>Standards Conformity</h3>
      <p>Design and testing basis for technical specs</p>
      <div className="cert-items">
        <div className="cert-item">
          <CertIcon code="IEC" />
          <div>
            <strong>IEC Standards</strong>
            <p>IEC 60947-2 (MCB), IEC 61643-31 (DC SPD), IEC 60898-1 (AC MCB)</p>
            <span className="cert-value">Full type test reports available on request</span>
            <Link href="/resources/standards-database">View Standards Database →</Link>
          </div>
        </div>
        <div className="cert-item">
          <CertIcon code="TUV" />
          <div>
            <strong>TÜV Test Reports</strong>
            <p>Third-party testing for DC MCB, DC SPD models</p>
            <span className="cert-value">Available for: Utility-scale solar tenders requiring TÜV verification</span>
          </div>
        </div>
      </div>
    </div>
    
    {/* 类别3：质量管理 */}
    <div className="cert-category">
      <h3>Quality Management</h3>
      <p>Factory-level certification for process control</p>
      <div className="cert-items">
        <div className="cert-item">
          <CertIcon code="ISO" />
          <div>
            <strong>ISO 9001:2015</strong>
            <p>Quality management system certified since 2015</p>
            <span className="cert-value">Annual surveillance audits, next renewal: 2026</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* CTA */}
  <div className="cert-cta">
    <h3>Need certificate documentation for your tender?</h3>
    <p>We provide CE, RoHS, IEC test reports and CB certificates as PDF packs within 24 hours.</p>
    <Button primary>Request Certificate Pack</Button>
  </div>
</section>
```

**改进点**：
- ✅ 说明每个认证的实际用途（"Required for: EU, Turkey..."）
- ✅ 分类展示（产品认证、标准符合性、质量管理）
- ✅ 增加行动点（Request Certificate Pack）
- ✅ 关联到标准数据库（引流）

---

### 模块4：制造能力（数据化展示）

**目标**：从"看照片"到"看数据+能力证明"

**改后**：
```typescript
<section className="manufacturing-section">
  <div className="section-heading">
    <p className="eyebrow">Manufacturing Capabilities</p>
    <h2>Vertical integration from mold to shipment</h2>
  </div>
  
  <div className="manufacturing-flow">
    {/* 流程时间线 */}
    <div className="flow-timeline">
      <div className="flow-step">
        <div className="step-number">01</div>
        <h3>Mold Design & Tooling</h3>
        <p>In-house mold workshop for product housing and custom parts</p>
        <ul>
          <li>12 injection molding machines (80T-650T)</li>
          <li>Flame-retardant PA66 material (UL94 V-0)</li>
          <li>Custom color molding for OEM projects</li>
        </ul>
        <Image src="/assets/about/molding-workshop.webp" width={300} height={180} />
      </div>
      
      <div className="flow-step">
        <div className="step-number">02</div>
        <h3>Assembly & Production</h3>
        <p>8 automated assembly lines with daily capacity tracking</p>
        <ul>
          <li>Daily output: 50,000+ MCB units</li>
          <li>Semi-automated contact riveting</li>
          <li>Automated terminal insertion</li>
        </ul>
        <Image src="/assets/about/assembly-line.webp" width={300} height={180} />
      </div>
      
      <div className="flow-step">
        <div className="step-number">03</div>
        <h3>Electrical Testing</h3>
        <p>100% functional testing before packaging</p>
        <ul>
          <li>Trip current testing (every unit)</li>
          <li>Insulation resistance testing (batch sampling)</li>
          <li>Visual inspection & marking check</li>
        </ul>
        <Image src="/assets/about/testing-area.webp" width={300} height={180} />
      </div>
      
      <div className="flow-step">
        <div className="step-number">04</div>
        <h3>Packaging & Export</h3>
        <p>Export-grade packaging with documentation support</p>
        <ul>
          <li>Inner box + master carton with shipping marks</li>
          <li>Pallet stacking for container load</li>
          <li>Commercial invoice, packing list, COO</li>
        </ul>
        <Image src="/assets/about/packaging-warehouse.webp" width={300} height={180} />
      </div>
    </div>
  </div>
  
  {/* 产能数据卡片 */}
  <div className="capacity-cards">
    <div className="capacity-card">
      <strong>50,000+</strong>
      <span>MCB units/day</span>
    </div>
    <div className="capacity-card">
      <strong>15-20 days</strong>
      <span>Standard lead time</span>
    </div>
    <div className="capacity-card">
      <strong>100%</strong>
      <span>Electrical testing</span>
    </div>
    <div className="capacity-card">
      <strong>8</strong>
      <span>Assembly lines</span>
    </div>
  </div>
  
  {/* CTA */}
  <div className="manufacturing-cta">
    <h3>Want to see the factory in detail?</h3>
    <div className="button-row">
      <Button primary>Schedule Virtual Factory Tour</Button>
      <Button secondary>Download Factory Profile PDF</Button>
    </div>
  </div>
</section>
```

**改进点**：
- ✅ 用流程时间线代替静态图片堆砌
- ✅ 每个步骤配具体数据（产能、设备数量）
- ✅ 增加可操作CTA（虚拟工厂参观、下载Profile）

---

### 模块5：客户案例与评价（新增模块）

**目标**：用真实案例建立信任

```typescript
<section className="case-studies-section muted">
  <div className="section-heading centered">
    <p className="eyebrow">Customer Success</p>
    <h2>How buyers use TPKELE products in real projects</h2>
  </div>
  
  <div className="case-grid">
    {/* 案例1：Solar EPC */}
    <div className="case-card">
      <div className="case-header">
        <span className="case-tag">Solar EPC · Europe</span>
        <h3>50MW Solar Farm in Morocco</h3>
      </div>
      <div className="case-challenge">
        <h4>Challenge</h4>
        <p>
          Spanish EPC needed 1500V DC MCB and DC SPD with IEC 61643-31 
          certificates for tender submission, tight deadline.
        </p>
      </div>
      <div className="case-solution">
        <h4>Solution</h4>
        <ul>
          <li>Provided technical documentation pack within 48 hours</li>
          <li>Delivered 2,400 units of 2P DC MCB + 600 units DC SPD Type 1+2</li>
          <li>Container shipment to Casablanca port in 18 days</li>
        </ul>
      </div>
      <div className="case-products">
        <span className="product-tag">DC MCB 2P 16A 1500V</span>
        <span className="product-tag">DC SPD Type 1+2 1500V</span>
      </div>
      <blockquote>
        "TPKELE understood our tender requirements immediately and provided 
        exactly the documentation we needed. No back-and-forth."
      </blockquote>
      <Link href="/projects/morocco-solar-case-study">Read Full Case →</Link>
    </div>
    
    {/* 案例2：Distributor */}
    <div className="case-card">
      <div className="case-header">
        <span className="case-tag">Electrical Distributor · Middle East</span>
        <h3>Private-Label MCB Program for UAE Market</h3>
      </div>
      <div className="case-challenge">
        <h4>Challenge</h4>
        <p>
          Dubai-based distributor wanted to launch own-brand AC MCB line 
          with custom logo and catalog, targeting local contractors.
        </p>
      </div>
      <div className="case-solution">
        <h4>Solution</h4>
        <ul>
          <li>Custom logo printing on MCB housing (MOQ 500pcs/model)</li>
          <li>Private-label catalog design with distributor branding</li>
          <li>6 SKUs (1P/2P/3P, C curve, 16A/32A/63A)</li>
        </ul>
      </div>
      <div className="case-products">
        <span className="product-tag">AC MCB OEM Program</span>
        <span className="product-tag">6 SKUs</span>
      </div>
      <blockquote>
        "We now have our own MCB brand in UAE. TPKELE handled everything 
        from catalog design to export documentation."
      </blockquote>
      <Link href="/oem-case-studies">View More OEM Cases →</Link>
    </div>
    
    {/* 案例3：Battery Storage */}
    <div className="case-card">
      <div className="case-header">
        <span className="case-tag">BESS Integrator · Southeast Asia</span>
        <h3>Battery Storage DC Protection for Philippines Project</h3>
      </div>
      <div className="case-challenge">
        <h4>Challenge</h4>
        <p>
          Battery integrator needed DC MCB for 1000V battery racks, 
          specific DC breaking capacity requirements.
        </p>
      </div>
      <div className="case-solution">
        <h4>Solution</h4>
        <ul>
          <li>Technical sizing support for battery DC bus protection</li>
          <li>Provided DC breaking capacity test data for verification</li>
          <li>Sample testing → mass order → delivered in 20 days</li>
        </ul>
      </div>
      <div className="case-products">
        <span className="product-tag">DC MCB 2P 63A 1000V</span>
      </div>
      <blockquote>
        "TPKELE's engineers helped us size the correct DC MCB rating. 
        Their technical support made the difference."
      </blockquote>
    </div>
  </div>
  
  {/* 客户评价滚动 */}
  <div className="testimonials-band">
    <h3>What buyers say</h3>
    <div className="testimonials-scroll">
      <div className="testimonial">
        <p>"Fast quotation, clear communication, reliable delivery."</p>
        <cite>— Solar EPC, Spain</cite>
      </div>
      <div className="testimonial">
        <p>"TPKELE provided complete technical documentation pack within 48 hours."</p>
        <cite>— Electrical Distributor, UAE</cite>
      </div>
      <div className="testimonial">
        <p>"Their engineers helped us size the correct DC MCB rating."</p>
        <cite>— BESS Integrator, Philippines</cite>
      </div>
      <div className="testimonial">
        <p>"OEM program was smooth — from samples to mass production."</p>
        <cite>— Importer, Germany</cite>
      </div>
    </div>
  </div>
</section>
```

**为什么重要**：
- 当前About页面没有任何客户案例，纯自说自话
- 案例卡片展示具体的"问题-解决方案-结果"，比泛泛的"我们很好"更有说服力
- 按用户角色分类（Solar EPC、Distributor、BESS Integrator），让不同访客都能找到共鸣

---

### 模块6：全球市场（优化现有模块）

**改前**：
```
只列出6个区域和国家名单
```

**改后**：
```typescript
<section className="global-reach-section">
  <div className="section-heading centered">
    <p className="eyebrow">Global Reach</p>
    <h2>Exporting to 100+ countries — here's where our products are working</h2>
  </div>
  
  {/* 交互式地图 */}
  <div className="interactive-map">
    <WorldMap 
      highlightedCountries={exportCountries}
      onCountryHover={(country) => showCountryStats(country)}
    />
    <div className="map-stats">
      <div className="stat-item">
        <strong>100+</strong>
        <span>Countries</span>
      </div>
      <div className="stat-item">
        <strong>6</strong>
        <span>Regions</span>
      </div>
      <div className="stat-item">
        <strong>2,000+</strong>
        <span>Projects</span>
      </div>
    </div>
  </div>
  
  {/* 区域详情 - 可展开 */}
  <div className="region-details">
    <details className="region-card">
      <summary>
        <h3>Europe</h3>
        <span className="country-count">22 countries</span>
      </summary>
      <div className="region-content">
        <div className="region-countries">
          <strong>Active Markets:</strong> Germany, Spain, Italy, Netherlands, Poland, UK, 
          France, Belgium, Czech Republic, Romania, Greece, Portugal...
        </div>
        <div className="region-products">
          <strong>Popular Products:</strong> DC MCB (1500V for utility solar), 
          PV Combiner Box, AC SPD
        </div>
        <div className="region-certs">
          <strong>Required Certifications:</strong> CE, RoHS, IEC test reports
        </div>
      </div>
    </details>
    
    <details className="region-card">
      <summary>
        <h3>Middle East</h3>
        <span className="country-count">15 countries</span>
      </summary>
      <div className="region-content">
        <div className="region-countries">
          <strong>Active Markets:</strong> UAE, Saudi Arabia, Jordan, Egypt, Turkey, 
          Oman, Kuwait, Qatar...
        </div>
        <div className="region-products">
          <strong>Popular Products:</strong> DC MCB, DC SPD, AC MCB, ATS
        </div>
        <div className="region-certs">
          <strong>Required Certifications:</strong> IEC test reports, sometimes SASO, TÜV
        </div>
      </div>
    </details>
    
    {/* 其他区域类似... */}
  </div>
</section>
```

**改进点**：
- ✅ 增加交互式地图（视觉吸引力）
- ✅ 每个区域说明热门产品和认证要求（实用信息）
- ✅ 可展开设计（节省空间，让用户主动探索）

---

### 模块7：OEM能力（优化现有模块）

**改前**：
```
6条能力列表 + 1个CTA
```

**改后**：
```typescript
<section className="oem-capabilities-section">
  <div className="section-heading">
    <p className="eyebrow">OEM / ODM Manufacturing</p>
    <h2>Your brand, our factory — private-label programs for distributors & importers</h2>
  </div>
  
  <div className="oem-showcase">
    {/* 左侧：OEM样品展示 */}
    <div className="oem-samples">
      <h3>OEM Sample Gallery</h3>
      <p>Real examples of custom branding we've done for partners (logos blurred for confidentiality)</p>
      <div className="samples-grid">
        <Image src="/assets/about/oem-sample-1-blurred.webp" width={200} height={150} />
        <Image src="/assets/about/oem-sample-2-blurred.webp" width={200} height={150} />
        <Image src="/assets/about/oem-sample-3-blurred.webp" width={200} height={150} />
        <Image src="/assets/about/oem-catalog-example.webp" width={200} height={150} />
      </div>
      <span className="confidentiality-note">
        We sign NDA with all OEM partners. Your brand stays your brand.
      </span>
    </div>
    
    {/* 右侧：OEM流程与能力 */}
    <div className="oem-process">
      <h3>What we can customize</h3>
      <ul className="oem-checklist">
        <li>
          <span className="check-icon">✓</span>
          <div>
            <strong>Logo & Brand Printing</strong>
            <p>Silk-screen or pad printing on MCB housing, minimum 500pcs/model</p>
          </div>
        </li>
        <li>
          <span className="check-icon">✓</span>
          <div>
            <strong>Custom Color Housing</strong>
            <p>Gray, white, black — or match your Pantone for orders over 5,000pcs</p>
          </div>
        </li>
        <li>
          <span className="check-icon">✓</span>
          <div>
            <strong>Private-Label Packaging</strong>
            <p>Inner box and master carton with your branding</p>
          </div>
        </li>
        <li>
          <span className="check-icon">✓</span>
          <div>
            <strong>Custom Catalogs & Datasheets</strong>
            <p>We design product catalogs with your logo and contact info</p>
          </div>
        </li>
        <li>
          <span className="check-icon">✓</span>
          <div>
            <strong>Project-Spec Documentation</strong>
            <p>Single-line diagrams, BOMs, certificates — formatted to your templates</p>
          </div>
        </li>
        <li>
          <span className="check-icon">✓</span>
          <div>
            <strong>Exclusive Territory Option</strong>
            <p>For committed partners, we can discuss exclusive distribution rights</p>
          </div>
        </li>
      </ul>
      
      <div className="oem-timeline">
        <h4>OEM Production Timeline</h4>
        <ol>
          <li><strong>Sample</strong> — 5-7 days after artwork approval</li>
          <li><strong>Sample approval</strong> — Your testing & confirmation</li>
          <li><strong>Mass production</strong> — 20-25 days for first OEM order</li>
          <li><strong>Shipment</strong> — FOB Ningbo or CIF to your port</li>
        </ol>
      </div>
    </div>
  </div>
  
  {/* OEM询盘表单 */}
  <div className="oem-inquiry-box">
    <h3>Start your OEM program</h3>
    <p>Tell us your target market, product list and branding requirements — we'll prepare a proposal within 48 hours.</p>
    <form className="oem-quick-form">
      <input type="text" placeholder="Your Company Name" />
      <input type="email" placeholder="Email" />
      <select>
        <option>Target Market Region</option>
        <option>Europe</option>
        <option>Middle East</option>
        <option>Southeast Asia</option>
        <option>South America</option>
        <option>Africa</option>
      </select>
      <select>
        <option>Product Interest</option>
        <option>DC MCB + DC SPD (Solar)</option>
        <option>AC MCB</option>
        <option>Complete protection range</option>
      </select>
      <button type="submit" className="btn primary">Get OEM Proposal</button>
    </form>
  </div>
</section>
```

**改进点**：
- ✅ 增加OEM样品照片（视觉证明）
- ✅ 说明最小起订量（MOQ 500pcs/model）
- ✅ OEM时间线（让客户知道周期）
- ✅ 嵌入快速询盘表单（降低行动门槛）

---

### 模块8：展会与行业活动（优化现有模块）

**改前**：
```
3张展会照片堆砌
```

**改后**：
```typescript
<section className="exhibitions-section">
  <div className="section-heading centered">
    <p className="eyebrow">Industry Presence</p>
    <h2>Meet us at solar & electrical exhibitions worldwide</h2>
  </div>
  
  {/* 展会时间线 */}
  <div className="exhibition-timeline">
    <div className="exhibition-card past">
      <span className="year">2024</span>
      <div className="exhibition-info">
        <h3>Intersolar Europe (Munich)</h3>
        <p>June 19-21, 2024 · Hall B3, Stand 350</p>
        <div className="exhibition-photo">
          <Image src="/assets/about/intersolar-2024.webp" width={300} height={180} />
        </div>
        <span className="badge">Past Event</span>
      </div>
    </div>
    
    <div className="exhibition-card past">
      <span className="year">2024</span>
      <div className="exhibition-info">
        <h3>Middle East Energy (Dubai)</h3>
        <p>March 5-7, 2024 · DWTC, Stand 4B22</p>
        <div className="exhibition-photo">
          <Image src="/assets/about/mee-dubai-2024.webp" width={300} height={180} />
        </div>
        <span className="badge">Past Event</span>
      </div>
    </div>
    
    <div className="exhibition-card upcoming">
      <span className="year">2025</span>
      <div className="exhibition-info">
        <h3>Intersolar Europe (Munich)</h3>
        <p>June 11-13, 2025 · Hall TBD</p>
        <span className="badge primary">Upcoming</span>
        <Button secondary small>Schedule Meeting</Button>
      </div>
    </div>
  </div>
  
  {/* CTA */}
  <div className="exhibition-cta">
    <p>Can't make it to exhibitions? Schedule a virtual meeting with our sales team.</p>
    <Button primary>Schedule Virtual Meeting</Button>
  </div>
</section>
```

**改进点**：
- ✅ 时间线展示（过去+未来）
- ✅ 展会信息具体化（日期、展位号）
- ✅ 未来展会增加CTA（Schedule Meeting）

---

### 模块9：最终CTA区域（新增）

**目标**：给不同角色明确的下一步

```typescript
<section className="final-cta-section">
  <div className="section-heading centered">
    <h2>Ready to work with TPKELE?</h2>
    <p>Choose the option that fits your need</p>
  </div>
  
  <div className="cta-options-grid">
    {/* 选项1 */}
    <div className="cta-option-card">
      <div className="option-icon">📋</div>
      <h3>Request Project Quote</h3>
      <p>
        Send your BOM, single-line diagram or product list. 
        We'll match products and provide quotation within 72 hours.
      </p>
      <ul className="option-includes">
        <li>Technical product matching</li>
        <li>Pricing & lead time</li>
        <li>Certificate documentation</li>
      </ul>
      <Button primary large>Get Project Quote</Button>
    </div>
    
    {/* 选项2 */}
    <div className="cta-option-card">
      <div className="option-icon">🏷️</div>
      <h3>Start OEM Program</h3>
      <p>
        Looking for private-label or custom branding? 
        Tell us your requirements — we'll prepare OEM proposal.
      </p>
      <ul className="option-includes">
        <li>Custom logo & color</li>
        <li>Private-label packaging</li>
        <li>Catalog customization</li>
      </ul>
      <Button primary large>Get OEM Proposal</Button>
    </div>
    
    {/* 选项3 */}
    <div className="cta-option-card">
      <div className="option-icon">📚</div>
      <h3>Download Catalog</h3>
      <p>
        Browse our complete product range with specifications, 
        certifications and typical applications.
      </p>
      <ul className="option-includes">
        <li>Complete product catalog PDF</li>
        <li>Certification summary</li>
        <li>Selection guides</li>
      </ul>
      <Button secondary large>Download Catalog</Button>
    </div>
    
    {/* 选项4 */}
    <div className="cta-option-card">
      <div className="option-icon">💬</div>
      <h3>Talk to Sales Team</h3>
      <p>
        Have questions? Chat with our sales engineers for 
        technical guidance and product recommendations.
      </p>
      <ul className="option-includes">
        <li>Technical consultation</li>
        <li>Product sizing help</li>
        <li>Certificate verification</li>
      </ul>
      <Button ghost large>Contact Sales</Button>
    </div>
  </div>
</section>
```

**为什么重要**：
- 当前About页面底部没有明确的"下一步"指引
- 不同用户有不同需求，需要提供多个选项
- 每个选项说明"包含什么"，降低决策门槛

---

## 四、SEO优化

### 4.1 元数据优化

**当前**：
```
Title: About TPKELE | Solar & Low Voltage Protection Manufacturer
Description: TPKELE manufactures DC MCB, AC MCB, DC SPD, AC SPD, PV combiner boxes, ATS and energy meters. ISO 9001 certified, CE/IEC/RoHS compliant, exporting to 100+ countries.
```

**优化后**：
```
Title: TPKELE Factory | Solar DC Protection Manufacturer | IEC Certified | 100+ Countries
Description: ISO 9001 factory specializing in DC MCB, DC SPD, PV combiner boxes for solar projects. IEC 60947-2 certified, 10+ years export experience, OEM program available. Serving solar EPCs, distributors and panel builders in 100+ countries with reliable container-load supply.
```

**改进点**：
- ✅ 标题突出"Factory"（搜索意图匹配）
- ✅ 强调专长"Solar DC Protection"（差异化）
- ✅ 描述增加关键信息（10+ years、OEM、container-load）
- ✅ 说明目标客户（solar EPCs, distributors, panel builders）

### 4.2 Schema标记

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TPKELE",
  "url": "https://www.tpkele.com",
  "logo": "https://www.tpkele.com/logo.png",
  "description": "ISO 9001 certified manufacturer of solar DC protection and low voltage electrical components",
  "foundingDate": "2013",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CN",
    "addressRegion": "Zhejiang",
    "addressLocality": "Wenzhou"
  },
  "areaServed": [
    {"@type": "Country", "name": "Europe"},
    {"@type": "Country", "name": "Middle East"},
    {"@type": "Country", "name": "Southeast Asia"},
    {"@type": "Country", "name": "South America"}
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "DC MCB",
        "category": "Solar Protection"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "PV Combiner Box",
        "category": "Solar Protection"
      }
    }
  ],
  "certification": [
    "ISO 9001:2015",
    "CE Marking",
    "RoHS Compliance"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}
```

---

## 五、执行计划

### 5.1 优先级分级

**P0（核心模块，必须完成）**：
- [ ] Hero区域重新设计（分流CTA）
- [ ] 专长模块（新增，说明差异化）
- [ ] 认证价值化展示
- [ ] 客户案例与评价（新增）
- [ ] 最终CTA区域（新增）
- [ ] SEO元数据优化

**P1（增强模块，建议完成）**：
- [ ] 制造能力数据化
- [ ] 全球市场交互式地图
- [ ] OEM样品展示
- [ ] 展会时间线

**P2（锦上添花，资源允许时完成）**：
- [ ] 工厂视频（30秒tour）
- [ ] 虚拟工厂参观功能
- [ ] 在线OEM询盘表单

### 5.2 资源需求

**设计工作量**：
- Hero区域重新设计：1天
- 专长卡片设计：1天
- 认证模块重新布局：0.5天
- 客户案例卡片设计：1天
- 交互式地图设计：1.5天
- **总计**：约5天

**前端开发工作量**：
- Hero区域（包括分流CTA）：2天
- 专长模块：1天
- 认证模块重构：1天
- 客户案例模块：1.5天
- 制造能力时间线：1.5天
- 全球市场模块：1天
- OEM模块优化：1天
- 最终CTA区域：1天
- **总计**：约10天

**内容创作工作量**：
- 客户案例编写（3个详细案例）：2天
- 客户评价收集与整理：1天
- 专长模块文案：1天
- 认证价值说明文案：0.5天
- OEM流程文案：0.5天
- **总计**：约5天

**摄影/视频**（如需要）：
- 工厂流程照片补拍：1天
- OEM样品照片（打码处理）：0.5天
- 工厂30秒视频：2天
- **总计**：约3.5天

### 5.3 分阶段发布

**第一阶段（2周）**：
- Hero区域重新设计
- 专长模块（新增）
- 认证价值化展示
- SEO优化
- **目标**：提升About页面的首屏吸引力和差异化

**第二阶段（2周）**：
- 客户案例模块（新增）
- 制造能力数据化
- 最终CTA区域
- **目标**：增强信任和转化

**第三阶段（2周）**：
- OEM模块优化
- 全球市场交互式地图
- 展会时间线
- **目标**：完善细节，提升体验

---

## 六、效果监控

### 6.1 监控指标

| 指标 | 当前基线 | 30天目标 | 60天目标 |
|------|---------|---------|---------|
| About页面访问量 | 待确认 | +20% | +35% |
| 平均停留时间 | 待确认 | +45秒 | +90秒 |
| 跳出率 | 待确认 | -15% | -25% |
| 询盘转化率 | 待确认 | +30% | +50% |
| CTA点击率 | 待确认 | 测量基线 | +40% |

### 6.2 A/B测试建议

**测试1：Hero区域CTA数量**
- 版本A：3个分流CTA（Project/OEM/Catalog）
- 版本B：2个主要CTA + 1个次要链接
- 测量：哪个版本的总体CTA点击率更高

**测试2：客户案例呈现方式**
- 版本A：详细卡片（有Challenge/Solution结构）
- 版本B：简短引用 + 更多案例数量
- 测量：哪个版本的停留时间和询盘转化更好

**测试3：认证展示方式**
- 版本A：分类展示 + 价值说明
- 版本B：简洁横幅 + 详情页链接
- 测量：哪个版本让用户更信任

---

## 七、文案模板（可直接使用）

### Hero区域

**英文**：
```
Since 2013 · Wenzhou, China
Specialized in Solar DC Protection & Low Voltage Components

We manufacture IEC-certified DC MCB, DC SPD, PV combiner boxes and AC protection devices for solar EPCs, electrical distributors and OEM buyers who need reliable container-load supply with technical documentation ready for project tenders.
```

**俄文**（如需要）：
```
С 2013 года · Вэньчжоу, Китай
Специализация на защите солнечных систем постоянного тока и низковольтных компонентах

Мы производим сертифицированные IEC автоматы постоянного тока, УЗИП, комбайнерные боксы для солнечных ЭПК-компаний, дистрибьюторов и OEM-покупателей.
```

### 专长模块标题

```
What makes TPKELE different from other Wenzhou suppliers
```

### 认证模块

```
Certifications that open doors to global projects

We don't just buy certificates — our products are designed to IEC standards from the start, with full type test reports available for tender submissions.
```

### 客户案例引用模板

```
"TPKELE provided complete technical documentation pack including datasheets, certificates and sizing calculations within 48 hours — exactly what we needed for our [Country] [Size]MW tender submission."
— [Role], [Company Type], [Country]
```

### 最终CTA

```
Ready to work with TPKELE?
Choose the option that fits your need
```

---

## 八、风险与注意事项

### 8.1 潜在风险

**风险1：客户案例保密性**
- 问题：客户可能不愿意公开出现在网站
- 解决：使用"Solar EPC, Spain"代替具体公司名，并获得客户书面同意

**风险2：OEM样品照片泄密**
- 问题：OEM客户的品牌logo不能展示
- 解决：所有OEM样品照片必须打码或模糊处理

**风险3：数据真实性**
- 问题：如果数据（如"2000+项目"）无法证实，可能损害信任
- 解决：只使用可验证的数据，或使用保守估计

**风险4：页面加载速度**
- 问题：增加模块和图片后，页面可能变慢
- 解决：所有图片webp格式、懒加载、代码分割

### 8.2 质量检查清单

**内容检查**：
- [ ] 所有客户案例已获得客户同意
- [ ] 所有数据可验证或标注"约"
- [ ] 中英文翻译准确一致
- [ ] 认证信息与实际证书一致

**技术检查**：
- [ ] 移动端响应式正常
- [ ] 图片懒加载工作
- [ ] CTA按钮点击追踪正常
- [ ] 表单提交正常
- [ ] Lighthouse Performance > 85

**SEO检查**：
- [ ] Meta标题和描述优化
- [ ] Schema标记正确
- [ ] 图片alt标签完整
- [ ] 内链锚文本优化

---

## 九、成功案例参考

### 行业标杆About页面

**Schneider Electric About页面**：
- 突出全球存在感（180+国家）
- 具体数据（员工数、营收、R&D投入）
- 可持续发展承诺
- 明确的行业解决方案分类

**Phoenix Contact About页面**：
- 家族企业历史故事
- 创新研发实力（专利数）
- 工厂参观视频
- 客户成功案例

**你们可以学习的点**：
- ✅ 用具体数据而不是模糊描述
- ✅ 讲故事而不是列清单
- ✅ 展示专长而不是"什么都能做"
- ✅ 给不同用户不同的行动路径

---

## 十、总结

### 核心改进方向

1. **从自说自话到用户视角**
   - 不只说"我们是谁"，更说"为什么选我们"
   - 不只列能力，更展示实际案例

2. **从静态展示到转化驱动**
   - 每个模块都有明确的用户行动目标
   - 根据用户角色提供不同CTA

3. **从通用介绍到差异化定位**
   - 强调"Solar DC Protection Specialist"
   - 说明为什么选TPKELE而不是其他温州供应商

4. **从图片堆砌到数据支撑**
   - 产能数据、交付周期、测试覆盖率
   - 客户案例、项目数量、出口国家数

### 预期效果

**30天后**：
- About页面停留时间增加45秒+
- 询盘转化率提升30%
- 跳出率降低15%

**60天后**：
- About页面停留时间增加90秒+
- 询盘转化率提升50%
- 成为网站第二大流量入口（仅次于首页）

**长期价值**：
- 建立"Solar DC专家"品牌认知
- 吸引更高质量的询盘（明确需求的买家）
- 降低销售团队的前期沟通成本

---

**文档版本**: v1.0  
**策划日期**: 2024年12月  
**下次审查**: 执行后30天  
**负责人**: 待确认  
**状态**: 待批准执行
