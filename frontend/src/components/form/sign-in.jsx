import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

function SignInForm({ onSubmit, errors, register, formState, children }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={4} w={'100%'} px={2}>
        <FormControl isRequired isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Masukkan Email"
            {...register('email')}
            disabled={formState.isSubmitting}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.password}>
          <FormLabel>Password</FormLabel>
          <Flex position={'relative'}>
            <Input
              placeholder="Masukkan Password"
              {...register('password')}
              disabled={formState.isSubmitting}
              type={isPasswordVisible ? 'text' : 'password'}
              pr={6}
            />
            <Button
              variant={'none'}
              onClick={() => setIsPasswordVisible((prev) => !prev)}
              position={'absolute'}
              right={0}
              zIndex={100}
              top={0}
              p={1}
            >
              {isPasswordVisible ? <IoEyeOff /> : <IoEye />}
            </Button>
          </Flex>
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        {children}

        <Button w={'100%'} type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
}

export default SignInForm;
