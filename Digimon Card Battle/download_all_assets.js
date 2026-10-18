const fs = require('fs');
const { spawnSync } = require('child_process');
const path = require('path');

const baseDir = path.resolve(__dirname);
const assetsDir = path.join(baseDir, 'assets', 'cards');
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

const files = [
  'fireCards.json',
  'iceCards.json',
  'natureCards.json',
  'darknessCards.json',
  'rareCards.json',
  'partnerCards.json',
  'optionCards.json'
];

let allCards = [];
const configLines = [];
const downloadMissingImages = process.argv.includes('--download-missing-images');

for (const file of files) {
  const filePath = path.join(baseDir, file);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Required card source is missing: ${filePath}`);
  }

  const cards = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  for (const card of cards) {
    allCards.push(card);
    if (!card.cardIcon) continue;

    const fileName = card.localIcon.split('/').pop();
    const destPath = path.join(assetsDir, fileName);

    if (!fs.existsSync(destPath)) {
      configLines.push(`url = "${card.cardIcon}"`);
      configLines.push(`output = "${destPath.replace(/\\/g, '/')}"`);
    }
  }
}

console.log(`Total cards across database: ${allCards.length}`);
console.log(`Images missing locally: ${configLines.length / 2}`);

if (downloadMissingImages && configLines.length > 0) {
  console.log('Downloading missing images...');
  const curl = process.platform === 'win32' ? 'curl.exe' : 'curl';
  const result = spawnSync(curl, ['-K', '-', '-s', '--parallel', '--parallel-max', '12', '--retry', '3'], {
    input: configLines.join('\n'),
    encoding: 'utf8',
    stdio: ['pipe', 'inherit', 'inherit']
  });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(`curl exited with status ${result.status}`);
  }
} else if (!downloadMissingImages && configLines.length > 0) {
  console.log('Run with --download-missing-images to fetch missing artwork.');
}

// Write combined database files
const jsPath = path.join(baseDir, 'cardData.js');
fs.writeFileSync(jsPath, 'window.CARD_DATABASE = ' + JSON.stringify(allCards, null, 2) + ';\n', 'utf8');

const combinedJsonPath = path.join(baseDir, 'allCards.json');
fs.writeFileSync(combinedJsonPath, JSON.stringify(allCards, null, 2), 'utf8');
