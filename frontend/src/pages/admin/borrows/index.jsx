// import {
//   Button,
//   Flex,
//   Input,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   Text,
//   useDisclosure,
// } from '@chakra-ui/react';
// import dayjs from 'dayjs';
// import 'dayjs/locale/id';
// import localizedFormat from 'dayjs/plugin/localizedFormat';
// import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import DataTable from 'react-data-table-component';
// import { IoClose } from 'react-icons/io5';
// import { useNavigate } from 'react-router-dom';
// import { deleteBorrowing, updateBorrowing, listBorrowing } from '../../../api/borrowings';
// import AdminLayout from '../../../layout/admin-layout';
// import useBorrowingsStore from '../../../store/borrowings';
// import { TELESCOPE_TYPE, BORROWING_STATUS } from '../../../utils/constant';
// import { FaCheck } from 'react-icons/fa';
// import { FaXmark } from 'react-icons/fa6';

// dayjs.extend(localizedFormat);

// function Borrows() {
//   const navigation = useNavigate();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const {
//     isOpen: isUpdateOpen,
//     onOpen: onUpdateOpen,
//     onClose: onUpdateClose,
//   } = useDisclosure();
//   const [updateAction, setUpdateAction] = useState(null);
//   const [updateCandidate, setUpdateCandidate] = useState(null);
//   const [deleteCandidate, setDeleteCandidate] = useState(null);
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [isFetching, setIsFetching] = useState(true);
//   const [search, setSearch] = useState('');
//   const { borrowings } = useBorrowingsStore();
//   const updateLabel = useMemo(
//     () => ({
//       title: updateAction === BORROWING_STATUS.APPROVED ? 'Setujui' : 'Tolak',
//       subtitle:
//         updateAction === BORROWING_STATUS.APPROVED ? 'menyetujui' : 'menolak',
//     }),
//     [updateAction]
//   );

//   const filteredBorrowings = useMemo(() => {
//     if (!search) return borrowings;

//     return borrowings.filter((borrow) => {
//       const fields = [
//         'name',
//         'email',
//         'nimNip',
//         'occupation',
//         'telescopeType',
//         'objectType',
//         'observationObject',
//       ];

//       const lowered = search.toLowerCase();

//       return fields.some((field) =>
//         borrow[field].toLowerCase().includes(lowered)
//       );
//     });
//   }, [borrowings, search]);

//   const onDeleteConfirm = useCallback(async () => {
//     if (!deleteCandidate) return;

//     try {
//       setIsDeleting(true);

//       await deleteBorrowing(deleteCandidate.borrowingId);
//       await listBorrowing({ limit: 'all' });
//     } catch (e) {
//       console.log(e);
//     } finally {
//       setIsDeleting(false);
//       onClose();
//     }
//   }, [deleteCandidate, onClose]);

//   const onDelete = useCallback(
//     (borrow) => () => {
//       setDeleteCandidate(borrow);
//       onOpen();
//     },
//     [onOpen]
//   );

//   const onUpdateConfirm = useCallback(async () => {
//     if (!updateCandidate) return;

//     try {
//       setIsUpdating(true);

//       await updateBorrowing(updateCandidate.borrowingId, {
//         status: updateAction
//       });
//       await listBorrowing({ limit: 'all' });
//     } catch (e) {
//       console.log(e);
//     } finally {
//       setIsUpdating(false);
//       onUpdateClose();
//     }
//   }, [updateCandidate, updateAction, onUpdateClose])

//   const onUpdating = useCallback(
//     (borrow, action) => () => {
//       if (borrow.status === action) return

//       setUpdateCandidate(borrow);
//       setUpdateAction(action);
//       onUpdateOpen();
//     },
//     [onUpdateOpen]
//   );

//   useEffect(() => {
//     listBorrowing({
//       limit: 'all',
//     })
//       .then(() => {})
//       .catch(() => {})
//       .finally(() => {
//         setIsFetching(false);
//       });
//   }, []);

