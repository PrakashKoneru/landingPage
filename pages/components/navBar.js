import React, { useState } from 'react';
import { Container, Box, Flex, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import {Link as NextLink} from 'next';
// import Link from 'next/link'

function Navbar({ ...props }) {
  const { pathname } = useRouter();
  const borderBottom='#19858F'
  return (
    <Box
      width="100%"
      position="sticky"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      background="white"
      display={{ lg: 'block', sm: "none" }}
    >
      <Container
        as="header"
        {...props}
      >
        <Flex
          alignItems="center"
          h={props.h}
        >
          <Flex width="100%">
            <img
              cursor='pointer'
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
            cursor='pointer'
            alignItems="center"
            h="100%"
          >
            <Link
              as={NextLink}
              variant="navLink"
              href='/'
              borderBottom={pathname === '/' ? `5px solid ${borderBottom}` : ''}
            >
              Borrowers
            </Link>
            <Link
              href='/aboutUs'
              as={NextLink}
              variant="navLink"
              h="100%"
              borderBottom={pathname === '/aboutUs' ? `5px solid ${borderBottom}` : ''}
            >
              About Us
            </Link>
            <Link
              href='/investors'
              as={NextLink}
              variant="navLink"
              h="100%"
              borderBottom={pathname === '/investors' ? `5px solid ${borderBottom}` : ''}
            >
              Lenders
            </Link>
            <Link
              as={NextLink}
              href='/partnerships'
              variant="navLink"
              h="100%"
              borderBottom={pathname === '/partnerships' ? `5px solid ${borderBottom}` : ''}
            >
              Partnerships
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar;