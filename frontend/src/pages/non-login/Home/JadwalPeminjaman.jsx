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
            <Container p={5}>
                <Heading>Jadwal Peminjaman</Heading>
                <TableContainer>
                    <Table variant='striped' colorScheme="teal">
                        <Thead>
                            <Tr>
                                <Th>Nama Peminjam</Th>
                                <Th>Teleskop</Th>
                                <Th>Waktu</Th>
                            </Tr>
                        </Thead>
                        <Thead>
                            <Tr>
                                <Th>Jon Doe</Th>
                                <Th>IRT</Th>
                                <Th>Senin, 13 Agustus 2022 pukul 10.00</Th>
                            </Tr>
                        </Thead>
                        <Thead>
                            <Tr>
                                <Th>Agus</Th>
                                <Th>OZT-ILTS</Th>
                                <Th>Senin, 13 Agustus 2022 pukul 10.00</Th>
                            </Tr>
                        </Thead>
                    </Table>
                </TableContainer>
            </Container>
            
        </>
    )
}


export default JadwalPeminjaman;