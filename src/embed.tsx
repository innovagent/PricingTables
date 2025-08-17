import React from 'react';
import { createRoot } from 'react-dom/client';
import { EmbeddablePricingTable } from '../components/EmbeddablePricingTable';

// Include CSS directly in the widget
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

.pricing-widget-container {
  font-family: 'Raleway', sans-serif;
  box-sizing: border-box;
}

.pricing-widget-container *, 
.pricing-widget-container *::before, 
.pricing-widget-container *::after {
  box-sizing: border-box;
}

/* Include minimal Tailwind classes needed for the component */
/* This would be generated from your build process */
`;

// Widget interface
interface PricingWidgetConfig {
  containerId: string;
  theme?: 'purple' | 'blue' | 'custom';
  customColors?: {
    background?: string;
    cardBackground?: string;
    accentColor?: string;
  };
  onButtonClick?: (tier: string, price: number) => void;
}

class PricingWidget {
  private static instances: Map<string, any> = new Map();

  static init(config: PricingWidgetConfig) {
    const { containerId, theme = 'purple', customColors, onButtonClick } = config;
    
    // Find container
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`PricingWidget: Container with id "${containerId}" not found`);
      return;
    }

    // Add CSS to page if not already added
    if (!document.getElementById('pricing-widget-styles')) {
      const style = document.createElement('style');
      style.id = 'pricing-widget-styles';
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    // Add container class
    container.className = 'pricing-widget-container';

    // Create React root
    const root = createRoot(container);
    
    // Render component
    root.render(
      <EmbeddablePricingTable 
        theme={theme}
        customColors={customColors}
        onButtonClick={onButtonClick}
      />
    );

    // Store instance
    this.instances.set(containerId, { root, config });
    
    return {
      destroy: () => this.destroy(containerId),
      update: (newConfig: Partial<PricingWidgetConfig>) => 
        this.update(containerId, newConfig)
    };
  }

  static destroy(containerId: string) {
    const instance = this.instances.get(containerId);
    if (instance) {
      instance.root.unmount();
      this.instances.delete(containerId);
    }
  }

  static update(containerId: string, newConfig: Partial<PricingWidgetConfig>) {
    const instance = this.instances.get(containerId);
    if (instance) {
      const updatedConfig = { ...instance.config, ...newConfig };
      this.destroy(containerId);
      this.init(updatedConfig);
    }
  }
}

// Global API
declare global {
  interface Window {
    PricingWidget: typeof PricingWidget;
  }
}

window.PricingWidget = PricingWidget;

export default PricingWidget;