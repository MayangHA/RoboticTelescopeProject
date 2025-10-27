import dayjs from "dayjs";
import "dayjs/locale/id";
import localizedFormat from "dayjs/plugin/localizedFormat";
import React, { useEffect, useState } from "react";
import MainLayout from "../../layout/main-layout";
import {
  Flex,
  Table,
  TableContainer,
  Text,
  Th,
  Thead,
  Tr,
  Tbody,
  Td,
  Box,
} from "@chakra-ui/react";
import useBorrowingsStore from "../../store/borrowings";
import { listBorrowing } from "../../api/borrowings";
import { TELESCOPE_TYPE } from "../../utils/constant";

dayjs.extend(localizedFormat);

function BorrowTelescopeSchedule() {
  const [isFetching, setIsFetching] = useState(true);
  const { borrowings } = useBorrowingsStore();

  useEffect(() => {
    listBorrowing()
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return (
    <MainLayout>
      <Flex 
        w={'full'}
        h={'full'}
        alignItems={'center'}
        gap={1}
        flexDirection={'column'}
        px={5}
        bgColor={'#f5f5f5'}
      >
        <Flex
          w={'80%'}
          h={'100%'}
          bgColor={'#f5f5f5'}
          alignItems={'center'}
          flexDir={'column'}
          justifyContent={'center'}
        >
          <Text fontWeight={"bold"} textTransform={"uppercase"} fontSize={"xl"} mt={5}>
          Jadwal Peminjaman Teleskop
        </Text>
        <Box 
            w={'100%'}
            h={'600px'}
            // border={'2px solid #000'}
            borderRadius={'12px'}
            p={4}
            boxShadow={'md'}
            bgColor={'#ffffff'}
            display="flex"               
            justifyContent="center"     
            alignItems="flex-start"
            mt={10}
            >
          <TableContainer py={10} bgColor={'#ffffff'}  w={'95%'} maxH={'400px'} overflowY={'auto'}>
          <Table variant={'striped'} colorScheme={'gold'} >
            <Thead bg={'#f5cc00'}>
              <Tr
                color={"black"}
                fontWeight={"bold"}
                fontSize={"20"}
                textAlign={"center"}
              >
                <Th
                  color={"black"}
                  te
                  fontWeight={"bold"}
                  fontSize={"15"}
                  textAlign={"center"}
                  px={8}
                >
                  Nama Peminjam
                </Th>
                <Th
                  color={"black"}
                  fontWeight={"bold"}
                  fontSize={"15"}
                  textAlign={"center"}
                  px={8}
                >
                  Teleskop
                </Th>
                <Th
                  color={"black"}
                  fontWeight={"bold"}
                  fontSize={"15"}
                  textAlign={"center"}
                  px={8}
                >
                  Waktu Peminjaman
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {isFetching ? (
              <Tr>
                <Td colSpan={3} textAlign={"center"}>
                  Loading...
                </Td>
              </Tr>
            ) : (
              borrowings.map((borrowing) => (
                <Tr key={`${borrowing.borrowingId}`}
                  _even={{bg: '#f5cc00'}}
                >
                  <Td textAlign={"center"} px={8}>{borrowing.name}</Td>
                  <Td textAlign={"center"} px={8}>
                    {TELESCOPE_TYPE.find(
                      (tt) => tt.value === borrowing.telescopeType
                    )?.title || borrowing.telescopeType}
                  </Td>
                  <Td textAlign={"center"} px={8}>
                    {dayjs(borrowing.borrowingTime)
                      .locale("id")
                      .format("dddd, DD MMMM YYYY HH:mm")}{" "}
                    -{" "}
                    {dayjs(borrowing.borrowingTimeUntil)
                      .locale("id")
                      .format("dddd, DD MMMM YYYY HH:mm")}
                  </Td>
                </Tr>
              ))
            )}
            </Tbody>

          </Table>
        </TableContainer>

        </Box>
        </Flex>
        {/* <Text fontWeight={"bold"} textTransform={"uppercase"} fontSize={"xl"}>
          Peminjaman Teleskop
        </Text>
        <TableContainer py={10}>
          <Table variant="striped" colorScheme="black">
            <Thead>
              <Tr
                color={"black"}
                fontWeight={"bold"}
                fontSize={"20"}
                textAlign={"center"}
              >
                <Th
                  color={"black"}
                  te
                  fontWeight={"bold"}
                  fontSize={"15"}
                  textAlign={"center"}
                >
                  Nama Peminjam
                </Th>
                <Th
                  color={"black"}
                  fontWeight={"bold"}
                  fontSize={"15"}
                  textAlign={"center"}
                >
                  Teleskop
                </Th>
                <Th
                  color={"black"}
                  fontWeight={"bold"}
                  fontSize={"15"}
                  textAlign={"center"}
                >
                  Waktu
                </Th>
              </Tr>
            </Thead>
            {isFetching ? (
              <Tr>
                <Th colSpan={3} textAlign={"center"}>
                  Loading...
                </Th>
              </Tr>
            ) : (
              borrowings.map((borrowing) => (
                <Tr key={`${borrowing.borrowingId}`}>
                  <Th textAlign={"center"}>{borrowing.name}</Th>
                  <Th textAlign={"center"}>
                    {TELESCOPE_TYPE.find(
                      (tt) => tt.value === borrowing.telescopeType
                    )?.title || borrowing.telescopeType}
                  </Th>
                  <Th textAlign={"center"}>
                    {dayjs(borrowing.borrowingTime)
                      .locale("id")
                      .format("dddd, DD MMMM YYYY HH:mm")}{" "}
                    -{" "}
                    {dayjs(borrowing.borrowingTimeUntil)
                      .locale("id")
                      .format("dddd, DD MMMM YYYY HH:mm")}
                  </Th>
                </Tr>
              ))
            )}
          </Table>
        </TableContainer> */}
      </Flex>
    </MainLayout>
  );
}

export default BorrowTelescopeSchedule;
