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
    ChakraProvider
} from "@chakra-ui/react";

const FormPinjam = () => {
    

return (
    <ChakraProvider>

        <Center p={5}>
            <Box bg={'grey'} w={'50%'} alignItems={'center'} alignContent={'center'} textAlign={'center'} height={'3xs'} rounded='md'>
                <Heading>Peminjaman Teleskop</Heading>
            </Box>
        </Center>

        <Center p={5}>
            <Box bg={'grey'} w={'50%'} h={'150px'} rounded={'md'}>
                <Form>
                <FormControl isRequired pb={'5'} p={'8'}>
                <FormLabel id="name">
                    Nama Peminjam
                </FormLabel>
                    <Box pb={'5'}>
                        <Input w={'50%'}
                            variant={'flushed'}
                            color='black'
                            name="Nama Peminjam"
                            placeholder="Masukkan Nama Peminjam"
                            _placeholder={{ color: 'inherit' }}
                    />
                    </Box>
                    
                </FormControl>
                </Form>
            </Box>
        </Center>

            <Center p={5}>
                <Box bg={'grey'} w={'50%'} h={'150px'} rounded={'md'}>
                    <Form>
                    <FormControl isRequired pb={'5'} p={'8'}>
                    <FormLabel >
                        NIM/NIP
                    </FormLabel>
                    <Box pb={'5'}>
                        <Input w={'50%'}
                            variant={'flushed'}
                            color='black'
                            name="Nama Peminjam"
                            placeholder="Masukkan NIM/NIP"
                            _placeholder={{ color: 'inherit' }}
                    />
                    </Box>
                </FormControl>
                    </Form>
                </Box>
            </Center>

            <Center p={5}>
                <Box bg={'grey'} w={'50%'} h={'150px'} rounded={'md'}>
                    <Form>
                    <FormControl isRequired pb={'5'} p={'8'}>
                    <FormLabel>
                        Status/Pekerjaan
                    </FormLabel>
                    <Box pb={'5'}>
                    <Select w={'50%'} placeholder='Pilih Status/Pekerjaan'>
                        <option> Peneliti Luar Negeri / Dalam Negeri </option>
                        <option> Dosen ITERA </option>
                        <option> Laboran ITERA </option>
                        <option> Mahasiswa TA/KP </option>
                        <option> Mahasiswa Praktikum </option>
                        <option> Mahasiswa ITERA </option>
                        <option> Mahasiswa lainnya & umum </option>
                    </Select>
                    </Box>
                </FormControl>
                    </Form>
                </Box>
            </Center>

            <Center p={5}>
                <Box bg={'grey'} w={'50%'} h={'150px'} rounded={'md'}>
                    <Form>
                    <FormControl isRequired pb={'5'} p={'8'}>
                    <FormLabel>
                        Objek Penelitian
                    </FormLabel>
                    <Box pb={'5'}>
                    <Select w={'50%'} placeholder='Pilih Objek Penelitian'>
                        <option> Transient Objek (Supernova, Nova, Okultassi, BKTS Aneh)</option>
                        <option> Pengamatan Rutin (Program OAIL, Hilal, Bintang Variabel, Eksoplanet)</option>
                        <option> Lain-lain (Plaet, Nebula, dan lainnya)</option>
                    </Select>
                    </Box>
                </FormControl>
                    </Form>
                </Box>
            </Center>

            <Center p={5}>
                <Box bg={'grey'} w={'50%'} h={'150px'} rounded={'md'}>
                    <Form>
                    <FormControl isRequired pb={'5'} p={'8'}>
                    <FormLabel >
                    Asensio Rekta / Right Ascension
                    </FormLabel>
                    <Box pb={'5'}>
                        <Input w={'50%'}
                            variant={'flushed'}
                            color='black'
                            name="Nama Peminjam"
                            placeholder="Masukkan Asensio Rekta / Right Ascension"
                            _placeholder={{ color: 'inherit' }}
                    />
                    </Box>
                </FormControl>
                    </Form>
                </Box>
            </Center>

            <Center p={5}>
                <Box bg={'grey'} w={'50%'} h={'150px'} rounded={'md'}>
                    <Form>
                    <FormControl isRequired pb={'5'} p={'8'}>
                    <FormLabel >
                    Deklinasi / Declination
                    </FormLabel>
                    <Box pb={'5'}>
                        <Input w={'50%'}
                            variant={'flushed'}
                            color='black'
                            name="Nama Peminjam"
                            placeholder="Masukkan Deklinasi / Declination"
                            _placeholder={{ color: 'inherit' }}
                    />
                    </Box>
                </FormControl>
                    </Form>
                </Box>
            </Center>

            <Center p={5}>
                <Box bg={'grey'} w={'50%'} h={'150px'} rounded={'md'}>
                    <Form>
                    <FormControl isRequired pb={'5'} p={'8'}>
                    <FormLabel >
                    Magnitude
                    </FormLabel>
                    <Box pb={'5'}>
                        <Input w={'50%'}
                            variant={'flushed'}
                            color='black'
                            name="Nama Peminjam"
                            placeholder="Masukkan Magnitude"
                            _placeholder={{ color: 'inherit' }}
                    />
                    </Box>
                </FormControl>
                    </Form>
                </Box>
            </Center>

            <Center p={5}>
                <Box bg={'grey'} w={'50%'} h={'150px'} rounded={'md'}>
                    <Form>
                    <FormControl isRequired pb={'5'} p={'8'}>
                    <FormLabel>
                        Teleskop / Telescope
                    </FormLabel>
                    <Box pb={'5'}>
                    <Select w={'50%'} placeholder='Pilih  Teleskop / Telescope'>
                        <option> IRT (ITERA Robotic Telescope) </option>
                        <option> OZT-ALTS (Ofyar Z Tamin - Astelco Lunar Telescope System)</option>
                    </Select>
                    </Box>
                </FormControl>
                    </Form>
                </Box>
            </Center>

            <Center p={5}>
                <Box bg={'grey'} w={'50%'} h={'150px'} rounded={'md'}>
                    <Form>
                    <FormControl isRequired pb={'5'} p={'8'}>
                    <FormLabel>
                        Upload File Proposal
                    </FormLabel>
                    <Box pb={'5'}>
                        <Input pt={'5px'}  w={'50%'} type="file" name="proposal"/>
                    </Box>
                </FormControl>
                    </Form>
                </Box>
            </Center>

            <Center p={5}>
                <Box bg={'grey'} w={'50%'} h={'150px'} rounded={'md'}>
                    <Form>
                    <FormControl isRequired pb={'5'} p={'8'}>
                    <FormLabel>
                        Upload Surat Pengantar
                    </FormLabel>
                    <Box pb={'5'}>
                        <Input pt={'5px'}  w={'50%'} type="file" name="surat pengantar"/>
                    </Box>
                </FormControl>
                    </Form>
                </Box>
            </Center>

            <Center p={5}>
                <Box bg={'grey'} w={'50%'} h={'150px'} rounded={'md'}>
                    <Form>
                    <FormControl isRequired pb={'5'} p={'8'}>
                    <FormLabel>
                        Waktu peminjaman
                    </FormLabel>
                    <Box pb={'5'}>
                    <Input placeholder='Select Date and Time' size='md' type='datetime-local' />                    </Box>
                </FormControl>
                    </Form>
                </Box>
            </Center>
            
            <Stack pl={50} pt={5} pb={10} ml={380}>
                    <Tooltip label='plese fill required field correctly'>
                        <Button
                            w={'10%'}
                            isDisabled
                            colorScheme="blue"
                        >
                            Submit
                        </Button>
                    </Tooltip>
                </Stack>



    </ChakraProvider>


    )
}

export default FormPinjam;