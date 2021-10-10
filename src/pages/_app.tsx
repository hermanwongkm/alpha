// This `_app.tsx` is responsible for rendering ALL of your pages
// nextJs passes 2 things, `component` and `pageProps`
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Provider } from 'urql'
import client from './api/UrqlClient'

const color = {
  brand: {
    900: "#1a365d"
  }
}

const theme = extendTheme({ color })
function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider >
    </Provider>
  )
}
export default App
