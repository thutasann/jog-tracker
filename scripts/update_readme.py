#!/usr/bin/env python3
import json
import re

def main():
    # Load data
    try:
        with open('streak.json', 'r') as f:
            streak = json.load(f)
    except:
        streak = {'current_streak': 0, 'total_days': 0, 'last_updated': 'Never'}
    
    try:
        with open('exercises.json', 'r') as f:
            data = json.load(f)
            exercises = data.get('exercises', [])
    except:
        exercises = []
    
    # Read README
    with open('README.md', 'r') as f:
        readme = f.read()
    
    # Update stats
    stats = f"""```
🔥 Current Streak: {streak['current_streak']} days
🏃 Total Jogging Days: {streak['total_days']}
📅 Last Jog: {streak['last_updated']}
```"""
    
    readme = re.sub(r'```\n🔥 Current Streak:.*?```', stats, readme, flags=re.DOTALL)
    
    # Update log (last 10 jogs)
    recent = sorted(exercises, key=lambda x: x['date'], reverse=True)[:10]
    log_rows = [f"| {e['date']} | ✅ Jogged |" for e in recent]
    
    if log_rows:
        log_section = '\n'.join(log_rows)
        pattern = r'(\| Date \| Status \|\n\|------\|--------\|\n).*?(\n\n##)'
        readme = re.sub(pattern, f"\\1{log_section}\\2", readme, flags=re.DOTALL)
    
    # Update milestones
    current = streak['current_streak']
    milestones = [(7, "7 days 🌱"), (30, "30 days 🌿"), (100, "100 days 🌳"), (365, "365 days 🏆")]
    
    milestone_text = ""
    for days, text in milestones:
        if current >= days:
            milestone_text += f"- [x] {text}\n"
        else:
            milestone_text += f"- [ ] {text}\n"
    
    readme = re.sub(r'## 🏆 Milestones\n\n.*?(?=\n---)', 
                    f"## 🏆 Milestones\n\n{milestone_text}", 
                    readme, flags=re.DOTALL)
    
    # Save README
    with open('README.md', 'w') as f:
        f.write(readme)
    
    print("✅ README updated")

if __name__ == "__main__":
    main()