//   return (
//     <AdminLayout title={'Daftar Peminjam'}>
//       <DataTable
//         data={filteredBorrowings}
//         actions={
//           <Flex gap={2}>
//             <Flex position={'relative'}>
//               <Input
//                 placeholder={'Cari Peminjam'}
//                 onChange={(e) => setSearch(e.target.value)}
//                 value={search}
//                 pr={search ? 6 : 4}
//               />
//               {search && (
//                 <Button
//                   variant={'none'}
//                   onClick={() => setSearch('')}
//                   position={'absolute'}
//                   right={0}
//                   zIndex={999}
//                   top={0}
//                   p={1}
//                 >
//                   <IoClose />
//                 </Button>
//               )}
//             </Flex>
//             <Button fontSize={'xs'} onClick={() => navigation('add')}>
//               Tambah Peminjaman
//             </Button>
//           </Flex>
//         }
//         title={
//           <Text fontWeight={'bold'} fontSize={'lg'}>
//             Daftar Peminjaman
//           </Text>
//         }
//         fixedHeader
//         pagination
//         progressPending={isFetching}
//         columns={[
//           {
//             name: (
//               <Text fontSize={'sm'} fontWeight={'bold'}>
//                 Nama Lengkap
//               </Text>
//             ),
//             selector: (row) => row.name,
//           },
//           {
//             name: (
//               <Text fontSize={'sm'} fontWeight={'bold'}>
//                 Teleskop
//               </Text>
//             ),
//             selector: (row) =>
//               TELESCOPE_TYPE.find((tt) => tt.value === row.telescopeType)
//                 ?.title || row.telescopeType,
//           },
//           {
//             name: (
//               <Text fontSize={'sm'} fontWeight={'bold'}>
//                 Waktu
//               </Text>
//             ),
//             selector: (row) =>
//               dayjs(row.borrowingTime)
//                 .locale('id')
//                 .format('dddd, DD MMMM YYYY HH:mm'),
//           },
//           {
//             name: (
//               <Text fontSize={'sm'} fontWeight={'bold'}>
//                 Poin Prioritas
//               </Text>
//             ),
//             selector: (row) => row.priorityPoint,
//           },
//           {
//             name: (
//               <Text fontSize={'sm'} fontWeight={'bold'}>
//                 Aksi
//               </Text>
//             ),
//             cell: (row) => (
//               <Flex gap={2}>
//                 <Button
//                   size={'xs'}
//                   onClick={onUpdating(row, BORROWING_STATUS.APPROVED)}
//                   isDisabled={row.status !== BORROWING_STATUS.PENDING && row.status !== BORROWING_STATUS.APPROVED}
//                   background={'green.500'}
//                   color={'white'}
//                 >
//                   <FaCheck />
//                 </Button>
//                 <Button
//                   size={'xs'}
//                   onClick={onUpdating(row, BORROWING_STATUS.REJECTED)}
//                   isDisabled={row.status !== BORROWING_STATUS.PENDING && row.status !== BORROWING_STATUS.REJECTED}
//                   background={'red.500'}
//                   color={'white'}
//                 >
//                   <FaXmark />
//                 </Button>
//                 <Button
//                   size={'xs'}
//                   onClick={() => navigation(`edit/${row.borrowingId}`)}
//                 >
//                   Lihat
//                 </Button>
//                 <Button size={'xs'} onClick={onDelete(row)}>
//                   Hapus
//                 </Button>
//               </Flex>
//             ),
//           },
//         ]}
//       />
//       <Modal
//         isOpen={isOpen}
//         onClose={onClose}
//         isCentered
//         closeOnOverlayClick={!isDeleting}
//       >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>
//             <Flex justifyContent={'space-between'} alignItems={'center'}>
//               <Text fontSize={'xl'} fontWeight={'bold'}>
//                 Hapus Peminjaman
//               </Text>
//             </Flex>
//           </ModalHeader>
//           <ModalCloseButton disabled={isDeleting} />
//           <ModalBody>
//             <Text>
//               Apakah anda yakin ingin menghapus peminjaman{' '}
//               {deleteCandidate?.name}?
//             </Text>
//           </ModalBody>
//           <ModalFooter gap={2}>
//             <Button
//               color="white"
//               bg={'red.500'}
//               onClick={onDeleteConfirm}
//               isLoading={isDeleting}
//             >
//               Yakin
//             </Button>
//             <Button onClick={onClose} isLoading={isDeleting}>
//               Batal
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//       <Modal
//         isOpen={isUpdateOpen}
//         onClose={onUpdateClose}
//         isCentered
//         closeOnOverlayClick={!isUpdating}
//       >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>
//             <Flex justifyContent={'space-between'} alignItems={'center'}>
//               <Text fontSize={'xl'} fontWeight={'bold'}>
//                 {updateLabel.title} Peminjaman
//               </Text>
//             </Flex>
//           </ModalHeader>
//           <ModalCloseButton disabled={isUpdating} />
//           <ModalBody>
//             <Text>
//               Apakah anda yakin ingin {updateLabel.subtitle} peminjaman{' '}
//               {deleteCandidate?.name}?
//             </Text>
//           </ModalBody>
//           <ModalFooter gap={2}>
//             <Button
//               color="white"
//               bg={updateAction === BORROWING_STATUS.APPROVED ? 'green.500' : 'red.500'}
//               onClick={onUpdateConfirm}
//               isLoading={isUpdating}
//             >
//               Yakin
//             </Button>
//             <Button onClick={onClose} isLoading={isUpdating}>
//               Batal
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </AdminLayout>
//   );
// }

