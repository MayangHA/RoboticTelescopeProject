import React from "react";
import {
    flex,
    Button,
    Box,
    WrapItem,
    useColorModeValue,
    ChakraProvider,
    theme,
    Center,
    Spinner,
    SimpleGrid,
    Avatar,
    Tooltip,
    Text,
} from "@chakra-ui/react";
import Profile from "../../../components/User/Profile";
import { Link as RouterLink } from "react-router-dom";
import { FaUserEdit, FaKey } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../../../components/User/Navbar";



const ShowProfile = () => {
    
    return (
        <>

        <Text> Profile </Text>
        {/* <Box bg={useColorModeValue('gray.100', 'gray.900')} p={10}>
            <Navbar />
        </Box>

        
            
        <Box w={'full'} py={'100'}>
            <Center>
                <Spinner />
            </Center>
        </Box> */}

            
        


        </>
    )
}

export default ShowProfile;