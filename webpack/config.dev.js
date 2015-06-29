var config = require('./config.common');
var webpack = require('webpack');

config.devServer = {
  noInfo: true,
  inline: false,
  port: 3001
};

config.devtool = 'source-map';

module.exports = config;
