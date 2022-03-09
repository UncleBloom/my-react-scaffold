const path = require("path");
const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
const devConfig = {
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "..", "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    proxy: {
      "/api2": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          "/api2": "",
        },
      },
    },
  },
};

module.exports = merge(commonConfig, devConfig);
