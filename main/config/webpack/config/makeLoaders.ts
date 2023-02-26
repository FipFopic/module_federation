import { RuleSetRule } from 'webpack'
import { WebpackOptions } from '../types/config'

export const makeLoaders = (options: WebpackOptions): RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  return [
    typescriptLoader
  ]
}
