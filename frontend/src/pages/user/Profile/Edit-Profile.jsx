import React from 'react';
import {
    SimpleGrid,
    Spacer,
    Button,
    Box,
    WrapItem,
    useColorModeValue,
    ChakraProvider,
    theme,
    Stack,
    FormControl,
    FormLabel,
    Input,
    useToast,
    FormHelperText,
    FormErrorMessage,
    Tooltip,
    Hide,
    Heading,
    Center
} from '@chakra-ui/react';

import Navbar from '../../../components/User/Navbar';
import { Avatar } from '@chakra-ui/react';
import { Link as RouterLink} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect} from 'react';


function EditProfileUser() {

    return (
        <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} p={10}>
            <Navbar />
        </Box>

        <Box
            display="flex"
            flexDirection={"column"}
            alignItems={"center"}
            bg="blue.100"
            w="100%"
            padding={'50'}
        >
            <WrapItem>
                <Avatar size="2x1" />
            </WrapItem>
            <Heading> Jon Doe</Heading>
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
                
                <FormControl pb={'5'}>
                    <FormControl>
                        <FormLabel> Nama Lengkap </FormLabel>
                        <Input 
                            style={{ textTransform: 'capitalize' }}
                            name="name"
                            variant='flushed'
                        />
                    </FormControl>
                </FormControl>

                <FormControl pb={'5'}>
                    <FormControl>
                        <FormLabel> Email </FormLabel>
                        <Input 
                            style={{ textTransform: 'capitalize' }}
                            name="name"
                            variant='flushed'
                        />
                    </FormControl>
                </FormControl>


                {/* <Box>
                    <Heading>

                    </Heading>
                    <Box>
                        
                    </Box>

                </Box> */}

            </Box>
        </Center>
        <Box alignItems={'flex-end'} my={"10"} mx={'5'}>
                    <Stack as="flex" direction={'row'} justify={'space-between'}>
                        <Hide below="sm">
                            <Spacer />
                        </Hide>
                        <RouterLink to="/profile">
                            <Button minW="136" variant={'outline'} colorScheme="red">
                                {''}
                                Cancel {''}
                            </Button>
                        </RouterLink>

                        <Tooltip>
                            <Button minW="136" colorScheme="facebook" variant={'solid'} type='submit'>
                                {''}
                                Save {''}
                            </Button>
                        </Tooltip>

                    </Stack>
                </Box>
        </>
    )
}

export default EditProfileUser;