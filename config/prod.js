const webpack = require('webpack');


const prod = (config, _path) => {
    config.mode = 'development';
    config.output.path =  _path;

    return config;
};

module.exports = prod;
