// @ts-check

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import readline from 'readline';

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
 * Generate Strava embed HTML
 * @param {string} activityId
 * @returns {string}
 */
function generateStravaEmbed(activityId) {
  return `<div class="strava-embed-placeholder" data-embed-type="activity" data-embed-id="${activityId}" data-style="standard"></div><script src="https://strava-embeds.com/embed.js"></script>`;
}

/**
 * Add Strava embed for specific date
 * @param {string} date
 * @param {string} activityId
 */
function addEmbedForDate(date, activityId) {
  const logsPath = join(__dirname, '..', 'logs', 'LOGS.md');
  
  // Read current logs
  let content = readFileSync(logsPath, 'utf8');
  
  // Check if we already have an embeds section
  if (!content.includes('## Strava Activities')) {
    // Add new section before the auto-updated line
    content = content.replace(
      '---\n\n*Auto-updated by GitHub Actions*',
      '## Strava Activities\n\n---\n\n*Auto-updated by GitHub Actions*'
    );
  }
  
  // Check if this date already has an embed
  if (content.includes(`### ${date}`)) {
    console.log(`⚠️  Date ${date} already has a Strava embed`);
    return;
  }
  
  // Add the new embed
  const embedEntry = `### ${date}\n${generateStravaEmbed(activityId)}\n\n`;
  
  // Find the right place to insert (keep dates in reverse chronological order)
  const stravaSection = content.indexOf('## Strava Activities');
  const endOfSection = content.indexOf('---', stravaSection);
  
  // Extract existing dates
  const dateRegex = /### (\d{4}-\d{2}-\d{2})/g;
  const existingDates = [];
  let match;
  while ((match = dateRegex.exec(content)) !== null) {
    existingDates.push(match[1]);
  }
  
  // Add new date and sort
  existingDates.push(date);
  existingDates.sort().reverse();
  
  // Find where to insert
  const dateIndex = existingDates.indexOf(date);
  if (dateIndex === 0) {
    // Insert at the beginning of Strava Activities section
    content = content.replace(
      '## Strava Activities\n\n',
      `## Strava Activities\n\n${embedEntry}`
    );
  } else {
    // Insert after the previous date
    const prevDate = existingDates[dateIndex - 1];
    const prevDatePattern = new RegExp(`### ${prevDate}[\\s\\S]*?(?=###|---)`, 'g');
    content = content.replace(prevDatePattern, (match) => `${match}${embedEntry}`);
  }
  
  // Save updated content
  writeFileSync(logsPath, content);
  
  console.log(`✅ Added Strava activity ${activityId} for ${date}`);
}

/**
 * Main function
 */
async function main() {
  const rl = createInterface();
  
  try {
    console.log('📅 Add Strava activity for a specific date\n');
    
    const date = await ask(rl, 'Enter date (YYYY-MM-DD): ');
    
    // Validate date format
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      console.error('❌ Invalid date format. Use YYYY-MM-DD');
      return;
    }
    
    const activityId = await ask(rl, 'Enter Strava activity ID: ');
    
    if (!activityId) {
      console.log('❌ Activity ID is required');
      return;
    }
    
    addEmbedForDate(date, activityId);
    console.log('\n💡 Remember to commit and push the changes!');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    rl.close();
  }
}

// Run if called directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}