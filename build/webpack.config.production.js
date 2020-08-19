const merge = require('webpack-merge');
const base = require('./webpack.config.base');
const { resolve } = require('path');

const _ = path => resolve(__dirname, path);

module.exports = merge(base, {
  mode: 'production',
  entry: {
    dequester: _('../src/index.ts'),
  },
});
