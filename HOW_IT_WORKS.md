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

That's it! This will:
- **Prompt for date** (defaults to today - just press Enter)
- Log exercise in exercises.json
- **Prompt for optional Strava activity ID** (press Enter to skip)
- Add Strava embed to logs/LOGS.md if provided
- Update README.md with current streak stats
- Create a meaningful commit ("🏃 Jogged on YYYY-MM-DD")
- **Ask if you want to push to GitHub** (default: yes)
- If already logged for that date, creates empty commit (push multiple times!)

## 🤖 What Happens Automatically

### When You Run `npm run log` (Local Updates)
1. **Exercise Logging** - Adds entry to exercises.json for the date you specify
2. **Streak Calculation** - Updates streak.json with current and total stats
3. **README Update** - Updates stats and milestones in README.md
4. **Logs Update** - Updates exercise table and adds Strava embeds in logs/LOGS.md
5. **Git Commit** - Creates meaningful commit with exercise date
6. **Optional Push** - Asks if you want to push to GitHub

### GitHub Actions (Daily Reminder Only)
1. **Daily Check** - At 8 PM UTC, GitHub checks if you pushed today
2. **Reminder Issue** - Creates a motivational issue if you didn't push:
   - Random funny titles
   - Developer-specific excuses
   - Your current streak status
   - Guilt-trip messages
3. **No File Updates** - GitHub Actions NEVER modifies any files (all updates are local)

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
│   └── daily-check.yml   # Creates reminder if no push (8 PM UTC)
└── scripts/
    ├── log.js            # Unified script that handles everything
    ├── utils.js          # Shared utility functions
    └── types.js          # JSDoc type definitions
```

## 🎯 The Rules

1. **Local Control** - You control when and how to log exercises
2. **Flexible Dating** - Can log for any date (today by default)
3. **Streak Tolerance** - Allows 1 day gap (won't break immediately)
4. **Daily Reminder** - Issues created if you don't push by 8 PM UTC
5. **Optional Strava** - Add activity embeds or skip them

## 💡 Pro Tips

### The One Command You Need
```bash
npm run log
```

### What It Does
The unified script handles everything:
- ✅ Prompts for date (defaults to today)
- ✅ Logs exercise to exercises.json
- ✅ Prompts for optional Strava activity ID
- ✅ Updates all files (README, LOGS, streak.json)
- ✅ Creates meaningful commit
- ✅ Asks if you want to push
- ✅ Creates empty commit if already logged for that date

### Advanced Usage

**Log for a specific date:**
```bash
npm run log
# When prompted: 2025-09-19
```

**Add Strava activity:**
```bash
npm run log
# When prompted for Strava ID: 15875620162
```

**Skip push to GitHub:**
```bash
npm run log
# When asked to push: n
```

### Adding Strava Activities

**During `npm run log`:**
```bash
💡 Strava activity ID (press Enter to skip): 15875620162
```

**How to get Strava Activity ID:**
1. Open your activity on Strava
2. Look at the URL: `https://www.strava.com/activities/15875620162`
3. The number at the end is your activity ID

Strava embeds will be added to `logs/LOGS.md` under the specific date.

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
A: The script allows empty commits, so you can push multiple times!

**Q: Can I backdate exercises?**
A: Yes! When prompted for date, enter any date in YYYY-MM-DD format

**Q: What if I jog but forget to push?**
A: You'll get a reminder issue. Run `npm run log` when you see it!

**Q: Can I push without jogging?**
A: That's cheating yourself, not the system 😉

**Q: How do I add my Strava activity?**
A: When running `npm run log`, paste the activity ID when prompted

**Q: Where are the Strava embeds shown?**
A: In `logs/LOGS.md` under the "Strava Activities" section, organized by date

**Q: What if there's a merge conflict?**
A: This shouldn't happen anymore! All updates are local now

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

# Run the unified logging script
node scripts/log.js
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
- Verify the schedule in daily-check.yml (8 PM UTC)
- Check permissions in workflow files

**Merge conflicts?**
- This should no longer happen with the new local-only approach
- If you still get conflicts, ensure no GitHub Actions are modifying files

---

**Just remember: `npm run log` = Everything done locally. It's that simple!** 🏃‍♂️💻