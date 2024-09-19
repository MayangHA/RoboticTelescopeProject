import React from "react";
import NavbarL from "../../../components/Navbar/Logged-In/NavbarL";
import NavbarNL from "../../../components/Navbar/Non-Login/Navbar-NL";
import { Text, Container, Select } from "@chakra-ui/react";
import LineChart from "../../../components/linechart";
import DateRangeComp from "../../../components/daterangecomp";
import LineChartSuhuSekitar from "../../../components/linechartSuhuS";
import {
  ButtonGroup,
  Link,
  Box,
  Flex,
  Button,
  Stack,
  ChakraProvider,
  Center,
} from "@chakra-ui/react";
import Footer from "../../../components/footer";
function HomeL() {
  return (
    <>
      <NavbarL />
      {/* <Flex
        mt={125}
        justifyContent={"center"}
        alignItems={"center"}
        maxW={"100%"}
        bg={"#242325"}
        flexDirection={"column"}
      >
        <Text
          fontSize={"32px"}
          fontFamily={"lato, arial"}
          color={"white"}
          mt={5}
        >
          OAIL
        </Text>

        <Text fontSize={"32px"} mt={10} mb={5} color={"white"}>
          Observatorium Astronomi ITERA Lampung
        </Text>
      </Flex> */}
      <Flex pt={180} pl={189}>
        <Box color={"white"}>
          <Select
            placeholder="Pilih Data yang ingin ditampilkan"
            size="md"
            variant={"filled"}
            bg="grey"
            color={"black"}
            maxW={"100%"}
          >
            <option value="option1">Suhu Awan/Langit</option>
            <option value="option2">Suhu Sekitar</option>
            <option value="option3">Kelembaban Rata-Rata</option>
            <option value="option4">Kecepatan Angin</option>
            <option value="option5">Kecerahan Langit</option>
          </Select>
        </Box>
      </Flex>

      <Container maxWidth={"80%"} py="20px" bg={"blue.100"} borderRadius={"lg"} mt={5} mb={100}>
        <LineChart></LineChart>
      </Container>

      <Footer></Footer>

      {/* <Container
        as="section"
        maxWidth={"container.xl"}
        mt={"200px"}
        bg={"blue.700"}
        centerContent
      >
        <Box maxWidth={"100%"} backgroundColor={"orange.100"}>
          <Select
            placeholder="Pilih Data yang ingin ditampilkan"
            size="md"
            variant={"filled"}
            bg="grey"
            color={"black"}
            maxW={"30%"}
          >
            <option value="option1">Suhu Awan/Langit</option>
            <option value="option2">Suhu Sekitar</option>
            <option value="option3">Kelembaban Rata-Rata</option>
            <option value="option4">Kecepatan Angin</option>
            <option value="option5">Kecerahan Langit</option>
          </Select>
          <Box
            maxW={"container.lg"}
            background={"white"}
            alignContent={"center"}
          >
            <LineChart></LineChart>
          </Box>

          <DateRangeComp></DateRangeComp>
        </Box>
      </Container> */}
    </>
  );
}

export default HomeL;
