import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast, // 🟢 Tambahkan ini
} from '@chakra-ui/react';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema } from '../../validations/auth';
import authStore from '../../store/auth';
import { USER_ROLE } from '../../utils/constant';
import { login } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import $SignInForm from '../form/sign-in';

function SignInForm() {
  const navigation = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast(); // 🟢 Inisialisasi toast

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = useCallback(
    async (data) => {
      try {
        await login(data);

        const { auth } = authStore.getState();

        // 🟢 Tampilkan toast berhasil
        toast({
          title: 'Berhasil login!',
          description: `Selamat datang kembali, ${auth?.fullName || 'pengguna'}!`,
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });

        // Arahkan sesuai role
        switch (auth.role) {
          case USER_ROLE.ADMIN:
            navigation('/admin/accounts', { replace: true });
            break;
          case USER_ROLE.USER:
            navigation('/', { replace: true });
            break;
          default:
            break;
        }

        onClose();
      } catch (error) {
        // 🟢 Ambil pesan error dari server jika ada
        const serverMessage =
          error?.response?.data?.message ||
          error?.message ||
          'Akun tidak ditemukan';

        toast({
          title: 'Gagal login',
          description: serverMessage,
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top',
        });
      }
    },
    [navigation, onClose, toast]
  );

  useEffect(() => {
    if (!isOpen) return;
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <React.Fragment>
      <Button
        onClick={onOpen}
        borderRadius={'md'}
        bg={'white'}
        fontSize={'xs'}
        _hover={{
          textDecoration: 'none',
          bg: 'gray.200',
        }}
        px={4}
        py={2}
      >
        Masuk
      </Button>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent p={5}>
          <ModalHeader>
            <Heading fontSize={'2xl'} color={'black'}>
              Masuk
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <$SignInForm
              onSubmit={handleSubmit(onSubmit)}
              errors={formState.errors}
              register={register}
              formState={formState}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
}

export default SignInForm;
