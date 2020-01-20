const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve("app/index.js"),
  output: {
    path: path.resolve("dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  }
};
