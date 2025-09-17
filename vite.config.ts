import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 3002,
    host: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  esbuild: {
    target: 'esnext',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true
  }
}); 