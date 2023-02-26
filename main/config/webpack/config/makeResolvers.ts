import { ResolveOptions } from 'webpack'
import { WebpackOptions } from '../types/config'

export const makeResolvers = (options: WebpackOptions): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js']
})
