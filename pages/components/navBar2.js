import {
  Box,
  Flex,
  HStack,
  Link,
	IconButton,
	useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {Link as NextLink} from 'next';
import { useRouter } from 'next/router'

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
	const { pathname } = useRouter();
	const borderBottom='#19858F'
  return (
    <>
      <Box
				position="sticky"
				top="0"
				left="0"
				right="0"
				zIndex="1000"
				background="white"
				borderBottom="1px solid #BFBFBF"
				color="#495FBF"
			>
        <Flex
					h="9vh"
					alignItems={'center'}
					justifyContent={{
						md: 'space-between',
						sm: 'flex-start'
					}}
					position="relative"
					px={{
						sm: 4,
						md: 12
					}}
				>
          <IconButton
						size={'xs'}
						bg="none"
						color="#495FBF"
            icon={isOpen ? <CloseIcon height="17px" width="17px" /> : <HamburgerIcon height="25px" width="25px"/>}
            aria-label={'Open Menu'}
            display={{ md: !isOpen ? 'none' : 'inherit' }}
						onClick={isOpen ? onClose : onOpen}
						position="absolute"
          />
          <HStack
						spacing={8}
						alignItems={{
							sm: 'center',
							md: 'flex-start'
						}}
						width={{
							sm: "calc(100% - 35px)",
							base: "auto"
						}}
					>
						<Flex
							width="100%"
							justifyContent={{
								sm: 'center',
								md: 'flex-start'
							}}
						>
							<Link
								as={NextLink}
								href='/'
							>
								<img
									cursor='pointer'
									src="/HeaderLogo.png"
									height="54px"
									width="150px"
								/>
							</Link>
						</Flex>
          </HStack>
					<HStack
						spacing={4}
						display={{
							sm: "none",
							md: "block"
						}}
					>
						<Flex
							display="flex"
							width="auto"
							whiteSpace="nowrap"
							fontSize="1.25rem"
							cursor='pointer'
							alignItems="center"
							h="9vh"
							py="1px"
						>
							<Link
								as={NextLink}
								variant="navLink"
								href='/'
								mr="5px"
								bg={pathname === '/' ? 'white' : ''}
								borderRadius="5px"
								boxShadow={pathname === '/' ? '2px 2px 10px rgba(0, 0, 0, 0.5)' : ''}
								// borderBottom={pathname === '/' ? `3px solid ${borderBottom}` : ''}
							>
								Borrowers
							</Link>
							<Link
								href='/investors'
								as={NextLink}
								variant="navLink"
								h="100%"
								bg={pathname === '/investors' ? 'white' : ''}
								boxShadow={pathname === '/investors' ? '2px 2px 10px rgba(0, 0, 0, 0.5)' : ''}
								borderRadius="5px"
								// borderBottom={pathname === '/investors' ? `5px solid ${borderBottom}` : ''}
							>
								Lending Partners
							</Link>
						</Flex>
					</HStack>
        </Flex>

        {isOpen ? (
					<Box
						onClick={(e) => {e.stopPropagation()}}
						position="relative"
						zIndex="10"
						bg="#DBF6F8"
						color="#495FBF"
					>
						<Flex
							display="flex"
							whiteSpace="nowrap"
							cursor='pointer'
							alignItems="center"
							width="100%"
							h="100vh"
							flexDirection="column"
							justifyContent="flex-start"
							fontSize="25px"
						>
							<Link
								style={{
									height: 'auto',
									marginTop: 'calc(50vh - 150px)'
								}}
								as={NextLink}
								key='/'
								href='/'
								variant="navLink"
								borderBottom={pathname === '/' ? `0.5px solid #C3C9EB` : ''}
							>
								Borrowers
							</Link>
							<Link
								style={{
									height: 'auto',
									marginTop: '10px'
								}}
								as={NextLink}
								key='/investors'
								href='/investors'
								variant="navLink"
								h="100%"
								borderBottom={pathname === '/investors' ? `0.5px solid #C3C9EB` : ''}
							>
								Lending Partners
							</Link>
						</Flex>
          </Box>
        ) : null}
      </Box>
    </>
  );
}