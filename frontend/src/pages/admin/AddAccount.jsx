import {
    ChakraProvider,
    theme,
    Flex,
    Select,
    Box,
    Stack,
    Spacer,
    Button,
    FormControl,
    Input,
    Heading,
    useToast
} from '@chakra-ui/react';
import Header from '../../components/Admin/Navbar';
import { Link as RouterLink } from 'react-router-dom';

const AddAccount = () => {

    return (
        <>
            <Header Judul="Add Account" />
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                w="100%"
                pl={'320px'} pt='90px'
            >
                <Flex
                    border="1px"
                    borderColor="gray.300"
                    flexDirection="column"
                    width="50%"
                    margin="3"
                    padding="5"
                >
                    <FormControl pb={'5'}>
                        <Heading size={'sm'}>
                            Nama Lengkap
                        </Heading>
                        <Input 
                            required
                            variant={'flushed'}
                            name="name"
                            placeholder='Nama Lengkap'
                        />
                    </FormControl>

                    <FormControl pb={'5'}>
                        <Heading size={'sm'}>
                            Email
                        </Heading>
                        <Input 
                            required
                            type='email'
                            variant={'flushed'}
                            name="email"
                            placeholder='Email'
                        />
                    </FormControl>
                    
                    <FormControl id="password" pb={'5'}>
                        <Heading size={'sm'}>
                            Password
                        </Heading>
                        <Input 
                            required
                            type='password'
                            variant={'flushed'}
                            name="password"
                            placeholder='Password'
                        />
                    </FormControl>
                </Flex>
            </Box>
            <Box alignItems={'flex-end'} mb="8" mx={'5'} w="80%">
                <Stack as="flex" direction={'row'}>
                <Spacer />
                <RouterLink to="/manageakun">
                    <Button minW="136" variant={'outline'} colorScheme="red">
                        {' '}
                        Cancel{' '}
                    </Button>
                </RouterLink>
          {/* <RouterLink to="/profiles"> */}
                    <Button  minW="136" variant={'solid'} colorScheme="facebook" type='submit'>
                        {' '}
                        Save{' '}
                    </Button>
          {/* </RouterLink> */}
                </Stack>
            </Box>
        </>
    )
}

export default AddAccount;