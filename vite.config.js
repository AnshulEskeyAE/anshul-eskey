import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ─────────────────────────────────────────────────────────────────────────────
// Vercel Deployment Configuration
//
// Vercel deploys from the root directory by default. The base option is set
// to '/' to ensure all assets resolve relative to the root domain.
// ─────────────────────────────────────────────────────────────────────────────
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Raise the inline threshold slightly to reduce HTTP round-trips for
    // small SVG icons (default 4 kB → 8 kB)
    assetsInlineLimit: 8192,
    rollupOptions: {
      output: {
        // Deterministic chunk naming for better cache-busting
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
})

