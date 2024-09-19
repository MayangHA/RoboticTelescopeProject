import React from "react";
import { Link } from "react-router-dom";
import LineChart from "../components/linechart";
import NavbarNL from "../components/Navbar/Non-Login/Navbar-NL";
import NavbarL from "../components/Navbar/Logged-In/NavbarL";
import { Container, Select, Text } from "@chakra-ui/react";
import DateRangeComp from "../components/daterangecomp";
import useAuthStore from "../store/auth";

function HomeNonLogin() {
  const { token } = useAuthStore();
  return (
    <div>
      {token ? <NavbarL></NavbarL> : <NavbarNL></NavbarNL>}
      <Container maxWidth={"container.lg"} py="20px">
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
        <LineChart></LineChart>
        <DateRangeComp></DateRangeComp>
      </Container>
    </div>
  );
}

export default HomeNonLogin;
