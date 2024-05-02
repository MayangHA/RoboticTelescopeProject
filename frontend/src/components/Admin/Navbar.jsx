import { ReactNode} from "react";
import {
    ChakraProvider,
    theme,
    useDisclosure,
    Menu,
    Button,
    Avatar,
    Flex,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Icon,
    Stack,
    IconButton,
    Text,
    Box,
    Spacer,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    WrapItem,
    Center,
    Wrap,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { BellIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ Judul }) => {
    const { isOpen, onOpen, onClose, getDisclosureProps, getButtonProps } = useDisclosure();
    const buttonProps = getButtonProps(1);
    const DisclosureProps = getDisclosureProps(1);

    const [role, setRole] = useState(null);

    const getRole = async () => {
      let roles = await localStorage.getItem('role');
      setRole(roles);
    };

    const pages = useLocation();

    useEffect(() => {
      getRole();
    }, []);

    function logout () {
        localStorage.removeItem('token');
        window.location.replace('/');
    }

    return (
            <Box
                bg={'blue.700'}
                py={{base: '5'}}
                alignItems={'flex-end'}
                position={"fixed"}
                zIndex={'sticky'}
                w={'full'}
            >
                <Stack as="flex" direction={'row'} marginRight={'5'}>
                    <Spacer />
                </Stack>

            </Box>
    )
}