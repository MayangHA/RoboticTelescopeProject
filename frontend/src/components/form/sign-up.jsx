import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  useToast, // 🟢 Tambahkan ini
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';

/** @param {Parameters<typeof Stack>[0] & { isPasswordOptional?: boolean}} props */
function SignUpForm({
  onSubmit,
  errors,
  register,
  formState,
  children,
  isPasswordOptional,
  ...props
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const toast = useToast(); // 🟢 Tambahkan ini

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          await onSubmit(e);
          toast({
            title: 'Pendaftaran berhasil!',
            description: 'Akun Anda telah berhasil dibuat.',
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'top',
          });
        } catch (err) {
          toast({
            title: 'Terjadi kesalahan',
            description: err.message || 'Gagal mendaftarkan akun.',
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top',
          });
        }
      }}
    >
      <Stack spacing={4} w={'100%'} px={2} {...props}>
        <FormControl isRequired isInvalid={!!errors.fullName}>
          <FormLabel>Nama Lengkap</FormLabel>
          <Input
            placeholder="Masukkan Nama Lengkap"
            {...register('fullName')}
            disabled={formState.isSubmitting}
          />
          <FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Masukkan Email"
            {...register('email')}
            disabled={formState.isSubmitting}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired={!isPasswordOptional} isInvalid={!!errors.password}>
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

export default SignUpForm;
