#!/bin/bash

# Deployment Setup Script for Frontend Portfolio
# This script will help you set up your repository for deployment

echo "🚀 Frontend Portfolio Deployment Setup"
echo "======================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Add all files to git
echo "📝 Adding files to Git..."
git add .

# Check if there are any changes to commit
if git diff --cached --quiet; then
    echo "ℹ️  No changes to commit"
else
    echo "💾 Committing changes..."
    git commit -m "Ready for deployment - all troubleshooting steps completed"
    echo "✅ Changes committed"
fi

# Set main branch
echo "🌳 Setting main branch..."
git branch -M main

echo ""
echo "✅ Repository is ready for deployment!"
echo ""
echo "Next steps:"
echo "1. Create a new repository on GitHub"
echo "2. Copy the repository URL"
echo "3. Run: git remote add origin YOUR_REPO_URL"
echo "4. Run: git push -u origin main"
echo "5. Go to vercel.com and import your GitHub repository"
echo ""
echo "Your portfolio will be live in minutes! 🎉"
