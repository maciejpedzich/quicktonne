import { defineConfig } from 'vite';
import path from 'path';

import eslintPlugin from 'vite-plugin-eslint';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, '/src')
      }
    ]
  },
  plugins: [eslintPlugin(), vue()]
});
