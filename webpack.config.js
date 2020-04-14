const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.(png|svg|jpg)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: './index.html',
    }),
  ],
};
