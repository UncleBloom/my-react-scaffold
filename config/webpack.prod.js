const path = require("path");
const commonConfig = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const prodConfig = {
  mode: "production",
  output: {
    filename: "bundle.[chunkhash].js",
    path: path.join(__dirname, "..", "dist"),
  },
};

module.exports = merge(commonConfig, prodConfig);
