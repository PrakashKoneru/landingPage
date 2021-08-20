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
						Borrow at ease
					</Box>
					<Box
						fontSize={{
							md:"56px",
							sm: "40px"
						}}
						mt={{ sm: "40px", md: "70px", lg: "0px" }}
					>
						Lower Interest, Simpler Application
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
						lg: 'baseline',
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
						// alignItems={{ md: "center", sm: "flex-start" }}
						alignItems="center"
            justifyContent="flex-start"
            minHeight="150px"
						mt={{ lg: "43px", sm: "0px" }}
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
							<img src="/landingPageIllustrations/youAreNotJustNumber.svg" />
						</Box>
            <Box
							fontSize={{ md: '2.5rem', sm: '40px' }}
							width={{ sm: "85%", md: "100%", lg: "auto" }}
							marginX="auto"
							textAlign={{ md: "center", sm: "left"}}
						>
							You are not just a number to us
						</Box>
            <Box
							// fontSize={{ md: '1.5rem', sm: '18px' }}
							fontSize="1.5rem"
							px={{ sm:"5px", md: "0px" }}
							mt="8px"
							width={{ sm: "85%", md: "100%", lg: "auto" }}
							marginX="auto"
							textAlign={{ md: "center", sm: "left"}}
						>
							We look at more than your credit history
						</Box>
            {/* <Box
							// fontSize={{ md: '1rem', sm: '18px' }}
							fontSize="1rem"
							px={{ sm:"5px", md: "0px" }}
							mt="8px"
							width={{ sm: "85%", md: "100%", lg: "auto" }}
							marginX="auto"
							textAlign={{ md: "center", sm: "left"}}
						>
							Get pre-approval without hurting your credit.
						</Box> */}
          </Box>
          <Box
            minHeight="150px"
            width={{ lg: "50%", sm: "100%" }}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
						// alignItems={{ md: "center", sm: "flex-start"}}
						alignItems="center"
						mt={{ lg: "0px", sm: "110px" }}
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
							<img src="/landingPageIllustrations/lowInterestChallenge.svg" />
						</Box>
            <Box
							fontSize={{ md: '2.5rem', sm: '40px' }}
							width={{ sm: "85%", md: "100%", lg: "auto" }}
							marginX="auto"
							textAlign={{ md: "center", sm: "left"}}
						>
							Lowest interest in the industry.
						</Box>
            <Box
							fontSize="1.5rem"
							px={{ sm:"5px", md: "0px" }}
							mt="8px"
							width={{ sm: "85%", md: "100%", lg: "auto" }}
							marginX="auto"
							textAlign={{ md: "center", sm: "left"}}
						>
							If you get a lower interest elsewhere, we will beat it.
						</Box>
          </Box>
        </Container>
      </Box>
			<Box
				display="flex"
				alignItems="center"
				bg="white"
				height="100%"
			>
        <Container
					display="flex"
          alignItems={{
						lg: 'baseline',
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
						// alignItems={{ md: "center", sm: "flex-start" }}
						alignItems="center"
            justifyContent="flex-start"
            minHeight="150px"
						mt={{ lg: "43px", sm: "0px" }}
          >
						<Box
							display="flex"
							width="100%"
							justifyContent="center"
							height="200px"
							width="250px"
							margin={{ sm: "0 0 0 39px", lg: "0 0 0 -32px", md: "0 0 0 -27px" }}
							marginLeft={{ lg: "30px", sm: "0px"}}
						>
							<img src="/landingPageIllustrations/easySignUp.svg" />
						</Box>
            <Box
							fontSize={{ md: '2.5rem', sm: '40px' }}
							width={{ sm: "85%", md: "100%", lg: "auto" }}
							marginX="auto"
							textAlign={{ md: "center", sm: "left"}}
							mt="5px"
						>
							Easy
						</Box>
            <Box
							// fontSize={{ md: '1.5rem', sm: '18px' }}
							fontSize="1.5rem"
							px={{ sm:"5px", md: "0px" }}
							mt="8px"
							width={{ sm: "85%", md: "100%", lg: "auto" }}
							marginX="auto"
							textAlign={{ md: "center", sm: "left"}}
						>
							Education -> Income/Debt -> Get your Est. Rate.
						</Box>
            {/* <Box
							// fontSize={{ md: '1rem', sm: '18px' }}
							fontSize="1rem"
							px={{ sm:"5px", md: "0px" }}
							mt="8px"
							width={{ sm: "85%", md: "100%", lg: "auto" }}
							marginX="auto"
							textAlign={{ md: "center", sm: "left"}}
						>
							Get pre-approval without hurting your credit.
						</Box> */}
          </Box>
          <Box
            minHeight="150px"
            width={{ lg: "50%", sm: "100%" }}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
						// alignItems={{ md: "center", sm: "flex-start"}}
						alignItems="center"
						mt={{ lg: "0px", sm: "110px" }}
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
							<img src="/landingPageIllustrations/quick.svg" />
						</Box>
            <Box
							fontSize={{ md: '2.5rem', sm: '40px' }}
							width={{ sm: "85%", md: "100%", lg: "auto" }}
							marginX="auto"
							textAlign={{ md: "center", sm: "left"}}
						>
							Quick
						</Box>
            <Box
							fontSize="1.5rem"
							px={{ sm:"5px", md: "0px" }}
							mt="8px"
							width={{ sm: "85%", md: "100%", lg: "auto" }}
							marginX="auto"
							textAlign={{ md: "center", sm: "left"}}
						>
							Liked your interest rate? Signup and apply.
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
						background={index % 2 !== 0 ? 'white' : '#DBF6F8'}
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
					textAlign="center"
					fontSize={{ md: "2.5rem", sm: "2.25rem" }}
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
