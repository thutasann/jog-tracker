#!/usr/bin/env python3
import json
from datetime import datetime, timedelta

def main():
    # Load exercises
    try:
        with open('exercises.json', 'r') as f:
            data = json.load(f)
            exercises = data.get('exercises', [])
    except:
        exercises = []
    
    # Get unique dates
    dates = sorted(set(e['date'] for e in exercises))
    
    # Calculate current streak
    current_streak = 0
    if dates:
        today = datetime.now().date()
        check_date = today
        
        for date_str in reversed(dates):
            date = datetime.strptime(date_str, '%Y-%m-%d').date()
            if date == check_date or date == check_date - timedelta(days=1):
                current_streak += 1
                check_date = date - timedelta(days=1)
            else:
                break
    
    # Update streak.json
    streak_data = {
        'current_streak': current_streak,
        'total_days': len(dates),
        'last_updated': dates[-1] if dates else 'Never'
    }
    
    with open('streak.json', 'w') as f:
        json.dump(streak_data, f, indent=2)
    
    print(f"✅ Streak: {current_streak} days | Total: {len(dates)} days")

if __name__ == "__main__":
    main()