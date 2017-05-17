const express = require('express');
const path = require('path');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.dev');

const app = express();
const PORT = process.env.PORT || 8000


const compiler = webpack(webpackConfig);
if (process.env.NODE_ENV === 'dev') {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {color: true}
  }));
}
app.use('/static', express.static('dist'));
app.get('/', (req, res) => {
  if (process.env.NODE_ENV === 'dev') {
    const filename = path.resolve(compiler.outputPath,'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type','text/html');
      res.send(result);
      res.end();
    });
  } else {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
  }
});

app.listen(PORT, () => console.log('App started at 8000'));