const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 需要优化的图片列表
const images = [
  {
    input: 'public/assets/factory-home.png',
    output: 'public/assets/factory-home.webp',
    quality: 80,
  },
  {
    input: 'public/assets/hero.png',
    output: 'public/assets/hero.webp',
    quality: 80,
  },
  {
    input: 'public/assets/landing/circuit-breakers/AC2P.png',
    output: 'public/assets/landing/circuit-breakers/AC2P.webp',
    quality: 75,
  },
  {
    input: 'public/assets/landing/circuit-breakers/AC3P.png',
    output: 'public/assets/landing/circuit-breakers/AC3P.webp',
    quality: 75,
  },
  {
    input: 'public/assets/landing/circuit-breakers/AC4P.png',
    output: 'public/assets/landing/circuit-breakers/AC4P.webp',
    quality: 75,
  },
  {
    input: 'public/assets/landing/circuit-breakers/card-1p.png',
    output: 'public/assets/landing/circuit-breakers/card-1p.webp',
    quality: 75,
  },
  {
    input: 'public/assets/landing/circuit-breakers/card-2p.png',
    output: 'public/assets/landing/circuit-breakers/card-2p.webp',
    quality: 75,
  },
  {
    input: 'public/assets/landing/circuit-breakers/card-3p.png',
    output: 'public/assets/landing/circuit-breakers/card-3p.webp',
    quality: 75,
  },
  {
    input: 'public/assets/landing/circuit-breakers/card-4p.png',
    output: 'public/assets/landing/circuit-breakers/card-4p.webp',
    quality: 75,
  },
  {
    input: 'public/assets/landing/circuit-breakers/curve-b.png',
    output: 'public/assets/landing/circuit-breakers/curve-b.webp',
    quality: 75,
  },
];

async function optimizeImage(input, output, quality) {
  const inputPath = path.join(__dirname, '..', input);
  const outputPath = path.join(__dirname, '..', output);

  if (!fs.existsSync(inputPath)) {
    console.log(`❌ 文件不存在: ${input}`);
    return;
  }

  const inputStats = fs.statSync(inputPath);
  const inputSizeMB = (inputStats.size / 1024 / 1024).toFixed(2);

  console.log(`\n🔄 正在优化: ${input}`);
  console.log(`   原始大小: ${inputSizeMB} MB`);

  try {
    await sharp(inputPath)
      .webp({ quality })
      .toFile(outputPath);

    const outputStats = fs.statSync(outputPath);
    const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);
    const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

    console.log(`   ✅ 优化完成: ${outputSizeMB} MB (减少 ${reduction}%)`);
    console.log(`   保存到: ${output}`);
  } catch (error) {
    console.error(`   ❌ 优化失败: ${error.message}`);
  }
}

async function main() {
  console.log('🚀 开始批量优化图片...\n');
  console.log(`📦 共需要优化 ${images.length} 张图片\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const img of images) {
    const inputPath = path.join(__dirname, '..', img.input);
    if (fs.existsSync(inputPath)) {
      totalBefore += fs.statSync(inputPath).size;
    }
  }

  for (const img of images) {
    await optimizeImage(img.input, img.output, img.quality);
  }

  for (const img of images) {
    const outputPath = path.join(__dirname, '..', img.output);
    if (fs.existsSync(outputPath)) {
      totalAfter += fs.statSync(outputPath).size;
    }
  }

  const totalReduction = ((1 - totalAfter / totalBefore) * 100).toFixed(1);

  console.log('\n\n✨ 优化完成！');
  console.log(`📊 总体积: ${(totalBefore / 1024 / 1024).toFixed(2)} MB → ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
  console.log(`🎯 减少了: ${totalReduction}%`);
  console.log('\n📝 下一步：运行代码更新脚本来替换图片引用');
}

main();
