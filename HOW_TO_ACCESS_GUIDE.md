# How to Access Your Embedding Guide

Since you can't directly download files from Figma Make, here are your options to save the embedding instructions:

## Option 1: View and Copy the Content

1. **View the file**: Use the file explorer in Figma Make to navigate to `/EMBEDDING_GUIDE.md`
2. **Copy the content**: Select all the text in the file and copy it
3. **Save locally**: Paste it into a new file on your computer and save as `EMBEDDING_GUIDE.md`

## Option 2: Quick Deploy and Access

Since your project is already set up, you can:

1. **Deploy to Vercel/Netlify**: 
   - Connect your GitHub repository 
   - Deploy the entire project
   - The `EMBEDDING_GUIDE.md` will be included in your deployed files

2. **Access via GitHub**:
   - If you push this project to GitHub, the markdown file will be viewable there
   - You can then download it directly from GitHub

## Option 3: Copy the Content Below

Here's the complete embedding guide content you can copy and save:

---

# Pricing Table Embedding Guide

This guide explains how to embed your pricing table component into external websites using different methods.

## Method 1: Iframe Embedding (Simplest)

This is the easiest method that works with any website technology.

### Steps:
1. Deploy your pricing table to a hosting service (Vercel, Netlify, etc.)
2. Add this iframe code to any website:

```html
<iframe 
  src="https://your-deployed-app.vercel.app" 
  width="100%" 
  height="1200px" 
  frameborder="0" 
  scrolling="no"
  style="border: none; overflow: hidden;">
</iframe>
```

### Responsive iframe:
```html
<div style="position: relative; width: 100%; height: 0; padding-bottom: 80%;">
  <iframe 
    src="https://your-deployed-app.vercel.app"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    frameborder="0"
    scrolling="no">
  </iframe>
</div>
```

## Method 2: Direct HTML/CSS/JS Integration

For websites that can't use React but want more control than an iframe.

### Step 1: Create a vanilla JavaScript version
Create this file and host it:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pricing Table</title>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
    <style>
        /* Add your compiled Tailwind CSS here */
        /* You'll need to extract the generated CSS from your build */
    </style>
</head>
<body>
    <div id="pricing-table-root"></div>
    
    <script>
        // Vanilla JS version of your pricing table
        // This would require manual conversion from React to vanilla JS
    </script>
</body>
</html>
```

## Method 3: React Component Integration

For websites already using React, you can share your component directly.

### Installation for React projects:

1. **Copy required files to target project:**
   - `/components/EmbeddablePricingTable.tsx`
   - `/components/ui/` (all shadcn components)
   - `/styles/globals.css`

2. **Install dependencies:**
```bash
npm install lucide-react class-variance-authority clsx tailwind-merge
```

3. **Use in their React app:**
```jsx
import { EmbeddablePricingTable } from './components/EmbeddablePricingTable';

function App() {
  return (
    <div>
      <EmbeddablePricingTable />
    </div>
  );
}
```

## Method 4: Build as Standalone Widget

Create a self-contained widget that can be embedded anywhere.

### Create a widget build script:

```javascript
// widget-build.js
import { build } from 'esbuild';

build({
  entryPoints: ['src/widget.tsx'],
  bundle: true,
  outfile: 'dist/pricing-widget.js',
  format: 'iife',
  globalName: 'PricingWidget',
  external: [],
  minify: true,
  define: {
    'process.env.NODE_ENV': '"production"'
  }
});
```

### Widget entry point:
```typescript
// src/widget.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { EmbeddablePricingTable } from './components/EmbeddablePricingTable';

declare global {
  interface Window {
    PricingWidget: {
      init: (containerId: string) => void;
    };
  }
}

window.PricingWidget = {
  init: (containerId: string) => {
    const container = document.getElementById(containerId);
    if (container) {
      const root = createRoot(container);
      root.render(<EmbeddablePricingTable />);
    }
  }
};
```

### Usage on external websites:
```html
<div id="pricing-table-container"></div>
<script src="https://your-domain.com/pricing-widget.js"></script>
<script>
  PricingWidget.init('pricing-table-container');
</script>
```

## Method 5: WordPress Integration

For WordPress sites, create a shortcode.

### WordPress Plugin Code:
```php
<?php
// pricing-table-plugin.php
add_shortcode('pricing_table', function($atts) {
    $iframe_url = 'https://your-deployed-app.vercel.app';
    $height = isset($atts['height']) ? $atts['height'] : '1200px';
    
    return '<iframe src="' . esc_url($iframe_url) . '" 
            width="100%" 
            height="' . esc_attr($height) . '" 
            frameborder="0" 
            style="border: none;">
            </iframe>';
});
?>
```

### WordPress Usage:
```
[pricing_table height="1000px"]
```

## Recommended Deployment Platforms

### For React Apps:
- **Vercel** (recommended): Deploy directly from GitHub
- **Netlify**: Easy drag-and-drop deployment
- **GitHub Pages**: Free hosting for static sites

### Deployment Steps (Vercel):
1. Push your code to GitHub
2. Connect repository to Vercel
3. Deploy automatically
4. Use the generated URL in your iframe

## Customization Options

### Custom Styling:
You can modify the component by passing props or creating variants:

```typescript
interface EmbeddablePricingTableProps {
  theme?: 'purple' | 'blue' | 'custom';
  hideBackground?: boolean;
  customColors?: {
    background: string;
    cardBackground: string;
    textColor: string;
  };
}
```

### Custom Button Actions:
Replace button click handlers to integrate with external systems:

```typescript
const handleButtonClick = (tier: string) => {
  // Custom integration logic
  window.parent.postMessage({
    type: 'PRICING_BUTTON_CLICKED',
    tier: tier
  }, '*');
};
```

## Best Practices

1. **Performance**: Lazy load the pricing table if it's below the fold
2. **Responsive**: Ensure proper mobile display
3. **SEO**: Use server-side rendering if SEO is important
4. **Analytics**: Track button clicks and interactions
5. **Loading States**: Show loading indicators while component loads

## Troubleshooting

### Common Issues:
- **Styling conflicts**: Use CSS isolation or iframe
- **Font loading**: Ensure Raleway font is loaded
- **JavaScript errors**: Check browser console for missing dependencies
- **Responsive issues**: Test on various screen sizes

### Testing:
Test your embedded pricing table on:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS Safari, Android Chrome)
- Different screen sizes
- Various website themes/backgrounds

---

## Quick Start Recommendation

**For immediate use**: Deploy your current project to Vercel and use the iframe method. It's the fastest way to get your pricing table embedded anywhere.

1. Push your code to GitHub
2. Connect to Vercel at vercel.com
3. Deploy in one click
4. Use the generated URL in an iframe on any website