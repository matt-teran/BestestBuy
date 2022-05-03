const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: ['react-hot-loader/patch', './client/src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'client', 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: './client/dist',
    },
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'client/src/index.html' }],
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new CleanWebpackPlugin(),
    new webpack.WatchIgnorePlugin({ paths: ['client/dist/index.html'] }),
  ],
};

module.exports = config;
