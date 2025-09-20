#!/usr/bin/env python3
import json
from datetime import datetime
import sys

def check_exercise_today():
    with open('exercises.json', 'r') as f:
        data = json.load(f)
    
    today = datetime.now().date().isoformat()
    exercises = data.get('exercises', [])
    
    exercised_today = any(e['date'] == today for e in exercises)
    
    # Set output for GitHub Actions
    print(f"::set-output name=exercised::{str(exercised_today).lower()}")
    
    if exercised_today:
        print(f"✅ Exercise logged for today ({today})")
        return 0
    else:
        print(f"❌ No exercise logged for today ({today})")
        return 1

if __name__ == "__main__":
    sys.exit(check_exercise_today())