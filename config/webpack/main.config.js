const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

const ROOT_PATH = path.resolve(__dirname, '..', '..');
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'build', 'main');

module.exports = (environment = {}, args) => webpackMerge(baseConfig(environment, args), ({
    entry: {
        electron: path.resolve(ROOT_PATH, 'src', 'main', 'index.js'),
    },
    target: 'electron-main',
    node: {
        __dirname: !environment.prod,
        __filename: !environment.prod,
    },
    output: {
        path: OUTPUT_PATH,
        filename: '[name].js'
    }
}));
