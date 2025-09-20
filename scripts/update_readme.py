#!/usr/bin/env python3
import json
import re
from datetime import datetime

def load_json(filename):
    try:
        with open(filename, 'r') as f:
            return json.load(f)
    except:
        return {}

def update_readme():
    # Load all data
    exercises_data = load_json('exercises.json')
    streak_data = load_json('streak.json')
    viz_data = load_json('visualizations.json')
    
    exercises = exercises_data.get('exercises', [])
    
    # Read current README
    with open('README.md', 'r') as f:
        readme = f.read()
    
    # Update stats section
    stats_section = f"""```
🔥 Current Streak: {streak_data.get('current_streak', 0)} days
💪 Total Exercise Days: {streak_data.get('total_days', 0)}
📅 Last Exercise: {streak_data.get('last_updated', 'Never')}
🎯 Goal: 365 days of movement!
```"""
    
    readme = re.sub(r'```\n🔥 Current Streak:.*?```', stats_section, readme, flags=re.DOTALL)
    
    # Update exercise log (last 10 entries)
    recent_exercises = sorted(exercises, key=lambda x: x['date'], reverse=True)[:10]
    
    log_rows = []
    for exercise in recent_exercises:
        log_rows.append(f"| {exercise['date']} | {exercise['activity']} | {exercise['duration']} | {exercise.get('notes', '')} |")
    
    log_section = "\n".join(log_rows) if log_rows else "| No exercises logged yet |"
    
    # Update the exercise log table
    pattern = r'(\| Date \| Activity \| Duration \| Notes \|\n\|------\|----------|----------|-------|\n).*?(\n<!-- DO NOT EDIT ABOVE THIS LINE -->)'
    replacement = f"\\1{log_section}\\2"
    readme = re.sub(pattern, replacement, readme, flags=re.DOTALL)
    
    # Update heatmap if available
    if viz_data.get('heatmap'):
        heatmap_section = f"```\n{viz_data['heatmap']}\n```"
        readme = re.sub(r'### Monthly Heatmap\n<!-- Heatmap will be auto-generated -->\n```\n.*?```', 
                       f"### Monthly Heatmap\n<!-- Heatmap will be auto-generated -->\n{heatmap_section}", 
                       readme, flags=re.DOTALL)
    
    # Update milestones
    current_streak = streak_data.get('current_streak', 0)
    milestones = [
        (7, "7 days streak 🌱"),
        (30, "30 days streak 🌿"),
        (100, "100 days streak 🌳"),
        (365, "365 days streak 🏆")
    ]
    
    milestone_lines = []
    for days, text in milestones:
        if current_streak >= days:
            milestone_lines.append(f"- [x] {text}")
        else:
            milestone_lines.append(f"- [ ] {text}")
    
    milestone_section = "\n".join(milestone_lines)
    readme = re.sub(r'## 🎖️ Milestones\n\n.*?(?=\n##)', 
                   f"## 🎖️ Milestones\n\n{milestone_section}\n", 
                   readme, flags=re.DOTALL)
    
    # Write updated README
    with open('README.md', 'w') as f:
        f.write(readme)
    
    print("✅ Updated README.md")

if __name__ == "__main__":
    update_readme()