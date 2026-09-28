import { defineConfig } from 'vite';

export default defineConfig({
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
