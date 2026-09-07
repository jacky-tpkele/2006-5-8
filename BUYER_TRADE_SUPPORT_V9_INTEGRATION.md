# Buyer Trade Support V9 - 集成完成报告

## 已完成的工作

### 1. 核心文件创建

✅ **类型定义和工具函数**
- `src/lib/trade-support.ts` - RequirementState 类型、默认状态和计数函数

✅ **主组件（完全重写，已适配现有项目）**
- `src/components/BuyerTradeSupport.tsx` (已删除，不再需要)
- `src/app/[locale]/resources/buyer-trade-support/components/BuyerTradeSupport.tsx` - 页面专属组件
  - 移除了独立的 header/footer（使用现有网站的 Header 和 Footer）
  - 所有 class 名称加上 `bts-` 前缀避免冲突
  - 使用 Next.js `Link` 组件替代 `<a>` 标签用于导航
  - breadcrumb 使用现有网站的 Link

✅ **完全作用域限定的 CSS**
- `src/app/[locale]/resources/buyer-trade-support/buyer-trade-support.css`
  - 所有规则嵌套在 `.bts-page` 下，不会污染全局样式
  - 使用 TPKELE 品牌绿色（`#16965a`），无红色状态
  - 响应式设计，移动端友好

✅ **页面路由**
- `src/app/[locale]/resources/buyer-trade-support/page.tsx`
  - 包含 SEO metadata
  - Breadcrumb 和 FAQ 结构化数据
  - 使用 `setRequestLocale` 集成多语言

✅ **API 路由（已适配现有架构）**
- `src/app/api/trade-support/route.ts`
  - **不使用 Resend**，直接发送到 CRM webhook
  - 蜂蜜罐字段防止机器人
  - 文件验证（PDF, XLSX, XLS, CSV, PNG, JPG/JPEG, WebP）
  - 最大 3 个文件，每个 1MB，总计 3MB
  - 文件转换为 base64 发送到 CRM
  - CRM URL: `https://crm.tpkele.com/api/trade-support-inquiry`

### 2. 集成到现有网站

✅ **Sitemap 更新**
- `src/app/sitemap.ts` - 添加 `/resources/buyer-trade-support`

✅ **Resources 菜单更新**
- `src/data/site.ts` - resourcesMenu 添加 "Buyer Trade Support"
- `src/components/Header.tsx` - RESOURCES_MENU_KEYS 添加映射

✅ **国际化消息**
- `messages/en.json` - 添加 "buyer-trade-support": "Buyer Trade Support"
- `messages/ru.json` - 添加 "buyer-trade-support": "Поддержка торговых покупателей"

## 关键设计决策

### ✅ 不破坏现有网站
1. **移除独立的 header/footer** - 使用现有网站的 Header 和 Footer 组件
2. **完全作用域限定的 CSS** - 所有 class 加 `bts-` 前缀，嵌套在 `.bts-page` 下
3. **不使用 Resend** - 直接发送到 CRM，与现有 `/api/leads` 保持一致
4. **使用现有的 Link 组件** - 替代原始 `<a>` 标签

### ✅ 功能完整性
- ✅ 粘性页面导航（桌面）
- ✅ 移动端页面导航（下拉选择）
- ✅ 多选：包装定制、出口单证
- ✅ 单选：贸易术语、付款、运输
- ✅ 条件配置面板（纸箱、塑料包装、标记、原产地证）
- ✅ Incoterms 助手（3 个问题 → 推荐）
- ✅ 文件上传（3 个文件，1MB 每个，3MB 总计）
- ✅ 买家需求摘要预览
- ✅ 实际的 POST 提交
- ✅ 成功状态（参考号）
- ✅ 错误状态

## 路由和访问

**页面 URL:**
- 英语: `https://www.tpkele.com/resources/buyer-trade-support`
- 俄语: `https://www.tpkele.com/ru/resources/buyer-trade-support`

**API 端点:**
- `POST /api/trade-support`

**导航入口:**
1. Header → Resources 下拉菜单 → "Buyer Trade Support"
2. `/resources` 页面（需要手动添加卡片链接）

## CRM 集成

API 将以下 JSON 结构发送到 CRM：

