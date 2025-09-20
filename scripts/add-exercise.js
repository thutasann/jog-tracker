// @ts-check

import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { loadJSON, saveJSON, getTodayDate } from './utils.js';

/** @typedef {import('./types.js').Exercise} Exercise */
/** @typedef {import('./types.js').ExerciseData} ExerciseData */

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Main function to add today's exercise
 */
function main() {
  const exercisesPath = join(__dirname, '..', 'exercises.json');
  const today = getTodayDate();

  /** @type {ExerciseData} */
  const data = loadJSON(exercisesPath, { exercises: [] });

  // Check if already logged today
  const alreadyLogged = data.exercises.some(e => e.date === today);
  
  if (alreadyLogged) {
    console.log(`✅ Already logged exercise for ${today}`);
    return;
  }

  // Add today's jog
  data.exercises.push({
    date: today,
    activity: 'Jogging'
  });

  // Save updated data
  saveJSON(exercisesPath, data);
  console.log(`✅ Added jogging for ${today}`);
}

// Run if called directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}

export { main as addExercise };