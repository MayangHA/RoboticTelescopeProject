import { ReactNode } from "react";
import {
    ChakraProvider,
    theme,
    useDisclosure,
    Menu, 
    Button,
    Avatar,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Icon,
    Stack,
    IconButton,
    Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BellIcon } from "@chakra-ui/icons";
import axios from 'axios';

const LoggedIn = () => {
    const { isOpen, onOpen, onClose} = useDisclosure();

    function logMeOut() {
        axios ({
            method: "POST",
            url: "/logout",
        })
        .then((response) => {
            console.log("Logged out");
            localStorage.removeItem("token");
            window.location.replace("/");
        }).catch((error) => {
            if (error.response) {
                console.log('error' + error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
    }
    return (
        <ChakraProvider theme={theme}>
            <Menu>
                <MenuButton
                    as = {Button}
                    _hover={{ bg: 'gray.400'}}
                    _focus={{ boxShadow: 'md'}}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}
                >
                    <Avatar size={'md'}></Avatar>
                </MenuButton>
                <MenuList alignItem ={'center'} p="3" direction='ltr'>
                   <RouterLink to="/profile">
                       <MenuItem color='black'>See Profile</MenuItem>
                   </RouterLink>
                   <MenuDivider />
                    <RouterLink to="/"> 
                        <MenuItem 
                            _hover={{ bg: 'red.600'}}
                            variant={'solid'}
                            boxShadow="md"
                            bg="red.500"
                            color="white"
                            minW="full"
                            onClick={logMeOut}
                        >
                            Log Out
                        </MenuItem>
                    </RouterLink>
                </MenuList>
            </Menu>

        </ChakraProvider>
    );
};
export default LoggedIn;