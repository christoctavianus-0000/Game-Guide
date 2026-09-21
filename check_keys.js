const fs = require('fs');
const content = fs.readFileSync('enemyData.js', 'utf8');
const match = content.match(/const enemyData = (\[[\s\S]*\]);/);
if (match) {
  const data = JSON.parse(match[1]);
  const keys = new Set();
  data.forEach(e => Object.keys(e).forEach(k => keys.add(k)));
  console.log('Keys:', Array.from(keys).sort());
}