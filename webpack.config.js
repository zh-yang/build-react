const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                exclude: [
                    /\.html$/u,
                    /\.(js|jsx)$/u,
                    /\.css$/u,
                    /\.scss$/u,
                    /\.json$/u
                ],
                use: [
                    {
                        loader: "url-loader",
                        query: {
                            limit: 11000,
                            name: "dist/[name].[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    // externals: {
    //     react: "react",
    //     "react-dom": "ReactDOM",
    //     antd: "antd",
    //     "dpl-react":"dplReact",
    // },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}