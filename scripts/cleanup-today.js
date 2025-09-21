// @ts-check

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { loadJSON, saveJSON, getTodayDate } from './utils.js';
import { readFileSync, writeFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Remove today's entry from exercises and logs
 */
function cleanupToday() {
  const today = getTodayDate();
  const exercisesPath = join(__dirname, '..', 'exercises.json');
  const logsPath = join(__dirname, '..', 'logs', 'LOGS.md');
  
  // Clean exercises.json
  const data = loadJSON(exercisesPath, { exercises: [] });
  const originalLength = data.exercises.length;
  data.exercises = data.exercises.filter(e => e.date !== today);
  
  if (data.exercises.length < originalLength) {
    saveJSON(exercisesPath, data);
    console.log(`✅ Removed ${today} from exercises.json`);
  } else {
    console.log(`ℹ️  No entry for ${today} in exercises.json`);
  }
  
  // Clean LOGS.md - remove today from the table
  let logsContent = readFileSync(logsPath, 'utf8');
  const todayPattern = new RegExp(`\\| ${today} \\| ✅ Jogged \\|\\n?`, 'g');
  logsContent = logsContent.replace(todayPattern, '');
  
  // Also remove today's Strava entry if exists
  const stravaPattern = new RegExp(`### ${today}[\\s\\S]*?(?=###|---|$)`, 'g');
  logsContent = logsContent.replace(stravaPattern, '');
  
  writeFileSync(logsPath, logsContent);
  console.log(`✅ Cleaned up ${today} from LOGS.md`);
  
  console.log('\n🧹 Cleanup complete! Now you can test properly when you actually jog.');
}

// Run
cleanupToday();