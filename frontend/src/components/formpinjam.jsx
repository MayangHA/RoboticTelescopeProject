import React from "react";
import { Form, NavLink } from "react-router-dom";
import {
  Flex,
  Box,
  Spacer,
  Heading,
  ButtonGroup,
  Button,
  Center,
  Square,
  Text,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Tooltip,
  ChakraProvider,
} from "@chakra-ui/react";
import {
  OBSERVATION_OBJECT,
  OCCUPATION,
  TELESCOPE_TYPE,
} from "../utils/constant";
import { createBorrowing } from "../api/borrowings";
import { uploadFile } from "../api/files";
import { useState } from "react";
import useAuthStore from "../store/auth";

const FormPinjam = () => {
  const { auth } = useAuthStore();
  const [files, setFiles] = useState({
    introductory: null,
    proposal: null,
  });
  const [borrowingForm, setborrowingForm] = useState({
    name: "",
    email: "",
    occupation: "",
    nimNip: "",
    rightAscescion: "",
    declination: "",
    magnitude: "",
    observationObject: "",
    objectType: "",
    telescopeType: "",
    proposalUrl: "",
    introductoryUrl: "",
    borrowingTime: "",
    borrowingTimeUntil: "",
  });

  function handleChange(event) {
    const { value, name, files } = event.target;

    if (name === "proposalUrl" || name === "introductoryUrl") {
      let newValue = null;

      if (files.length) {
        newValue = files[0];
      }

      if (name === "proposalUrl") {
        setFiles((prev) => ({
          ...prev,
          proposal: newValue,
        }));
      }

      if (name === "introductoryUrl") {
        setFiles((prev) => ({
          ...prev,
          introductory: newValue,
        }));
      }
    }

    setborrowingForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const submitForm = async () => {
    try {
      let { url: proposalUrl } = await uploadFile(files.proposal);
      let { url: introductoryUrl } = await uploadFile(files.introductory);

      proposalUrl = `${import.meta.env.VITE_API_BASE_URL}${proposalUrl}`;
      introductoryUrl = `${import.meta.env.VITE_API_BASE_URL}${introductoryUrl}`;

      const data = await createBorrowing({
        ...borrowingForm,
        userId: auth.userId,
        proposalUrl,
        introductoryUrl,
      });

      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ChakraProvider>
      <Center p={5}>
        <Box
          bg={"grey"}
          w={"50%"}
          alignItems={"center"}
          alignContent={"center"}
          textAlign={"center"}
          height={"3xs"}
          rounded="md"
        >
          <Heading>Peminjaman Teleskop</Heading>
        </Box>
      </Center>

      <Center p={5}>
        <Box bg={"grey"} w={"50%"} h={"150px"} rounded={"md"}>
          <Form>
            <FormControl isRequired pb={"5"} p={"8"}>
              <FormLabel>Nama Peminjam</FormLabel>
              <Box pb={"5"}>
                <Input
                  w={"50%"}
                  variant={"flushed"}
                  color="black"
                  name="name"
                  placeholder="Masukkan Nama Peminjam"
                  _placeholder={{ color: "inherit" }}
                  onChange={handleChange}
                  value={borrowingForm.name}
                />
              </Box>
            </FormControl>
          </Form>
        </Box>
      </Center>

      <Center p={5}>
        <Box bg={"grey"} w={"50%"} h={"150px"} rounded={"md"}>
          <Form>
            <FormControl isRequired pb={"5"} p={"8"}>
              <FormLabel>Email</FormLabel>
              <Box pb={"5"}>
                <Input
                  w={"50%"}
                  variant={"flushed"}
                  color="black"
                  name="email"
                  placeholder="Masukkan email"
                  _placeholder={{ color: "inherit" }}
                  onChange={handleChange}
                  value={borrowingForm.email}
                />
              </Box>
            </FormControl>
          </Form>
        </Box>
      </Center>

      <Center p={5}>
        <Box bg={"grey"} w={"50%"} h={"150px"} rounded={"md"}>
          <Form>
            <FormControl isRequired pb={"5"} p={"8"}>
              <FormLabel>NIM/NIP</FormLabel>
              <Box pb={"5"}>
                <Input
                  w={"50%"}
                  variant={"flushed"}
                  color="black"
                  name="nimNip"
                  placeholder="Masukkan NIM/NIP"
                  _placeholder={{ color: "inherit" }}
                  onChange={handleChange}
                  value={borrowingForm.nimNip}
                />
              </Box>
            </FormControl>
          </Form>
        </Box>
      </Center>

      <Center p={5}>
        <Box bg={"grey"} w={"50%"} h={"150px"} rounded={"md"}>
          <Form>
            <FormControl isRequired pb={"5"} p={"8"}>
              <FormLabel>Status/Pekerjaan</FormLabel>
              <Box pb={"5"}>
                <Select
                  name="occupation"
                  w={"50%"}
                  placeholder="Pilih Status/Pekerjaan"
                  onChange={handleChange}
                  value={borrowingForm.occupation}
                >
                  {OCCUPATION.map(({ value, title }, index) => (
                    <option value={value} key={index}>
                      {title}
                    </option>
                  ))}
                </Select>
              </Box>
            </FormControl>
          </Form>
        </Box>
      </Center>

      <Center p={5}>
        <Box bg={"grey"} w={"50%"} h={"150px"} rounded={"md"}>
          <Form>
            <FormControl isRequired pb={"5"} p={"8"}>
              <FormLabel>Objek Penelitian</FormLabel>
              <Box pb={"5"}>
                <Select
                  name="observationObject"
                  w={"50%"}
                  placeholder="Pilih Objek Penelitian"
                  onChange={handleChange}
                  value={borrowingForm.observationObject}
                >
                  {OBSERVATION_OBJECT.map(({ value, title }, index) => (
                    <option value={value} key={index}>
                      {title}
                    </option>
                  ))}
                </Select>
              </Box>
            </FormControl>
          </Form>
        </Box>
      </Center>

      <Center p={5}>
        <Box bg={"grey"} w={"50%"} h={"150px"} rounded={"md"}>
          <Form>
            <FormControl isRequired pb={"5"} p={"8"}>
              <FormLabel>Asensio Rekta / Right Ascension</FormLabel>
              <Box pb={"5"}>
                <Input
                  w={"50%"}
                  type="number"
                  variant={"flushed"}
                  color="black"
                  name="rightAscescion"
                  placeholder="Masukkan Asensio Rekta / Right Ascension"
                  _placeholder={{ color: "inherit" }}
                  onChange={handleChange}
                  value={borrowingForm.rightAscescion}
                />
              </Box>
            </FormControl>
          </Form>
        </Box>
      </Center>

      <Center p={5}>
        <Box bg={"grey"} w={"50%"} h={"150px"} rounded={"md"}>
          <Form>
            <FormControl isRequired pb={"5"} p={"8"}>
              <FormLabel>Deklinasi / Declination</FormLabel>
              <Box pb={"5"}>
                <Input
                  w={"50%"}
                  variant={"flushed"}
                  color="black"
                  name="declination"
                  placeholder="Masukkan Deklinasi / Declination"
                  _placeholder={{ color: "inherit" }}
                  onChange={handleChange}
                  value={borrowingForm.declination}
                  type="number"
                />
              </Box>
            </FormControl>
          </Form>
        </Box>
      </Center>

      <Center p={5}>
        <Box bg={"grey"} w={"50%"} h={"150px"} rounded={"md"}>
          <Form>
            <FormControl isRequired pb={"5"} p={"8"}>
              <FormLabel>Jenis Objek Pengamatan</FormLabel>
              <Box pb={"5"}>
                <Input
                  w={"50%"}
                  variant={"flushed"}
                  color="black"
                  name="objectType"
                  placeholder="Masukkan Jenis Objek Pengamatan"
                  _placeholder={{ color: "inherit" }}
                  onChange={handleChange}
                  value={borrowingForm.objectType}
                />
              </Box>
            </FormControl>
          </Form>
        </Box>
      </Center>

      <Center p={5}>
        <Box bg={"grey"} w={"50%"} h={"150px"} rounded={"md"}>
          <Form>
            <FormControl isRequired pb={"5"} p={"8"}>
              <FormLabel>Magnitude</FormLabel>
              <Box pb={"5"}>
                <Input
                  w={"50%"}
                  variant={"flushed"}
                  color="black"
                  name="magnitude"
                  placeholder="Masukkan Magnitude"
                  _placeholder={{ color: "inherit" }}
                  onChange={handleChange}
                  value={borrowingForm.magnitude}
                  type="number"
                />
              </Box>
            </FormControl>
          </Form>
        </Box>
      </Center>

      <Center p={5}>
        <Box bg={"grey"} w={"50%"} h={"150px"} rounded={"md"}>
          <Form>
            <FormControl isRequired pb={"5"} p={"8"}>
              <FormLabel>Teleskop / Telescope</FormLabel>
              <Box pb={"5"}>
                <Select
                  name="telescopeType"
                  w={"50%"}
                  placeholder="Pilih  Teleskop / Telescope"
                  onChange={handleChange}
                  value={borrowingForm.telescopeType}
                >
                  {TELESCOPE_TYPE.map(({ value, title }, index) => (
                    <option value={value} key={index}>
                      {title}
                    </option>
                  ))}
                </Select>
              </Box>
            </FormControl>
          </Form>
        </Box>
      </Center>

      <Center p={5}>
        <Box bg={"grey"} w={"50%"} h={"150px"} rounded={"md"}>
          <Form>
            <FormControl isRequired pb={"5"} p={"8"}>
              <FormLabel>Upload File Proposal</FormLabel>
              <Box pb={"5"}>
                <Input
                  pt={"5px"}
                  w={"50%"}
                  type="file"
                  name="proposalUrl"
                  accept={"application/pdf,application/doc,application/docx"}
                  onChange={handleChange}
                  value={borrowingForm.proposalUrl}
                />
              </Box>
            </FormControl>
          </Form>
        </Box>
      </Center>

      <Center p={5}>
        <Box bg={"grey"} w={"50%"} h={"150px"} rounded={"md"}>
          <Form>
            <FormControl isRequired pb={"5"} p={"8"}>
              <FormLabel>Upload Surat Pengantar</FormLabel>
              <Box pb={"5"}>
                <Input
                  pt={"5px"}
                  w={"50%"}
                  type="file"
                  name="introductoryUrl"
                  accept={"application/pdf,application/doc,application/docx"}
                  onChange={handleChange}
                  value={borrowingForm.introductoryUrl}
                />
              </Box>
            </FormControl>
          </Form>
        </Box>
      </Center>

      <Center p={5}>
        <Box bg={"grey"} w={"50%"} h={"150px"} rounded={"md"}>
          <Form>
            <FormControl isRequired pb={"5"} p={"8"}>
              <FormLabel>Waktu peminjaman</FormLabel>
              <Box pb={"5"}>
                <Input
                  name="borrowingTime"
                  placeholder="Select Date and Time"
                  size="md"
                  type="datetime-local"
                  onChange={handleChange}
                  value={borrowingForm.borrowingTime}
                />
              </Box>
            </FormControl>
          </Form>
        </Box>
      </Center>

      <Center p={5}>
        <Box bg={"grey"} w={"50%"} h={"150px"} rounded={"md"}>
          <Form>
            <FormControl isRequired pb={"5"} p={"8"}>
              <FormLabel>Waktu selesai peminjaman</FormLabel>
              <Box pb={"5"}>
                <Input
                  name="borrowingTimeUntil"
                  placeholder="Select Date and Time"
                  size="md"
                  type="datetime-local"
                  onChange={handleChange}
                  value={borrowingForm.borrowingTimeUntil}
                />{" "}
              </Box>
            </FormControl>
          </Form>
        </Box>
      </Center>

      <Stack pl={50} pt={5} pb={10} ml={380}>
        <Tooltip label="plese fill required field correctly">
          <Button w={"10%"} colorScheme="blue" onClick={submitForm}>
            Submit
          </Button>
        </Tooltip>
      </Stack>
    </ChakraProvider>
  );
};

export default FormPinjam;
