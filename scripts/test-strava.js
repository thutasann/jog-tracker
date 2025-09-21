// @ts-check

import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🧪 Testing Strava embed feature...\n');
console.log('This will simulate the log process WITHOUT pushing to GitHub');
console.log('You can enter a Strava activity ID to test the embed\n');

// Run the add-strava-embed script
const result = spawnSync('node', [join(__dirname, 'add-strava-embed.js')], {
  stdio: 'inherit',
  cwd: process.cwd()
});

if (result.status === 0) {
  console.log('\n✅ Test complete! Check logs/LOGS.md to see your embed');
  console.log('📝 Note: Changes are NOT committed. This was just a test.');
} else {
  console.error('\n❌ Test failed');
}