const express = require('express');
const path = require('path');
const next = require('next');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const { createProxyMiddleware } = require("http-proxy-middleware")

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

const app = next({dev});
const handle = app.getRequestHandler();

const apiPaths = {
    '/api': {
        target: 'http://3.34.1.120:3000', 
        pathRewrite: {
            '^/api': '/api'
        },
        changeOrigin: true
    }
}


app.prepare().then(() => {
    const server = express();

    server.use('/', express.static(path.join(__dirname, 'public')));
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(cookieParser('rnbck'));

    server.use(
        expressSession({
            resave: false,
            saveUninitialized: false,
            secret: 'rnbck',
            cookie: {
                httpOnly: true,
                secure: false,		
            },
        }),
    );

    // server.use('/api', createProxyMiddleware(apiPaths['/api']));

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(prod ? process.env.PORT : 8080, () => {
        console.log(`next+express running on port ${process.env.PORT || 8080}`);
    });
});
