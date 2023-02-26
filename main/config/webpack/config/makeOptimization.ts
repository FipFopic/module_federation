import TerserPlugin from 'terser-webpack-plugin'
import { WebpackOptions } from '../types/config'

export const makeOptimization = (options: WebpackOptions) => ({
  minimize: true,
  minimizer: [
    new TerserPlugin()
  ]
})