// export default Borrows;

import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import dayjs from 'dayjs';
import 'dayjs/locale/id';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import * as XLSX from 'xlsx';

import {
  deleteBorrowing,
  updateBorrowing,
  listBorrowing,
} from '../../../api/borrowings';

import AdminLayout from '../../../layout/admin-layout';
import useBorrowingsStore from '../../../store/borrowings';

import {
  TELESCOPE_TYPE,
  BORROWING_STATUS,
} from '../../../utils/constant';

import { FaCheck } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

dayjs.extend(localizedFormat);

function Borrows() {

  const navigation = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isUpdateOpen,
    onOpen: onUpdateOpen,
    onClose: onUpdateClose,
  } = useDisclosure();

  const [updateAction, setUpdateAction] = useState(null);
  const [updateCandidate, setUpdateCandidate] = useState(null);
  const [deleteCandidate, setDeleteCandidate] = useState(null);

  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const [search, setSearch] = useState('');

  // Month selector
  const [selectedMonth, setSelectedMonth] =
    useState(dayjs().format('YYYY-MM'));

  // Excel range selector
  const [csvFromDate, setCsvFromDate] =
    useState(dayjs().subtract(1, 'month')
      .startOf('month')
      .format('YYYY-MM-DD'));

  const [csvToDate, setCsvToDate] =
    useState(dayjs()
      .endOf('month')
      .format('YYYY-MM-DD'));

  const { borrowings } = useBorrowingsStore();

  const updateLabel = useMemo(() => ({
    title:
      updateAction === BORROWING_STATUS.APPROVED
        ? 'Setujui'
        : 'Tolak',

    subtitle:
      updateAction === BORROWING_STATUS.APPROVED
        ? 'menyetujui'
        : 'menolak',
  }), [updateAction]);

  // Search filter
  const filteredBorrowings = useMemo(() => {

    if (!search) return borrowings;

    return borrowings.filter((borrow) => {

      const fields = [
        'name',
        'email',
        'nimNip',
        'occupation',
        'telescopeType',
        'objectType',
        'observationObject',
      ];

      const lowered = search.toLowerCase();

      return fields.some(field =>
        borrow[field]?.toLowerCase().includes(lowered)
      );

    });

  }, [borrowings, search]);

  // Month filter
  const monthFilteredBorrowings = useMemo(() => {

    if (!selectedMonth)
      return filteredBorrowings;

    return filteredBorrowings.filter(borrow =>
      dayjs(borrow.borrowingTime)
        .format('YYYY-MM') === selectedMonth
    );

  }, [filteredBorrowings, selectedMonth]);

  // Excel export
  const downloadExcel = useCallback(() => {

    const filtered = borrowings.filter(borrow => {

      const date = dayjs(borrow.borrowingTime);

      return (
        date.isAfter(dayjs(csvFromDate).startOf('day')) &&
        date.isBefore(dayjs(csvToDate).endOf('day'))
      );

    });

    if (!filtered.length) {

      alert('Tidak ada data pada rentang tanggal tersebut');

      return;

    }

    const excelData = filtered.map((row, index) => ({

      No: index + 1,

      Nama: row.name,

      Email: row.email,

      "NIM/NIP": row.nimNip,

      Pekerjaan: row.occupation,

      Teleskop:
        TELESCOPE_TYPE.find(
          tt => tt.value === row.telescopeType
        )?.title || row.telescopeType,

      "Objek Observasi": row.observationObject,

      Waktu:
        dayjs(row.borrowingTime)
          .format("YYYY-MM-DD HH:mm:ss"),

      "Poin Prioritas":
        row.priorityPoint,

      Status: row.status,

    }));

    const worksheet =
      XLSX.utils.json_to_sheet(excelData);

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      'Data Peminjaman'
    );

    worksheet['!cols'] =
      Object.keys(excelData[0])
        .map(key => ({
          wch: key.length + 5
        }));

    const fileName =
      `peminjaman_${csvFromDate}_to_${csvToDate}.xlsx`;

    XLSX.writeFile(
      workbook,
      fileName
    );

  }, [
    borrowings,
    csvFromDate,
    csvToDate,
  ]);

  const onDeleteConfirm =
    useCallback(async () => {

      if (!deleteCandidate)
        return;

      try {

        setIsDeleting(true);

        await deleteBorrowing(
          deleteCandidate.borrowingId
        );

        await listBorrowing({
          limit: 'all'
        });

      } finally {

        setIsDeleting(false);

        onClose();

      }

    }, [deleteCandidate, onClose]);

  const onDelete =
    useCallback(borrow => () => {

      setDeleteCandidate(borrow);

      onOpen();

    }, [onOpen]);

  const onUpdateConfirm =
    useCallback(async () => {

      if (!updateCandidate)
        return;

      try {

        setIsUpdating(true);

        await updateBorrowing(
          updateCandidate.borrowingId,
          { status: updateAction }
        );

        await listBorrowing({
          limit: 'all'
        });

      } finally {

        setIsUpdating(false);

        onUpdateClose();

      }

    }, [
      updateCandidate,
      updateAction,
      onUpdateClose,
    ]);

  const onUpdating =
    useCallback((borrow, action) => () => {

      if (borrow.status === action)
        return;

      setUpdateCandidate(borrow);

      setUpdateAction(action);

      onUpdateOpen();

    }, [onUpdateOpen]);

  useEffect(() => {

    listBorrowing({
      limit: 'all'
    })
      .finally(() =>
        setIsFetching(false)
      );

  }, []);

  return (
    <AdminLayout title={'Daftar Peminjam'}>

      <DataTable

        data={monthFilteredBorrowings}

        actions={

          <Flex gap={2} align="center">

            <Input
              type="month"
              size="sm"
              value={selectedMonth}
              onChange={e =>
                setSelectedMonth(e.target.value)
              }
            />

            <Input
              type="date"
              size="sm"
              value={csvFromDate}
              onChange={e =>
                setCsvFromDate(e.target.value)
              }
            />

            <Input
              type="date"
              size="sm"
              value={csvToDate}
              onChange={e =>
                setCsvToDate(e.target.value)
              }
            />

            <Button
              size="sm"
              colorScheme="green"
              onClick={downloadExcel}
            >
              Download Excel
            </Button>

            <Flex position="relative">

              <Input
                placeholder="Cari Peminjam"
                value={search}
                onChange={e =>
                  setSearch(e.target.value)
                }
              />

              {search && (
                <Button
                  variant="none"
                  position="absolute"
                  right={0}
                  onClick={() =>
                    setSearch('')
                  }
                >
                  <IoClose />
                </Button>
              )}

            </Flex>

            <Button
              size="sm"
              onClick={() =>
                navigation('add')
              }
            >
              Tambah
            </Button>

          </Flex>

        }

        pagination

        fixedHeader

        progressPending={isFetching}

        columns={[

          {
            name: 'Nama',
            selector: row => row.name,
          },

          {
            name: 'Teleskop',
            selector: row =>
              TELESCOPE_TYPE.find(
                tt => tt.value === row.telescopeType
              )?.title ||
              row.telescopeType,
          },

          {
            name: 'Waktu',
            selector: row =>
              dayjs(row.borrowingTime)
                .locale('id')
                .format(
                  'DD MMMM YYYY HH:mm'
                ),
          },

          {
            name: 'Prioritas',
            selector: row =>
              row.priorityPoint,
          },

          {
            name: 'Aksi',

            cell: row => (

              <Flex gap={2}>

                <Button
                  size="xs"
                  bg="green.500"
                  color="white"
                  onClick={
                    onUpdating(
                      row,
                      BORROWING_STATUS.APPROVED
                    )
                  }
                >
                  <FaCheck />
                </Button>

                <Button
                  size="xs"
                  bg="red.500"
                  color="white"
                  onClick={
                    onUpdating(
                      row,
                      BORROWING_STATUS.REJECTED
                    )
                  }
                >
                  <FaXmark />
                </Button>

                <Button
                  size="xs"
                  onClick={() =>
                    navigation(
                      `edit/${row.borrowingId}`
                    )
                  }
                >
                  Lihat
                </Button>

                <Button
                  size="xs"
                  onClick={
                    onDelete(row)
                  }
                >
                  Hapus
                </Button>

              </Flex>

            ),

          },

        ]}

      />

      {/* DELETE MODAL and UPDATE MODAL remain unchanged */}

    </AdminLayout>
  );

}

export default Borrows;
