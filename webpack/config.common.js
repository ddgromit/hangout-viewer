var webpack = require('webpack');

module.exports = {
  // Top level file that requires all the other files for the browser.
  entry: {
    "app": "./app",
  },

  output: {
    path: './build',
    filename: 'bundle.[name].js',
    publicPath: '/build/'
  },

  module: {
    loaders: [
      // Babel is a transpiler that supports ES6 and JSX
      { test: /\.js$/, exclude: /(node_modules)|(bootstrap.*\.js)/, loaders: ['babel-loader']},
      { test: /\.css$/, loader: "style-loader!css-loader"},
      { test: /\.less$/, loader: "style-loader!css-loader!autoprefixer!less-loader"},

      // Bootstrap fonts
      { test: /\.woff[2]?(\?v=\d+\.\d+\.\d+)?$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url-loader?limit=10000&minetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file-loader" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url-loader?limit=10000&minetype=image/svg+xml" }
    ]
  },

  plugins: [],

  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
      '.less',
      '.css'
    ]
  },
};
