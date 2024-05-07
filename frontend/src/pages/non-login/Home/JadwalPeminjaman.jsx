import React from "react";
import { Form, NavLink } from "react-router-dom";
import NavbarNL from "../../../components/Navbar/Non-Login/Navbar-NL";
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
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";

const JadwalPeminjaman = () => {
    return (
        <>
            <NavbarNL />
            <Container p={5} maxW={"container.lg"} >
                <Center>
                <Heading>Jadwal Peminjaman</Heading>
                </Center>
                <TableContainer py={10}>
                    <Table variant='striped' colorScheme="black">
                        <Thead>
                            <Tr color={'black'} fontWeight={'bold'} fontSize={'20'} textAlign={'center'}>
                                <Th color={'black'} fontWeight={'bold'} fontSize={'15'} textAlign={'center'}>Nama Peminjam</Th>
                                <Th color={'black'} fontWeight={'bold'} fontSize={'15'} textAlign={'center'}>Teleskop</Th>
                                <Th color={'black'} fontWeight={'bold'} fontSize={'15'} textAlign={'center'}>Waktu</Th>
                            </Tr>
                        </Thead>
                        <Thead>
                            <Tr>
                                <Th textAlign={'center'}>Jon Doe</Th>
                                <Th textAlign={'center'}>IRT</Th>
                                <Th textAlign={'center'}>Senin, 13 Agustus 2022 pukul 10.00</Th>
                            </Tr>
                        </Thead>
                        <Thead>
                            <Tr>
                                <Th textAlign={'center'}>Agus</Th>
                                <Th textAlign={'center'}>OZT-ILTS</Th>
                                <Th textAlign={'center'}>Senin, 13 Agustus 2022 pukul 10.00</Th>
                            </Tr>
                        </Thead>
                    </Table>
                </TableContainer>
            </Container>
            
        </>
    )
}


export default JadwalPeminjaman;