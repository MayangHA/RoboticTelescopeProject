import {Link} from 'react-router-dom';
import LineChart from '../components/linechart';
import NavbarNL from '../components/Navbar/Non-Login/Navbar-NL';
import Navbar from '../components/User/Navbar';
import { Container, Select, Text } from '@chakra-ui/react';
import DateRangeComp from '../components/daterangecomp';
import FormPinjam from '../components/formpinjam';
function Home () {
    return (
      <>
        <NavbarNL></NavbarNL>
        <Container as="section" maxWidth={"container.lg"} py="20px">
          <Select placeholder='Pilih Data yang ingin ditampilkan' sixe='md' variant={'filled'} bg='grey' color={'black'}>
            <option value='option1'>Suhu Awan/Langit</option>
            <option value='option2'>Suhu Sekitar</option>
            <option value='option3'>Kelembaban Rata-Rata</option>
            <option value='option4'>Kecepatan Angin</option>
            <option value='option5'>Kecerahan Langit</option>
          </Select>
          <LineChart></LineChart>
          <DateRangeComp></DateRangeComp>
        </Container>
        
      </>
     
      // <div>
      //   <h1>Hello World</h1>
      //   <Link to="about">About Us</Link>
      //   <SignUp></SignUp>
      //   <SignIn></SignIn>
      // </div>
    )
}

export default  Home;