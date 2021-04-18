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
		</>
	)
};

export default LandingLayout;
			
			