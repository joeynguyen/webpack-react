var path = require('path');
// For conveniance we create variable that holds the directory to bower_components
var bower_dir = __dirname + '/bower_components';
// var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/main.js')
    ],
    // The resolve.alias object takes require expressions
    // (require('react')) as keys and filepath to actual
    // module as values
    // Using bower for vendor assets to speed up rebundling
    // of application files
    resolve: {
        alias: {
            'react': bower_dir + '/react/react.min.js'
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        // There is no reason for WebPack to parse this file
        noParse: [bower_dir + '/react/react.min.js'],
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader'}
        ]
    }
};
