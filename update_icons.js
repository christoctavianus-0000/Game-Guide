const fs = require('fs');

console.log('Reading equipmentData.js...');
let content = fs.readFileSync('equipmentData.js', 'utf8');

const replacements = {
  'Headgear': 'assets/icons/icon_headgear.svg',
  'Body Armor': 'assets/icons/icon_body_armor.svg',
  'Shield': 'assets/icons/icon_shield.svg',
  'Accessories': 'assets/icons/icon_accessories.svg'
};

let totalReplacements = 0;

for (const [type, iconPath] of Object.entries(replacements)) {
  // Pattern matches: "type": "TYPE", followed by optional whitespace/newlines, then "icon": ""
  const pattern = new RegExp('("type":\\s*"' + type + '",\\s*"icon":\\s*)""', 'g');
  const matches = content.match(pattern);
  const count = matches ? matches.length : 0;
  
  content = content.replace(pattern, '$1"' + iconPath + '"');
  console.log(`Replaced ${count} empty icons for ${type}`);
  totalReplacements += count;
}

fs.writeFileSync('equipmentData.js', content, 'utf8');
console.log(`Total replacements: ${totalReplacements}`);
