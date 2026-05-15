const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'assets', 'images');
const files = fs.readdirSync(dir).filter((f) => /\.(png|jpe?g)$/i.test(f));

(async () => {
  for (const f of files) {
    const inPath = path.join(dir, f);
    const outName = f.replace(/\.(png|jpe?g)$/i, '.webp');
    const outPath = path.join(dir, outName);
    const inSize = fs.statSync(inPath).size;

    await sharp(inPath)
      .webp({ quality: 78, effort: 6 })
      .toFile(outPath);

    const outSize = fs.statSync(outPath).size;
    const pct = ((1 - outSize / inSize) * 100).toFixed(0);
    console.log(`${f} ${(inSize / 1024).toFixed(0)}KB -> ${outName} ${(outSize / 1024).toFixed(0)}KB (-${pct}%)`);
  }
})();
