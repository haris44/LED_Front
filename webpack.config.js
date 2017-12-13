'use strict'
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'src')
const config = {
    target: 'web',
    entry: APP_DIR + '/App.js',
    cache: true,
    devtool: 'source-map',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    stats: {
        warning: false
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: APP_DIR,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            }],
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: APP_DIR + '/**/*.html', to: '', flatten: true },
            { from: APP_DIR + '/**/*.png', to: 'img', flatten: true },
            { from: APP_DIR + '/**/*.jpg', to: 'img', flatten: true }
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
        //  new BrowserSyncPlugin({
        //      host: 'localhost',
        //      port: 3000,
        //      server: { baseDir: ['www'] }
        //  })
    ]
}
module.exports = config