const path = require("path");
const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
const devConfig = {
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "..", "dist"),
  },
};

module.exports = merge(commonConfig, devConfig);
