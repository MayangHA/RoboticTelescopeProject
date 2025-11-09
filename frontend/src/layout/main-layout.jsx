import { Stack, Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import NavigationBar from '../components/navigation-bar';
import useAuthStore from '../store/auth';
import { useNavigate } from 'react-router-dom';

function MainLayout({ children, isProtected }) {
  const navigation = useNavigate();
  const { token, auth } = useAuthStore();

  useEffect(() => {
    if (!isProtected) return;
    if (token && auth) return;

    return navigation('/', {
      replace: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack h={'100vh'} w={'100vw'}>
      <NavigationBar />

      <Box flex="1">
        {children}
      </Box>
      
      <Flex
        as="footer"
        py={4}
        bg="#444341ff"
        justify="center"
        align="center"
        direction="column"
      >
        <Flex gap={4} mb={2} >
        </Flex>
        <Text fontSize="sm" color="white">
          Observatorium Astronomi ITERA Lampung (2025)
        </Text>
      </Flex> 

    </Stack>
  );
}

export default MainLayout;
