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
    Tooltip
} from "@chakra-ui/react";
import FormPinjam from "../../../components/formpinjam";
import useAuthStore from "../../../store/auth";
import NavbarL from "../../../components/Navbar/Logged-In/NavbarL";

function PeminjamanTeleskop () {
    const {token} = useAuthStore();
    return (
        <>
            {token ? <NavbarL></NavbarL> : <NavbarNL></NavbarNL>}
            <FormPinjam></FormPinjam>
            {/* <Container maxWidth={"container.lg"} py="20px" bgColor={'black'} centerContent justifyContent={'center'}>
                <Box bg={'whitesmoke'} w={'50%'} alignItems={'center'} alignContent={'center'}>
                    <Heading color={'black'}>Peminjaman Teleskop</Heading>
                </Box>
            </Container> */}
        </>
    )
};

export default PeminjamanTeleskop;