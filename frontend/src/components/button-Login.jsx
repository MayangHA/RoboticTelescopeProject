import React from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Stack,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Heading,
    Image,
    Box,
    useToast,
    FormHelperText,
    FormErrorMessage
  } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from "react";
import validator from 'validator';

function SignIn () {
    const [loginForm, setloginform] = useState({
        email: '',
        password: '',
    });

    const successToast = useToast(
        {
            status: 'sucess',
            title: 'Sucess Login',
            position: 'top',
            desciption: 'Login Success',
        }
    )

    const errorToast = useToast({
        status: 'error',
        title: 'Error Login',
        position: 'top',
        desciption: 'Login Failed',
        duration: 5000,
        isClosable: true,
    }
    )

    function LogMeIn(event) {
        setTouched(false)
        axios({
            method: 'POST',
            headers: {
                'accept' : 'application/json',
                'content-type' : 'application/json'
            },
            url: 'login',
            data: {
                email: loginForm.email,
                password: loginForm.password,
            },
        })
        .the(respone => {
            const role = response.data.role

            if ((response.data.access_token) !== null && localStorage.getItem("access_token") !== "undifined") {
                successToast({})
                localStorage.setItem('token', response.data.access_token)
                localStorage.setItem('role', role)
                if (role === 'client'){
                    setTimeout(() => window.location.replace('/profile'), 1000)
                } else {
                    setTimeout(() => window.location.replace('/profiles'), 1000)
                }
            }
        })
        .catch(error => {
            if (error.response){
                if (error.response.status === 401) {
                    errorToast({})
                } else {
                    servererrorToast({})
                }
                console.log(error.response);
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        });
    
    setloginform({
        email: '',
        password: '',
    });

    event.preventDefault();
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setloginform(prevState => ({
            ...prevState,
            [name]: value
        }));
        setTouched(true)
    }

    const validEmail = validator.isEmail(loginForm.email) === true;
    const pwError = loginform.password === ''

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen} colorScheme="facebook" variant="link">
                Sign In
            </Button>

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent p={5}>
                    <ModalHeader>
                        <Heading fontSize={'2x1'} color={'blue.500'} >
                            Welcome Back!
                        </Heading>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSumbit={LogMeIn}>
                            <FormControl id="email" pb='3'
                            isInvalid={touched && !validEmail}
                            isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    name="email"
                                    onChange={handleChange}
                                    value={loginForm.email}
                                    placeholder="Email"
                                    />
                                {validEmail ? (
                                    <FormHelperText>

                                    </FormHelperText>
                                ) : (
                                    <FormErrorMessage>
                                        Invalid Email
                                    </FormErrorMessage>
                                )}
                            </FormControl>

                            <FormControl id="password" isInvalid={touched && pwError} isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    name="password"
                                    onChange={handleChange}
                                    value={loginForm.password}
                                    placeholder="Password"
                                    type="password" 
                                />
                                {!pwError ? (
                                    <FormHelperText>

                                    </FormHelperText>
                                ) : (
                                    <FormErrorMessage>
                                        Password is required
                                    </FormErrorMessage>
                                )}
                            </FormControl>

                            <Stack
                                spacing={3}
                                maxW={'md'}
                                pt={5}
                            >
                                <Button type="submit" colorScheme="blue" textAlign={'start'}>
                                    Sign In
                                </Button>
                            </Stack>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
    
}

export default SignIn;
