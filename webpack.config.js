var path = require("path"),
    webpack = require("webpack"),
    LiveReloadPlugin = require("webpack-livereload-plugin");

var dist = "assets/js";

module.exports = {
    entry: "./src/index.js",
    output: {
        path: dist,
        filename: "index.js"
    },
    module: {
        loaders: [
            { test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            { test: /\.css$/, loader: "style!css" },
            { test: /.js?$/, loader: "babel-loader", exclude: /node_modules/, query: { presets: ["es2015", "react"]}},
            { test: /.json?$/, loader: "json" },
            { test: /\.scss$/, loader: "style!css!sass" }
        ]
    },
    resolve: {
        root: [path.join(__dirname, "node_modules"), path.join(__dirname, "src"), path.join(__dirname, "assets")]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/])
    ]
};
