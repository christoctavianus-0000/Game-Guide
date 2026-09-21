const fs = require('fs');
const content = fs.readFileSync('characterData.js', 'utf8');
const regex = /"job": "([^"]+)"/g;
let match;
const jobs = new Set();
while ((match = regex.exec(content)) !== null) {
  jobs.add(match[1]);
}
console.log([...jobs].sort().join(', '));