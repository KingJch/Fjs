
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.umd.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'fjs.js',
    library: 'Fjs',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.js/, loader: 'babel', exclude: /node_modules/ }
    ]
  }
}