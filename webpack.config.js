const path = require("path");
const webpack = require("webpack");
// css minifier
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "production", //"development"
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
	      test: /\.s[ac]ss$/i,
	      use: [
	        "style-loader",
          "css-loader",
          "sass-loader",
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource'
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "./dist/",
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ]
  }
};
