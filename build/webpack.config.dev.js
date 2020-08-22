const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  devServer: {
    hot: true,
    compress: true,
    disableHostCheck: true,
    watchOptions: {
      poll: true,
    },
    historyApiFallback: {
      index: '/',
    },
  },
  resolve: {
    modules: [
      path.resolve(`${__dirname}/../src`),
      path.resolve(`${__dirname}/../node_modules`),
      path.resolve(`${__dirname}/../static`),
    ],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.css?$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: true,
    }),
  ],
  output: {
    path: path.resolve(`${__dirname}/../www`),
    publicPath: '/',
    filename: 'boot.js',
  },
  externals: {},
};
