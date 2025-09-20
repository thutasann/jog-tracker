# 🏃 How This Exercise Streak Tracker Works

## 📖 Overview

This is the world's simplest exercise tracker - you just push to GitHub after jogging, and everything else is automated!

## 🚀 Quick Start

### 1. Initial Setup (One time only)
- Fork/clone this repo
- Replace `[YOUR_USERNAME]` in README.md with your GitHub username
- Push to GitHub

### 2. Daily Routine
After jogging each day:
```bash
# Make ANY small change (even add a space)
echo " " >> README.md

# Commit and push
git add .
git commit -m "jogged today"
git push
```

That's it! No manual logging needed.

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
├── README.md           # Your streak dashboard with live stats
├── exercises.json      # Auto-updated exercise log
├── streak.json         # Current streak data
├── .github/workflows/
│   ├── auto-jog.yml    # Logs jog on every push
│   ├── daily-check.yml # Creates reminder if no push
│   └── close-reminder.yml # Closes issues when you push
└── scripts/
    ├── update_streak.py   # Calculates streaks
    └── update_readme.py   # Updates README stats
```

## 🎯 The Rules

1. **One Push = One Jog** - Every push counts as exercising that day
2. **Streak Tolerance** - Allows 1 day gap (won't break immediately)
3. **Daily Reminder** - Issues created if you don't push by 8 PM UTC
4. **Auto Everything** - No manual editing of exercise logs needed

## 💡 Pro Tips

### Easy Push Methods

**Method 1: Command Line**
```bash
# After jogging
git commit --allow-empty -m "🏃 jogged today"
git push
```

**Method 2: GitHub Web**
1. Go to any file on GitHub.com
2. Click edit (pencil icon)
3. Add a space anywhere
4. Commit directly to main

**Method 3: Create Alias**
```bash
# Add to your .bashrc/.zshrc
alias jogged='git commit --allow-empty -m "🏃 jogged today" && git push'

# Then just type:
jogged
```

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

## 🏆 Motivation

Remember why you started:
> "After 3 years of coding and heart rate issues..."

Your health is your most important feature. Don't let it become legacy code!

## 🐛 Troubleshooting

**Actions not running?**
- Check Actions are enabled in repo settings
- Verify you're pushing to main/master branch

**Streak not updating?**
- Wait a few minutes for Actions to complete
- Check Actions tab for any errors

**No reminder issues?**
- Check if you have issues enabled
- Verify the schedule in daily-check.yml

---

**Just remember: Push = Jog. It's that simple!** 🏃‍♂️💻