import {
    theme,
    Flex,
    Heading,
    Box,
    Stack,
    Spacer,
    Button,
    useToast,
    Center
} from "@chakra-ui/react";
import { Link as RouterLink} from 'react-router-dom';
import Header from "../../../components/Admin/Navbar";


const ProfileAdmin = () => {
    return (
        <>
            <Header Judul="Profile" />
            <Box pl={'250px'} pt={'76px'}>
                <Heading size="lg" color={'blue.700'} textAlign="center" py={5}>
                    Identity
                </Heading>
                <Center py={10}>
                    <Box
                        border={"1px"}
                        borderColor={"gray.300"}
                        m={'5'}
                        p={'5'}
                        w={"30%"}
                        bg={"gray.400"}
                    >
                        <Box pb={'5'}>
                            <Heading as="h5" size="sm" paddingBottom={'3'} paddingTop={"2"} >
                                Nama Lengkap
                            </Heading>
                            <Box borderBottom={"1px"} borderColor={"gray.300"} >
                                John Doe
                            </Box>
                        </Box>

                        <Box pb={'5'}>
                            <Heading as="h5" size="sm" paddingBottom={'3'} paddingTop={"2"} >
                                Email
                            </Heading>
                            <Box borderBottom={"1px"} borderColor={"gray.300"}>
                                JohnD@gmail.com
                            </Box>
                        </Box>

                    </Box>
                </Center>
            </Box>
        </>
    )
}

export default ProfileAdmin;