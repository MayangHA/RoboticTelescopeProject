import React from "react";
import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { ChakraProvider, Select } from "@chakra-ui/react";
import { login } from "../api/auth";
import { USER_ROLE, USER_ROLES } from "../utils/constant";

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
  Tooltip,
} from "@chakra-ui/react";

function Login() {
  const navigation = useNavigate();
  const [loginForm, setloginForm] = useState({
    email: "",
    password: "",
    role: USER_ROLE.USER,
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setloginForm((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  const submitForm = async () => {
    try {
      const data = await login(loginForm);

      switch (loginForm.role) {
        case USER_ROLE.ADMIN:
          navigation("/profileadmin", {
            replace: true,
          });
          break;

        case USER_ROLE.USER:
          navigation("/homelogin", {
            replace: true,
          });
          break;

        default:
          break;
      }

      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Button onClick={onOpen} colorScheme="facebook" variant={"link"}>
        Masuk
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
            <Heading fontSize={"2x1"} color={"black"}>
              Masuk
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl id="email" pb="3" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                placeholder="Masukkan Email"
                onChange={handleChange}
                value={loginForm.email}
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                placeholder="Masukkan Password"
                onChange={handleChange}
                value={loginForm.password}
                type="password"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Login Sebagai</FormLabel>
              <Select
                name="role"
                onChange={handleChange}
                value={loginForm.role}
              >
                {USER_ROLES.map(({ value, title }, index) => (
                  <option value={value} key={index}>
                    {title}
                  </option>
                ))}
              </Select>
            </FormControl>

            <Stack spacing={3} maxW={"md"} pt={5}>
              <Button onClick={submitForm}>Masuk</Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default Login;
