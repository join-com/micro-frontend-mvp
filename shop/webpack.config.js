const webpack = require('webpack')
const path = require('path')

// variables
const isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production'
const sourcePath = path.join(__dirname, './src')
const outPath = path.join(__dirname, './build')

// plugins
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  context: sourcePath,
  entry: {
    // store: './store.ts',
    // cart: './cart/index.ts',
    // button: './button/index.ts',
    index: './index.ts',
  },
  output: {
    path: outPath,
    filename: '[name].js',
    library: 'shop',
    libraryTarget: 'amd',
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // (jsnext:main directs not usually distributable es6 format, but es6 sources)
    mainFields: ['module', 'browser', 'main'],
    alias: {
      modules: path.resolve(__dirname, 'src/modules/'),
    },
  },
  externals: {
    // react: 'react',
    // 'react-dom': 'react-dom',
    // 'styled-components': 'styled',
  },
  module: {
    rules: [
      // .ts, .tsx
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      SC_ATTR: 'data-shop-styled',
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
    }),
    new WebpackCleanupPlugin(),
    new ManifestPlugin(),
    !isProduction && new BundleAnalyzerPlugin(),
  ].filter(Boolean),
  devServer: {
    contentBase: sourcePath,
    // hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    stats: 'minimal',
    clientLogLevel: 'warning',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  // https://webpack.js.org/configuration/devtool/
  devtool: isProduction ? 'hidden-source-map' : 'cheap-module-eval-source-map',
  node: {
    // workaround for webpack-dev-server issue
    // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    fs: 'empty',
    net: 'empty',
  },
}
