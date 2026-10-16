const fs = require('fs');
const { execSync } = require('child_process');
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

// Load fusion Material/Result values from JSON export
let fusionMap = {};
const fusionPath = path.join(baseDir, 'fusion_values.json');
if (fs.existsSync(fusionPath)) {
  const fusionData = JSON.parse(fs.readFileSync(fusionPath, 'utf8'));
  fusionData.forEach(row => {
    if (row.Name) fusionMap[row.Name.trim().toLowerCase()] = { material: row.Material, result: row.Result };
  });
}

let allCards = [];
const configLines = [];

for (const file of files) {
  const filePath = path.join(baseDir, file);
  if (!fs.existsSync(filePath)) continue;

  const cards = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  for (const card of cards) {
    const key = (card.name || '').trim().toLowerCase();
    const fusion = fusionMap[key] || {};
    card.materialValue = fusion.material !== undefined ? fusion.material : '?';
    card.resultValue = fusion.result !== undefined ? fusion.result : '?';
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
console.log(`Images needing download: ${configLines.length / 2}`);

if (configLines.length > 0) {
  const curlFile = path.join(baseDir, 'curl_all_list.txt');
  fs.writeFileSync(curlFile, configLines.join('\n'), 'utf8');

  console.log('Downloading missing images in parallel chunk...');
  try {
    execSync(`curl.exe -K "${curlFile}" -s --parallel --parallel-max 12 --retry 3`);
  } catch (err) {
    console.error('Download completed with warnings/retry handled:', err.message);
  }
}

// Write combined database files
const jsPath = path.join(baseDir, 'cardData.js');
fs.writeFileSync(jsPath, 'const CARD_DATABASE = ' + JSON.stringify(allCards, null, 2) + ';\n', 'utf8');

const combinedJsonPath = path.join(baseDir, 'allCards.json');
fs.writeFileSync(combinedJsonPath, JSON.stringify(allCards, null, 2), 'utf8');
