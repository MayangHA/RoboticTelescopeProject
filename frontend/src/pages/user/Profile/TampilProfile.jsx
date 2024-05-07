import React from "react";
import NavbarL from "../../../components/Navbar/Logged-In/NavbarL";
import NavbarNL from "../../../components/Navbar/Non-Login/Navbar-NL";
import {
    Box,
    Center,
    Spinner,
    Text,
    useColorModeValue,
    WrapItem,
    Avatar,
    Heading,
    Flex,
    Tooltip,
    Button,
    Stack,
    Hide,
    Spacer,
} from "@chakra-ui/react";
import Navbar from "../../../components/User/Navbar";
import { Link as RouterLink} from 'react-router-dom';
import { FaUserEdit, FaKey } from "react-icons/fa";
 

const ShowProfile = () => {
    
    return (
        <>

            <Box bg={useColorModeValue('gray.100', 'gray.900')} p={10}>
                <Navbar />
            </Box>

            {/* <Box w='full' py={'100'}>
                <Center>
                    <Spinner />
                </Center>
            </Box> */}

            <Box>
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    bg="blue.100"
                    w={"100%"}
                    padding={'50'}
                >
                    <WrapItem>
                        <Avatar size="2x1" />
                    </WrapItem>

                    {/* Add API name here */}

                    <div>
                        <Heading>John Doe</Heading>
                    </div>

                    <Flex>
                        <RouterLink to = "/editprofile">
                            <Tooltip hasArrow label="Edit Profile" bg={"blue.200"}>
                                <Button bg={"whiteAlpha.500"} size="xs"> 
                                    <FaUserEdit color="black"/>
                                </Button>
                            </Tooltip>
                        </RouterLink>
                    </Flex>
                </Box>

                <Center py={10}>
                    <Box
                        border={"1px"}
                        borderColor={"gray.300"}
                        m={'5'}
                        p={'5'}
                        w={"30%"}
                        bg={"gray.400"}
                    >
                        <Box pb={'5'}>
                            <Heading as="h5" size="sm" paddingBottom={'3'} paddingTop={"2"} >
                                Nama Lengkap
                            </Heading>
                            <Box borderBottom={"1px"} borderColor={"gray.300"} >
                                John Doe
                            </Box>
                        </Box>

                        <Box pb={'5'}>
                            <Heading as="h5" size="sm" paddingBottom={'3'} paddingTop={"2"} >
                                Email
                            </Heading>
                            <Box borderBottom={"1px"} borderColor={"gray.300"}>
                                JohnD@gmail.com
                            </Box>
                        </Box>

                    </Box>
                </Center>
                

            </Box>


        </>
    )
}

export default ShowProfile;