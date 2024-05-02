import {ReactNode} from "react";
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
  } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { BellIcon } from '@chakra-ui/icons';
import axios from 'axios';

const AvatarLogin = () => {

  return (
      <>
        <Menu>
          <MenuButton
            as={Button}
            _hover={{ bg: 'gray.400' }}
            _focus={{ boxShadow: 'md' }}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}
          >
            <Avatar size="md"></Avatar>
          </MenuButton>
          <MenuList alignItems={'center'} p="3" direction='ltr'>

            <RouterLink>
              <MenuItem color={'black'}> Profil </MenuItem>
            </RouterLink>

            <MenuDivider />

            <RouterLink to="/">
              <MenuItem
                _hover={{ bg: 'red.600' }}
                variant={'solid'}
                boxShadow="md"
                borderRadius={'lg'}
                bg="red.500"
                color={'white'}
                minW="full"
              >
                Keluar
              </MenuItem>
            </RouterLink>

          </MenuList>
        </Menu>
      </>



  )
}


export default AvatarLogin;