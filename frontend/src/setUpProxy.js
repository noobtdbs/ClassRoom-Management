const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://classroombackend-ho90.onrender.com/',
      changeOrigin: true,
    })
  );
};
