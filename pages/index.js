import { Box, Flex, Container, IconButton } from '@chakra-ui/react';
import LandingLayout from './components/landingLayout';
import { borrowersContent } from '../content/content';
import LowInterestChallenge from '../public/landingPageIllustrations/lowInterestChallenge.svg'

export default function Home() {
  return (
		<>
			<Box
				bg='mustard'
				color='#EDE9E5'
			>
				<Container
					minHeight='50vh'
					display='flex'
					alignItems={{
						lg: 'center',
						sm: 'flex-start'
					}}
					justifyContent="center"
					flexDirection="column"
					px={{
						sm: "25px",
						md: "75px",
						lg: "25px"
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
						mt={{ sm: "40px", md: "70px", lg: "0px" }}
					>
						Know who is on your side.
					</Box>
				</Container>
			</Box>
      <Box
				display="flex"
				alignItems="center"
				bg="#DBF6F8"
				height="100%"
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
					py={{ sm: "80px", md: "80px", lg: "none" }}
					minHeight="50vh"
					flexWrap="wrap"
        >
          <Box
						width={{ lg: "50%", sm: "100%" }}
            display="flex"
            flexDirection="column"
						alignItems={{ md: "center", sm: "flex-start" }}
						// alignItems="center"
            justifyContent="flex-start"
            minHeight="150px"
						mt={{ lg: "-25px", sm: "0px" }}
          >
						<Box
							display="flex"
							width="100%"
							justifyContent="center"
							height="200px"
							width="250px"
							margin={{ sm: "0 0 0 39px", lg: "0 0 0 -32px", md: "0 0 0 -27px" }}
							// marginLeft={{ lg: "-32px", sm: "0px"}}
						>
							<img src="/landingPageIllustrations/lowInterestChallenge.svg" />
						</Box>
            <Box
							fontSize={{ md: '2.5rem', sm: '40px' }}
							width={{ sm: "85%", md: "100%", lg: "auto" }}
							marginX="auto"
						>
							Lowest Interest Challenge
						</Box>
            <Box
							// fontSize={{ md: '1.5rem', sm: '18px' }}
							fontSize="1.5rem"
							px={{ sm:"5px", md: "0px" }}
							mt="8px"
							width={{ sm: "85%", md: "100%", lg: "auto" }}
							marginX="auto"
						>
							Check your rate for free.
						</Box>
            <Box
							// fontSize={{ md: '1rem', sm: '18px' }}
							fontSize="1rem"
							px={{ sm:"5px", md: "0px" }}
							mt="8px"
							width={{ sm: "85%", md: "100%", lg: "auto" }}
							marginX="auto"
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
						alignItems={{ md: "center", sm: "flex-start"}}
						// alignItems="center"
						mt={{ lg: "-73px", sm: "110px" }}
          >
						<Box
							display="flex"
							width="100%"
							justifyContent="center"
							height="200px"
							width="250px"
							margin={{ sm: "0 0 0 39px", lg: "0 0 0 -48px", md: "0 0 0 -27px" }}
							// marginLeft={{ lg: "-32px", sm: "0px"}}
							pt={{ md: "20px", sm: "0px"}}
						>
							<img src="/landingPageIllustrations/fasterSimpler.svg" />
						</Box>
            <Box
							fontSize={{ md: '2.5rem', sm: '40px' }}
							width={{ sm: "85%", md: "100%", lg: "auto" }}
							marginX="auto"
						>
							Faster... Simpler... Safer.
						</Box>
            <Box
							fontSize="1rem"
							px={{ sm:"5px", md: "0px" }}
							mt="5px"
							width={{ sm: "85%", md: "100%", lg: "auto" }}
							marginX="auto"
						>
							Apply in less than a minute
						</Box>
          </Box>
        </Container>
      </Box>
      {borrowersContent.map((content, index) => {
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
								alignItems={{sm:"none", md: "center", lg: "center" }}
								display="inline-block"
								// flexDirection="column"
								// justifyContent="center"
              >
								<Box fontSize="2.5rem" whiteSpace={{ sm: "nowrap", md: "wrap" }}>{content.heading}</Box>
								<Box
									fontSize="2.5rem"
								>
									{content.headingLine2}
								</Box>
								<Box>{content.desc}</Box>
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
			<Box
				background='#DBF6F8'
				minHeight="250px"
				px={{ sm: "10px", lg: "0px" }}
				py="80px"
			>
				<Container
					display="flex"
					justifyContent="center"
					alignItems="center"
					fontSize="2.5rem"
					height="100%"
					flexDirection="column"
				>
					<Box
						display="flex"
						width="100%"
						justifyContent="center"
						height="200px"
						width="250px"
						margin={{ sm: "0 0 0 -31px", lg: "0 0 0 -48px", md: "0 0 0 -31px" }}
						// marginLeft={{ lg: "-48px", sm: "0px"}}
						pt={{ md: "20px", sm: "0px"}}
					>
						<img src="/landingPageIllustrations/withYouTillEnd.svg" />
					</Box>
					<Box mt="25px">
						We are with you until the end. We Promise.
					</Box>
				</Container>
			</Box>
		</>
  )
}
