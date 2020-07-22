const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    optimization: {
        minimize: false
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000
    }
});