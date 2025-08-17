#!/bin/bash

# Embeddable Pricing Table Deployment Script
# Usage: ./deploy.sh [platform]
# Platforms: vercel, netlify, github-pages

set -e

PLATFORM=${1:-vercel}

echo "🚀 Deploying Embeddable Pricing Table to $PLATFORM..."

# Build the project
echo "📦 Building project..."
npm run build
npm run build:embed

# Create deployment info
echo "📝 Creating deployment info..."
cat > dist/DEPLOYMENT.md << EOF
# Deployment Information

**Deployed on:** $(date)
**Platform:** $PLATFORM
**Version:** $(node -p "require('./package.json').version")

## Files Included

- \`index.html\` - Demo page with full pricing table
- \`embed/pricing-table-widget.iife.js\` - Standalone widget
- \`assets/\` - CSS and JS bundles

## Usage

### Iframe Embedding
\`\`\`html
<iframe src="[YOUR_DOMAIN]/index.html" width="100%" height="1200px" frameborder="0"></iframe>
\`\`\`

### Widget Embedding
\`\`\`html
<div id="pricing-table"></div>
<script src="[YOUR_DOMAIN]/embed/pricing-table-widget.iife.js"></script>
<script>PricingWidget.init({containerId: 'pricing-table'});</script>
\`\`\`
EOF

# Platform-specific deployment
case $PLATFORM in
  vercel)
    echo "🚀 Deploying to Vercel..."
    if command -v vercel &> /dev/null; then
      vercel --prod
    else
      echo "❌ Vercel CLI not found. Install with: npm i -g vercel"
      echo "📋 Manual steps:"
      echo "   1. Install Vercel CLI: npm i -g vercel"
      echo "   2. Login: vercel login"
      echo "   3. Deploy: vercel --prod"
    fi
    ;;
    
  netlify)
    echo "🚀 Deploying to Netlify..."
    if command -v netlify &> /dev/null; then
      netlify deploy --prod --dir dist
    else
      echo "❌ Netlify CLI not found. Install with: npm i -g netlify-cli"
      echo "📋 Manual steps:"
      echo "   1. Install Netlify CLI: npm i -g netlify-cli"
      echo "   2. Login: netlify login"
      echo "   3. Deploy: netlify deploy --prod --dir dist"
    fi
    ;;
    
  github-pages)
    echo "🚀 Preparing for GitHub Pages..."
    # Create gh-pages branch and push
    git add dist -f
    git commit -m "Deploy to GitHub Pages"
    git subtree push --prefix dist origin gh-pages
    echo "✅ Pushed to gh-pages branch. Enable GitHub Pages in repository settings."
    ;;
    
  *)
    echo "❌ Unknown platform: $PLATFORM"
    echo "📋 Available platforms: vercel, netlify, github-pages"
    exit 1
    ;;
esac

echo "✅ Deployment preparation complete!"
echo ""
echo "📋 Next steps:"
echo "   1. Test your deployment URL"
echo "   2. Update your embedding code with the new URL"
echo "   3. Share your pricing table! 🎉"