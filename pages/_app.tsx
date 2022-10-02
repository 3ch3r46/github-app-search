import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import { SWRConfig } from 'swr'
import { ContextWrapper } from '../libs/state'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      /* background: hsl(216, 28%, 7%); */
      background-color: rgb(13, 17, 23);
    }
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle/>
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
  </Fragment>
  )
}

export default MyApp
