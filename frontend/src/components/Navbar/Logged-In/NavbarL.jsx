import React from "react";
import {
    ButtonGroup,
    Link,
    Box,
    Flex,
    Button,
    Stack,
    ChakraProvider,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from "react-router-dom";
import LoggedIn from '../../avatar-login';
import useToken from '../../Login/useToken';
import SignIn from "../../button-Login";


const NavbarL = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);

    retur (
        <NavBarContainer {...props}>
            <Logo w="100px" color={['white', 'white', 'blue.200', 'blue.200']} />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen ={isOpen} />
        </NavBarContainer>
    );
};

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

const MenuToggle = ({ toggle, isOpen }) => {
    return (
      <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Box>
    );
};
  
  const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
    return (
      <Link href={to}>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    );
};

const MenuLinks = ({ isOpen }) => {
    const pages=useLocation()
    const { token, removeToken, setToken } = useToken();

    return (
        <Box
            display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
            flexBasis={{ base: '100%', md: 'auto' }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={['center', 'space-between', 'flex-end', 'flex-end']}
                direction={['column', 'row', 'row', 'row']}
                pt={[4, 4, 0, 0]}
                >
                    <RouterLink to="/">
                        <Button bgColor={pages.pathname == '/' ? 'white' : ''} colorScheme="telegram" variant="ghost">
                            Beranda
                        </Button>
                    </RouterLink>
                    <RouterLink to="/peminjamanteleskop">
                        <Button bgColor={pages.pathname == '/peminjamanteleskop' ? 'white' : ''} colorScheme="telegram" variant="ghost">
                            Peminjaman Teleskop
                        </Button>
                    </RouterLink>
                    <RouterLink to="/jadwalpeminjamanteleskop">
                        <Button bgColor={pages.pathname == '/jadwalpeminjamanteleskop' ? 'white' : ''} colorScheme="telegram" variant="ghost">
                            Jadwal Peminjaman Teleskop
                        </Button>
                    </RouterLink>
                    <LoggedIn token={removeToken}/>
                </Stack>
        </Box>
    );
};


const NavBarContainer = ({ children, ...props }) => {
    return(
        <ChakraProvider>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                w="100%"
                p={8}
                bg={'blue.100'}
                color={['grey', 'grey', 'blue.700', 'blue.700']}
                {...props}
            >
                {children}
            </Flex>
        </ChakraProvider>
    );
};

export default NavbarL;