const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 需要压缩的大图片列表
const largeImages = [
  'public/assets/products/smart-mcb-leakage.webp',
  'public/assets/products/smart-mcb-app.webp',
  'public/assets/products/smart-mcb-18mm.webp',
  'public/assets/products/smart-mcb-2p.webp',
  'public/assets/products/wifi-smart-mcb-2p/wifi-smart-mcb-2p-installation.webp',
  'public/assets/products/wifi-smart-mcb-2p/wifi-smart-mcb-2p-front-view.webp',
  'public/assets/products/wifi-smart-mcb-2p/wifi-smart-mcb-2p-terminal-view.webp',
  'public/assets/products/wifi-smart-mcb-2p/wifi-smart-mcb-2p-dimensions.webp',
  'public/assets/products/wifi-smart-mcb-1p/wifi-smart-mcb-1p-installation.webp',
  'public/assets/products/wifi-smart-mcb-1p/wifi-smart-mcb-1p-front-view.webp',
  'public/assets/products/wifi-smart-mcb-1p/wifi-smart-mcb-1p-side-view.webp',
  'public/assets/products/wifi-earthleakage-mcb/wifi-earthleakage-mcb-terminal-view.webp',
  'public/assets/products/wifi-earthleakage-mcb/wifi-earthleakage-mcb-front-view.webp',
  'public/assets/products/wifi-earthleakage-mcb/wifi-earthleakage-mcb-side-view.webp',
  'public/assets/products/wifi-earthleakage-mcb/wifi-earthleakage-mcb-dimensions.webp'
];

async function compressImage(filePath) {
  const fullPath = path.join(__dirname, filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`❌ 文件不存在: ${filePath}`);
    return;
  }

  const stat = fs.statSync(fullPath);
  const originalSize = stat.size;

  // 只压缩超过 500KB 的文件
  if (originalSize < 500 * 1024) {
    console.log(`⏭️  跳过 ${filePath} (${(originalSize / 1024).toFixed(0)}KB)`);
    return;
  }

  // 创建备份
  const backupPath = fullPath + '.backup';
  fs.copyFileSync(fullPath, backupPath);

  try {
    // 压缩图片
    await sharp(fullPath)
      .webp({ quality: 82, effort: 6 })
      .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
      .toFile(fullPath + '.tmp');

    // 替换原文件
    fs.renameSync(fullPath + '.tmp', fullPath);

    const newStat = fs.statSync(fullPath);
    const newSize = newStat.size;
    const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);

    console.log(`✅ ${filePath}`);
    console.log(`   ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024).toFixed(0)}KB (减少 ${reduction}%)`);

    // 如果压缩效果不明显，恢复原文件
    if (newSize > originalSize * 0.9) {
      fs.copyFileSync(backupPath, fullPath);
      console.log(`   ⚠️  压缩效果不明显，已恢复原文件`);
    }

  } catch (err) {
    console.error(`❌ 压缩失败: ${filePath}`, err.message);
    // 恢复备份
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, fullPath);
    }
  }
}

async function main() {
  console.log('🚀 开始压缩图片...\n');

  for (const img of largeImages) {
    await compressImage(img);
  }

  console.log('\n✨ 压缩完成！备份文件保存为 .backup');
  console.log('💡 如果网站显示正常，可以删除备份文件：');
  console.log('   find public/assets/products -name "*.backup" -delete');
}

main();
