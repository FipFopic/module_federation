const path = require('path')
const { ModuleFederationPlugin } = require('webpack').container
const HtmlWebpackPlugin = require('html-webpack-plugin')
const deps = require('./package.json').dependencies

const plugins = [
  new ModuleFederationPlugin({
    name: 'remote',
    filename: 'remoteEntry.js',
    exposes: {
      './App': './src/app/App'
    },
    shared: {
      react: {
        requiredVersion: deps.react,
        singleton: true
      },
      'react-dom': {
        requiredVersion: deps['react-dom'],
        singleton: true,
      }
    }
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public', 'index.html'),
  })
]

module.exports = (env) => ({
  mode: env.mode || 'development',
  entry: './src/index.js',
  plugins,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  }
})
