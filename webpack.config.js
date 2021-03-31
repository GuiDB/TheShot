const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'js', 'game.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
    ],
  },
};
