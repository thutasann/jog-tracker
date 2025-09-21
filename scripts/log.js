// @ts-check

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import readline from 'readline';
import { loadJSON, saveJSON, getTodayDate, parseDate } from './utils.js';

/** @typedef {import('./types.js').Exercise} Exercise */
/** @typedef {import('./types.js').ExerciseData} ExerciseData */
/** @typedef {import('./types.js').StreakData} StreakData */

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Create readline interface
 * @returns {readline.Interface}
 */
function createInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

/**
 * Ask user for input
 * @param {readline.Interface} rl
 * @param {string} question
 * @returns {Promise<string>}
 */
function ask(rl, question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

/**
 * Calculate streak from exercises
 * @param {string[]} dates - Array of exercise dates sorted
 * @returns {{current: number, total: number, lastDate: string}}
 */
function calculateStreak(dates) {
  if (dates.length === 0) return { current: 0, total: 0, lastDate: 'Never' };
  
  let currentStreak = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  let checkDate = new Date(today);

  for (const dateStr of [...dates].reverse()) {
    const exerciseDate = parseDate(dateStr);
    exerciseDate.setHours(0, 0, 0, 0);
    
    const diffTime = checkDate.getTime() - exerciseDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0 || diffDays === 1) {
      currentStreak++;
      checkDate = new Date(exerciseDate);
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }
  
  return {
    current: currentStreak,
    total: dates.length,
    lastDate: dates[dates.length - 1]
  };
}

/**
 * Update README with current stats
 * @param {StreakData} streak
 */
function updateReadme(streak) {
  const readmePath = join(__dirname, '..', 'README.md');
  let readme = readFileSync(readmePath, 'utf8');
  
  // Update stats
  const stats = `\`\`\`
🔥 Current Streak: ${streak.current_streak} days
🏃 Total Jogging Days: ${streak.total_days}
📅 Last Jog: ${streak.last_updated}
\`\`\``;
  
  readme = readme.replace(
    /```\n🔥 Current Streak:[\s\S]*?```/,
    stats
  );
  
  // Update milestones
  const milestones = [
    { days: 7, text: "7 days 🌱" },
    { days: 30, text: "30 days 🌿" },
    { days: 100, text: "100 days 🌳" },
    { days: 365, text: "365 days 🏆" }
  ];
  
  const milestoneText = milestones
    .map(m => streak.current_streak >= m.days ? `- [x] ${m.text}` : `- [ ] ${m.text}`)
    .join('\n') + '\n';
  
  readme = readme.replace(
    /## 🏆 Milestones\n\n[\s\S]*?(?=\n---)/,
    `## 🏆 Milestones\n\n${milestoneText}`
  );
  
  writeFileSync(readmePath, readme);
  console.log('✅ Updated README.md');
}

/**
 * Update LOGS.md with exercise table and Strava embed
 * @param {Exercise[]} exercises
 * @param {string} date
 * @param {string} stravaId
 */
function updateLogs(exercises, date, stravaId) {
  const logsPath = join(__dirname, '..', 'logs', 'LOGS.md');
  let content = readFileSync(logsPath, 'utf8');
  
  // Update exercise table
  const recent = exercises
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 20);
  
  const logRows = recent
    .map(e => `| ${e.date} | ✅ Jogged |`)
    .join('\n');
  
  if (logRows) {
    // Find the table header and replace everything up to Strava Activities section
    const tableHeader = '| Date | Status |\n|------|--------|';
    const stravaSection = '\n\n## Strava Activities';
    
    const headerIndex = content.indexOf(tableHeader);
    const stravaIndex = content.indexOf(stravaSection);
    
    if (headerIndex !== -1 && stravaIndex !== -1) {
      const beforeTable = content.substring(0, headerIndex + tableHeader.length);
      const afterTable = content.substring(stravaIndex);
      content = beforeTable + '\n' + logRows + afterTable;
    }
  }
  
  // Add Strava embed if provided
  if (stravaId) {
    const embedEntry = `### ${date}\n\`\`\`.html\n<div class="strava-embed-placeholder" data-embed-type="activity" data-embed-id="${stravaId}" data-style="standard"></div><script src="https://strava-embeds.com/embed.js"></script>\n\`\`\`\n\n`;
    
    // Check if date already exists
    if (!content.includes(`### ${date}`)) {
      // Find the Strava Activities section and add embed after it
      const stravaMatch = content.match(/(## Strava Activities\s*)/);
      if (stravaMatch && stravaMatch?.index) {
        const insertPosition = stravaMatch.index + stravaMatch[0].length;
        content = content.slice(0, insertPosition) + '\n' + embedEntry + content.slice(insertPosition);
      }
    }
  }
  
  writeFileSync(logsPath, content);
  console.log('✅ Updated LOGS.md');
}

/**
 * Main function
 */
async function main() {
  const rl = createInterface();
  
  try {
    console.log('🏃 Exercise Logger\n');
    
    // Ask for date (default to today)
    const dateInput = await ask(rl, `Enter date (YYYY-MM-DD) [${getTodayDate()}]: `);
    const date = dateInput || getTodayDate();
    
    // Validate date
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      console.error('❌ Invalid date format');
      return;
    }
    
    // Load exercises
    const exercisesPath = join(__dirname, '..', 'exercises.json');
    /** @type {ExerciseData} */
    const data = loadJSON(exercisesPath, { exercises: [] });
    
    // Check if already logged
    const exists = data.exercises.some(e => e.date === date);
    if (exists) {
      console.log(`⚠️  Already logged exercise for ${date}`);
    } else {
      // Add exercise
      data.exercises.push({ date, activity: 'Jogging' });
      data.exercises.sort((a, b) => a.date.localeCompare(b.date));
      saveJSON(exercisesPath, data);
      console.log(`✅ Added jogging for ${date}`);
    }
    
    // Ask for Strava activity ID
    const stravaId = await ask(rl, '\n💡 Strava activity ID (press Enter to skip): ');
    
    // Calculate streak
    const dates = [...new Set(data.exercises.map(e => e.date))].sort();
    const streakInfo = calculateStreak(dates);
    
    // Update streak.json
    const streakPath = join(__dirname, '..', 'streak.json');
    /** @type {StreakData} */
    const streak = {
      current_streak: streakInfo.current,
      total_days: streakInfo.total,
      last_updated: streakInfo.lastDate
    };
    saveJSON(streakPath, streak);
    console.log(`\n📊 Streak: ${streak.current_streak} days | Total: ${streak.total_days} days`);
    
    // Update all files
    console.log('\n📝 Updating files...');
    updateReadme(streak);
    updateLogs(data.exercises, date, stravaId);
    
    // Git operations
    console.log('\n🔄 Committing changes...');
    execSync('git add -A', { stdio: 'inherit' });
    
    const commitMessage = `🏃 Jogged on ${date}`;
    const commitResult = exists 
      ? execSync(`git commit --allow-empty -m "${commitMessage}"`, { stdio: 'pipe' })
      : execSync(`git commit -m "${commitMessage}"`, { stdio: 'pipe' });
    
    console.log('✅ Committed changes');
    
    // Automatically push
    console.log('\n🚀 Pushing to GitHub...');
    execSync('git push', { stdio: 'inherit' });
    console.log('\n🎉 Successfully pushed!');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    rl.close();
  }
}

// Run
main();