import { RouteProps } from 'react-router-dom'
import { MainPage } from '../../../pages/MainPage'
import { RemotePage } from '../../../pages/RemotePage'

export const enum AppRoutes {
  MAIN = 'main',
  REMOTE = 'remote'
}

export const RoutesPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.REMOTE]: '/remote'
}

export const routesConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPaths.main,
    element: <MainPage />
  },
  [AppRoutes.REMOTE]: {
    path: RoutesPaths.remote,
    element: <RemotePage />
  }
}
