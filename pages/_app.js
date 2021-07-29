import '../styles/globals.css'
import { ChakraProvider, extendTheme, Container } from "@chakra-ui/react"
import theme from '../styles/theme';
import Navbar from './components/navBar';
import Footer from './components/footer'
import Head from 'next/head'
import Simple from './components/navBar2';


const themeHelper = extendTheme({ ...theme })

function MyApp({ Component, pageProps }) {
  console.log('called landing page');
  return (
    <>
      <Head>
        <title>Paisa</title>
        <link rel="shortcut icon" href="/clockLogo4x.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ChakraProvider theme={themeHelper}>
        <Simple h="75px"/>
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default MyApp;
