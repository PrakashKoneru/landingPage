import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import EmailCollection from './emailCollection'

const Footer = () => {
  return (
    <Box>
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        h="50vh"
				minHeight="250px"
				px={{ sm: "25px", lg: "0px" }}
        py={{ sm: "50px", lg: "0px" }}
      >
        <Box fontSize="2.5rem">
          Want to know more?
        </Box>
        <Box fontSize="1rem">
          <EmailCollection />
        </Box>
      </Container>
    </Box>
  )
}

export default Footer;