#!/usr/bin/env python3
import json
from datetime import datetime, timedelta
from pathlib import Path

def load_json(filename):
    with open(filename, 'r') as f:
        return json.load(f)

def save_json(filename, data):
    with open(filename, 'w') as f:
        json.dump(data, f, indent=2)

def calculate_streak(exercises):
    if not exercises:
        return 0, 0
    
    # Sort exercises by date
    sorted_exercises = sorted(exercises, key=lambda x: x['date'], reverse=True)
    
    # Calculate current streak
    current_streak = 0
    today = datetime.now().date()
    check_date = today
    
    for exercise in sorted_exercises:
        exercise_date = datetime.strptime(exercise['date'], '%Y-%m-%d').date()
        
        # Allow for one day gap
        if exercise_date == check_date or exercise_date == check_date - timedelta(days=1):
            current_streak += 1
            check_date = exercise_date - timedelta(days=1)
        else:
            break
    
    # Calculate longest streak
    all_dates = [datetime.strptime(e['date'], '%Y-%m-%d').date() for e in exercises]
    all_dates.sort()
    
    longest_streak = 1
    current_run = 1
    
    for i in range(1, len(all_dates)):
        if all_dates[i] - all_dates[i-1] <= timedelta(days=1):
            current_run += 1
            longest_streak = max(longest_streak, current_run)
        else:
            current_run = 1
    
    return current_streak, longest_streak

def main():
    # Load data
    exercises_data = load_json('exercises.json')
    streak_data = load_json('streak.json')
    
    exercises = exercises_data.get('exercises', [])
    
    # Calculate streaks
    current_streak, longest_streak = calculate_streak(exercises)
    
    # Update streak data
    streak_data['current_streak'] = current_streak
    streak_data['longest_streak'] = max(longest_streak, streak_data.get('longest_streak', 0))
    streak_data['total_days'] = len(set(e['date'] for e in exercises))
    
    if exercises:
        latest_date = max(e['date'] for e in exercises)
        streak_data['last_updated'] = latest_date
    
    # Save updated data
    save_json('streak.json', streak_data)
    
    print(f"✅ Updated streak data: Current={current_streak}, Longest={longest_streak}, Total={streak_data['total_days']}")

if __name__ == "__main__":
    main()