import React from "react";
import axios from "axios";
import { useState } from 'react';
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
import validator from "validator";
function SignUp(props) {
    // buat backend
    // -------------------------------------------
    const [signupForm, setsignUp] = useState({
      name: "",
      email: "",
      password: ""
    })
    const successToast = useToast(
      {
        status: 'success',
        title: "Account Created",
        position: 'top',
        description: "We've created your account for you, please Sign In first",
        duration: 5000
      }
    )
  
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
      setTouch(false)
      axios({
        method: "POST",
        url: "/signup",
        data: {
          name: signupForm.name,
          email: signupForm.email,
          password: signupForm.password
        }
      })
        .then((response) => {
          successToast({})
          setTimeout(() => window.location.replace("/"), 2000)
        }).catch((error) => {
          if (error.response) {
            if (error.response.status === 401) {
              errorToast({})
            }
            else {
              servererrorToast({})
            }
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
        })
  
      setsignUp(({
        name: "",
        email: "",
        password: ""
      }))
  
      // event.preventDefault()
    }
    const [touched, setTouch] = useState(false)
    function handleChange(event) {
      const { value, name } = event.target
      setsignUp(prevNote => ({
        ...prevNote, [name]: value
      })
      )
      setTouch(true)
    }
    function valid(name) {
      return /^[A-Za-z\s]*$/.test(name)
    }
    const validName = valid(signupForm.name) && signupForm.name.length > 3
    // const validName = validator.isAlpha(signupForm.name) && signupForm.name.length > 3 == true
    const validEmail = validator.isEmail(signupForm.email) == true
  
    const pwError = signupForm.password === '' || signupForm.password.length < 8 == true
    // -----------------------------------------------
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <ButtonGroup gap='2'>
  
          <Button
            onClick={onOpen}
            shadow='lg'
            colorScheme='facebook'
            variant='solid'>
            Sign Up
          </Button>
        </ButtonGroup>
  
  
        <Modal
          closeOnOverlayClick={false}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent
            p={5}>
            <ModalHeader>
              <Heading
                fontSize={'2xl'}
                color={'blue.700'}>
                Create Account
              </Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Box align={'center'}
                p={3}>
                <Image
                  src="logo-leiptca.png" />
              </Box>
              <form>
                <FormControl isRequired pb={'3'} isInvalid={touched && !validName}>
                  <FormLabel id="name">Fullname</FormLabel>
                  <Input
                    name="name"
                    onChange={handleChange}
                    placeholder='Fullname'
                    value={signupForm.name}
                  />
                  {validName ? (
                    <FormHelperText>
  
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage> Please enter a valid name</FormErrorMessage>
                  )}
                </FormControl>
  
                <FormControl id="email" isRequired pb='3' isInvalid={touched && !validEmail}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type={'email'}
                    name="email"
                    onChange={handleChange}
                    value={signupForm.email}
                    placeholder="Email"
                  />
                  {validEmail ? (
                    <FormHelperText>
  
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage> Please enter a valid email</FormErrorMessage>
                  )}
                </FormControl>
  
                <FormControl id="password" isRequired isInvalid={touched && pwError}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    name="password"
                    onChange={handleChange}
                    placeholder='Password'
                    value={signupForm.password}
                    type="password"
                  />
                  {!pwError ? (
                    <FormHelperText>
  
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage> Password must contain at least 8 characters</FormErrorMessage>
                  )}
                </FormControl>
  
  
                <Stack spacing={3}
                  w={'full'}
                  maxW={'md'}
                  pt={4}>
                  {pwError || !validEmail || !validName ?
                    <Tooltip label='Please fill required field correctly' hasArrow placement='top'>
                      <Button
                        isDisabled
                        colorScheme='blue' >
                        Sign Up
                      </Button>
                    </Tooltip>
  
                    :
                    <Button
                      type="submit"
                      colorScheme='blue' 
                      onClick={signMeUp}
                      >
                      Sign Up
                    </Button>
                  }
                </Stack>
              </form>
            </ModalBody>
            </ModalContent>
      </Modal>
    </>
  )
}

export default SignUp; 
  