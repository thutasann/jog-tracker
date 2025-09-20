// @ts-check

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { loadJSON, saveJSON, parseDate } from './utils.js';

/** @typedef {import('./types.js').Exercise} Exercise */
/** @typedef {import('./types.js').ExerciseData} ExerciseData */
/** @typedef {import('./types.js').StreakData} StreakData */

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Calculate current streak from exercises
 * @param {string[]} dates - Array of exercise dates
 * @returns {number} Current streak count
 */
function calculateCurrentStreak(dates) {
  if (dates.length === 0) return 0;

  // Sort dates in descending order
  const sortedDates = dates.sort((a, b) => b.localeCompare(a));
  
  let currentStreak = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  let checkDate = new Date(today);

  for (const dateStr of sortedDates) {
    const exerciseDate = parseDate(dateStr);
    exerciseDate.setHours(0, 0, 0, 0);
    
    // Calculate days difference
    const diffTime = checkDate.getTime() - exerciseDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Allow for 1 day gap
    if (diffDays === 0 || diffDays === 1) {
      currentStreak++;
      checkDate = new Date(exerciseDate);
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }
  
  return currentStreak;
}

/**
 * Main function to update streak data
 */
function main() {
  // Define file paths
  const exercisesPath = join(__dirname, '..', 'exercises.json');
  const streakPath = join(__dirname, '..', 'streak.json');

  // Load exercises
  /** @type {ExerciseData} */
  const exerciseData = loadJSON(exercisesPath, { exercises: [] });
  const exercises = exerciseData.exercises || [];

  // Get unique dates
  const dates = [...new Set(exercises.map(e => e.date))].sort();

  // Calculate current streak
  const currentStreak = calculateCurrentStreak(dates);

  // Create streak data
  /** @type {StreakData} */
  const streakData = {
    current_streak: currentStreak,
    total_days: dates.length,
    last_updated: dates.length > 0 ? dates[dates.length - 1] : 'Never'
  };

  // Save streak data
  saveJSON(streakPath, streakData);

  console.log(`✅ Streak: ${currentStreak} days | Total: ${dates.length} days`);
}

// Run if called directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}

export { main as updateStreak };