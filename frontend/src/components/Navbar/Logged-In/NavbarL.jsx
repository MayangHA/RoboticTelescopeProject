import React from "react";
import { useEffect, useState } from "react";
import {
    ButtonGroup,
    Link,
    Box,
    Flex,
    Text,
    Button,
    Stack,
    ChakraProvider,
    Center,
} from '@chakra-ui/react'

import {  NavLink, useLocation } from 'react-router-dom'
import Logo from "../../logo"
import AvatarLogin from "../../avatar-login";
const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>Close</title>
      <path
        fill="white"
        d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
      />
    </svg>
);

const MenuIcon = () => (
    <svg
      width="24px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const MenuToggle = ({toggle, isOpen}) => {
    return (
        <Box display={{base: "block", md: "none"}} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
    )
}

const MenuLinks = ({isOpen}) => {
    return (
        <Box
            display={{base: isOpen ? "block" : "none", md: "block"}}
            flexBasis={{base: "100%", md: "auto"}}
        >
            <Stack
                spacing={4}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <NavLink to="/"><Button> Beranda </Button></NavLink>
                <NavLink to="/peminjamanteleskop"><Button> Peminjaman Teleskop</Button></NavLink>
                <NavLink to="/jadwalpeminjaman"><Button> Jadwal Peminjaman </Button></NavLink>
                <AvatarLogin></AvatarLogin>
            </Stack>
        </Box>
    )   
}

const NavBarContainer = ({children, ...props}) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bgGradient='linear(to-r, white, black)'
            color={["white", "white", "white.700", "white.700"]}
            {...props}
        >
            {children}
        </Flex>
    )
}

const NavbarL = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavBarContainer {...props}>
            <Logo />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    )
}

export default NavbarL;