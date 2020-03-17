const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

const ROOT_PATH = path.resolve(__dirname, '..', '..');
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'build', 'main');

module.exports = webpackMerge(baseConfig, {
    mode: 'development',
    entry: {
        electron: path.resolve(ROOT_PATH, 'src', 'main', 'index.js'),
        preload: path.resolve(ROOT_PATH, 'src', 'main', 'preload.js'),
    },
    target: 'electron-main',
    output: {
        path: OUTPUT_PATH,
        filename: '[name].js'
    },
    node: {
        __dirname: true,
    }
});
