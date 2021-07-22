import React, { useState } from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import EmailCollection from './emailCollection';
import { useRouter } from 'next/router';

const Footer = () => {
  const { pathname } = useRouter();
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <Box
      bg={pathname === '/investors' ? "#DBF6F8" : 'white'}
    >
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="500px"
				px={{ sm: "25px", lg: "0px" }}
      >
        {formSubmitted ? (
            <Flex
              alignItems="center"
              fontSize="2rem"
              flexDirection="column"
              color="#495FBF"
            >
              <Box
                display="flex"
                width="100%"
                justifyContent="center"
                height="125px"
                width="200px"
                margin={{ sm: "0 0 0 -15px", lg: "0 0 0 -25px", md: "0 0 0 -27px" }}
                // marginLeft={{ lg: "-32px", sm: "0px"}}
              >
                <img src="/landingPageIllustrations/blueTicks.svg" />
              </Box>
              <Box textAlign="center" mt="15px">
                <div>Blue Ticks!</div>
                <div>We will touch base soon!</div>
              </Box>
            </Flex>
          ) : (
            <Flex
              direction="column"
              alignItems="center"
              py="50px"
            >
              <Box
                display="flex"
                width="100%"
                justifyContent="center"
                height="200px"
                width="250px"
                margin={{ sm: "0 0 0 -15px", lg: "0 0 0 -25px", md: "0 0 0 -27px" }}
                // marginLeft={{ lg: "-32px", sm: "0px"}}
              >
                <img src="/landingPageIllustrations/wantToKnowMore.svg" />
              </Box>
              <Box fontSize="2.5rem">
                Want to know more?
              </Box>
              <Box
                fontSize="1rem"
              >
                <EmailCollection setFormSubmitted={setFormSubmitted} />
              </Box>
            </Flex>
          )}
      </Container>
    </Box>
  )
}

export default Footer;