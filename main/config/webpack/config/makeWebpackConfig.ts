import { Configuration } from 'webpack'
import { WebpackOptions } from '../types/config'
import { makeEntry } from './makeEntry'
import { makeOptimization } from './makeOptimization'
import { makeOutput } from './makeOutput'
import { makePlugins } from './makePlugins'
import { makeResolvers } from './makeResolvers'
import { makeLoaders } from './makeLoaders'

export const makeWebpackConfig = (options: WebpackOptions): Configuration => ({
  mode: options.mode,
  entry: makeEntry(options),
  plugins: makePlugins(options),
  output: makeOutput(options),
  module: {
    rules: makeLoaders(options)
  },
  resolve: makeResolvers(options),
  optimization: makeOptimization(options)
})
