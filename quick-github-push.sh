#!/bin/bash

# Quick GitHub Push Script for Embeddable Pricing Table
# Make executable: chmod +x quick-github-push.sh
# Run with: ./quick-github-push.sh

set -e

echo "🚀 Quick GitHub Push for Embeddable Pricing Table"
echo "================================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first:"
    echo "   📥 Download from: https://git-scm.com/downloads"
    exit 1
fi

# Get user input
echo "📋 Enter your GitHub details:"
read -p "GitHub username: " GITHUB_USERNAME
read -p "Repository name (default: embeddable-pricing-table): " REPO_NAME
REPO_NAME=${REPO_NAME:-embeddable-pricing-table}

echo ""
echo "🔍 Repository will be created at:"
echo "   https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo ""

# Confirm repository creation
echo "⚠️  IMPORTANT: Make sure you have created this repository on GitHub first!"
echo "   1. Go to: https://github.com/new"
echo "   2. Repository name: $REPO_NAME"
echo "   3. Set to Public"
echo "   4. DO NOT initialize with README, .gitignore, or license"
echo "   5. Click 'Create repository'"
echo ""
read -p "✅ I have created the repository on GitHub (y/N): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Please create the repository on GitHub first, then run this script again."
    exit 1
fi

echo ""
echo "🔧 Setting up Git repository..."

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
else
    echo "📁 Git repository already initialized"
fi

# Check if there are any changes to commit
if git diff-index --quiet HEAD -- 2>/dev/null; then
    echo "📝 No new changes to commit"
else
    echo "📝 Adding all files to Git..."
    git add .
    
    echo "💾 Creating commit..."
    git commit -m "Initial commit: Complete embeddable pricing table with 3D effects and deployment setup" || echo "⚠️  Nothing new to commit"
fi

# Remove existing origin if it exists
git remote remove origin 2>/dev/null || true

# Add new remote origin
echo "🔗 Connecting to GitHub repository..."
REPO_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
git remote add origin $REPO_URL

# Set main branch and push
echo "🚀 Pushing to GitHub..."
git branch -M main

# Push to GitHub
if git push -u origin main; then
    echo ""
    echo "✅ SUCCESS! Your pricing table is now on GitHub!"
    echo ""
    echo "📋 Repository URL: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
    echo "🌐 Clone URL: $REPO_URL"
    echo ""
    echo "🚀 Next Steps:"
    echo "   1. 🌍 Deploy to Vercel: https://vercel.com/new"
    echo "   2. 📤 Import your GitHub repository"
    echo "   3. ⚙️  Framework: Vite, Build: npm run build, Output: dist"
    echo "   4. 🎉 Get your live URL for embedding!"
    echo ""
    echo "💡 Quick Embed Code (after deployment):"
    echo "   <iframe src='YOUR_VERCEL_URL' width='100%' height='1200px'></iframe>"
    echo ""
    echo "🎊 Happy coding!"
else
    echo ""
    echo "❌ Push failed. Common fixes:"
    echo "   1. Check your GitHub username and repository name"
    echo "   2. Make sure the repository exists on GitHub"
    echo "   3. Check your GitHub authentication"
    echo "   4. Try: git push -u origin main --force (if needed)"
fi