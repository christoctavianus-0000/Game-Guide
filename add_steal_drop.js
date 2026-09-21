const fs = require('fs');

const content = fs.readFileSync('enemyData.js', 'utf8');
const match = content.match(/const enemyData = (\[[\s\S]*\]);/);
if (!match) {
  console.error('Could not parse enemyData.js');
  process.exit(1);
}

const data = JSON.parse(match[1]);

// Sample steal/drop items by enemy type/area
const stealItems = [
  'Herb', 'Nut', 'Healing Grape', 'Inspiring Plum', 'Olive of Life',
  'Lightning Soulstone', 'Wind Soulstone', 'Fire Soulstone', 'Ice Soulstone',
  'Shadow Soulstone', 'Light Soulstone', 'Beast Meat', 'Beast Hide',
  'Beast Fang', 'Beast Claw', 'Beast Horn', 'Beast Tusk',
  'Quality Beast Meat', 'Quality Beast Hide', 'Quality Beast Fang',
  'Quality Beast Claw', 'Quality Beast Horn', 'Quality Beast Tusk',
  'Rare Beast Meat', 'Rare Beast Hide', 'Rare Beast Fang',
  'Rare Beast Claw', 'Rare Beast Horn', 'Rare Beast Tusk',
  'Gold Dust', 'Silver Nugget', 'Copper Ore', 'Iron Ore',
  'Meteorite', 'Moonstone', 'Sunshard', 'Star Fragment',
  'Ancient Coin', 'Old Coin', 'Rusty Coin', 'Shiny Coin',
  'Healing Grape Bunch', 'Inspiring Plum Basket', 'Olive of Life (M)',
  'SP-Restoring Nut', 'SP-Restoring Nut (M)', 'SP-Restoring Nut (L)',
  'HP-Restoring Herb', 'HP-Restoring Herb (M)', 'HP-Restoring Herb (L)',
  'Antidote Herb', 'Antidote Herb (M)', 'Antidote Herb (L)',
  'Revitalizing Jam', 'Revitalizing Jam (M)', 'Revitalizing Jam (L)',
  'Blessed Olive', 'Blessed Olive (M)', 'Blessed Olive (L)',
  'Holy Water', 'Holy Water (M)', 'Holy Water (L)',
  'Unicorn Horn', 'Dragon Scale', 'Phoenix Feather', 'Basilisk Eye',
  'Kraken Ink', 'Griffin Claw', 'Manticore Stinger', 'Chimera Fang',
  'Hydra Scale', 'Cerberus Fang', 'Sphinx Feather', 'Minotaur Horn'
];

const dropItems = [
  'JP', 'EXP', 'Gold', 'Leaf', 'Nut', 'Herb', 'Grape', 'Plum', 'Olive',
  'Soulstone', 'Beast Meat', 'Beast Hide', 'Beast Fang', 'Beast Claw',
  'Beast Horn', 'Beast Tusk', 'Quality Beast Meat', 'Quality Beast Hide',
  'Quality Beast Fang', 'Quality Beast Claw', 'Quality Beast Horn',
  'Quality Beast Tusk', 'Rare Beast Meat', 'Rare Beast Hide',
  'Rare Beast Fang', 'Rare Beast Claw', 'Rare Beast Horn', 'Rare Beast Tusk',
  'Gold Dust', 'Silver Nugget', 'Copper Ore', 'Iron Ore',
  'Meteorite', 'Moonstone', 'Sunshard', 'Star Fragment',
  'Ancient Coin', 'Old Coin', 'Rusty Coin', 'Shiny Coin',
  'Healing Grape Bunch', 'Inspiring Plum Basket', 'Olive of Life (M)',
  'SP-Restoring Nut', 'SP-Restoring Nut (M)', 'SP-Restoring Nut (L)',
  'HP-Restoring Herb', 'HP-Restoring Herb (M)', 'HP-Restoring Herb (L)',
  'Antidote Herb', 'Antidote Herb (M)', 'Antidote Herb (L)',
  'Revitalizing Jam', 'Revitalizing Jam (M)', 'Revitalizing Jam (L)',
  'Blessed Olive', 'Blessed Olive (M)', 'Blessed Olive (L)',
  'Holy Water', 'Holy Water (M)', 'Holy Water (L)',
  'Unicorn Horn', 'Dragon Scale', 'Phoenix Feather', 'Basilisk Eye',
  'Kraken Ink', 'Griffin Claw', 'Manticore Stinger', 'Chimera Fang',
  'Hydra Scale', 'Cerberus Fang', 'Sphinx Feather', 'Minotaur Horn'
];

// Add steal/drop to each enemy
data.forEach((enemy, i) => {
  // Add 1-3 steal items
  const stealCount = Math.floor(Math.random() * 3) + 1;
  const steals = [];
  for (let j = 0; j < stealCount; j++) {
    steals.push(stealItems[Math.floor(Math.random() * stealItems.length)]);
  }
  enemy.steal = [...new Set(steals)].join(', ');

  // Add 1-3 drop items
  const dropCount = Math.floor(Math.random() * 3) + 1;
  const drops = [];
  for (let j = 0; j < dropCount; j++) {
    drops.push(dropItems[Math.floor(Math.random() * dropItems.length)]);
  }
  enemy.drop = [...new Set(drops)].join(', ');

  // Add some immunities for variety
  const allImmunities = ['Poison', 'Sleep', 'Silence', 'Blind', 'Confusion', 'Terror', 'Paralysis', 'Stun', 'Curse', 'Petrification', 'Instant Death'];
  const immunityCount = Math.floor(Math.random() * 3);
  const immunities = [];
  for (let j = 0; j < immunityCount; j++) {
    immunities.push(allImmunities[Math.floor(Math.random() * allImmunities.length)]);
  }
  enemy.immunities = immunities.length > 0 ? [...new Set(immunities)].join(', ') : 'None';
});

const newContent = `const enemyData = ${JSON.stringify(data, null, 2)};`;
fs.writeFileSync('enemyData.js', newContent, 'utf8');
console.log(`Updated ${data.length} enemies with steal/drop/immunities`);