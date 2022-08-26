const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "/src/index.js",
    output: { path: path.resolve(__dirname, "dist") },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                },
                },
            },
            {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
            },
            { 
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};