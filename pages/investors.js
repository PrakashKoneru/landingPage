import React, { useState } from 'react';
import { Flex, Container, Box } from "@chakra-ui/react"
import { primaryInvestorContent, secondaryInvestorContent } from '../content/content';

const Investors = () => {
  const [activeTab, setActiveTab] = useState('Large Institutions');
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
              md: "375px",
              sm: "90%"
            }}
            justifyContent="space-between"
            mx="auto"
            px="25px"
            mt={{ sm: "20px", md: "40px" }}
          >
            <Box
              cursor="pointer"
              onClick={() => (setActiveTab('Large Institutions'))}
              paddingBottom="10px"
              borderBottom={activeTab === 'Large Institutions' ? `1px solid #DBF6F8` : ''}
            >
              Large Institutions
            </Box>
            <Box
              cursor="pointer"
              paddingBottom="10px"
              onClick={() => (setActiveTab('Small Institutions'))}
              borderBottom={activeTab === 'Small Institutions' ? `1px solid #DBF6F8` : ''}
            >
              Small Institutions
            </Box>
          </Flex>
          {activeTab === 'Large Institutions' && (
            <Box
              fontSize={{ md:"56px", sm: "40px" }}
              whiteSpace="nowrap"
            >
              Lending done right
            </Box>
          )}
          {activeTab === 'Small Institutions' && (
            <Box fontSize={{ md:"56px", sm: "40px" }} textAlign="center">
              New and safer asset class
            </Box>
          )}
				</Container>
			</Box>
      {activeTab === 'Large Institutions' && (
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
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              justifyContent="flex-start"
              // mt={{ lg: "0px", sm: "30px" }}
            >
              <Box
                display="flex"
                width="100%"
                justifyContent="center"
                height="225px"
                width="300px"
                margin={{ sm: "0 0 0 -25px", lg: "0 0 0 -48px", md: "0 0 0 -27px" }}
                // marginLeft={{ lg: "-48px", sm: "0px"}}
              >
                <img src="/landingPageIllustrations/manAndMachine.svg" />
              </Box>
              <Box
                fontSize="40px"
              >
                Man-and-Machine powered Lending
              </Box>
              <Box
                fontSize="1.35rem"
              >
                Lend your money to the right people for the right duration
              </Box>
            </Box>
          </Container>
          {primaryInvestorContent.map((content, index) => {
            return (
              <Flex
                key={index}
                py="100px"
                color='black'
                background={index % 2 === 0 ? 'white' : '#DBF6F8'}
                // height={index === 0 || index === 1 ? "calc(50vh - 62.5px)" : "50vh"}
                minHeight={{ lg: "50vh", sm: "50vh", md: "350px"}}
                // minHeight="350px"
                px={{ sm: "15px", lg: "0px" }}
              >
                <Container
                  display="flex"
                  flexDirection={{
                    lg: index % 2 === 0 ? 'row': 'row-reverse',
                    md: 'column-reverse',
                    sm: 'column-reverse'
                  }}
                  alignItems="center"
                >
                  <Box
                    w={{ lg: "10%", md: "0%", sm: "0%" }}
                  >

                  </Box>
                  <Box
                    w={{ lg: "40%", md:"100%", sm: "auto" }}
                    marginX="auto"
                    // margin="auto"
                    mt={{ sm: "20px", md:"20px", lg: "0px"}}
                    alignItems={{sm:"center", md: "center", lg: "center" }}
                    display="inline-block"
                    // flexDirection="column"
                    // justifyContent="center"
                  >
                    <Box
                      fontSize="2.5rem"
                      whiteSpace={{ sm: "nowrap", md: "wrap" }}
                      textAlign={{ md: "center", sm: "center"}}
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
                    w={{ lg: "40%", md: "250px", sm: "250px" }}
                    h="200px"
                    margin="auto"
                  >
                    <Box
                      m={{ sm: "0 0 0 -10px", md: '', lg: 'auto' }}
                      w={{ sm: "100%", md: "250px", lg: "350px"}}
                      height="250px"
                      display="flex"
                      alignItems="center"
                    >
                      <Box mt="-65px">
                        <img src={content.img}></img>
                      </Box>
                    </Box>
                  </Box>
                  <Box w="10%"></Box>
                </Container>
              </Flex>
            )
          })}
        </Box>
      )}
      {activeTab === 'Small Institutions' && (
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
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              justifyContent="flex-start"
              // mt={{ lg: "0px", sm: "30px" }}
            >
              <Box
                display="flex"
                width="100%"
                justifyContent="center"
                height="225px"
                width="275px"
                margin={{ sm: "0 0 0 -25px", lg: "0 0 0 -48px", md: "0 0 0 -27px" }}
                // marginLeft={{ lg: "-48px", sm: "0px"}}
              >
                <img src="/landingPageIllustrations/custom.svg" />
              </Box>
              <Box
                fontSize="40px"
                mt="10px"
              >
                First of its kind
              </Box>
              <Box
                fontSize="1.35rem"
              >
                Customized Loan Portfolios for your Risk Appetite
              </Box>
            </Box>
          </Container>
          {secondaryInvestorContent.map((content, index) => {
            return (
              <Flex
                key={index}
                py="100px"
                color='black'
                background={index % 2 === 0 ? 'white' : '#DBF6F8'}
                // height={index === 0 || index === 1 ? "calc(50vh - 62.5px)" : "50vh"}
                minHeight={{ lg: "50vh", sm: "50vh", md: "350px"}}
                // minHeight="350px"
                px={{ sm: "15px", lg: "0px" }}
              >
                <Container
                  display="flex"
                  flexDirection={{
                    lg: index % 2 === 0 ? 'row': 'row-reverse',
                    md: 'column-reverse',
                    sm: 'column-reverse'
                  }}
                  alignItems="center"
                >
                  <Box
                    w={{ lg: "10%", md: "0%", sm: "0%" }}
                  >

                  </Box>
                  <Box
                    w={{ lg: "40%", md:"100%", sm: "auto" }}
                    marginX="auto"
                    // margin="auto"
                    mt={{ sm: "20px", md:"20px", lg: "0px"}}
                    alignItems={{sm:"center", md: "center", lg: "center" }}
                    display="inline-block"
                    // flexDirection="column"
                    // justifyContent="center"
                  >
                    <Box
                      fontSize="2.5rem"
                      whiteSpace={{ sm: "nowrap", md: "wrap" }}
                      textAlign={{ md: "center", sm: "center"}}
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
                    w={{ lg: "40%", md: "250px", sm: "250px" }}
                    h="200px"
                    margin="auto"
                  >
                    <Box
                      m={{ sm: "0 0 0 -10px", md: '', lg: 'auto' }}
                      // img width is a temp solution to handle overlarge images
                      w={{ sm: "100%", md: "250px", lg: content.imgWidth ? content.imgWidth : "350px"}}
                      height="250px"
                      display="flex"
                      alignItems="center"
                    >
                      <Box mt="-65px">
                        <img src={content.img}></img>
                      </Box>
                    </Box>
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