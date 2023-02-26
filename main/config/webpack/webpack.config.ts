import { Configuration } from 'webpack'
import path from 'path'
import { makeWebpackConfig } from './config/makeWebpackConfig'
import { BuildEnvironment, WebpackPaths } from './types/config'

export default (env: BuildEnvironment): Configuration => {
  const MODE = env.mode || 'development'
  const PORT = env.port | 3000
  const isDev = MODE === 'development'

  const SOURCE_FOLDER = path.resolve(__dirname, '..', '..', 'src')
  const PUBLIC_FOLDER = path.resolve(__dirname, '..', '..', 'public')
  const DIST_FOLDER = path.resolve(__dirname, '..', '..', 'dist')

  const paths: WebpackPaths = {
    entry: path.resolve(SOURCE_FOLDER, 'index.tsx'),
    output: DIST_FOLDER,
    html: path.resolve(PUBLIC_FOLDER, 'index.html'),
    remoteApp: 'remote@http://localhost:30001/remoteEntry.js'
  }

  const config = makeWebpackConfig({
    mode: MODE,
    isDev,
    port: PORT,
    paths
  })

  return config
}
