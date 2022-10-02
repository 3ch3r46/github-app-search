import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { ContextWrapper } from '../libs/state'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <SWRConfig
    value={{
      fetcher: async (url, init) => {
        const res = await fetch(url, init)
        const result = await res.json()
        if (!res.ok) {
          const error = new Error(result.message)
          throw error
        }

        return result
      }
    }}
    >
      <ContextWrapper>
        <Component {...pageProps} />
      </ContextWrapper>
  </SWRConfig>
  )
}

export default MyApp
