const path = require("path");

module.exports = {
  context: __dirname,
  entry: ["./js/ClientApp.jsx"],
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    publicPath: "/public/",
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader"
      },
      {
        test: /\.css$/,
        loader: "css-loader"
      },
      {
        test: /\.less$/,
        loader: "style!css!autoprefixer!less"
      },
      {
        test: /\.scss$/,
        loader: "style!css!autoprefixer!sass"
      },
      {
        test: /\.scss$/,
        loader: "style!css"
      }
    ],
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  }
};
