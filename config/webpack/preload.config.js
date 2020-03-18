const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

const ROOT_PATH = path.resolve(__dirname, '..', '..');
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'build', 'main');

module.exports = (environment = {}, args) => webpackMerge(baseConfig(environment, args), ({
    entry: {
        preload: path.resolve(ROOT_PATH, 'src', 'main', 'preload.js'),
    },
    target: 'electron-preload',
    output: {
        path: OUTPUT_PATH,
        filename: '[name].js'
    },
    node: {
        __dirname: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            __TEST__: JSON.stringify(true),
        }),
    ]
}));
