const fs = require('fs');

const file = 'equipmentData.js';
console.log(`Processing ${file}...`);

const content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');

const replacements = {
  'Headgear': 'assets/icons/icon_headgear.svg',
  'Body Armor': 'assets/icons/icon_body_armor.svg',
  'Shield': 'assets/icons/icon_shield.svg',
  'Accessories': 'assets/icons/icon_accessories.svg'
};

let changed = false;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (const [type, icon] of Object.entries(replacements)) {
    if (line.includes(`"type": "${type}"`)) {
      // Check next line for empty icon
      const nextLine = lines[i + 1];
      if (nextLine.includes('"icon": ""')) {
        lines[i + 1] = nextLine.replace('"icon": ""', `"icon": "${icon}"`);
        changed = true;
        console.log(`Changed: line ${i+1} (${type})`);
      }
      break;
    }
  }
}

if (changed) {
  const newContent = lines.join('\n');
  fs.writeFileSync(file, newContent, 'utf8');
  console.log('Done. File saved.');
} else {
  console.log('No changes made.');
}
