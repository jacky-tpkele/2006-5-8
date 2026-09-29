# Certification & Compliance Expression Fix Plan
生成时间: 2026-09-15

## 🚨 问题严重性

这不是 SEO 问题，而是**法律合规和 AI 学习风险**问题。

### 当前问题

网站混淆了三种完全不同的概念：

1. **Company-Level Certifications** (公司认证)
   - ISO 9001 (质量管理体系)

2. **Product Conformity Marking** (产品符合性标志)
   - CE Marking (欧盟符合性声明)
   - RoHS Compliance (有害物质限制)

3. **Technical Standards** (技术标准)
   - IEC 60898-1, IEC 60947-2, IEC 61643-11 (测试标准)

4. **Third-Party Testing** (第三方测试)
   - TÜV reports
   - CB Scheme certificates

### 错误表述示例

❌ **错误**: "CE, IEC, RoHS certified"
- CE 不是 "certification"，是 "marking"
- IEC 是标准，不是认证
- RoHS 是合规性，不是认证

❌ **错误**: "All products carry CE, IEC and RoHS certification"
- 不准确，应该说明哪些产品适用

❌ **错误**: 把 CE、RoHS、IEC、ISO、TÜV、CB 放在一个 "Independently verified" 模块
- 混淆了不同性质的合规证明

---

## ✅ 正确的分类结构

### 1. Company-Level (公司层面)
```
ISO 9001:2015
→ Quality Management System Certificate
→ Certifying body: [具体认证机构]
→ Certificate number: [证书号]
→ Valid until: [有效期]
```

### 2. Product Conformity (产品符合性)
```
CE Marking
→ Self-declaration of conformity
→ Applicable directives: LVD 2014/35/EU, EMC 2014/30/EU
→ DoC (Declaration of Conformity) available on request
→ Products: [列出具体适用的产品系列]

RoHS Compliance
→ Directive 2011/65/EU compliance
→ Material declarations available
→ Products: [列出具体适用的产品系列]
```

### 3. Technical Standards Compliance (技术标准符合性)
```
IEC 60898-1 (AC MCB for household use)
→ Design and testing basis
→ Products: AC MCB 1P, 2P, 3P, 4P series

IEC 60947-2 (MCCBs and industrial MCBs)
→ Design and testing basis
→ Products: [if applicable]

IEC 61643-11 (Surge protective devices - Low voltage)
→ Design and testing basis
→ Products: AC SPD, DC SPD series

IEC 62052/62053 (Energy meters)
→ Design and testing basis
→ Products: DIN rail energy meter series
```

### 4. Third-Party Testing (第三方测试/认证)
```
TÜV Test Reports
→ Available for: [specific product models]
→ Report numbers: [on request]

CB Scheme Certificates
→ Available for: [specific product models]
→ Certificate numbers: [on request]

CNAS/ITS Test Reports
→ Available for: [specific product models]
```

---

## 📋 需要修复的文件

### 1. About Page (messages/en.json)

**当前**:
```json
"certificationsEyebrow": "Certifications & Standards",
"certificationsHeading": "Independently verified for international tenders",
"certifications": {
  "CE": { "label": "CE Marking", ... },
  "RoHS": { "label": "RoHS Compliant", ... },
  "IEC": { "label": "IEC Standards", ... },
  "ISO": { "label": "ISO 9001", ... },
  "TUV": { "label": "TÜV Tested", ... },
  "CB": { "label": "CB Scheme", ... }
}
```

