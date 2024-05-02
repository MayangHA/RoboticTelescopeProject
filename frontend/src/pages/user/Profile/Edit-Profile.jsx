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
    Heading
} from '@chakra-ui/react';

import Navbar from '../../../components/User/Navbar';
import { Avatar } from '@chakra-ui/react';
import { Link as RouterLink} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect} from 'react';


function Edit() {

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
        <SimpleGrid columns={{base: 1, lg: 2}}> 
            <Box
                border="1px"
                borderColor={"gray.300"}
                m='5'
                p='5'
            >
                <FormControl pn={'5'}>

                </FormControl>
            </Box>
        </SimpleGrid>
        </>
    )
}
