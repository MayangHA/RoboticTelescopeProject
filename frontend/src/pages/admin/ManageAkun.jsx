import DataTable from "react-data-table-component";
import {
    Box,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    Button,
    Spacer,
    Center,
    useToast,
    IconButton,
} from "@chakra-ui/react";
import { SearchIcon, AddIcon } from "@chakra-ui/icons";
import Header from "../../components/Admin/Navbar";
import { Link as RouterLink } from "react-router-dom";

const ManageAkun = () => {
    
    const columns = [
        {
            cell: row => (
                <Box>
                    <Text>Nama</Text>
                    <Text>Email</Text>
                </Box>
            )
        }
    ]

    return (
        <>
            <Header Judul="Manage Akun" />
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                marginBottom="10"
                pl={'250px'}
                pt="76px"
            >
                <Box mb="5" mt="8" display="flex" justifyContent="flex-end" w="90%">
                    <RouterLink to="/addaccount">
                        <Button
                            leftIcon={<AddIcon color="white" />}
                            bgColor="blue.700"
                            textColor="white"
                            _hover={{ bg: 'blue.800' }}
                        >
                            Tambah Akun Pengguna
                        </Button>
                    </RouterLink>
                    <Spacer />
                    <InputGroup maxW={'200'}>
                    <Input placeholder="Search..." shadow={'md'} />
                    <InputRightElement>
                        <IconButton aria-label="Search database" icon={<SearchIcon />} />
                    </InputRightElement>
                    </InputGroup>
                </Box>

                <Box w="90%" py="3" px="5" border="1px" borderColor="gray.200">
                    
                    <DataTable
                        columns={columns}
                        data={[]}
                        pagination
                    />
                </Box>

            </Box>
        </>
    )
}

export default ManageAkun;