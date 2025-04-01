import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // 상대 경로로 설정
  build: {
    outDir: 'dist', // 빌드 결과물 디렉토리
    assetsDir: 'assets', // 번들링된 파일이 저장될 디렉토리
  },
  server: {
    historyApiFallback: true, // SPA 라우팅 지원
  },
});