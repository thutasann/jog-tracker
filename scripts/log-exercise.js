// @ts-check

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { execSync } from 'child_process';
import { loadJSON, saveJSON, getTodayDate } from './utils.js';

/** @typedef {import('./types.js').Exercise} Exercise */
/** @typedef {import('./types.js').ExerciseData} ExerciseData */

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Main function to log today's exercise and commit
 */
function main() {
  const exercisesPath = join(__dirname, '..', 'exercises.json');
  const today = getTodayDate();
  
  // Load existing data
  /** @type {ExerciseData} */
  const data = loadJSON(exercisesPath, { exercises: [] });
  
  // Check if already logged today
  const alreadyLogged = data.exercises.some(e => e.date === today);
  
  if (alreadyLogged) {
    console.log(`✅ Already logged exercise for ${today}`);
    console.log('💡 Creating empty commit...');
  } else {
    // Add today's exercise
    data.exercises.push({
      date: today,
      activity: 'Jogging'
    });
    
    // Save updated data
    saveJSON(exercisesPath, data);
    console.log(`✅ Added jogging for ${today}`);
  }
  
  try {
    // Stage changes (or nothing if already logged)
    execSync('git add -A', { stdio: 'inherit' });
    
    // Create commit (allow empty if already logged)
    const commitMessage = `🏃 Jogged on ${today}`;
    execSync(`git commit ${alreadyLogged ? '--allow-empty' : ''} -m "${commitMessage}"`, { stdio: 'inherit' });
    
    // Push to remote
    execSync('git push', { stdio: 'inherit' });
    
    console.log('\n🎉 Successfully pushed your exercise log!');
  } catch (error) {
    console.error('❌ Error pushing to git:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

// Run
main();