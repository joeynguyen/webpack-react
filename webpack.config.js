var path = require('path');
// var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    }
};
