const path = require('path');

module.exports = {
  // The entry point file
  entry: './src/index.js',
  // The location of the build folder
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
};