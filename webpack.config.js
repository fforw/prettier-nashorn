
const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const shellJs = require("shelljs");

const PRODUCTION = (process.env.NODE_ENV === "production");

const JS_OUTPUT_DIRECTORY = path.join(__dirname, "dist/");

if (!fs.existsSync(JS_OUTPUT_DIRECTORY))
{
    shellJs.mkdir("-p", JS_OUTPUT_DIRECTORY);
}

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        "prettier": "./index.js",
    },

    devtool: "source-map",

    output: {
        path: JS_OUTPUT_DIRECTORY,
        filename: "[name].js",
        chunkFilename: "[id].js",

        library: "prettier",
        libraryTarget: "var",
    },

    plugins: [
    ],

    module: {
        rules: [
        ]
    }

};
