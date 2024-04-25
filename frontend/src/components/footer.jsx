import React from "react";
import {
    Box,
    Text,
    Container,
    Stack,
    ChakraProvider,
    theme,
    Heading,
    IconButton,
    Center,
    Link,
    calc
} from "@chakra-ui/react";
import {
    FaInstagram,
    FaLinkedin,
    FaWhatsapp
} from 'react-icons/fa';
import { HiMail } from "react-icons/hi";
import ReactWhatsapp from 'react-whatsapp';

const Footer = () => {
    return (
        <ChakraProvider theme={theme}>
            <Box
                bg={'blue.700'}
                as='footer'
                py={{ base: '10' }}
                px={{ base: '5', lg:'10' }}
            >
                {/* <Container
                    as={Stack}
                    maxW={'6xl'}
                    // py={4}
                    justify="space-between"
                    direction="row"
                    align="center"
                > */}
                <Stack direction={{ base: 'column', md: 'row', lg: 'row' }} justify={{ lg: 'space-between' }} justifyItems={'center'} spacing='10'>
                    <Center>

                    <Box>
                        <Heading textAlign={{ base :'center', md:'left', lg:'left' }}
                            color={'white'}>
                            Leiptca
                        </Heading>
                        <Text
                            color={'white'}>
                            Legal & Intellectual Property Translator Association
                        </Text>
                    </Box>
                    </Center>

                    <Center>
                    <Text
                        color={'white'}>
                        ©2022 LEIPTCA. All rights reserved
                    </Text>

                    </Center>
                    <Center>

                    <Stack direction={'row'} justify={{ base: 'space-around' }} w='full' spacing={{ md:'10',lg: 10 }}>
                        <Box>
                            <Link href='https://www.linkedin.com/company/leiptcaindonesia/?originalSubdomain=id'
                                isExternal>
                                <IconButton
                                    shadow={'dark-lg'}
                                    size={'lg'}
                                    rounded='full'>
                                    <FaLinkedin />
                                </IconButton>
                            </Link>
                        </Box>
                        <Box>
                            <ReactWhatsapp
                                number="+62 878-8575-5359"
                            >
                                <IconButton
                                    shadow={'dark-lg'}
                                    size={'lg'}
                                    rounded='full'>
                                    <FaWhatsapp />
                                </IconButton>
                            </ReactWhatsapp>

                        </Box>


                        <Link
                            onClick={() => window.location = 'mailto:info@leiptca.com'}
                        >
                            <IconButton
                                shadow={'dark-lg'}
                                size={'lg'}
                                rounded='full'>
                                <HiMail />
                            </IconButton>
                        </Link>

                        <Link href='https://www.instagram.com/leiptca/?hl=en'
                            isExternal>
                            <IconButton
                                shadow={'dark-lg'}
                                size={'lg'}
                                rounded='full'>
                                <FaInstagram />
                            </IconButton>
                        </Link>

                    </Stack>
                    </Center>
                </Stack>
                {/* </Container> */}
            </Box>
        </ChakraProvider>
    )
}
export default Footer;