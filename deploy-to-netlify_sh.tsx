#!/bin/bash

echo "🚀 Building Pricing Table for Netlify Deployment"
echo "================================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully"

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ dist folder not found"
    exit 1
fi

echo "📁 Build output ready in 'dist' folder"
echo ""
echo "🎉 SUCCESS! Your pricing table is ready for deployment"
echo ""
echo "📋 Next Steps:"
echo "1. Go to https://netlify.com and log in"
echo "2. Drag and drop the 'dist' folder to deploy"
echo "3. Or connect this Git repository for automatic deployments"
echo ""
echo "📖 For detailed instructions, see: NETLIFY_DEPLOYMENT_GUIDE.md"
echo ""
echo "🌐 Your pricing table will be available at: https://your-site.netlify.app"
echo "📱 And embeddable with: <iframe src='https://your-site.netlify.app' width='100%' height='1200px'></iframe>"