const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'GUIDE补充图/SELECTION.png');
const outputPath = path.join(__dirname, 'public/images/guides/dc-mcb-selection-guide/hero.webp');

sharp(inputPath)
  .resize(800, 600, {
    fit: 'cover',
    position: 'center'
  })
  .webp({ quality: 85 })
  .toFile(outputPath)
  .then(info => {
    console.log('图片转换成功！');
    console.log('输出文件:', outputPath);
    console.log('尺寸:', info.width, 'x', info.height);
    console.log('大小:', (info.size / 1024).toFixed(2), 'KB');
  })
  .catch(err => {
    console.error('转换失败:', err);
  });
