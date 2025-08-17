import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  if (mode === 'embed') {
    // Build configuration for embeddable widget
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/embed.tsx'),
          name: 'PricingTableWidget',
          fileName: (format) => `pricing-table-widget.${format}.js`,
          formats: ['iife', 'umd']
        },
        rollupOptions: {
          external: [],
          output: {
            globals: {}
          }
        },
        outDir: 'dist/embed'
      },
      define: {
        'process.env.NODE_ENV': JSON.stringify('production')
      }
    }
  }

  // Standard build configuration
  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html')
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './'),
        '@/components': resolve(__dirname, './components'),
        '@/styles': resolve(__dirname, './styles')
      }
    }
  }
})