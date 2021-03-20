import '../styles/globals.css'
import { ChakraProvider, extendTheme, Container } from "@chakra-ui/react"
import theme from '../styles/theme';
import Navbar from './components/navBar';


const themeHelper = extendTheme({ ...theme })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={themeHelper}>
      <Navbar h="75px"/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
