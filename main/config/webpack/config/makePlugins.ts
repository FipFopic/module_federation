import HtmlWebpackPlugin from 'html-webpack-plugin'
import { ProgressPlugin, WebpackPluginInstance, container } from 'webpack'
import { WebpackOptions } from '../types/config'
import packageJson from '../../../package.json'

const { ModuleFederationPlugin } = container

export const makePlugins = (options: WebpackOptions): WebpackPluginInstance[] => {
  const { paths } = options

  const progressPlugin = new ProgressPlugin()
  const htmlPlugin = new HtmlWebpackPlugin({
    template: paths.html
  })

  const moduleFederationPlugin = new ModuleFederationPlugin({
    name: 'main',
    remotes: {
      remote: options.paths.remoteApp
    },
    shared: {
      ...packageJson.dependencies,
      react: {
        singleton: true,
        requiredVersion: packageJson.dependencies.react
      },
      'react-dom': {
        singleton: true,
        requiredVersion: packageJson.dependencies['react-dom']
      }
    }
  })

  return [
    moduleFederationPlugin,
    htmlPlugin,
    progressPlugin
  ]
}
