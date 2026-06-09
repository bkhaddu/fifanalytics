import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        news: resolve(__dirname, 'news.html'),
        predict: resolve(__dirname, 'predict.html'),
        recaps: resolve(__dirname, 'recaps.html'),
      },
    },
  },
});
