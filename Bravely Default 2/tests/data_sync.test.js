import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BASE_DIR = path.resolve(__dirname, '..');

const DATASETS = [
  { name: 'jobData', globalVar: 'jobData' },
  { name: 'abilityData', globalVar: 'abilityData' },
  { name: 'equipmentData', globalVar: 'equipmentData' },
  { name: 'enemyData', globalVar: 'enemyData' },
  { name: 'questData', globalVar: 'questData' },
  { name: 'shopData', globalVar: 'shopData' },
  { name: 'bndCardData', globalVar: 'bndCardData' }
];

describe('Data Twin Synchronization (.json <-> .js)', () => {
  for (const { name, globalVar } of DATASETS) {
    test(`${name}.json and ${name}.js exist and evaluate to identical data structures`, () => {
      const jsonPath = path.join(BASE_DIR, `${name}.json`);
      const jsPath = path.join(BASE_DIR, `${name}.js`);

      assert.ok(fs.existsSync(jsonPath), `${name}.json must exist`);
      assert.ok(fs.existsSync(jsPath), `${name}.js must exist`);

      const jsonRaw = fs.readFileSync(jsonPath, 'utf-8');
      const jsRaw = fs.readFileSync(jsPath, 'utf-8');

      const jsonData = JSON.parse(jsonRaw);
      assert.ok(Array.isArray(jsonData), `${name}.json must be an array`);
      assert.ok(jsonData.length > 0, `${name}.json must have items`);

      // Evaluate browser-ready JS in sandbox with window
      const sandbox = { window: {} };
      vm.createContext(sandbox);
      vm.runInContext(jsRaw, sandbox);

      const jsData = sandbox.window[globalVar];
      assert.ok(Array.isArray(jsData), `${name}.js must define window.${globalVar} as an array`);
      assert.equal(jsonData.length, jsData.length, `Count mismatch in ${name}`);
      // JSON round-trip normalizes cross-realm prototypes between VM sandbox and runner realm
      assert.deepEqual(jsonData, JSON.parse(JSON.stringify(jsData)), `Data objects in ${name}.json and ${name}.js must match exactly`);
    });
  }
});
