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
					minHeight={'50vh'}
					display='flex'
					alignItems={{
						lg: 'center',
						sm: 'flex-start'
					}}
					justifyContent="center"
					flexDirection="column"
					px={{
						sm: "25px"
					}}
					py={{ sm: "50px", md: "none" }}
				>
					<Box
						fontSize={{
							md:"56px",
							sm: "40px"
						}}
					>
						Need more time to pay off your debts?
					</Box>
					<Box
						fontSize={{
							md:"56px",
							sm: "40px"
						}}
						mt={{ sm: "40px", md: "0px" }}
					>
						Know who is on your side.
					</Box>
				</Container>
			</Box>
      <Box
				bg="#DBF6F8"
			>
        <Container
					display="flex"
          alignItems={{
						lg: 'center',
						sm: 'flex-start'
					}}
					justifyContent={{ md: "center", sm: "flex-start" }}
					flexDirection={{ sm: "column", md: "row" }}
					px={{
						sm: "25px"
					}}
					py={{ sm: "50px", md: "none" }}
					minHeight="50vh"
					flexWrap="wrap"
        >
          <Box
            width={{ lg: "50%", sm: "100%" }}
            display="flex"
            flexDirection="column"
						// alignItems={{ md: "center", sm: "flex-start" }}
						alignItems="center"
            justifyContent="flex-start"
            minHeight="150px"
						// mt={{ lg: "0px", sm: "30px" }}
          >
            <Box fontSize={{ md: '2.5rem', sm: '40px' }}>Lowest Interest Challenge</Box>
            <Box
							// fontSize={{ md: '1.5rem', sm: '18px' }}
							fontSize="1.5rem"
							px={{ sm:"5px", md: "0px" }}
							mt="8px"
						>
							Check your rate for free.
						</Box>
            <Box
							// fontSize={{ md: '1rem', sm: '18px' }}
							fontSize="1rem"
							px={{ sm:"5px", md: "0px" }}
							mt="8px"
						>
							Get pre-approval without hurting your credit.
						</Box>
          </Box>
          <Box
            minHeight="150px"
            width={{ lg: "50%", sm: "100%" }}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
						// alignItems={{ md: "center", sm: "flex-start"}}
						alignItems="center"
            mt={{ sm: "30px", lg: "0px" }}
          >
            <Box fontSize={{ md: '2.5rem', sm: '40px' }}>Faster... Simpler... Safer.</Box>
            <Box fontSize="1rem" px={{ sm:"5px", md: "0px" }} mt="5px">Apply in less than a minute</Box>
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
