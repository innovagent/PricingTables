(function() {
  'use strict';
  
  // Widget configuration
  var PricingTableWidget = {
    version: '1.0.0',
    defaultConfig: {
      container: null,
      width: '100%',
      height: '1200px',
      theme: 'purple',
      responsive: true,
      frameBorder: '0',
      scrolling: 'no'
    },
    
    init: function(config) {
      config = this.mergeConfig(this.defaultConfig, config || {});
      
      if (!config.container) {
        console.error('PricingTableWidget: container is required');
        return false;
      }
      
      var container = typeof config.container === 'string' 
        ? document.getElementById(config.container.replace('#', ''))
        : config.container;
        
      if (!container) {
        console.error('PricingTableWidget: container not found');
        return false;
      }
      
      this.createWidget(container, config);
      return true;
    },
    
    createWidget: function(container, config) {
      // Get the current script's URL to determine the base URL
      var scripts = document.getElementsByTagName('script');
      var currentScript = scripts[scripts.length - 1];
      var baseUrl = currentScript.src.replace('/embed.js', '');
      
      // Create iframe
      var iframe = document.createElement('iframe');
      iframe.src = baseUrl + '/index.html';
      iframe.width = config.width;
      iframe.height = config.height;
      iframe.frameBorder = config.frameBorder;
      iframe.scrolling = config.scrolling;
      iframe.style.cssText = 'border: none; width: ' + config.width + '; height: ' + config.height + '; display: block;';
      
      if (config.responsive) {
        iframe.style.cssText += ' max-width: 100%; height: auto; min-height: ' + config.height + ';';
      }
      
      // Add loading and error handling
      iframe.onload = function() {
        iframe.style.opacity = '1';
        iframe.style.transition = 'opacity 0.3s ease-in-out';
      };
      
      iframe.onerror = function() {
        container.innerHTML = '<div style="padding: 20px; text-align: center; border: 2px dashed #ccc; border-radius: 8px; color: #666;">Failed to load pricing table. Please try again later.</div>';
      };
      
      // Set initial opacity for smooth loading
      iframe.style.opacity = '0';
      iframe.style.transition = 'opacity 0.3s ease-in-out';
      
      // Clear container and add iframe
      container.innerHTML = '';
      container.appendChild(iframe);
      
      // Listen for messages from iframe (for future features)
      window.addEventListener('message', function(event) {
        if (event.origin !== baseUrl.replace(/\/$/, '')) return;
        
        // Handle messages from the pricing table (e.g., button clicks)
        if (event.data && event.data.type === 'pricing-table-action') {
          console.log('Pricing table action:', event.data);
          // You can add custom event handling here
        }
      });
    },
    
    mergeConfig: function(defaults, user) {
      var result = {};
      for (var key in defaults) {
        result[key] = defaults[key];
      }
      for (var key in user) {
        result[key] = user[key];
      }
      return result;
    }
  };
  
  // Global API
  window.PricingTableWidget = PricingTableWidget;
  
  // Auto-initialize if data attributes are found
  document.addEventListener('DOMContentLoaded', function() {
    var autoContainers = document.querySelectorAll('[data-pricing-table]');
    
    for (var i = 0; i < autoContainers.length; i++) {
      var container = autoContainers[i];
      var config = {
        container: container,
        width: container.getAttribute('data-width') || '100%',
        height: container.getAttribute('data-height') || '1200px',
        theme: container.getAttribute('data-theme') || 'purple',
        responsive: container.getAttribute('data-responsive') !== 'false'
      };
      
      PricingTableWidget.init(config);
    }
  });
  
})();

// Usage examples:
/*

<!-- Method 1: Auto-initialization with data attributes -->
<div id="pricing-table" data-pricing-table data-height="1200px" data-responsive="true"></div>

<!-- Method 2: Manual initialization -->
<div id="my-pricing-table"></div>
<script>
  PricingTableWidget.init({
    container: 'my-pricing-table',
    height: '1200px',
    responsive: true
  });
</script>

*/