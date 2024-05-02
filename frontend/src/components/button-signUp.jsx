import React from "react";
import axios from "axios";
import { useState } from "react";

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

function SignUp (props) {

    const [signupForm, setsignUp] = useState({
        name: '',
        email: '',
        password: '',
    })

    const successToast = useToast({
        position: 'top',
        title: 'Success',
        status: 'success',
        description: "You'll be directed to your profile soon",
        duration: 5000
    })

    const errorToast = useToast(
        {
          status: 'error',
          title: 'Failed create account',
          position: 'top',
          description: "You already have account, please Sign In using this email",
          duration: 5000,
          isClosable: true
        }
      )
    
      const servererrorToast = useToast(
        {
          status: 'error',
          title: 'Login Failed',
          position: 'top',
          description: "Woops, there's error in the server. Please comeback later",
          duration: 5000,
          isClosable: true
        }
      )

      function signMeUp(event) {
        setTouched(false)
        axios({
            method: "POST",
            url: "/signup",
            data: {
                name: signupForm.name,
                email: signupForm.email,
                password: signupForm.password,
            }
        })

        setsignUp(({
            name: '',
            email: '',
            password: '',
        }))

        

        
    }
    const [touched, setTouch] = useState(false)
    function handleChange(event) {
        const { value, name } = event.target
        setsignUp(prevNote => ({
            ...prevNote,
            [name]: value
        })
     )
     setTouch(true)
     }

    function ValidityState(name) {
        return /^[A-Za-z\s]*$/.test(name)
    }
    
    // const validName = valid(signupForm.name) && signnupForm.name.length > 3

    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <ButtonGroup gap={2}>
                <Button
                onClick={onOpen}
                shadow={"lg"}
                colorScheme="facebook"
                variant={"solid"}
                >
                    Sign Up
                </Button>
            </ButtonGroup>

            <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent p={5}>
                <ModalHeader>
                    <Heading fontSize={'2x1'} color={'blue.700'}>
                        Create Account
                    </Heading>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <form>
                        <FormControl isRequired pb={'3'} isInvalid={touched && !validName}>
                            <FormLabel id="name">
                                Fullname
                            </FormLabel>
                            <Input 
                                name="name"
                                onChange={handleChange}
                                placeholder="Fullname"
                                value={signupForm.name}
                            />
                            {/* {validName ? (
                                <FormHelperText>

                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>
                                    Please enter a valid name
                                </FormErrorMessage>
                            )} */}
                        </FormControl>

                        <FormControl isRequired pb={'3'}>
                            <FormLabel id="email">
                                Email
                            </FormLabel>
                            <Input 
                                name="email"
                                onChange={handleChange}
                                placeholder="Email"
                                value={signupForm.email}
                            />
                        </FormControl>

                        <FormControl isRequired pb={'3'}>
                            <FormLabel id="password">
                                Password
                            </FormLabel>
                            <Input 
                                name="password"
                                onChange={handleChange}
                                placeholder="Password"
                                value={signupForm.password}
                            />
                        </FormControl>

                        <Stack 
                            spacing={3} 
                            w={'full'}
                            maxW={'md'}
                            pt={4}>
                                <Tooltip  label='Please fill required field correctly' hasArrow placement="top">
                                    <Button
                                        isDisabled
                                        colorScheme="blue"
                                    >
                                        Sign Up
                                    </Button>
                                </Tooltip>
                        </Stack>

                    </form>
                </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )

}

export default SignUp;