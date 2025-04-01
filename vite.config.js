// filepath: /Users/yunjeong-yeon/Desktop/jeong-github-blog/GitHub/무제 폴더/keyboard-switch-experience/vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // 소스맵 비활성화
  },
  server: {
    historyApiFallback: true,
    https: false,
    headers: {
      'Content-Security-Policy': "script-src 'self' 'unsafe-eval';",
    },
  },
});