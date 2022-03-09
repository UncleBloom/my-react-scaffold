const path = require("path");
const commonConfig = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prodConfig = {
  mode: "production",
  output: {
    filename: "bundle.[chunkhash].js",
    path: path.join(__dirname, "..", "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "postcss-loader", "css-loader"],
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            exMoudle: false,
            name: "[name]-[hash:8].[ext]",
            outputPath: "images",
          },
        },
      },
    ],
  },
};

module.exports = merge(commonConfig, prodConfig);
