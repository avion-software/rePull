const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

const ROOT_PATH = path.resolve(__dirname, '..', '..');
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'build', 'renderer');

module.exports = webpackMerge(baseConfig, {
    mode: 'development',
    entry: path.resolve(ROOT_PATH, 'src', 'renderer', 'index.js'),
    target: 'electron-renderer',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    externals: {
        'electron': 'electron',
        'uuid/v4': 'uuid.v4',
    },
    output: {
        path: OUTPUT_PATH,
        filename: 'react.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(ROOT_PATH, 'src', 'renderer', 'index.html'),
        }),
    ]
});
