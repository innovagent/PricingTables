# 🚀 Deploy to Netlify - Complete Guide

This package contains everything you need to deploy your pricing table to Netlify and make it embeddable on any website.

## 📁 What's Included

```
netlify-deploy/
├── index.html              # Main pricing table page
├── demo.html              # Demo page showing embedding examples
├── embed.js               # Widget script for embedding
├── netlify.toml           # Netlify configuration
├── _redirects            # URL redirects and rewrites
└── DEPLOY_TO_NETLIFY.md  # This guide
```

## 🎯 Quick Deploy (3 steps)

### Option 1: Drag & Drop (Easiest)

1. **Zip the folder**: Create a ZIP file containing all files in the `netlify-deploy` folder
2. **Go to Netlify**: Visit [netlify.com](https://netlify.com) and sign up/log in
3. **Drag & Drop**: Drag your ZIP file to the deploy area

### Option 2: Git Deploy (Recommended for updates)

1. **Upload to GitHub**: 
   - Create a new repository on GitHub
   - Upload all files from `netlify-deploy` folder
   
2. **Connect to Netlify**:
   - In Netlify, click "New site from Git"
   - Connect your GitHub repository
   - Build settings: Leave empty (static site)
   - Click "Deploy site"

## 🔗 After Deployment

Once deployed, you'll get a URL like: `https://amazing-pricing-table-123456.netlify.app`

### 📝 Update Your Domain (Optional)

1. In Netlify dashboard → Site settings → Domain management
2. Change site name to something memorable like `your-pricing-table`
3. Your new URL: `https://your-pricing-table.netlify.app`

## 🌐 How to Embed on Your Website

### Method 1: Auto-Embed (Easiest)
```html
<!-- Include the widget script -->
<script src="https://your-netlify-domain.netlify.app/embed.js"></script>

<!-- Add container with data attributes -->
<div id="pricing-table" data-pricing-table data-height="1200px"></div>
```

### Method 2: Manual Initialization
```html
<div id="my-pricing-table"></div>
<script src="https://your-netlify-domain.netlify.app/embed.js"></script>
<script>
  PricingTableWidget.init({
    container: 'my-pricing-table',
    height: '1200px',
    responsive: true
  });
</script>
```

### Method 3: Direct Iframe
```html
<iframe 
  src="https://your-netlify-domain.netlify.app/index.html" 
  width="100%" 
  height="1200px" 
  frameborder="0">
</iframe>
```

## 📱 Testing Your Deployment

1. **Visit your site**: `https://your-netlify-domain.netlify.app`
2. **Test the demo**: `https://your-netlify-domain.netlify.app/demo.html`
3. **Check embedding**: Use the demo page to test different embedding methods

## ⚙️ Configuration Options

| Option | Default | Description |
|--------|---------|-------------|
| `container` | required | Element ID or DOM element |
| `width` | '100%' | Widget width |
| `height` | '1200px' | Widget height |
| `responsive` | true | Enable responsive behavior |

## 🎨 Customization

### Update Pricing
Edit `index.html` and modify the `pricingTiers` array around line 180.

### Change Colors
Update the CSS custom properties in the `<style>` section of `index.html`.

### Modify Features
Edit the `features` array for each tier in the `pricingTiers` data.

## 🔧 Advanced Features

### Button Click Tracking
The widget can send events when users click pricing buttons:

```javascript
// Listen for pricing table events
window.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'pricing-table-action') {
    console.log('User clicked:', event.data.tier, event.data.price);
    // Add your analytics or conversion tracking here
  }
});
```

### Custom Domains
1. In Netlify: Site settings → Domain management
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate will be auto-generated

## 📊 Analytics & Tracking

### Google Analytics
Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Button Click Events
Modify the button onClick handlers in `index.html` to track conversions:

```javascript
onClick: () => {
  // Analytics tracking
  gtag('event', 'pricing_button_click', {
    'plan_name': tier.name,
    'plan_price': tier.monthlyPrice,
    'billing_type': isAnnual ? 'annual' : 'monthly'
  });
  
  // Redirect to signup
  window.open('https://your-signup-url.com', '_blank');
}
```

## 🛡️ Security Features

- ✅ HTTPS enforced
- ✅ XSS protection headers
- ✅ Content Security Policy
- ✅ CORS configured for embedding
- ✅ Frame embedding allowed

## 🚀 Performance Optimization

- ✅ CDN delivery via Netlify
- ✅ Gzip compression enabled
- ✅ Font preloading
- ✅ Optimized asset loading
- ✅ Mobile-first responsive design

## 📞 Support & Updates

### Making Updates
1. Update files in your repository
2. Push to GitHub
3. Netlify auto-deploys changes

### Common Issues

**Embedding not working?**
- Check the script URL is correct
- Verify the container ID exists
- Check browser console for errors

**Mobile display issues?**
- Ensure `responsive: true` is set
- Check container has no fixed width constraints

**HTTPS mixed content?**
- Always use HTTPS URLs for the widget script
- Netlify provides HTTPS by default

## 📈 Next Steps

1. ✅ Deploy your pricing table
2. ✅ Test embedding on your website
3. ✅ Add conversion tracking
4. ✅ Monitor performance
5. ✅ Collect user feedback
6. ✅ Iterate and improve

## 🎉 Success!

Your pricing table is now live and embeddable anywhere on the web! 

**Share your deployment:**
- Main page: `https://your-domain.netlify.app`
- Demo page: `https://your-domain.netlify.app/demo.html`
- Widget script: `https://your-domain.netlify.app/embed.js`

---

**Need help?** The demo page includes live examples and code snippets you can copy and paste.