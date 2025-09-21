// @ts-check

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import readline from 'readline';
import { getTodayDate } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Create readline interface for user input
 * @returns {readline.Interface}
 */
function createInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

/**
 * Ask user for Strava activity ID
 * @param {readline.Interface} rl - Readline interface
 * @returns {Promise<string>}
 */
function askForActivityId(rl) {
  return new Promise((resolve) => {
    rl.question('🏃 Enter your Strava activity ID (or press Enter to skip): ', (answer) => {
      resolve(answer.trim());
    });
  });
}

/**
 * Generate Strava embed HTML
 * @param {string} activityId - Strava activity ID
 * @returns {string}
 */
function generateStravaEmbed(activityId) {
  return `\`\`\`.html
<div class="strava-embed-placeholder" data-embed-type="activity" data-embed-id="${activityId}" data-style="standard"></div><script src="https://strava-embeds.com/embed.js"></script>
\`\`\``;
}

/**
 * Add Strava embed to LOGS.md
 * @param {string} activityId - Strava activity ID
 */
function addEmbedToLogs(activityId) {
  const logsPath = join(__dirname, '..', 'logs', 'LOGS.md');
  const today = getTodayDate();
  
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
  
  // Add the new embed at the top of Strava Activities section
  const embedEntry = `### ${today}\n${generateStravaEmbed(activityId)}\n\n`;
  
  content = content.replace(
    '## Strava Activities\n\n',
    `## Strava Activities\n\n${embedEntry}`
  );
  
  // Save updated content
  writeFileSync(logsPath, content);
  
  console.log(`✅ Added Strava activity ${activityId} to LOGS.md`);
}

/**
 * Main function
 */
async function main() {
  const rl = createInterface();
  
  try {
    const activityId = await askForActivityId(rl);
    
    if (activityId) {
      addEmbedToLogs(activityId);
      console.log('💡 Remember to commit and push the changes!');
    } else {
      console.log('⏭️  Skipped adding Strava embed');
    }
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