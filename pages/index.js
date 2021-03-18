import { Flex, Container, Box, Button } from "@chakra-ui/react"
import Navbar from './components/navBar';

export default function Home() {
	const pageContent = [
		{
			heading: 'Higher Liquidity,',
			headingLine2: 'Maximum Returns',
			desc: 'With PieFie, you can maximize your returns while maintaining your liquidity.',
			img: '',
			bg: 'white'
		},
		{
			heading: '20-40% Better Returns',
			desc: 'We help you to get 3X the average everywhere',
			img: '',
			bg: 'white'
		},
		{
			heading: 'AI Powered',
			headingLine2: 'Loan Underwriting',
			desc: 'Our topnotch AI tech will filter out the right candidates for you',
			img: '',
			bg: 'primary'
		},
		{
			heading: 'First in the Industry',
			headingLine2: 'Risk Sharing Techniques',
			desc: 'Our Risk sharing technique is one of it`s kind',
			img: '',
			bg: 'primary'
		},
		{
			heading: 'Social Finance',
			headingLine2: 'Lending',
			desc: 'Heard about Lending club? We do that too.',
			img: '',
			bg: 'white'
		}
	]
  return (
		<>
			<Navbar h="75px"/>
			<Box
				bg="darkGreen"
				color="#D0F8DD"
			>
				<Container
					h={'50vh'}
					display='flex'
					alignItems={{lg: 'center', sm: 'flex-start'}}
					fontSize="56px"
					justifyContent="center"
				>
					Know who is on your side.
				</Container>
			</Box>
			{pageContent.map((content, index) => {
				return (
					<Flex
						pt="80px"
						pb="80px"
						color='black'
						background={index % 2 === 0 ? 'white' : '#D0F8DD'}
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
							<Box w="10%"></Box>
							<Box w="40%" margin="auto">
								<Box fontSize="2.5rem">{content.heading}</Box>
								<Box fontSize="2.5rem">{content.headingLine2}</Box>
								<Box w="300px">{content.desc}</Box>
							</Box>
							<Box w="40%">
								<img src={content.img}></img>
							</Box>
							<Box w="10%"></Box>
						</Container>
					</Flex>
				)
			})}
		</>
  )
}
