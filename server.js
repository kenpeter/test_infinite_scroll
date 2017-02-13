// const
// webpack
// require, es5
// webpack
const webpack = require('webpack');

// const
// webpack dev server
// require, webpack-dev-server
const WebpackDevServer = require('webpack-dev-server');

// const
// config
// require
// ./webpack.config
const config = require('./webpack.config');

// new, new instance
// web pack dev server
// pass webpack(config)
new WebpackDevServer(webpack(config), {
  // public path
  // config
  // .output
  // .public path
  publicPath: config.output.publicPath,
  
  // hot module replacement true
  hot: true, 
  
  // browser history api fall back
  historyApiFallback: true

// listen 5000
// localhost  
}).listen(5000, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:5000');
});
