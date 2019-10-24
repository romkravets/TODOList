const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const entry = require('./entries.json');

const baseConf = () => {
  let plugins = Object.keys(entry).reduce((acc, name) => {
    acc.push(new HtmlWebpackPlugin({
      title: `${name}`,
      template: `./src/${name}/${name}.html`,
      chunks: [name],
      filename: `./${name}.html`,
    }));

    return acc;
  }, []);

  plugins = plugins.concat([
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new LiveReloadPlugin()
  ]);

  console.log( process.env.NODE_ENV);


  return {
    entry,
    output: {
      filename: '[name].js',
    },
    devtool: 'source-map',

    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /\.js/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          ]
        },
        {
          test: /\.scss/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader', // translates CSS into CommonJS
            'sass-loader'
          ]
        },
        {
          test: /\.css/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader', // translates CSS into CommonJS
            'sass-loader'
          ]
        },
        {

          /**
           * ASSET LOADER
           * Reference: https://github.com/webpack/file-loader
           * Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
           * Rename the file using the asset hash
           * Pass along the updated reference to your code
           * You can add here any file extension you want to get copied to your output
           */
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          loader: 'file-loader?publicPath=./&name=assets/images/[name].[ext]'
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: 'file-loader?publicPath=./&name=assets/fonts/[name].[ext]'
        }
      ]
    },
    plugins,
    optimization: {
      splitChunks: {
        // include all types of chunks
        chunks: 'all'
      }
    }
  };
};

module.exports = baseConf;
