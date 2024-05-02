import React from "react";
import axios from "axios";
import { useState } from "react";
import { Form } from "react-router-dom";

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
    Text,
    Heading,
    Image,
    Box,
    ButtonGroup,
    useToast,
    FormHelperText,
    FormErrorMessage,
    Tooltip
} from "@chakra-ui/react";

function SignIn() {
    const [loginForm, setloginForm] = useState({
        email: '',
        password: '',
    });

    const successToast = useToast({
        position: 'top',
        title: 'Success',
        status: 'success',
        description: "You'll be directed to your profile soon",
        duration: 5000
    });

    const errorToast = useToast({
        status: 'error',
        title: 'Failed login',
        position: 'top',
        description: "You don't have account, please Sign Up",
        duration: 5000,
        isClosable: true
    });

    const servererrorToast = useToast({
        status: 'error',
        title: 'Failed login',
        position: 'top',
        description: "Wrong email or password",
        duration: 5000,
        isClosable: true
    });

    const [touched, setTouched] = useState(false);

    function LogMeIn(event) {
        setTouched(false)
            axios({
                method: "POST",
                headers: {
                    'Acccept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: '/login',
                data: {
                    email: loginForm.email,
                    password: loginForm.password,
                },
            })
            .catch(error => {
                if(error.response) {
                    if (error.response.status === 401) {
                        errorToast({})
                    } else {
                        servererrorToast({})
                    }
                    console.log(error.response)
                    console.log(error.response.data)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            });

            setloginForm({
                email: '',
                password: '',
            });

            event.preventDefault();
    }

    function handleChange(event) {
        const {value, name} = event.target;

        setloginForm(prevNote => ({
            ...prevNote,
            [name]: value
        }));
        setTouched(true);
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen} colorScheme="facebook" variant={'link'}>
                Sign in
            </Button>

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent p={5}>
                    <ModalHeader>
                        <Heading fontSize={'2x1'} color={'blue.700'}>
                            Login
                        </Heading>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl id="email" pb='3'
                            isInvalid = {touched}
                            isRequired
                        >
                            <FormLabel>
                                Email Address
                            </FormLabel>
                            <Input 
                                name="email"
                                onChange={handleChange}
                                value = {loginForm.email}
                                placeholder="Email Address"
                            />
                        </FormControl>

                        <FormControl id="password" isInvalid = {touched} isRequired>
                            <FormLabel>
                                Password
                            </FormLabel>
                            <Input 
                                name="password"
                                onChange={handleChange}
                                value = {loginForm.password}
                                type="password"
                                placeholder="Password"
                            />
                        </FormControl>
                        
                        <Stack
                            spacing={3}
                            maxW={'md'}
                            pt={5}
                        >
                            <Button>
                                Sign In
                            </Button>
                        </Stack>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )

}

export default SignIn;