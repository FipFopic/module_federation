import { Suspense } from 'react'
import { RemoteApp } from './RemotePage.lazy'

export const RemotePage = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <RemoteApp />
    </Suspense>
  )
}

