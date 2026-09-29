# 博客上传问题分析与解决方案

## 📊 问题根源

### 你的系统架构
```
新CRM → 生成文章 → Supabase数据库 → 网站显示
```

### 为什么这次上传这么难？

**核心问题：数据库字段不匹配**

1. **新CRM的数据库**（简化版）
   - 基础字段：id, title, content, image_url, slug, status
   - ❌ 缺少：meta_title, meta_description, article_type, faq, intent 等

2. **网站期待的数据库**（完整版）
   - 需要完整的SEO字段、分类、FAQ、关联产品等
   - ✅ 网站代码期待这些字段存在

3. **结果**
   - 新CRM自动生成的文章 → 字段不全
   - 手动插入SQL → 字段不存在 → 报错
   - 网站显示不正常 → 缺少必要数据

---

## ✅ 完整解决方案

### 步骤1：升级新CRM数据库（一次性）

**文件：** `E:\原电脑资料\新CRM\schema_blog_upgrade_for_website.sql`

**操作：**
1. 登录 Supabase: https://supabase.com/dashboard
2. 选择新CRM的项目
3. 打开 SQL Editor
4. 复制 `schema_blog_upgrade_for_website.sql` 的内容
5. 执行SQL

**作用：**
- 添加缺失的字段（meta_title, meta_description, article_type, faq, intent等）
- 以后新CRM生成的文章将自动包含这些字段

---

### 步骤2：插入当前文章

**文件：** `E:\原电脑资料\TPKELE\5月5日网站\insert-smart-breaker-article.sql`

**操作：**
1. 在同一个Supabase项目中
2. 复制 `insert-smart-breaker-article.sql` 的内容
3. 执行SQL

**结果：**
- ✅ 文章出现在博客列表（https://www.tpkele.com/blog）
- ✅ 所有7张图片正确显示
- ✅ FAQ、SEO元数据完整

---

## 🔄 以后如何上传博客

### 方案A：通过新CRM自动化（推荐）

**完成步骤1后，以后上传就简单了：**

1. 登录新CRM
2. 进入博客AI素材页面
3. 粘贴AI对话内容
4. 点击"生成文章"
5. 填写必要的元数据：
   - SEO标题（meta_title）
   - SEO描述（meta_description）
   - 文章类型（article_type）：comparisons / selection-guides / product-knowledge / application-scenarios / faqs
   - FAQ问答（如果有）
   - 关联产品（related_products）
6. 点击"发布"

✅ 文章自动出现在网站上

---

### 方案B：手动插入SQL（备用）

如果需要手动插入：

1. 准备文章内容（Markdown格式）
2. 准备图片（上传到 public/images/blog/）
3. 使用以下模板创建SQL：

```sql
INSERT INTO blog_posts (
  slug, title, meta_title, meta_description,
  article_type, status, published_at,
  cover_image_url, image_url, cover_image_alt,
  content, word_count, reading_time, intent,
  related_products, faq
) VALUES (
  'your-article-slug',
  '文章标题',
  'SEO标题',
  'SEO描述',
  'comparisons',  -- 或其他类型
  'published',
  NOW(),
  '/images/blog/your-folder/hero.webp',
  '/images/blog/your-folder/hero.webp',
  '图片描述',
  '## 第一章节

![图片1](/images/blog/your-folder/image1.webp)

内容...',
  1500,  -- 字数
  8,     -- 阅读时间（分钟）
  'Smart circuit breaker selection support',
  '["product-slug-1", "product-slug-2"]',  -- 关联产品
  '[{"question": "问题1?", "answer": "答案1"}]'  -- FAQ
);
```

---

## 📝 关键字段说明

### 必填字段
- **slug**: URL路径（如：smart-circuit-breaker-vs-traditional-breaker）
- **title**: 文章标题
- **content**: Markdown格式的文章内容（包含图片引用）
- **status**: published（已发布）或 draft（草稿）

### SEO字段（强烈推荐）
- **meta_title**: SEO标题（用于搜索结果）
- **meta_description**: SEO描述（用于搜索结果摘要）
- **article_type**: 文章分类
  - `product-knowledge` - 产品知识
  - `selection-guides` - 选型指南
  - `comparisons` - 对比文章
  - `application-scenarios` - 应用场景
  - `faqs` - 常见问题

### 增强字段（可选但建议）
- **cover_image_url / image_url**: 封面图片路径
- **faq**: FAQ数组（JSON格式）
- **related_products**: 关联产品slug数组
- **word_count**: 字数统计
- **reading_time**: 阅读时间（分钟）

---

## 🎯 文章内容格式要求

### Markdown格式示例

```markdown
## 第一章节标题

段落内容...

![图片描述](/images/blog/article-slug/image1.webp)

更多内容...

- 列表项1
- 列表项2

## 第二章节标题

段落内容...

![图片描述](/images/blog/article-slug/image2.webp)
```

### 图片路径规范

**存放位置：**
```
public/images/blog/article-slug/
├── hero-image.webp          (封面图)
├── product-photo-1.webp     (产品图1)
├── product-photo-2.webp     (产品图2)
└── diagram.webp             (说明图)
```

**在Markdown中引用：**
```markdown
![图片描述](/images/blog/article-slug/hero-image.webp)
```

---

## ⚠️ 常见错误与解决

### 错误1：字段不存在
```
ERROR: column "intent" of relation "blog_posts" does not exist
```
**解决：** 先执行步骤1的升级SQL

### 错误2：文章不在列表显示
**原因：** 文章只添加到了静态数据（site.ts），没添加到数据库
**解决：** 使用SQL插入到Supabase数据库

### 错误3：图片不显示
**原因：** 图片路径错误或文件未上传
**解决：** 
1. 确认图片在 `public/images/blog/` 目录
2. 检查Markdown中的路径是否正确
3. 路径格式：`/images/blog/article-slug/image.webp`

---

## 📌 总结

**一次性工作（现在做）：**
1. ✅ 执行数据库升级SQL
2. ✅ 插入当前智能断路器文章

**以后每次上传：**
1. 通过新CRM自动化生成（推荐）
2. 或手动准备SQL插入

**关键点：**
- 数据库字段必须完整
- 图片路径必须正确
- 文章必须插入Supabase数据库（不是静态数据）

---

## 🚀 立即执行

**现在请按顺序执行：**

1. 打开 Supabase → SQL Editor
2. 执行 `schema_blog_upgrade_for_website.sql`（升级数据库）
3. 执行 `insert-smart-breaker-article.sql`（插入文章）
4. 刷新 https://www.tpkele.com/blog（查看结果）

**预期结果：**
- 博客列表显示7篇文章（新增1篇）
- 点击新文章，看到所有7张图片
- FAQ正确显示
