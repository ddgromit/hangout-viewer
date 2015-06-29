var config = require('./config.common');
var webpack = require('webpack');

config.devServer = {
  contentBase: './dev',
  noInfo: true,
  inline: true,
  port: 3001
};

config.devtool = 'source-map';

module.exports = config;
