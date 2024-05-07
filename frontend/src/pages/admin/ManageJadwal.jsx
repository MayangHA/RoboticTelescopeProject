import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    useToast,
    Center,
    Spinner,
    Spacer,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    IconButton,
} from "@chakra-ui/react";
import { SearchIcon, DeleteIcon, EditIcon, AddIcon } from "@chakra-ui/icons";
import Header from "../../components/Admin/Navbar";
import { useNavigate } from "react-router-dom";

const ManageJadwal = () => {

    const navigate = useNavigate();

    return (
        <>
            <Header Judul={"Manage Jadwal"}/>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                marginBottom="5"
                pl={'250px'}
                pt="76px"
            >
                <Box mb="5" mt="8" display="flex" justifyContent="flex-end" w="90%">
                    <Button
                        leftIcon={<AddIcon color="white" />}
                        bgColor={"blue.700"}
                        onClick={() => navigator('/')}
                        textColor={"white"}
                        p="5"
                    >
                        Tambah Jadwal
                    </Button>
                    <Spacer />
                    <InputGroup maxW={'200'}>
                        <Input 
                            shadow={'md'}
                        />
                        <InputRightElement>
                            <IconButton aria-label="Search Title" icon={<SearchIcon />}/>
                        </InputRightElement>
                    </InputGroup>
                </Box>
                
                <Heading> List Pendaftar </Heading>

                <Box p={4} w="100%" py={10}>
                    <Table variant={"striped"} size={"sm"}>
                        <Thead>
                            <Tr>
                                <Th>Nama</Th>
                                <Th>NIM/NIP</Th>
                                <Th>Email</Th>
                                <Th>Status/Pekerjaan</Th>
                                <Th>Objek Pengamatan</Th>
                                <Th>RA</Th>
                                <Th>DEC</Th>
                                <Th>Jenis Objek</Th>
                                <Th>Magnitude</Th>
                                <Th>Jenis Teleskop</Th>
                                <Th>File Proposal</Th>
                                <Th>Surat Pengantar</Th>
                                <Th>Waktu Peminjaman</Th>
                                <Th>Aksi</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td>Agus</Td>
                                <Td>123456789</Td>
                                <Td>2w7Kk@example.com</Td>
                                <Td>Student</Td>
                                <Td>Teleskop</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>
                                    <span>
                                        <IconButton aria-label="Delete" icon={<DeleteIcon />} />
                                        <IconButton aria-label="Edit" icon={<EditIcon />} />
                                        <IconButton aria-label="Add" icon={<AddIcon />} />
                                    </span>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td>Jon Doe</Td>
                                <Td>123456789</Td>
                                <Td>2w7Kk@example.com</Td>
                                <Td>Student</Td>
                                <Td>Teleskop</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>
                                    <span>
                                        <IconButton aria-label="Delete" icon={<DeleteIcon />} />
                                        <IconButton aria-label="Edit" icon={<EditIcon />} />
                                        <IconButton aria-label="Add" icon={<AddIcon />} />
                                    </span>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td>Jon Doe</Td>
                                <Td>123456789</Td>
                                <Td>2w7Kk@example.com</Td>
                                <Td>Student</Td>
                                <Td>Teleskop</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>-</Td>
                                <Td>
                                    <span>
                                        <IconButton aria-label="Delete" icon={<DeleteIcon />} />
                                        <IconButton aria-label="Edit" icon={<EditIcon />} />
                                        <IconButton aria-label="Add" icon={<AddIcon />} />
                                    </span>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>

                <Heading> Jadwal Peminjaman </Heading>
                
                <Box p={4} w="80%" py={10}>
                    <Table variant={"striped"} size={"md"}>
                        <Thead>
                            <Tr>
                                <Th textAlign={"center"}> Nama Peminjam </Th>
                                <Th textAlign={"center"}> Teleskop </Th>
                                <Th textAlign={"center"}> Waktu Peminjaman </Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td textAlign={"center"}> Jon Doe </Td>
                                <Td textAlign={"center"}> IRT </Td>
                                <Td textAlign={"center"}> Senin, 13 Agustus 2022 pukul 10.00 </Td>
                            </Tr>

                            <Tr>
                                <Td textAlign={"center"}> Jon Doe </Td>
                                <Td textAlign={"center"}> OZT-ALTS </Td>
                                <Td textAlign={"center"}> Senin, 13 Agustus 2022 pukul 10.00 </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
                
            </Box>
        </>
    )
}

export default ManageJadwal;