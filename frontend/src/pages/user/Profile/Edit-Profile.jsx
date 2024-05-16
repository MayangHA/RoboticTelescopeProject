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
import useAuthStore from '../../../store/auth';
import { updateUser } from '../../../api/users';


function EditProfileUser() {


    const {auth} = useAuthStore();
    const [profile, setProfile] = useState({
        ...auth
    });

    function handleChange(event) {
        const {value, name} = event.target
        setProfile(prev => ({
            ...prev,
            [name]: value
        })
        )

    }

    const submitForm = async () => {
        try {
            const data = await updateUser(auth.userId, profile);

            return data;
        } catch (e) {
            console.log(e);
        }
    }

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
            <Heading> {profile.fullName}</Heading>
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
                            name="fullName"
                            variant='flushed'
                            onChange={handleChange}
                            value={profile.fullName}
                        />
                    </FormControl>
                </FormControl>

                <FormControl pb={'5'}>
                    <FormControl>
                        <FormLabel> Email </FormLabel>
                        <Input 
                            style={{ textTransform: 'capitalize' }}
                            name="email"
                            variant='flushed'
                            onChange={handleChange}
                            value={profile.email}
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
                            <Button minW="136" colorScheme="facebook" variant={'solid'} type='submit' onClick={submitForm}>
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