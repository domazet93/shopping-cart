const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: path.resolve("app/index.js"),
  output: {
    path: path.resolve("dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      filename: "index.html",
      template: path.resolve("web/index.html")
    })
  ]
};
