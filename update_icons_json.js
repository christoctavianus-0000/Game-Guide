const fs = require('fs');

console.log('Reading equipmentData.js...');
let content = fs.readFileSync('equipmentData.js', 'utf8');

// Extract the array content (everything between [ and ])
const arrayMatch = content.match(/const equipmentData = \[([\s\S]*)\];/);
if (!arrayMatch) {
  console.error('Could not find equipmentData array');
  process.exit(1);
}

const arrayContent = arrayMatch[1];

// Parse JSON array - wrap in brackets to make it valid JSON
let data;
try {
  data = JSON.parse('[' + arrayContent + ']');
} catch (e) {
  console.error('JSON parse error:', e.message);
  process.exit(1);
}

console.log(`Loaded ${data.length} equipment items`);

const iconMap = {
  'Headgear': 'assets/icons/icon_headgear.svg',
  'Body Armor': 'assets/icons/icon_body_armor.svg',
  'Shield': 'assets/icons/icon_shield.svg',
  'Accessories': 'assets/icons/icon_accessories.svg'
};

let replacements = 0;

// Update empty icons
for (const item of data) {
  if (item.icon === '' && iconMap[item.type]) {
    item.icon = iconMap[item.type];
    replacements++;
  }
}

console.log(`Updated ${replacements} items with empty icons`);

// Rebuild file with proper formatting
const rebuiltArray = data.map((item, idx) => {
  return '  ' + JSON.stringify(item, null, 2).split('\n').join('\n  ');
}).join(',\n');

const newContent = `const equipmentData = [\n${rebuiltArray}\n];`;

fs.writeFileSync('equipmentData.js', newContent, 'utf8');
console.log('File saved');
