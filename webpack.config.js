const path = require('path');
const baseConfig = require('./config/base');
const devConfig = require('./config/dev');
const prodConfig = require('./config/prod');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const env = process.env.NODE_ENV;

const _path = __dirname;

let config = baseConfig(_path);

config = prodConfig(config, path.normalize(path.join(_path + '/docs')));

module.exports = config;
