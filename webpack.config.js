//webpack.config.js
var path = require('path');
var webpack = require('webpack');
var marked = require('marked');
const markdownRenderer = new marked.Renderer();

module.exports = {
 entry: './client/index.js',
 output: {
  path: path.join(__dirname, 'client'),
  filename: 'bundle.js'
 },
 module: {
  rules: [{
 test: /.jsx?$/,
 exclude: /node_modules/,
 use: {
 loader: 'babel-loader'
 }
 },

  {
    test: /\.md$/,
    use: [
      {
        loader: 'html-loader'
      },
      {
        loader: 'markdown-loader',
        options: {
          pedantic: true,
          renderer: markdownRenderer
        }
      }
    ]
  },
  {
   test: /\.PNG$/,
   loader: "file-loader"
 },
  {
   test: /\.css$/,
   loader: "style-loader!css-loader"
  }]
 }
}
