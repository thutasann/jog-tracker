#!/usr/bin/env python3
import json
from datetime import datetime, timedelta
from collections import defaultdict

def generate_ascii_heatmap(exercises):
    """Generate a GitHub-style contribution heatmap in ASCII"""
    if not exercises:
        return "No exercise data yet!"
    
    # Group exercises by date
    exercise_dates = {e['date'] for e in exercises}
    
    # Get date range
    dates = [datetime.strptime(d, '%Y-%m-%d').date() for d in exercise_dates]
    if not dates:
        return "No exercise data yet!"
    
    end_date = datetime.now().date()
    start_date = end_date - timedelta(days=364)  # Show last year
    
    # Build heatmap data
    heatmap = []
    current_date = start_date
    week = []
    
    while current_date <= end_date:
        if current_date.isoformat() in exercise_dates:
            week.append('■')  # Exercised
        else:
            week.append('□')  # No exercise
        
        if len(week) == 7 or current_date == end_date:
            heatmap.append(week)
            week = []
        
        current_date += timedelta(days=1)
    
    # Generate ASCII representation
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    result = "     " + " ".join(months) + "\n"
    
    days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    for i, day in enumerate(days):
        row = f"{day}: "
        for week_data in heatmap:
            if i < len(week_data):
                row += week_data[i] + " "
        result += row + "\n"
    
    return result

def generate_monthly_summary(exercises):
    """Generate monthly exercise summary"""
    monthly_counts = defaultdict(int)
    
    for exercise in exercises:
        date = datetime.strptime(exercise['date'], '%Y-%m-%d')
        month_key = date.strftime('%Y-%m')
        monthly_counts[month_key] += 1
    
    if not monthly_counts:
        return "No exercise data yet!"
    
    result = "Monthly Exercise Summary:\n"
    for month, count in sorted(monthly_counts.items(), reverse=True)[:12]:
        bar = '█' * min(count, 31)
        result += f"{month}: {bar} ({count} days)\n"
    
    return result

def main():
    # Load exercise data
    with open('exercises.json', 'r') as f:
        data = json.load(f)
    
    exercises = data.get('exercises', [])
    
    # Generate visualizations
    heatmap = generate_ascii_heatmap(exercises)
    monthly_summary = generate_monthly_summary(exercises)
    
    # Save visualizations
    viz_data = {
        'heatmap': heatmap,
        'monthly_summary': monthly_summary,
        'generated_at': datetime.now().isoformat()
    }
    
    with open('visualizations.json', 'w') as f:
        json.dump(viz_data, f, indent=2)
    
    print("✅ Generated visualizations")

if __name__ == "__main__":
    main()