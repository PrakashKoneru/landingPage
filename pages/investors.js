import React, { useState } from 'react';
import { Flex, Container, Box } from "@chakra-ui/react"
import { primaryInvestorContent, secondaryInvestorContent } from '../content/content';

const Investors = () => {
  const [activeTab, setActiveTab] = useState('Big Banks');
  return (
    <div>
      <Box
				bg='secondary'
				color='#DBF6F8'
			>
				<Container
					minHeight={'50vh'}
					display='flex'
					// alignItems={{
					// 	lg: 'center',
					// 	sm: 'flex-start'
          // }}
          alignItems="center"
					justifyContent="center"
          flexDirection="column"
          px={{
						sm: "25px"
					}}
          py={{ sm: "125px", md: "none" }}
				>
						
          <Flex
            position="absolute"
            top="135px"
            width={{
              md: "275px",
              sm: "70%"
            }}
            justifyContent="space-between"
            mx="auto"
            px="25px"
            mt="40px"
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
              fontSize={{ md:"56px", sm: "40px" }}
              whiteSpace="nowrap"
            >
              Lending done right.
            </Box>
          )}
          {activeTab === 'Small Banks' && (
            <Box fontSize={{ md:"56px", sm: "40px" }} textAlign="center">
              New and Safe Investment Class
            </Box>
          )}
				</Container>
			</Box>
      {activeTab === 'Big Banks' && (
        <Box bg="#DBF6F8">
          <Container
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection={{
              sm: 'column',
              lg: "row"
            }}
            minHeight="50vh"
            px={{
              sm: "25px"
            }}
            py={{ sm: "80px", md: "none" }}
            // whiteSpace="nowrap"
          >
            <Box
              width={{ lg: "50%", sm: "100%" }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-start"
              // mt={{ lg: "0px", sm: "30px" }}
            >
              <Box
                display="flex"
                width="100%"
                justifyContent="center"
                height="200px"
                width="250px"
                margin={{ sm: "0 0 0 -25px", lg: "0 0 0 -48px", md: "0 0 0 -27px" }}
                // marginLeft={{ lg: "-48px", sm: "0px"}}
              >
                <img src="/landingPageIllustrations/socialFinanceCommercialReturn.svg" />
              </Box>
              <Box
                fontSize="2.5rem"
                maxWidth={{ lg: '450px', md: "100%" }}
              >
                Social Financing with Commercial Returns
              </Box>
            </Box>
            <Box
              mt={{ sm: "50px", lg: "0px" }}
              width={{ lg: "50%", sm: "100%" }}
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
              // mt={{ sm: "30px", lg: "0px" }}
            >
              <Box
                display="flex"
                width="100%"
                justifyContent="center"
                height="200px"
                width="250px"
                margin={{ sm: "50px 0 0 -25px", lg: "0 0 0 -48px", md: "0 0 0 -27px" }}
                // marginLeft={{ lg: "-48px", sm: "0px"}}
                // pt={{ lg: "20px", md: "0px" }}
              >
                <img src="/landingPageIllustrations/lendingThroughSharing.svg" />
              </Box>
              <Box fontSize="2.5rem" maxWidth={{ lg: '450px', md: "100%" }}>Lending through Sharing - First of its kind</Box>
            </Box>
          </Container>
          {primaryInvestorContent.map((content, index) => {
            return (
              <Flex
                key={index}
                py="80px"
                color='black'
                background={index % 2 === 0 ? 'white' : '#DBF6F8'}
                // height={index === 0 || index === 1 ? "calc(50vh - 62.5px)" : "50vh"}
                minHeight="50vh"
                px={{ sm: "15px", lg: "0px" }}
              >
                <Container
                  display="flex"
                  flexDirection={{
                    lg: index % 2 === 0 ? 'row': 'row-reverse',
                    sm: 'column-reverse'
                  }}
                  alignItems={{ md: "center", sm: "none" }}
                >
                  <Box
                    w={{ lg: "10%", sm: "0%" }}
                  >

                  </Box>
                  {/* <Box
                    w={{ lg: "40%", sm: "87%" }}
                    mt={{ sm: "20px", md:"20px", lg: "0px"}}
                    mx="auto"
                  >
                    <Box fontSize="2.5rem">{content.heading}</Box>
                    <Box fontSize="2.5rem">{content.headingLine2}</Box>
                    <Box w="300px">{content.desc}</Box>
                  </Box> */}
                  <Box
                    mx="auto"
                    w={{ lg: "40%", md:"100%", sm: "87%" }}
                  // margin="auto"
                    mt={{ sm: "20px", md:"20px", lg: "0px"}}
                    alignItems={{sm:"none", md: "center", lg: "center" }}
                    textAlign={{ lg: "none", md: "center" }}
                  >
                    <Box
                      fontSize="2.5rem"
                      whiteSpace={{ sm: "wrap", md: "wrap" }}
                      textAlign={{ md: "center", sm: "center"}}
                      maxWidth="100%"
                    >
                      {content.heading}
                    </Box>
                    <Box
                      fontSize="2.5rem"
                      textAlign={{ md: "center", sm: "center"}}
                    >
                      {content.headingLine2}
                    </Box>
                    <Box
                      textAlign={{ md: "center", sm: "center"}}
                    >
                      {content.desc}
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    width="100%"
                    justifyContent="center"
                    height="200px"
                    width="250px"
                    margin={{ sm: "0 0 0 35px", lg: "0 0 0 -48px", md: "0 0 0 -27px" }}
                    // w={{ lg: "40%", sm: "100%" }}
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
        <Box bg="#DBF6F8">
          <Container
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection={{
              sm: 'column'
            }}
            minHeight="50vh"
            px={{
              sm: "25px"
            }}
            py={{ sm: "50px", md: "none" }}
            // whiteSpace="nowrap"
          >
            <Box
              // width={{ lg: "50%", sm: "100%" }}
              display="flex"
              flexDirection="column"
              // alignItems="center"
              justifyContent="flex-start"
              // mt={{ lg: "0px", sm: "30px" }}
            >
              <Box fontSize="2.5rem">Man and Machine powered Risk Management</Box>
            </Box>
            <Box
              mt="50px"
              // width={{ lg: "50%", sm: "100%" }}
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
                key={index}
                py="80px"
                color='black'
                background={index % 2 === 0 ? 'white' : '#DBF6F8'}
                // height={index === 0 || index === 1 ? "calc(50vh - 62.5px)" : "50vh"}
                height="50vh"
                minHeight="250px"
                px={{ sm: "15px", lg: "0px" }}
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