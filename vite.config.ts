import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/acdyon-flow-challenge/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
