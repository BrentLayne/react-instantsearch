// this is the webpack config when running `yarn docs:build`

import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpackConfig from './webpack.config.babel';

const {
  optimize: { UglifyJsPlugin },
} = webpack;

export default {
  ...webpackConfig,
  devtool: 'source-map',
  output: {
    ...webpackConfig.output,
    filename: '[name]-build.js', // hash is made with `plugins/rev-assets.js`
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
    }),
    ...webpackConfig.plugins,
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      generateStatsFile: true,
      logLevel: 'error',
    }),
  ],
};
