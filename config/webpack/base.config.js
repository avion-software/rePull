module.exports = ({ prod = true, dev = false } = { }, args) => ({
    mode: prod ? 'production' : 'development',
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js(x?)$/,
            include: /src/,
            use: [{
                loader: 'babel-loader',
            }]
        }],
    },
});
