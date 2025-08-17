#!/bin/bash

# GitHub Setup Script for Embeddable Pricing Table
# Make this file executable: chmod +x setup-github.sh
# Run with: ./setup-github.sh

set -e

echo "🚀 Setting up your Embeddable Pricing Table on GitHub..."
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    echo "   Download from: https://git-scm.com/downloads"
    exit 1
fi

# Get user input
echo "📋 Please provide the following information:"
read -p "GitHub username: " GITHUB_USERNAME
read -p "Repository name (default: embeddable-pricing-table): " REPO_NAME
REPO_NAME=${REPO_NAME:-embeddable-pricing-table}

echo ""
echo "ℹ️  Make sure you have created the repository '$REPO_NAME' on GitHub first!"
echo "   Go to: https://github.com/new"
echo ""
read -p "Press Enter when you have created the repository on GitHub..."

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "🔧 Initializing Git repository..."
    git init
fi

# Add .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    echo "📝 Creating .gitignore file..."
    cat > .gitignore << 'EOF'
# Dependencies
node_modules/
npm-debug.log*

# Build outputs
dist/
build/

# Environment variables
.env
.env.local

# IDE files
.vscode/
.DS_Store

# Logs
logs
*.log
EOF
fi

# Update package.json with repository information
echo "📝 Updating package.json with repository information..."
if [ -f "package.json" ]; then
    # Create a backup
    cp package.json package.json.backup
    
    # Use node to update package.json
    node -e "
        const fs = require('fs');
        const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        pkg.repository = {
            type: 'git',
            url: 'https://github.com/$GITHUB_USERNAME/$REPO_NAME.git'
        };
        pkg.homepage = 'https://$GITHUB_USERNAME.github.io/$REPO_NAME';
        pkg.bugs = {
            url: 'https://github.com/$GITHUB_USERNAME/$REPO_NAME/issues'
        };
        fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
    " 2>/dev/null || echo "⚠️  Could not update package.json automatically"
fi

# Add all files
echo "📦 Adding all files to Git..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Complete embeddable pricing table with 3D effects" || echo "⚠️  Nothing to commit (files may already be committed)"

# Add remote origin
echo "🔗 Connecting to GitHub repository..."
REPO_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
git remote remove origin 2>/dev/null || true
git remote add origin $REPO_URL

# Set main branch and push
echo "🚀 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Success! Your pricing table is now on GitHub!"
echo ""
echo "📋 Repository: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo "🌐 Clone URL: $REPO_URL"
echo ""
echo "🚀 Next steps:"
echo "   1. Deploy to Vercel: https://vercel.com/import"
echo "   2. Connect your GitHub repository"
echo "   3. Use your deployment URL for embedding"
echo ""
echo "💡 Embed anywhere with:"
echo "   <iframe src='YOUR_DEPLOYMENT_URL' width='100%' height='1200px'></iframe>"
echo ""
echo "🎉 Happy coding!"