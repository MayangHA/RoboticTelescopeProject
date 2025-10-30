import { Flex, Text, useToast } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createBorrowing } from '../../api/borrowings';
import { uploadFile } from '../../api/files';
import BorrowForm from '../../components/form/borrow';
import MainLayout from '../../layout/main-layout';
import useAuthStore from '../../store/auth';
import { borrowTelescopeSchema } from '../../validations/borrow';

function BorrowTelescope() {
  const { auth } = useAuthStore();
  const toast = useToast()
  const navigation = useNavigate();
  const { register, handleSubmit, formState, setValue, watch } = useForm({
    defaultValues: {
      name: '',
      email: '',
      occupation: '',
      nimNip: '',
      rightAscescion: '',
      declination: '',
      magnitude: '',
      observationObject: '',
      objectType: '',
      telescopeType: '',
      proposal: '',
      introductory: '',
      borrowingTime: '',
      borrowingTimeUntil: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(borrowTelescopeSchema),
  });
  const values = watch();

  const onFileChange = useCallback(
    /** @param {React.ChangeEvent<HTMLInputElement>} e } */
    (e) => {
      const { name, files } = e.target;

      setValue(name, files);
    },
    [setValue]
  );

  const onFileRemove = useCallback(
    (name) => () => {
      setValue(name, '');
    },
    [setValue]
  );

  const onSubmit = useCallback(
    async (data) => {
      const [{ url: proposalUrl }, { url: introductoryUrl }] =
        await Promise.all([
          uploadFile(data.proposal[0]),
          uploadFile(data.introductory[0]),
        ]);

      data.userId = auth.userId;
      data.proposalUrl = `${import.meta.env.VITE_API_BASE_URL}${proposalUrl}`;
      data.introductoryUrl = `${import.meta.env.VITE_API_BASE_URL}${introductoryUrl}`;

      const result = await createBorrowing(data);

      return new Promise((resolve) => {
        toast({
          title: 'Peminjaman berhasil diajukan!',
          duration: 1500,
          colorScheme: 'green',
          position: 'top'
        })

        setTimeout(() => {
          window.location.reload()
          resolve(result)
        }, 2000)
      })

    },
    [auth?.userId, toast, navigation]
  );

  return (
    <MainLayout isProtected>
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        flexDir={'column'}
        gap={4}
        py={5}
      >
        <Text fontWeight={'bold'} textTransform={'uppercase'} fontSize={'xl'}>
          Peminjaman Teleskop
        </Text>
        <BorrowForm
          errors={formState.errors}
          formState={formState}
          onFileChange={onFileChange}
          onFileRemove={onFileRemove}
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          values={values}
        />
      </Flex>
    </MainLayout>
  );
}

export default BorrowTelescope;
