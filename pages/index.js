import { Box, Flex, Container } from '@chakra-ui/react';
import LandingLayout from './components/landingLayout';
import { borrowersContent } from '../content/content';

export default function Home() {
  return (
		<>
			<Box
				bg='mustard'
				color='#EDE9E5'
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
					<Box
						fontSize="56px"
					>
						Need more time to pay off your debts?
					</Box>
					<Box
						fontSize="56px"
					>
						Know who is on your side.
					</Box>
				</Container>
			</Box>
      <Box bg="#EDE9E5">
        <Container
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={{
            lg: 'row',
            sm: 'column'
          }}
          height="50vh"
        >
          <Box
            width={{ lg: "50%", sm: "100%" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            height="150px"
            mt={{ lg: "0px", sm: "30px" }}
          >
            <Box fontSize="2.5rem">Lowest Interest Challenge</Box>
            <Box fontSize="1.5rem">Check your rate for FREE</Box>
            <Box fontSize="1rem">Get pre-approval WITHOUT hurting your credit</Box>
          </Box>
          <Box
            height="150px"
            width={{ lg: "50%", sm: "100%" }}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            mt={{ sm: "30px", lg: "0px" }}
          >
            <Box fontSize="2.5rem">Faster... Simpler... Safer</Box>
            <Box fontSize="1.5rem">Apply in less than a minute</Box>
          </Box>
        </Container>
      </Box>
      {borrowersContent.map((content, index) => {
				return (
					<Flex
						key={index}
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
      <Box height="225px" background='#EDE9E5'>
				<Container
					display="flex"
					justifyContent="center"
					alignItems="center"
					fontSize="2.5rem"
					height="100%"
				>
					We are with you until the end. We Promise.
				</Container>
			</Box>
		</>
  )
}
