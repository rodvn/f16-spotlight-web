const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const cssnano = require('cssnano');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: path.resolve(__dirname, 'client/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    root: path.resolve(__dirname, 'client'),
    extensions: ['', '.js'],
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss-loader',
          'sass',
        ],
      }
    ],
  },
  postcss: [
    cssnano({
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions'],
      },
      discardComments: {
        removeAll: true,
      },
    }),
  ],
  sassLoader: {
    includePaths: [path.resolve(__dirname, 'client/styles')],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client/index.tmpl.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
  },
};