```json
{
  "reference": "TPK-20260907-ABC123",
  "source": "buyer-trade-support-v9",
  "timestamp": "2026-09-07T12:00:00.000Z",
  "buyer": {
    "company": "...",
    "country": "...",
    "contactName": "...",
    "contact": "..."
  },
  "order": {
    "product": "...",
    "quantity": "...",
    "destination": "...",
    "targetDate": "...",
    "notes": "..."
  },
  "requirements": {
    "customization": ["Custom paper box packaging", ...],
    "documents": ["PI - Proforma Invoice", ...],
    "tradeTerm": "CIF",
    "paymentPreference": "T/T Bank Transfer",
    "shippingMethod": "Sea Freight FCL",
    "paperBox": { "printType": "Full-color printing", ... },
    "plasticPack": { ... },
    "marking": { ... },
    "origin": { "purpose": "Customs clearance" }
  },
  "files": [
    {
      "name": "bom.xlsx",
      "size": 102400,
      "type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "base64": "UEsDBBQABg..."
    }
  ]
}
```

## 后续步骤

### 必须完成

1. **CRM 端点配置**
   - 确认 CRM 支持 `https://crm.tpkele.com/api/trade-support-inquiry`
   - CRM 需要解析 JSON 并处理 base64 文件

2. **测试**
   ```bash
   cd "E:/原电脑资料/TPKELE/5月5日网站"
   npm run dev
   # 访问 http://localhost:3000/resources/buyer-trade-support
   ```
   - 测试所有选择状态
   - 测试条件配置面板
   - 测试 Incoterms 助手
   - 测试文件上传（有效/无效）
   - 测试表单提交（成功/错误）

3. **更新 /resources 页面**
   - 在 `src/app/[locale]/resources/page.tsx` 中添加 Buyer Trade Support 卡片
   - 链接到 `/resources/buyer-trade-support`

4. **提交代码**
   ```bash
   git add .
   git commit -m "feat: Add Buyer Trade Support V9 page

- Complete buyer workflow: Understand → Configure → Upload → Send
- Conditional configuration panels for packaging, marking, documents
- Incoterms helper with 3-question recommendation
- File upload support (PDF, XLSX, XLS, CSV, images)
- Integration with CRM webhook at /api/trade-support
- Fully scoped CSS (bts-* prefix) to avoid conflicts
- Multi-language support (EN/RU)
- SEO optimized with structured data

Route: /resources/buyer-trade-support
API: POST /api/trade-support
CRM: https://crm.tpkele.com/api/trade-support-inquiry"
   
   git push origin main
   ```

### 可选优化

1. **Resend 邮件支持**（如果需要）
   - 安装 `npm install resend`
   - 在 `.env.local` 添加 `RESEND_API_KEY`
   - 修改 API 路由以同时发送邮件到 `jacky@tpkele.com`

2. **文件存储升级**
   - 当前通过 base64 传输到 CRM（最大 3MB）
   - 对于更大的文件，考虑 Vercel Blob 或 S3 直接上传

3. **表单持久化**
   - 使用 localStorage 保存选择状态
   - 页面刷新后恢复

## 文件清单

### 新文件
```
src/
├── lib/
│   └── trade-support.ts                                    (NEW)
├── app/
│   ├── [locale]/
│   │   └── resources/
│   │       └── buyer-trade-support/
│   │           ├── components/
│   │           │   └── BuyerTradeSupport.tsx             (NEW)
│   │           ├── buyer-trade-support.css                (NEW)
│   │           └── page.tsx                               (NEW)
│   └── api/
│       └── trade-support/
│           └── route.ts                                    (NEW)
```

### 修改文件
```
src/
├── app/
│   └── sitemap.ts                                          (MODIFIED)
├── components/
│   └── Header.tsx                                          (MODIFIED)
├── data/
│   └── site.ts                                            (MODIFIED)
messages/
├── en.json                                                 (MODIFIED)
└── ru.json                                                 (MODIFIED)
```

## 验证清单

- [x] 类型定义和工具函数
- [x] BuyerTradeSupport 组件（移除独立 header/footer）
- [x] 完全作用域限定的 CSS
- [x] 页面路由和 SEO
- [x] API 路由（CRM 集成，无 Resend）
- [x] Sitemap 更新
- [x] Resources 菜单更新
- [x] 多语言消息
- [ ] 本地测试
- [ ] CRM 端点确认
- [ ] /resources 页面添加链接
- [ ] Git 提交和推送

---

**状态**: 集成完成，等待测试和部署
**日期**: 2026-09-07
**版本**: V9
