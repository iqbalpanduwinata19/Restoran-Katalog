const { merge } = require('webpack-merge');
const { GenerateSW } = require('workbox-webpack-plugin');
const common = require('./webpack.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '.',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new GenerateSW({
      swDest: './sw.bundle.js',
      clientsClaim: true,
      skipWaiting: true,
      exclude: [
        /\.map$/,
        /\.LICENSE.txt$/,
      ],
      runtimeCaching: [
        {
          urlPattern: /https:\/\/restaurant-api.dicoding.dev\/list/,
          handler: 'StaleWhileRevalidate',
        },
        {
          urlPattern: /https:\/\/restaurant-api.dicoding.dev\/detail\//,
          handler: 'NetworkFirst',
        },
        {
          urlPattern: /https:\/\/restaurant-api.dicoding.dev\/images\//,
          handler: 'StaleWhileRevalidate',
        },
      ],
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false },
    }),
  ],
});
