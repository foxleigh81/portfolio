const path = require('path');
module.exports = {
  module: {
    rules: [{
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        exclude: [
            /node_modules\//
          ]
      },
      {
        test: /\.css/,
        loaders: ["style-loader", "css-loader"],
        exclude: [
            /node_modules\//
          ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: [
          /node_modules\//
        ]
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
        },
        exclude: [
            /node_modules\//
          ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        loader: "file-loader",
        exclude: [
            /node_modules\//
          ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};