const webpack = require("webpack");
const path = require("path");

let config = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "./bundle.js"
    },

    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
      }

}

  module.exports = config;