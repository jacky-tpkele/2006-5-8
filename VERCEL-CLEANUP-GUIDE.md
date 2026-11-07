# Vercel 空间清理指南

## ✅ 已完成的优化

### 1. 图片压缩
- 压缩了 15 张大图片：3-4MB → 50-70KB（减少 97-98%）
- 删除了 4 张未使用的 PNG 文件（共 4.8MB）
- products 文件夹：70MB → 66MB

### 2. 创建 .vercelignore
排除了以下不需要部署的文件夹（约 60MB）：
- 落地页/
- 新增智能断路器/
- AI新增BLOG/
- 导航专用图/
- GUIDE补充图/
- 其他临时文件

**预计下次部署体积：从 10GB+ 降至 100-200MB**

---

## 🧹 清理 Vercel 旧部署

### 方法 1：通过 Vercel 网页界面（推荐，最安全）

1. 访问：https://vercel.com/jacky-tpkeles-projects/2006-5-8/deployments
2. 点击每个旧部署右侧的 **⋯** 菜单
3. 选择 **Delete**
4. **保留最近 2-3 个部署**即可

### 方法 2：使用 Vercel CLI

```bash
# 1. 安装 Vercel CLI（如果还没装）
npm i -g vercel

# 2. 登录
vercel login

# 3. 查看当前项目的部署列表
vercel ls 2006-5-8

# 4. 删除指定的部署（用部署URL或ID）
vercel remove <deployment-url> --yes

# 示例：
# vercel remove 2006-5-8-abc123.vercel.app --yes
```

---

## 📦 下一步操作

1. **提交代码**：
```bash
git add .vercelignore
git commit -m "优化: 压缩图片并添加 .vercelignore"
git push
```

2. **新部署会自动使用优化后的配置**

3. **确认图片正常后，删除备份文件**：
```bash
find public/assets/products -name "*.backup" -delete
rm compress-images.js
```

---

## 💡 注意事项

- ✅ 图片已压缩但保持了 webp 格式和清晰度
- ✅ 所有原始文件都有 .backup 备份
- ✅ 网站代码未改动，只优化了资源文件
- ✅ .vercelignore 只影响部署，不影响本地开发

## 📊 效果对比

| 项目 | 优化前 | 优化后 |
|------|--------|--------|
| 部署存储 | 10.26GB / 10GB | 预计 < 1GB |
| 单张产品图 | 3-4MB | 50-70KB |
| 排除文件夹 | 无 | ~60MB |
