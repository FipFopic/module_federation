import { EntryObject } from 'webpack'
import { WebpackOptions } from '../types/config'

export const makeEntry = (options: WebpackOptions): EntryObject => {
  return {
    main: options.paths.entry
  }
}
