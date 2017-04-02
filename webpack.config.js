const path = require('path')

module.exports = {
  entry: './src/App',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js',
  },

  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.scss/, use: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
      { test: /\.svg$/, use: ['babel-loader', {loader: 'react-svg-loader', query: {
        es5: false,
        svgo: {
          pretty: true,
          plugins: [
            { removeStyleElement: true }
          ]
        }
      }}]},
    ]
  },

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },

  devServer: {
    port: 3003,
    contentBase: path.resolve(__dirname, 'src'),
    historyApiFallback: true,
  },

  devtool: 'cheap-module-source-map',
}
