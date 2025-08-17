# Embeddable Pricing Table

A beautiful, responsive pricing table component with 3D effects, annual/monthly toggle, and smooth animations. Perfect for SaaS websites and marketing pages.

![Pricing Table Preview](https://via.placeholder.com/800x600/6d28d9/ffffff?text=Pricing+Table+Preview)

## ✨ Features

- 🎨 **3D Visual Effects** - Layered shadows and gradient backgrounds
- 📱 **Fully Responsive** - Works on all devices and screen sizes
- 🔄 **Annual/Monthly Toggle** - Smooth transition with savings display
- 🎯 **Highlighted Popular Plan** - Orange accent for the recommended tier
- 🖱️ **Interactive Buttons** - Hover effects with 3D lift animation
- 🎭 **Multiple Themes** - Purple (default), customizable colors
- 🚀 **Easy Integration** - Multiple embedding options

## 🚀 Quick Start

### Method 1: Iframe Embedding (Recommended)

The easiest way to embed - works with any website:

```html
<iframe 
  src="https://your-pricing-table.vercel.app" 
  width="100%" 
  height="1200px" 
  frameborder="0" 
  style="border: none;">
</iframe>
```

### Method 2: JavaScript Widget

For more control and customization:

```html
<!-- Add container -->
<div id="pricing-table"></div>

<!-- Load widget script -->
<script src="https://your-domain.com/pricing-widget.js"></script>

<!-- Initialize -->
<script>
  PricingWidget.init({
    containerId: 'pricing-table',
    theme: 'purple',
    onButtonClick: (tier, price) => {
      console.log(`Selected ${tier} plan at $${price}/month`);
      // Add your conversion tracking here
    }
  });
</script>
```

### Method 3: React Component

For React applications:

```bash
npm install embeddable-pricing-table
```

```jsx
import { EmbeddablePricingTable } from 'embeddable-pricing-table';

function App() {
  return (
    <EmbeddablePricingTable 
      onButtonClick={(tier, price) => {
        // Handle button click
        console.log(`Selected ${tier} at $${price}`);
      }}
    />
  );
}
```

## 🎨 Customization

### Theme Options

```javascript
PricingWidget.init({
  containerId: 'pricing-table',
  theme: 'purple', // 'purple' | 'blue' | 'custom'
  customColors: {
    background: '#6d28d9',
    cardBackground: '#311687',
    accentColor: '#ff5722'
  }
});
```

### Button Click Handling

```javascript
PricingWidget.init({
  containerId: 'pricing-table',
  onButtonClick: (tier, price) => {
    // Google Analytics
    gtag('event', 'select_plan', {
      'plan_name': tier,
      'plan_price': price
    });
    
    // Redirect to checkout
    window.location.href = `/checkout?plan=${tier}&price=${price}`;
  }
});
```

## 📋 Pricing Tiers

| Feature | Basic ($81/mo) | Standard ($248/mo) | Premium ($415/mo) |
|---------|----------------|-------------------|-------------------|
| Mobile App | ✅ | ✅ | ✅ |
| AI Chat Widget | ✅ | ✅ | ✅ |
| AI Employee | ❌ | ✅ | ✅ |
| Custom Integrations | ❌ | ❌ | ✅ |
| Priority Support | ❌ | ✅ | ✅ |

*Annual pricing shown (16% savings). Monthly options available.*

## 🔧 Development

### Local Development

```bash
# Clone repository
git clone https://github.com/yourusername/embeddable-pricing-table.git
cd embeddable-pricing-table

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Standard build
npm run build

# Build embeddable widget
npm run build:embed

# Deploy to Vercel
npm run deploy
```

### Project Structure

```
├── components/
│   ├── EmbeddablePricingTable.tsx  # Main component
│   ├── PricingTable.tsx           # Base component
│   └── ui/                        # Shadcn components
├── src/
│   └── embed.tsx                  # Widget entry point
├── styles/
│   └── globals.css               # Tailwind styles
└── dist/
    ├── embed/                    # Widget builds
    └── index.html               # Demo page
```

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Get instant preview URLs

### Netlify
1. Drag and drop the `dist` folder
2. Or connect via Git for automatic deployments

### Custom Hosting
1. Build the project: `npm run build`
2. Upload the `dist` folder to your web server
3. Configure proper MIME types for modern JS

## 📈 Analytics Integration

### Google Analytics 4

```javascript
PricingWidget.init({
  containerId: 'pricing-table',
  onButtonClick: (tier, price) => {
    gtag('event', 'begin_checkout', {
      currency: 'USD',
      value: price,
      items: [{
        item_id: tier.toLowerCase(),
        item_name: `${tier} Plan`,
        category: 'Subscription',
        quantity: 1,
        price: price
      }]
    });
  }
});
```

### Facebook Pixel

```javascript
onButtonClick: (tier, price) => {
  fbq('track', 'InitiateCheckout', {
    content_name: `${tier} Plan`,
    content_category: 'Subscription',
    value: price,
    currency: 'USD'
  });
}
```

## 🔒 Security & Privacy

- No data collection by default
- GDPR compliant messaging included
- All processing happens client-side
- No external API calls required

## 🤝 Support

- 📧 Email: support@yourcompany.com
- 💬 Discord: [Join our community](https://discord.gg/yourserver)
- 📖 Docs: [Full documentation](https://docs.yourcompany.com)

## 📄 License

MIT License - feel free to use in commercial projects.

---

**Ready to boost your conversions?** Deploy your pricing table in under 5 minutes! 🚀