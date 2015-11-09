var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var env = process.env.MIX_ENV || 'dev';
var isProduction = (env === 'prod');

var plugins = [
  new ExtractTextPlugin('app.css'),
  new CopyWebpackPlugin([
      { from: './web/static/assets' },
      { from: './deps/phoenix_html/web/static/js/phoenix_html.js',
        to: 'js/phoenix_html.js' }
    ])
];

// This is necessary to get the sass @import's working
var stylePathResolves = (
    'includePaths[]=' + path.resolve('./') + '&' +
    'includePaths[]=' + path.resolve('./node_modules')
  );

if (isProduction) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
}

module.exports = {
  entry: './web/static/js/index.js',

  output: {
    path: './priv/static/js',
    filename: 'app.js'
  },

  resolve: {
    alias: {
      phoenix: __dirname + '/deps/phoenix/web/static/js/phoenix.js'
    }
  },

  module: {
        loaders: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: {
                presets: ['es2015', 'react']
              }
            },
            {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract(
                'style',
                'css' + '!sass?outputStyle=expanded&' + stylePathResolves
              )
            }

        ]
  },

  plugins: plugins
};