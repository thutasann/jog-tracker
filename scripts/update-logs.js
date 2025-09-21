// @ts-check

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { loadJSON } from './utils.js';

/** @typedef {import('./types.js').Exercise} Exercise */
/** @typedef {import('./types.js').ExerciseData} ExerciseData */
/** @typedef {import('./types.js').StreakData} StreakData */
/** @typedef {import('./types.js').Milestone} Milestone */

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


/**
 * Update exercise log table in LOGS.md
 * @param {string} content - Current content
 * @param {Exercise[]} exercises - Array of exercises
 * @returns {string} Updated content
 */
function updateLog(content, exercises) {
  // Get last 20 exercises for logs file
  const recent = exercises
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 20);

  const logRows = recent
    .map(e => `| ${e.date} | ✅ Jogged |`)
    .join('\n');

  if (logRows) {
    // More specific pattern that stops at the Strava Activities section
    const pattern = /([\|] Date [\|] Status [\|]\n[\|]------[\|]--------[\|]\n)([\s\S]*?)(\n\n## Strava Activities)/;
    return content.replace(pattern, `$1${logRows}$3`);
  }

  return content;
}


/**
 * Main function to update LOGS.md
 */
function main() {
  // Define file paths
  const exercisesPath = join(__dirname, '..', 'exercises.json');
  const logsPath = join(__dirname, '..', 'logs', 'LOGS.md');

  // Load data
  /** @type {ExerciseData} */
  const exerciseData = loadJSON(exercisesPath, { exercises: [] });
  const exercises = exerciseData.exercises || [];

  // Read LOGS.md
  let content = readFileSync(logsPath, 'utf8');

  // Update log table
  content = updateLog(content, exercises);

  // Save updated LOGS.md
  writeFileSync(logsPath, content);

  console.log('✅ LOGS.md updated');
}

// Run if called directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}

export { main as updateLogs };