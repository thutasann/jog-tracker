# 🏃 How This Exercise Streak Tracker Works

## 📖 Overview

This is the world's simplest exercise tracker - you just push to GitHub after jogging, and everything else is automated!

## 🚀 Quick Start

### 1. Initial Setup (One time only)
- Fork/clone this repo
- Run `npm install` to install type definitions
- Push to GitHub

### 2. Daily Routine - SUPER SIMPLE!

After jogging, just run ONE command:
```bash
npm run log
```

Or even simpler (after one-time setup):
```bash
git jog
```

That's it! This automatically:
- Logs today's exercise in exercises.json
- **Prompts for optional Strava activity ID** (press Enter to skip)
- Adds Strava embed to logs/LOGS.md if provided
- Creates a meaningful commit ("🏃 Jogged on YYYY-MM-DD")
- Pushes to GitHub
- If already logged today, creates empty commit (push multiple times!)

## 🤖 What Happens Automatically

### When You Push (After Jogging)
1. **Auto-logging** - GitHub Actions detects your push and logs today's jog
2. **Streak Update** - Your streak counter increases
3. **README Update** - Stats and milestones update automatically
4. **Issue Closure** - Any reminder issues for today close with a congrats message

### When You DON'T Push (Skip Jogging)
1. **Daily Check** - At 8 PM UTC, GitHub checks if you pushed today
2. **Reminder Issue** - Creates a motivational issue with:
   - Random funny titles
   - Developer-specific excuses
   - Your current streak status
   - Guilt-trip messages
3. **Auto-close** - The issue closes automatically when you finally push

## 📁 File Structure

```
exercise_streak/
├── README.md              # Your streak dashboard with live stats
├── exercises.json         # Auto-updated exercise log
├── streak.json           # Current streak data
├── package.json          # Node.js project configuration
├── tsconfig.json         # TypeScript config for type checking
├── logs/
│   └── LOGS.md           # Detailed exercise log with Strava embeds
├── .github/workflows/
│   ├── auto-jog.yml      # Logs jog on every push
│   ├── daily-check.yml   # Creates reminder if no push
│   └── close-reminder.yml # Closes issues when you push
└── scripts/
    ├── log-exercise.js   # One-command daily logging (with Strava prompt)
    ├── add-strava-embed.js # Add Strava activity embeds
    ├── update-streak.js  # Calculates streaks
    ├── update-readme.js  # Updates README stats
    ├── update-logs.js    # Updates LOGS.md
    ├── utils.js          # Shared utility functions
    └── types.js          # JSDoc type definitions
```

## 🎯 The Rules

1. **One Push = One Jog** - Every push counts as exercising that day
2. **Streak Tolerance** - Allows 1 day gap (won't break immediately)
3. **Daily Reminder** - Issues created if you don't push by 8 PM UTC
4. **Auto Everything** - No manual editing of exercise logs needed

## 💡 Pro Tips

### One-Time Setup for Ultimate Simplicity

Run this once:
```bash
./scripts/setup-alias.sh
```

Then forever after, just type:
```bash
git jog
```

### Manual Options

**Option 1: Use npm**
```bash
npm run log
```

**Option 2: Direct script**
```bash
node scripts/log-exercise.js
```

### No More Thinking!
The script handles everything:
- ✅ Adds exercise entry if not logged
- ✅ Prompts for optional Strava activity embed
- ✅ Creates empty commit if already logged
- ✅ Always lets you push
- ✅ Meaningful commit messages

### Adding Strava Activities

**During `npm run log`:**
```bash
💡 Optional: Add your Strava activity
🏃 Enter your Strava activity ID (or press Enter to skip): 15875620162
```

**Or separately:**
```bash
npm run add-strava
```

**How to get Strava Activity ID:**
1. Open your activity on Strava
2. Look at the URL: `https://www.strava.com/activities/15875620162`
3. The number at the end is your activity ID

## 🔧 Customization

### Change Reminder Time
Edit `.github/workflows/daily-check.yml`:
```yaml
- cron: '0 20 * * *'  # Change this (UTC time)
```

### Modify Messages
- Reminder messages: Edit arrays in `daily-check.yml`
- Commit messages: Edit in `auto-jog.yml`

## ❓ FAQ

**Q: What if I jog twice in one day?**
A: Only the first push counts, but good job overachiever!

**Q: Can I backdate exercises?**
A: No - this tracks push dates, not exercise claims

**Q: What if I jog but forget to push?**
A: You'll get a reminder issue. Push when you see it!

**Q: Can I push without jogging?**
A: That's cheating yourself, not the system 😉

**Q: How do I add my Strava activity?**
A: When running `npm run log`, it will prompt you for the activity ID. Just paste it!

**Q: Where are the Strava embeds shown?**
A: In `logs/LOGS.md` under the "Strava Activities" section, organized by date

## 🏆 Motivation

Remember why you started:
> "After 3 years of coding and heart rate issues..."

Your health is your most important feature. Don't let it become legacy code!

## 🛠️ Development

### Tech Stack
- **Node.js 20+** with ES Modules
- **JSDoc** for type annotations
- **TypeScript** for type checking (dev only)
- **GitHub Actions** for automation

### Type Safety
All scripts use `@ts-check` and JSDoc annotations for type safety:
```javascript
// @ts-check
/** @typedef {import('./types.js').Exercise} Exercise */
```

### Running Scripts Locally
```bash
# Install dependencies
npm install

# Run type checking
npm run type-check

# Test all scripts
npm test

# Run individual scripts
node scripts/log-exercise.js
node scripts/add-strava-embed.js
node scripts/update-streak.js
node scripts/update-readme.js
node scripts/update-logs.js
```

## 🐛 Troubleshooting

**Actions not running?**
- Check Actions are enabled in repo settings
- Verify you're pushing to main/master branch
- Check Node.js version in workflows (requires 20+)

**Streak not updating?**
- Wait a few minutes for Actions to complete
- Check Actions tab for any errors
- Run `npm test` locally to debug

**No reminder issues?**
- Check if you have issues enabled
- Verify the schedule in daily-check.yml
- Check permissions in workflow files

---

**Just remember: Push = Jog. It's that simple!** 🏃‍♂️💻