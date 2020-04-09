const path = require('path');
const merge = require('webpack-merge');
const common = require('./common.js');

const merged = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, '../dist'),
    historyApiFallback: true,
    port: 3000,
    disableHostCheck: true,
    watchOptions: {
      poll: true,
    },
    hot: true,
  },
});

module.exports = merged;
