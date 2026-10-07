#!/usr/bin/env node

/**
 * 图片批量转换脚本
 * 将 public 目录下的 JPG/PNG 转换为 WebP 格式
 * 保留 apple-icon.png 和 icon-*.png（PWA 必需）
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '../public');
const EXCLUDE_PATTERNS = ['apple-icon.png', 'icon-192.png', 'icon-512.png'];

async function convertImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return null;
  }

  const fileName = path.basename(filePath);
  if (EXCLUDE_PATTERNS.some(pattern => fileName.includes(pattern))) {
    console.log(`⏭️  跳过: ${filePath}`);
    return null;
  }

  const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  // 如果 WebP 已存在，跳过
  if (fs.existsSync(webpPath)) {
    console.log(`✅ 已存在: ${webpPath}`);
    return null;
  }

  try {
    await sharp(filePath)
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);

    const originalSize = fs.statSync(filePath).size;
    const webpSize = fs.statSync(webpPath).size;
    const saved = ((1 - webpSize / originalSize) * 100).toFixed(1);

    console.log(`✅ 转换成功: ${path.relative(PUBLIC_DIR, filePath)}`);
    console.log(`   节省: ${saved}% (${(originalSize / 1024).toFixed(1)}KB → ${(webpSize / 1024).toFixed(1)}KB)`);

    return { original: filePath, webp: webpPath, saved };
  } catch (error) {
    console.error(`❌ 转换失败: ${filePath}`, error.message);
    return null;
  }
}

async function findAndConvertImages(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results.push(...await findAndConvertImages(fullPath));
    } else if (entry.isFile()) {
      const result = await convertImage(fullPath);
      if (result) results.push(result);
    }
  }

  return results;
}

async function main() {
  console.log('🚀 开始批量转换图片为 WebP 格式...\n');

  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error('❌ public 目录不存在');
    process.exit(1);
  }

  try {
    const results = await findAndConvertImages(PUBLIC_DIR);

    console.log('\n📊 转换统计:');
    console.log(`   总计转换: ${results.length} 个文件`);

    if (results.length > 0) {
      const totalSaved = results.reduce((sum, r) => sum + parseFloat(r.saved), 0) / results.length;
      console.log(`   平均节省: ${totalSaved.toFixed(1)}%`);
    }

    console.log('\n✅ 转换完成！');
    console.log('\n⚠️  下一步: 请手动更新代码中的图片引用路径（.jpg/.png → .webp）');
  } catch (error) {
    console.error('❌ 转换过程出错:', error);
    process.exit(1);
  }
}

main();
