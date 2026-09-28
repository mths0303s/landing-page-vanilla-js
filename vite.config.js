import { defineConfig } from 'vite';

export default defineConfig({
  base: '/landing-page-vanilla-js/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild',
    sourcemap: false,
    cssMinify: true,
    reportCompressedSize: true
  },
  server: {
    port: 5173,
    open: true
  },
  preview: {
    port: 4173
  }
});
