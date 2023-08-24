// src/main/frontend/src/setProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/button1',
        '/button2',
        '/button3',
        '/button4',
        createProxyMiddleware({
            target: 'https://port-0-spring-eu1k2llldpju8v.sel3.cloudtype.app/insertContent',
            changeOrigin: true,
        })
    );
};