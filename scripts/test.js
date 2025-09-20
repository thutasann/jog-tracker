// @ts-check

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Run a script and return promise
 * @param {string} script - Script name to run
 * @returns {Promise<void>}
 */
function runScript(script) {
  return new Promise((resolve, reject) => {
    const child = spawn('node', [script], { cwd: __dirname });
    
    child.stdout.on('data', (data) => {
      console.log(`[${script}] ${data.toString().trim()}`);
    });
    
    child.stderr.on('data', (data) => {
      console.error(`[${script}] ERROR: ${data.toString().trim()}`);
    });
    
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`${script} exited with code ${code}`));
      }
    });
  });
}

/**
 * Main test function
 */
async function main() {
  console.log('🧪 Testing exercise streak scripts...\n');
  
  try {
    console.log('1️⃣ Testing add-exercise.js...');
    await runScript('add-exercise.js');
    
    console.log('\n2️⃣ Testing update-streak.js...');
    await runScript('update-streak.js');
    
    console.log('\n3️⃣ Testing update-readme.js...');
    await runScript('update-readme.js');
    
    console.log('\n✅ All tests passed!');
  } catch (error) {
    console.error('\n❌ Test failed:', error);
    process.exit(1);
  }
}

// Run tests
main();