const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "/src/index.js",
    output: { path: path.resolve(__dirname, "dist"), filename: "main.js" },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.html",
            inject: "body"
        })
    ],
    devServer: {
        inline:true,
        contectBas:"dist",
        port: 3000,
    },
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
    }
};