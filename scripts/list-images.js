#!/usr/bin/env node

/**
 * 查找并列出所有需要转换的图片
 */

const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const EXCLUDE_PATTERNS = ['apple-icon.png', 'icon-192.png', 'icon-512.png'];

function findImages(dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      findImages(fullPath, results);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        if (!EXCLUDE_PATTERNS.some(pattern => entry.name.includes(pattern))) {
          results.push(path.relative(PUBLIC_DIR, fullPath));
        }
      }
    }
  }

  return results;
}

const images = findImages(PUBLIC_DIR);
console.log(`找到 ${images.length} 个需要转换的图片:\n`);
images.forEach(img => console.log(`  - ${img}`));
