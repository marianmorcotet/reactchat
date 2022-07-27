const HtmlWebPackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
})
module.exports = {
  mode: 'development',
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    proxy: {
      '/room': {
        target: 'http://localhost:3000',
        router: () => 'http://localhost:4001',
        logLevel: 'debug',
      },
    },
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [htmlPlugin],
}
