const fs = require('fs');
const path = require('path');

// 需要替换的文件和路径映射
const replacements = [
  {
    file: 'src/app/page.tsx',
    replacements: [
      { from: '/assets/factory-home.png', to: '/assets/factory-home.webp' },
    ],
  },
];

// 搜索所有使用这些图片的文件
const filesToSearch = [
  'src/app/page.tsx',
  'src/app/circuit-breakers/page.tsx',
  'src/app/dc-circuit-breakers/page.tsx',
];

function updateImageReferences() {
  console.log('🔄 开始更新图片引用...\n');

  // 先搜索哪些文件需要更新
  const updates = [];

  filesToSearch.forEach((file) => {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  文件不存在: ${file}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    let changes = [];

    // 检查需要替换的图片
    const imagesToReplace = [
      { from: 'factory-home.png', to: 'factory-home.webp' },
      { from: 'hero.png', to: 'hero.webp' },
      { from: 'AC2P.png', to: 'AC2P.webp' },
      { from: 'AC3P.png', to: 'AC3P.webp' },
      { from: 'AC4P.png', to: 'AC4P.webp' },
      { from: 'card-1p.png', to: 'card-1p.webp' },
      { from: 'card-2p.png', to: 'card-2p.webp' },
      { from: 'card-3p.png', to: 'card-3p.webp' },
      { from: 'card-4p.png', to: 'card-4p.webp' },
      { from: 'curve-b.png', to: 'curve-b.webp' },
    ];

    imagesToReplace.forEach((img) => {
      if (content.includes(img.from)) {
        content = content.replace(new RegExp(img.from, 'g'), img.to);
        modified = true;
        changes.push(`${img.from} → ${img.to}`);
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      updates.push({ file, changes });
      console.log(`✅ 已更新: ${file}`);
      changes.forEach((change) => console.log(`   - ${change}`));
      console.log('');
    }
  });

  if (updates.length === 0) {
    console.log('ℹ️  没有找到需要更新的文件');
  } else {
    console.log(`\n✨ 完成！共更新了 ${updates.length} 个文件`);
  }
}

updateImageReferences();
