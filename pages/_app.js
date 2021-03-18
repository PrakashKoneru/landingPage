import '../styles/globals.css'
import { ChakraProvider, extendTheme, Container } from "@chakra-ui/react"
import theme from '../styles/theme';

const themeHelper = extendTheme({ ...theme })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={themeHelper}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
