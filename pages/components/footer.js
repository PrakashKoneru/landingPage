import React, { useState } from 'react';
import { Box, Container, Flex, IconButton } from '@chakra-ui/react';
import EmailCollection from './emailCollection';
import { CheckIcon } from '@chakra-ui/icons';

const Footer = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

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
        {formSubmitted ? (
            <Flex
              alignItems="center"
              fontSize="2.5rem"
              flexDirection="column"
              color="#495FBF"
            >
              <IconButton
                size={'xs'}
                bg="none"
                color="#495FBF"
                icon={<div>
                  <Box>
                    <CheckIcon height="35px" width="35px" />
                  </Box>
                  <Box mt="-26px">
                    <CheckIcon height="35px" width="35px" />
                  </Box>
                </div>}
                aria-label={'Blue Ticks'}
              />
              <Box textAlign="center" mt="15px">
                <div>Blue Ticks!</div>
                <div>We will touch base soon!</div>
              </Box>
            </Flex>
          ) : (
            <>
              <Box fontSize="2.5rem">
                Want to know more?
              </Box>
              <Box
                fontSize="1rem"
              >
                <EmailCollection setFormSubmitted={setFormSubmitted} />
              </Box>
            </>
          )}
      </Container>
    </Box>
  )
}

export default Footer;