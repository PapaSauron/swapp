const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const outputDirectory = 'dist';

module.exports = {
  entry: './app/index.js',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  devServer: {
    open: false,
    contentBase: path.join(__dirname, outputDirectory),
    compress: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};