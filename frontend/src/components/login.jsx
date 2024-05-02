import React from "react";
import { useState } from "react";
import { Form } from "react-router-dom";
import { ChakraProvider} from "@chakra-ui/react";

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

function Login() {

    const [touched, setTouched] = useState(false);
    function handleChange (event) {
        const {value, name} = event.target;

        setloginForm(prevNote => Box({
            ...prevNote,
            [name]: value
        }));
        setTouched(true);
    }

    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <ChakraProvider>
            <Button onClick={onOpen} colorScheme="facebook" variant={'link'}>
                Masuk
            </Button>

            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent p={5}>
                    <ModalHeader>
                        <Heading fontSize={'2x1'} color={'black'}>
                            Masuk
                        </Heading>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl id="email" pb='3'
                            isInvalid={touched}
                            isRequired
                        >
                            <FormLabel>
                                Email
                            </FormLabel>
                            <Input 
                                name="email"
                                placeholder="Masukkan Email"    
                            />
                        </FormControl>

                        <FormControl id="password" isInvalid={touched} isRequired>
                            <FormLabel>
                                Password
                            </FormLabel>
                            <Input 
                                name="password"
                                placeholder="Masukkan Password"
                            />
                        </FormControl>

                        <Stack
                            spacing={3}
                            maxW={'md'}
                            pt={5}
                        >
                            <Button>
                                Masuk
                            </Button>
                        </Stack>

                    </ModalBody>
                </ModalContent>
            </Modal>

        </ChakraProvider>
    )
}

export default Login;