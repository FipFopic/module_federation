import { WebpackOptions } from '../types/config'

export const makeOutput = (options: WebpackOptions) => ({
  path: options.paths.output,
  filename: '[name].[contenthash].js',
  clean: true
})
