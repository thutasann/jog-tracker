#!/bin/bash

echo "🏃 Setting up exercise streak git alias..."

# Add git alias
git config --global alias.jog '!cd $(git rev-parse --show-toplevel) && npm run log'

echo "✅ Git alias created!"
echo ""
echo "Now you can simply type:"
echo "  git jog"
echo ""
echo "This will:"
echo "1. Log today's exercise"
echo "2. Commit the changes"
echo "3. Push to GitHub"
echo ""
echo "No more thinking about what to change!"