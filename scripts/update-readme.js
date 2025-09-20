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
 * Update stats section in README
 * @param {string} readme - Current README content
 * @param {StreakData} streak - Streak data
 * @returns {string} Updated README content
 */
function updateStats(readme, streak) {
  const stats = `\`\`\`
🔥 Current Streak: ${streak.current_streak} days
🏃 Total Jogging Days: ${streak.total_days}
📅 Last Jog: ${streak.last_updated}
\`\`\``;

  return readme.replace(
    /```\n🔥 Current Streak:[\s\S]*?```/,
    stats
  );
}

/**
 * Update exercise log table
 * @param {string} readme - Current README content
 * @param {Exercise[]} exercises - Array of exercises
 * @returns {string} Updated README content
 */
function updateLog(readme, exercises) {
  // Get last 10 exercises
  const recent = exercises
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 10);

  const logRows = recent
    .map(e => `| ${e.date} | ✅ Jogged |`)
    .join('\n');

  if (logRows) {
    const pattern = /([\|] Date [\|] Status [\|]\n[\|]------[\|]--------[\|]\n)([\s\S]*?)(\n\n##)/;
    return readme.replace(pattern, `$1${logRows}$3`);
  }

  return readme;
}

/**
 * Update milestones section
 * @param {string} readme - Current README content
 * @param {number} currentStreak - Current streak count
 * @returns {string} Updated README content
 */
function updateMilestones(readme, currentStreak) {
  /** @type {Milestone[]} */
  const milestones = [
    { days: 7, text: "7 days 🌱" },
    { days: 30, text: "30 days 🌿" },
    { days: 100, text: "100 days 🌳" },
    { days: 365, text: "365 days 🏆" }
  ];

  const milestoneText = milestones
    .map(m => currentStreak >= m.days ? `- [x] ${m.text}` : `- [ ] ${m.text}`)
    .join('\n') + '\n';

  return readme.replace(
    /## 🏆 Milestones\n\n[\s\S]*?(?=\n---)/,
    `## 🏆 Milestones\n\n${milestoneText}`
  );
}

/**
 * Main function to update README
 */
function main() {
  // Define file paths
  const streakPath = join(__dirname, '..', 'streak.json');
  const exercisesPath = join(__dirname, '..', 'exercises.json');
  const readmePath = join(__dirname, '..', 'README.md');

  // Load data
  /** @type {StreakData} */
  const streak = loadJSON(streakPath, {
    current_streak: 0,
    total_days: 0,
    last_updated: 'Never'
  });

  /** @type {ExerciseData} */
  const exerciseData = loadJSON(exercisesPath, { exercises: [] });
  const exercises = exerciseData.exercises || [];

  // Read README
  let readme = readFileSync(readmePath, 'utf8');

  // Update sections
  readme = updateStats(readme, streak);
  readme = updateLog(readme, exercises);
  readme = updateMilestones(readme, streak.current_streak);

  // Save updated README
  writeFileSync(readmePath, readme);

  console.log('✅ README updated');
}

// Run if called directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}

export { main as updateReadme };