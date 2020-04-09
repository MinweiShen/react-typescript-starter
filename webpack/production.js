const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssExtractPlugin = require('extract-css-chunks-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash:8].js',
    publicPath: '/',
  },
  mode: 'production',
  optimization: {
    minimizer: [
      // It's used to minify bundled js files
      // Remove all comments
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
        chunkFilter: (chunk) => {
          // Exclude uglification for the `vendor` chunk
          if (chunk.name === 'vendors') {
            return false;
          }
          return true;
        },
      }),

      // It's used to minify bundled css files
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        // It separates node_modules files & app files,
        // and creates different bundle files for caching purpose
        common: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  plugins: [
    // It's used to remove unwanted files (Ex. moment locale files) from bundle
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    // It's used to extract css to separate files
    new CssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: 'vendors.[contenthash:8].css',
    }),
    // It's used for maintaining cache of each bundled files
    new webpack.HashedModuleIdsPlugin(),
  ],

});
