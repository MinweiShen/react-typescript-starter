const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');


module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: path.resolve(__dirname, '../dist/index.html'),
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.tsx', '.ts', '.js'],
    aliasFields: ['browser'],
    alias: {
      '@src': path.resolve(__dirname, '../src/'),
    },
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'tslint-loader'],
    }, {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }],
  },
};
