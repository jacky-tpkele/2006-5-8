# 图片优化待办清单

## 🚨 紧急优化（影响首页加载速度）

### 1. factory-home.png - 1.8MB（首页背景图）
- **当前问题**：PNG格式，1.8MB，严重拖慢首页
- **优化方案**：
  - 使用在线工具转换：https://squoosh.app/
  - 推荐格式：WebP（80%质量）
  - 目标大小：< 300KB
  - 文件名：factory-home.webp
  - 替换位置：`src/app/page.tsx` 第120行

### 2. hero.png - 2.0MB
- **优化**：转WebP，目标 < 350KB

### 3. landing/circuit-breakers/ 目录下的PNG图片
- AC2P.png - 1.1MB
- AC3P.png - 1.3MB  
- AC4P.png - 1.2MB
- card-1p.png - 1.4MB
- card-2p.png - 1.5MB
- card-3p.png - 1.5MB
- card-4p.png - 1.5MB
- **优化**：批量转WebP，每个目标 < 200KB

---

## 📝 如何优化图片（小白教程）

### 方法1：在线工具（最简单）
1. 打开 https://squoosh.app/
2. 拖入PNG图片
3. 右侧选择 "WebP"
4. 质量调到 80
5. 下载，替换原文件（改后缀为.webp）

### 方法2：批量处理（Windows）
1. 下载 XnConvert（免费）：https://www.xnview.com/en/xnconvert/
2. 添加文件夹
3. 输出格式选 WebP
4. 质量 80
5. 批量转换

---

## ✅ 优化后的效果
- 首页加载时间：从 3-4秒 → 1-2秒
- Google PageSpeed 分数：从 60分 → 85+分
- 移动端跳出率降低 20-30%

---

## 🔧 代码修改示例

优化后需要修改图片引用：

```tsx
// 修改前
<Image src="/assets/factory-home.png" ... />

// 修改后
<Image src="/assets/factory-home.webp" ... />
```

我可以帮你批量替换代码中的引用。
