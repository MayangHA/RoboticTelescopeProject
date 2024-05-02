import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Itera from './Images/itera.png';

// const Logo = (props) => {
//     return (
//         <Box {...props} maxW={'400'}>
//             <Image src="itera.png" />

//         </Box>
//     )
// }

function Logo() {
    return (
        <Box maxW={'50'}>
            <Image src={Itera}></Image>
        </Box>
    )
}

export default Logo;