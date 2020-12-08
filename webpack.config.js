const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const webpack = require('webpack');

const { NODE_ENV } = process.env;

module.exports = {
  entry: './src/index.js',
  mode: NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // https://webpack.js.org/loaders/sass-loader/
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              // https://webpack.js.org/loaders/sass-loader/#additionaldata
              additionalData: '@import "default";',
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'src/theme/')],
              },
            },
          },
        ],
      },
      {
        // https://webpack.js.org/loaders/file-loader/
        test: /\.(png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.jpe?g$/,
        oneOf: [
          {
            resourceQuery: /^\?exif$/,
            use: 'exif-loader',
          },
          {
            resourceQuery: /^\?file$/,
            use: ['file-loader'],
          },
        ],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/',
    hotOnly: true,
  },
  // clean /dist with clean-webpack-plugin
  plugins: [
    NODE_ENV === 'development' && new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
    }),
    new ImageminPlugin({
      plugins: [imageminMozjpeg({ quality: 50 })],
     }),
  ].filter(Boolean),
};
