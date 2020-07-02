if (typeof process.env.NODE_ENV === 'undefined') process.env.NODE_ENV = 'production';

const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

let config = {
  mode: process.env.NODE_ENV,
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  context: path.join(__dirname, '/src'),
  // entry: './index.tsx',
  entry: ['@babel/polyfill', './index.tsx'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'source-map-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use: [{ loader: 'url-loader', options: { limit: 100000, name: 'assets/[hash].[ext]' } }],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      }
    ]
  },
};

if (process.env.NODE_ENV === 'development') {
  config.devtool = 'inline-source-map';

  config.devServer = {
    contentBase: path.join(__dirname, 'dist'),
    port: 8030,
    hot: true,
  };
}

module.exports = config;
