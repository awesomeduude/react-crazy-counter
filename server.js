var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');


new WebpackDevServer(webpack(config), {
  hot: true,
  inline: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function(error) {
  console.log(error || 'Started WebpackDevServer on port 3000');
});
