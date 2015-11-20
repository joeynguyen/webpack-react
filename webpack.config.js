var path = require('path');
// var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    // Gives you sourcemaps without slowing down rebundling
    devtool: 'eval-source-map',
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|build)/,
            loader: 'babel',
            query: {
                // speed up babel-loader by caching
                // transformations to the filesystem instead
                // of default OS temporary file directory
                cacheDirectory: true,
                presets: ['react', 'es2015']
            }
        }]
    }
};