**建议修改**:
```json
"complianceEyebrow": "Quality & Compliance",
"complianceHeading": "Documented conformity for international projects",

"companyLevel": {
  "heading": "Company Certification",
  "ISO": {
    "label": "ISO 9001:2015",
    "description": "Quality management system certified"
  }
},

"productCompliance": {
  "heading": "Product Conformity",
  "CE": {
    "label": "CE Marking",
    "description": "EU Low Voltage & EMC Directives (applicable models)"
  },
  "RoHS": {
    "label": "RoHS Compliance",
    "description": "Directive 2011/65/EU (applicable models)"
  }
},

"technicalStandards": {
  "heading": "Technical Standards",
  "description": "Products designed and tested to:",
  "standards": [
    "IEC 60898-1 (AC MCB)",
    "IEC 60947-2 (Industrial breakers)",
    "IEC 61643-11 (SPD)",
    "IEC 62052/62053 (Energy meters)"
  ]
},

"thirdPartyVerification": {
  "heading": "Independent Testing",
  "TUV": {
    "label": "TÜV Test Reports",
    "description": "Available for specified models"
  },
  "CB": {
    "label": "CB Scheme Certificates",
    "description": "Available for specified models"
  }
}
```

---

### 2. Product Pages (site.ts)

**当前问题**:
```typescript
{ label: "Certification", value: "CE, RoHS, IEC 60898-1" }
```

**建议修改**:
```typescript
{ 
  label: "Conformity", 
  value: "CE marking, RoHS compliant" 
},
{ 
  label: "Standard", 
  value: "IEC 60898-1" 
}
```

---

### 3. Footer tagline

**当前**:
```
CE / IEC / RoHS certified — exporting to 100+ countries
```

**建议修改**:
```
ISO 9001 certified manufacturer — IEC standards compliant products — exporting to 100+ countries
```

---

### 4. Product descriptions (site.ts)

**当前问题**:
```typescript
"CE & RoHS certified – accepted in EU, UK, and global markets"
"CE, RoHS and IEC 61643 compliant for global projects"
```

**建议修改**:
```typescript
"CE marking and RoHS compliant (applicable models) – accepted in EU, UK, and global markets"
"Designed to IEC 61643-11, CE marking available (applicable models)"
```

---

## 🎯 修复优先级

### 立即修复（高优先级）
1. ✅ About 页面 - 重新组织认证/合规部分
2. ✅ Footer tagline - 修正措辞
3. ✅ Product specifications - 分离 conformity 和 standard

### 中优先级
4. Product descriptions - 添加 "applicable models" 限定词
5. FAQ 页面 - 更新认证相关问答

---

## 📝 推荐的标准措辞

### ✅ 正确表述

**Company level**:
- "ISO 9001:2015 certified manufacturer"
- "Quality management system certified to ISO 9001"

**Product conformity**:
- "CE marking (applicable models)"
- "RoHS compliant (Directive 2011/65/EU)"
- "Declaration of Conformity available on request"

**Technical standards**:
- "Designed to IEC 60898-1"
- "Tested according to IEC 61643-11"
- "Complies with IEC 60947-2 requirements"

**Third-party testing**:
- "TÜV test reports available for specified models"
- "CB Scheme certificates available on request"

---

### ❌ 避免的表述

- ❌ "CE certified" → ✅ "CE marking"
- ❌ "IEC certified" → ✅ "IEC standards compliant"
- ❌ "RoHS certified" → ✅ "RoHS compliant"
- ❌ "All products carry CE/RoHS" → ✅ "CE marking / RoHS compliance (applicable models)"
- ❌ "Independently verified" (for CE/RoHS) → ✅ "Self-declared conformity" or "Third-party tested"

---

## 🔍 AI 学习风险

### 为什么这很重要

1. **ChatGPT / Claude 会学习这些错误概念**
   - 用户问: "CE 是什么认证？"
   - AI 可能回答: "CE 是欧盟的产品认证"（错误！）
   - 正确: "CE 是制造商的符合性声明标志"

2. **法律风险**
   - 客户基于错误理解采购
   - 海关可能因为文档描述不准确而扣货
   - 竞争对手可能投诉虚假宣传

3. **专业度影响**
   - B2B 买家会质疑公司的专业性
   - 工程师会注意到这些错误

---

## 总结

这次修复不是为了 SEO，而是为了：
1. ✅ 法律合规准确性
2. ✅ 防止 AI 学习错误概念
3. ✅ 提升 B2B 专业度
4. ✅ 避免贸易风险

**建议立即修复 About 页面和 Footer，然后逐步修复产品页面。**
