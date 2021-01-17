var path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //清除dist文件

module.exports = {
    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "index.js",
        library: "sTool",
        libraryTarget: "umd"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },

    plugins: [new CleanWebpackPlugin()]
};
