const path = require('path');
const {InjectManifest} = require('workbox-webpack-plugin');

module.exports = {
    mode: "development", 
    entry: {
        index: './src/js/app.js'
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    plugins: [
        new InjectManifest({
            swSrc: './src/js/service-worker.js',
        })
    ]
};
