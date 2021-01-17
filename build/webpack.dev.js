const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devConfig = {
    mode: "development",

    devtool: "source-map",

    devServer: {
        contentBase: "./dist",
        port: "8080",
        open: true,
        hot: true
    },

    plugins: [
        // 可以为你生成一个HTML文件
        new HtmlWebpackPlugin({
            title: "simple-bibrary-html"
        })
    ]
};

module.exports = merge(commonConfig, devConfig);

