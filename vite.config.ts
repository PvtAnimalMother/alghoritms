import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts()],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: {
        index: path.resolve(__dirname, './src/index.ts')
      },
      formats: ['es'],
      fileName: (format, name) => `${name}.${format}.js`
    },
    rollupOptions: {
      output: {
        preserveModules: false,
        chunkFileNames: 'chunks/[name].[hash].js'
      }
    },
    target: 'esnext',
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
