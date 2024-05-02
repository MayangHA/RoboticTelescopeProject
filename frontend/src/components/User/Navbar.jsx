import React from "react";
import {
    Flex,
    Spacer,
    Button,
    ButtonGroup,
    Box,
    Heading,
    ChakraProvider,
    theme,
    Stack,
    Image,
    Hide
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
    return (
        <>
        <Flex minWidth="max-content" alignItems="center" gap="2">
            <Hide below='sm'>
                <Box p="2" maxW={'100'}>
                    <Image src="./itera.png" />
                </Box>
            </Hide>

            <Box>
                <Stack direction={"row"} spacing={4}>
                    <RouterLink to="profile">
                        <Button bg={'blue.100'} variant="ghost" color={'blue.700'} size={{base:'sm', md:'md', lg:'lg'}}>
                            Profile
                        </Button>
                    </RouterLink>
                </Stack>
            </Box>

            <Spacer />
            <RouterLink ro={'/'}>
                <Button
                    leftIcon={<ChevronLeftIcon />}
                    colorScheme="blue"
                    variant={"solid"}
                    size={{base:'sm', md:'md', lg:'lg'}}
                >
                    Back
                </Button>
            </RouterLink>

        </Flex>
        </>
    )
}

export default Navbar;