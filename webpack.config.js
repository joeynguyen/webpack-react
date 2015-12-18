import path from 'path';
import webpack from 'webpack';

module.exports = {
    // Gives you sourcemaps without slowing down rebundling
    devtool: 'eval-source-map',
    entry: [
        // We add an entry to connect to the hot loading middleware from
        // the page
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'app/main.js')
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        // Everything related to Webpack should go through a build path,
        // localhost:3000/build. That makes proxying easier to handle
        publicPath: '/build/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                // include: path.join(__dirname, 'app'),
                exclude: /(node_modules|build)/,
                loader: 'babel',
                query: {
                    // speed up babel-loader by caching
                    // transformations to the filesystem instead
                    // of default OS temporary file directory
                    cacheDirectory: true,
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
            {
                test: /\.css$/,
                // include: path.join(__dirname, 'app'),
                exclude: /(node_modules|build)/,
                // first run the css-loader and then the
                // style-loader, it reads right to left
                loader: 'style!css'
            }
        ]
    }
};
