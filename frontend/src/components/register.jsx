import React from "react";
import axios from "axios";
import {useState} from "react";
import { register } from "../api/auth";
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

function Register() {

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    function handleChange(event) {
        const {value, name} = event.target
        setForm(prevNote => ({
            ...prevNote,
            [name]: value
        })
        )

    }
    const submitForm = async () => {
        try {
            const data = await register(form);

            return data;
        } catch (e) {
            console.log(e);
        }
    }

    

    const { isOpen, onOpen, onClose } = useDisclosure();


    return (
        <>
        <Button
        onClick={onOpen}
        shadow={"lg"}
        colorScheme="facebook"
        variant={"solid"}
        >
            Daftar Akun
        </Button>
        
        <Modal
            closeOnOverlayClick={false}
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay />
            <ModalContent p={5}>
            <ModalHeader>
                <Heading fontSize={'2x1'} color={'black'}>
                    Buat Akun
                </Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <form>
                    {/* <FormControl isRequired pb={'3'}>
                        <FormLabel id="name">
                            Nama Lengkap
                            <Input 
                                name="name"
                                placeholder=" Nama Lengkap"
                                
                            />
                        </FormLabel>
                    </FormControl> */}

                    <FormControl isRequired pb={'3'}>
                        <FormLabel id>
                            Nama Lengkap
                        </FormLabel>
                        <Input 
                            name="fullName"
                            placeholder=" Nama Lengkap"
                            onChange={handleChange}
                            value={form.fullName}
                        />
                    </FormControl>

                    <FormControl isRequired pb={'3'}>
                        <FormLabel id="email">
                            Email
                        </FormLabel>
                        <Input 
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            value={form.email}
                        />
                    </FormControl>

                    <FormControl isRequired pb={'3'}>
                        <FormLabel id="password">
                            Password
                        </FormLabel>
                        <Input 
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={form.password}
                            type="password"
                        />
                    </FormControl>

                    <Stack
                        spacing={3}
                        w={'full'}
                        maxW={'md'}
                        pt={4}
                    >
                        <Tooltip label='please fill required field correctly' hasArrow placement="top">
                            <Button
                                
                                colorScheme="blue"
                                onClick={submitForm}
                            >
                                Daftar
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

function registMeUp(event) {

}

export default Register;