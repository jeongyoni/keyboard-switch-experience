// vite.config.js
export default {
  base: '/',
  server: {
    historyApiFallback: true,  // This will handle all route requests and serve the index.html
  },
};
