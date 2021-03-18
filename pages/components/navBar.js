import { Container, Box, Flex } from '@chakra-ui/react';
import React from 'react';

function Navbar({ ...props }) {
  return (
    <Container {...props}>
      <Flex alignItems="center" h={props.h}>
        <Flex width="100%">
          <img 
            src="/HeaderLogo.png"
            height="54px"
            width="150px"
          />
        </Flex>
        <Flex
          display="flex"
          width="auto"
          whiteSpace="nowrap"
          fontSize="1.25rem"
        >
          <Box pl="20px">About Us</Box>
          <Box pl="20px">Lenders</Box>
          <Box pl="20px">Borrowers</Box>
          <Box pl="20px">Partnerships</Box>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Navbar;