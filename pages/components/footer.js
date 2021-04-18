import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import EmailCollection from './emailCollection'

const Footer = () => {
  return (
    <Box height="250px">
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
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