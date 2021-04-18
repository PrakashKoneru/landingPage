import React, { useState } from 'react';
import { Flex, Container, Box } from "@chakra-ui/react"

const LandingLayout = ({
	pageContent,
	pageContent2,
	pageHeroText,
	pageHeroColor,
	pageHeroBg,
	pageContentBg
}) => {
	const [activeTab, setActiveTab] = useState(pageContent);
	return (
		<>
			<Box
				bg={pageHeroBg}
				color={pageHeroColor}
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
					{
						pageContent2 && (
							<Flex
								position="absolute"
								top="135px"
								width="250px"
								justifyContent="space-between"
							>
								<Box
									cursor="pointer"
									onClick={() => (setActiveTab(pageContent))}
									paddingBottom="10px"
									borderBottom={activeTab === pageContent ? `1px solid ${pageHeroColor}` : ''}
								>
									Big Banks
								</Box>
								<Box
									cursor="pointer"
									paddingBottom="10px"
									onClick={() => (setActiveTab(pageContent2))}
									borderBottom={activeTab === pageContent2 ? `1px solid ${pageHeroColor}` : ''}
								>
									Small Banks
								</Box>
							</Flex>
						)
					}
					{pageHeroText.map((each, index) => {
						return (<Box
							fontSize="56px"
							key={index}
						>
							{each}
						</Box>)
					})}
				</Container>
			</Box>
			{/* {activeTab.map((content, index) => {
				return (
					<Flex
						pt="80px"
						pb="80px"
						color='black'
						background={index % 2 === 0 ? 'white' : pageContentBg}
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
			})} */}
		</>
	)
};

export default LandingLayout;
			
			