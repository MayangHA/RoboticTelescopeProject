import {Box, Heading} from "@chakra-ui/react";
import React from "react";

const Profile = ({Judul, Isi}) => {
    return (
        <div>
            <Box pb={'5'}>
                <Heading as="h5" size="sm" paddingBottom='1' paddingTop='2'>
                 {Judul}
                </Heading>
                {Judul ==='Email' ? 
                <Box borderBottom='1px' borderColor='gray.200'>{Isi}</Box>
                :
                <Box borderBottom='1px' borderColor='gray.200' style={{ textTransform: 'capitalize' }}>{Isi}</Box>
                 }
            </Box>

    </div>
    
    )
}

export default Profile;