var path = require("path"),
    webpack = require("webpack");

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
            { test: /\.js$/, loader: "babel" },
            { test: /\.less$/, loader: "style!css!less" }
        ]
    },
    resolve: {
        root: [path.join(__dirname, "node_modules"), path.join(__dirname, "src"), path.join(__dirname, "assets")]
    }
};
