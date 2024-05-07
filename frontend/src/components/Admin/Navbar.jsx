import {
    ChakraProvider,
    theme,
    useDisclosure,
    Menu,
    Button,
    Avatar,
    Flex,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Icon,
    Stack,
    IconButton,
    Text,
    Box,
    Spacer,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    WrapItem,
    Center,
    Wrap,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { BellIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ Judul }) => {

    return (
        <>
            <Box
                bg={'blue.700'}
                py={{base: '5'}}
                alignItems={'flex-end'}
                position={"fixed"}
                zIndex={'sticky'}
                w={'full'}
            >
                <Stack as="flex" direction={'row'} marginRight={'5'}>
                    <Spacer />

                    <Text color={'white'} as="b" fontSize={'2x1'}>
                        {Judul}
                    </Text>
                </Stack>
            </Box>

            <Box
                bg={'blue.700'}
                minWidth={'250px'}
                position="fixed"
                zIndex={'sticky'}
                height={'full'}
            >
                <WrapItem pt={'10'}>
                    <Center w={"100%"}>
                        <Avatar size={"2xl"} />
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w="100%">
                        <Text py={5} as={'b'} fontSize={'lg'} color="white">
                            Hello, Admin!
                        </Text>
                    </Center>
                </WrapItem>

                <Box>

                    <RouterLink to={'/profileadmin'}>
                        <WrapItem my={"1"}>
                            <Center w={"100%"}>
                                <Button
                                    py={"6"}
                                    w={"100%"}
                                    bg={"blue.700"}
                                    _hover={{ bg: 'whiteAlpha.500', color: 'white' }}
                                    borderRadius="none"
                                    _active={{
                                        bg: 'white',
                                        color: 'blue.700',
                                    }}
                                    _focus={{ bg: 'white', color: 'blue.700' }}
                                >
                                    Profile
                                </Button>
                            </Center>
                        </WrapItem>
                    </RouterLink>

                    <RouterLink to={'/manageakun'}>
                        <WrapItem my={"1"}>
                            <Center w={"100%"}>
                                <Button
                                    py={"6"}
                                    w={"100%"}
                                    bg={"blue.700"}
                                    _hover={{ bg: 'whiteAlpha.500', color: 'white' }}
                                    borderRadius="none"
                                    _active={{
                                        bg: 'white',
                                        color: 'blue.700',
                                    }}
                                    _focus={{ bg: 'white', color: 'blue.700' }}
                                >
                                    List Pengguna
                                </Button>
                            </Center>
                        </WrapItem>
                    </RouterLink>

                    <RouterLink to={'/managejadwal'}>
                        <WrapItem my={"1"}>
                            <Center w={"100%"}>
                                <Button
                                    py={"6"}
                                    w={"100%"}
                                    bg={"blue.700"}
                                    _hover={{ bg: 'whiteAlpha.500', color: 'white' }}
                                    borderRadius="none"
                                    _active={{
                                        bg: 'white',
                                        color: 'blue.700',
                                    }}
                                    _focus={{ bg: 'white', color: 'blue.700' }}
                                >
                                    List Pendaftar
                                </Button>
                            </Center>
                        </WrapItem>
                    </RouterLink>

                    <WrapItem mt="10">
                        <Center w="100%">
                            <Button
                                _hover={{ bg: 'red.600' }}
                                variant="solid"
                                py="6"
                                w="50%"
                                bg="red.500"
                                textColor="white"
                            >
                                Logout
                            </Button>
                        </Center>
                    </WrapItem>

                    {/* <RouterLink>
                        <WrapItem>
                            <Center>
                                <Button>
                                    
                                </Button>
                            </Center>
                        </WrapItem>
                    </RouterLink> */}

                </Box>


            </Box>

        </>
    )
}

export default Header;