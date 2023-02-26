
export type BuildMode = 'development' | 'production'

export interface BuildEnvironment {
  mode: BuildMode
  port: number
}

export interface WebpackPaths {
  entry: string
  output: string
  html: string
  remoteApp: string
}

export interface WebpackOptions {
  mode: BuildMode
  isDev: boolean
  port: number
  paths: WebpackPaths
}
