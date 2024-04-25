import {
    Box,
    ChakraProvider,
    theme,
    Input,
    InputGroup,
    Heading,
    InputLeftElement,
    Stack,
    Text,
    Center,
    Button,
    Select,
    FormControl,
    SimpleGrid,
    Spinner,
    Hide
} from '@chakra-ui/react';
import axios from 'axios';
import {searchIcon} from '@chakra-ui/icons';
import { useState, useEffect } from 'react';

const Home = () => {
    return (
        <ChakraProvider theme={theme}>
            <Box bg="blue.100" pb={'10'}>
                <Heading
                    color={'blue.700'}
                    textAlign="center"
                    pb={8}
                    fontSize={{ base: '24px', md: '30px', lg: '36px' }}
                >
                    Welcome to Leiptca Legal Dictionary!
                </Heading>

                <Text
                    textAlign="center"
                    fontSize={{ base: '16px', md: '18px', lg: '20px' }}
                    px={'5'}
                    color="blue.700"
                >
                    Search more than 10,000 legal words and phrases for clear definitions
                    written in plain language.
                </Text>
            </Box>
        </ChakraProvider>
    );
};

export default Home;