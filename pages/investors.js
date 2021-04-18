import React, { useState } from 'react';
import { Flex, Container, Box } from "@chakra-ui/react"
import { primaryInvestorContent, secondaryInvestorContent } from './components/content/content';

const Investors = () => {
  const [activeTab, setActiveTab] = useState('Big Banks');
  return (
    <div>
      <Box
				bg='secondary'
				color='#DBF6F8'
			>
				<Container
					h={'50vh'}
					display='flex'
					alignItems={{
						lg: 'center',
						sm: 'flex-start'
					}}
					justifyContent="center"
					flexDirection="column"
				>
						
          <Flex
            position="absolute"
            top="135px"
            width="250px"
            justifyContent="space-between"
          >
            <Box
              cursor="pointer"
              onClick={() => (setActiveTab('Big Banks'))}
              paddingBottom="10px"
              borderBottom={activeTab === 'Big Banks' ? `1px solid #DBF6F8` : ''}
            >
              Big Banks
            </Box>
            <Box
              cursor="pointer"
              paddingBottom="10px"
              onClick={() => (setActiveTab('Small Banks'))}
              borderBottom={activeTab === 'Small Banks' ? `1px solid #DBF6F8` : ''}
            >
              Small Banks
            </Box>
          </Flex>
          {activeTab === 'Big Banks' && (
            <Box
              fontSize="56px"
            >
              Lending done right.
            </Box>
          )}
          {activeTab === 'Small Banks' && (
            <Box fontSize="56px">
              New and Safe Investment Class
            </Box>
          )}
				</Container>
			</Box>
      {activeTab === 'Big Banks' && (
        <Box bg="#EDE9E5">
          <Container
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection={{
              sm: 'column'
            }}
            height="42vh"
            whiteSpace="nowrap"
          >
            <Box
              width={{ lg: "50%", sm: "100%" }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-start"
              // mt={{ lg: "0px", sm: "30px" }}
            >
              <Box fontSize="2.5rem">Social Financing with Commercial Returns</Box>
            </Box>
            <Box
              mt="50px"
              width={{ lg: "50%", sm: "100%" }}
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
              // mt={{ sm: "30px", lg: "0px" }}
            >
              <Box fontSize="2.5rem">Lending through Sharing - First of its kind</Box>
            </Box>
          </Container>
          {primaryInvestorContent.map((content, index) => {
            return (
              <Flex
                py="80px"
                color='black'
                background={index % 2 === 0 ? 'white' : '#EDE9E5'}
                // height={index === 0 || index === 1 ? "calc(50vh - 62.5px)" : "50vh"}
                height="50vh"
              >
                <Container
                  display="flex"
                  flexDirection={{
                    lg: index % 2 === 0 ? 'row': 'row-reverse',
                    sm: 'column'
                  }}
                >
                  <Box
                    w={{ lg: "10%", sm: "0%" }}
                  >

                  </Box>
                  <Box
                    w={{ lg: "40%", sm: "100%" }}
                    margin="auto"
                  >
                    <Box fontSize="2.5rem">{content.heading}</Box>
                    <Box fontSize="2.5rem">{content.headingLine2}</Box>
                    <Box w="300px">{content.desc}</Box>
                  </Box>
                  <Box
                    w={{ lg: "40%", sm: "100%" }}
                  >
                    <img src={content.img}></img>
                  </Box>
                  <Box w="10%"></Box>
                </Container>
              </Flex>
            )
          })}
        </Box>
      )}
      {activeTab === 'Small Banks' && (
        <Box bg="#EDE9E5">
          <Container
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection={{
              sm: 'column'
            }}
            height="42vh"
            whiteSpace="nowrap"
          >
            <Box
              width={{ lg: "50%", sm: "100%" }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-start"
              // mt={{ lg: "0px", sm: "30px" }}
            >
              <Box fontSize="2.5rem">Man and Machine powered Risk Management</Box>
            </Box>
            <Box
              mt="50px"
              width={{ lg: "50%", sm: "100%" }}
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
              // mt={{ sm: "30px", lg: "0px" }}
            >
              <Box fontSize="2.5rem">Lending through Sharing - First of its kind</Box>
            </Box>
          </Container>
          {secondaryInvestorContent.map((content, index) => {
            return (
              <Flex
                py="80px"
                color='black'
                background={index % 2 === 0 ? 'white' : '#EDE9E5'}
                // height={index === 0 || index === 1 ? "calc(50vh - 62.5px)" : "50vh"}
                height="50vh"
              >
                <Container
                  display="flex"
                  flexDirection={{
                    lg: index % 2 === 0 ? 'row': 'row-reverse',
                    sm: 'column'
                  }}
                >
                  <Box
                    w={{ lg: "10%", sm: "0%" }}
                  >

                  </Box>
                  <Box
                    w={{ lg: "40%", sm: "100%" }}
                    margin="auto"
                  >
                    <Box fontSize="2.5rem">{content.heading}</Box>
                    <Box fontSize="2.5rem">{content.headingLine2}</Box>
                    <Box w="300px">{content.desc}</Box>
                  </Box>
                  <Box
                    w={{ lg: "40%", sm: "100%" }}
                  >
                    <img src={content.img}></img>
                  </Box>
                  <Box w="10%"></Box>
                </Container>
              </Flex>
            )
          })}
        </Box>
      )}
    </div>
  );
}

export default Investors;