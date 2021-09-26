import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const color = {
  brand: {
    900: "#1a365d"
  }
}

const theme = extendTheme({ color })
function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider >
  )
}
export default App
