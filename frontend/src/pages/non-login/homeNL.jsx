import NavbarNL from "../../components/Navbar/Non-Login/Navbar-NL";
import Footer from "../../components/footer";
import { useEffect } from "react";
import Home from "./Home/home";
import {Boc, ChakraProvider, theme} from "@chakra-ui/react";
import {useLocation} from "react-router-dom";

const HomeNL = () => {
    useEffect(( ) => {
        document.title = 'Home';
    }, []);

    return(
        <ChakraProvider theme={theme}>
            <Box bg="blue.100" pb={'3'}>
                <NavbarNL />
            </Box>
            <Home />
            <Box position={'relative'} bottom="0" w={'100%'}>
                <Footer />
            </Box>
        </ChakraProvider>
    );
};

export default HomeNL;