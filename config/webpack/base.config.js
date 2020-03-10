module.exports = {
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
};
