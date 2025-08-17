# 🎨 Pricing Table Design Reference Card

*Quick reference for recreating the design in Figma or other design tools*

## 🎨 Color Palette

| Element | Color Value | Usage |
|---------|-------------|-------|
| Background | `#6d28d9` | Main page background |
| Card Background | `linear-gradient(145deg, #3a1a8a, #2a1270)` | Pricing card backgrounds |
| Text Primary | `#f4f4f4` | Main text content |
| Text Secondary | `#f4f4f4` @ 80% opacity | Subtitle text |
| Popular Accent | `#ff5722` | Popular badge and ring |
| Success Green | `#10b981` | Checkmarks and savings |
| Error Red | `#ef4444` | X marks for unavailable features |

## 📝 Typography Scale

| Element | Size | Weight | Color | Usage |
|---------|------|--------|-------|-------|
| Main Heading | 60px | Bold | White | "Simple, transparent pricing" |
| Tier Names | 24px | Bold | `#f4f4f4` | "Basic", "Standard", "Premium" |
| Price Display | 60px | Bold | `#f4f4f4` | "$81", "$248", "$415" |
| Price Period | 18px | Regular | `#f4f4f4` @ 80% | "per month, billed annually" |
| Descriptions | 18px | Regular | `#f4f4f4` @ 90% | Tier descriptions |
| Feature Text | 16px | Medium | `#f4f4f4` @ 90% | Feature list items |
| Button Text | 18px | Semibold | White | Call-to-action buttons |
| Badge Text | 14px | Bold | White | "MOST POPULAR", "Save 16%" |

## 📐 Layout & Spacing

| Element | Measurement | Notes |
|---------|-------------|-------|
| Container Max Width | 1152px | 6xl Tailwind container |
| Container Padding | 24px sides, 80px top/bottom | Responsive padding |
| Card Grid Gap | 32px | Space between pricing cards |
| Card Internal Padding | 32px | Inside card content padding |
| Button Height | 56px | Large button size |
| Badge Top Offset | -16px | Popular badge positioning |

## ✨ Visual Effects

### Card Shadows
**Standard Cards:**
```css
box-shadow: 
  0 25px 50px -12px rgba(0, 0, 0, 0.5),
  0 10px 20px -5px rgba(0, 0, 0, 0.3),
  inset 0 1px 0 rgba(255, 255, 255, 0.1),
  inset 0 -1px 0 rgba(0, 0, 0, 0.2);
```

**Popular Card (Additional):**
```css
ring: 3px solid #ff5722;
scale: 1.05;
```

### Button Effects
**Default:**
```css
background: linear-gradient(145deg, #4f46e5, #7c3aed);
box-shadow: 
  0 10px 20px -5px rgba(79, 70, 229, 0.4),
  0 4px 8px -2px rgba(0, 0, 0, 0.3);
```

**Hover:**
```css
transform: translateY(-3px) scale(1.02);
box-shadow: 
  0 15px 30px -5px rgba(79, 70, 229, 0.6),
  0 8px 16px -2px rgba(0, 0, 0, 0.4);
```

## 📱 Responsive Breakpoints

| Breakpoint | Layout | Changes |
|------------|--------|---------|
| Desktop (768px+) | 3-column grid | Full horizontal layout |
| Tablet (640-767px) | 2-column grid | Responsive stacking |
| Mobile (<640px) | 1-column stack | Vertical card arrangement |

## 🔄 Interactive States

### Annual/Monthly Toggle
- **Container**: `#311687` background, rounded-full
- **Active State**: White background with dark text
- **Inactive State**: `#f4f4f4` @ 70% opacity
- **Switch**: Orange gradient when annual selected

### Pricing Animation
- **Transition**: 300ms ease for price changes
- **Annual Savings**: Green badge appears
- **Price Update**: Smooth number transition

## 🎯 Key Design Principles

1. **3D Depth**: Layered shadows create visual hierarchy
2. **Gradient Cohesion**: Consistent purple-to-darker-purple gradients
3. **Orange Accents**: Strategic use of orange for emphasis
4. **Raleway Typography**: Consistent font family throughout
5. **High Contrast**: Light text on dark backgrounds for readability

## 📋 Component Structure

```
PricingTable
├── Header Section
│   ├── Main Heading
│   ├── Subtitle
│   └── Billing Toggle
├── Cards Grid
│   └── PricingCard (×3)
│       ├── Popular Badge (if applicable)
│       ├── Card Header
│       │   ├── Tier Name
│       │   ├── Price Display
│       │   ├── Savings Badge
│       │   └── Description
│       ├── Feature List
│       │   └── Feature Item (×20+)
│       │       ├── Check/X Icon
│       │       └── Feature Text
│       └── CTA Button
└── Footer Section
    ├── Trial Information
    └── Trust Indicators
```

---

**🚀 Pro Tip**: Use this deployed version as your living style guide: [Your Deployment URL]

Copy this reference card into your design documentation for easy access! 📋✨