import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import PeminjamanTeleskop from './pages/non-login/Home/PeminjamanTeleskop'
import JadwalPeminjaman from './pages/non-login/Home/JadwalPeminjaman'
import HomeL from './pages/Login/Home/homeL'
import ShowProfile from './pages/user/Profile/TampilProfile'
import EditProfileUser from './pages/user/Profile/Edit-Profile'
import ProfileAdmin from './pages/admin/Profile/Profile'
import ManageAkun from './pages/admin/ManageAkun'
import AddAccount from './pages/admin/AddAccount'
import ManageJadwal from './pages/admin/ManageJadwal'

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  // {
  //   path: "profile",
  //   element: (<Show></Show>),
  // },
  {
    path: "peminjamanteleskop",
    element: (<PeminjamanTeleskop></PeminjamanTeleskop>)
  },
  {
    path: "jadwalpeminjaman",
    element: (<JadwalPeminjaman></JadwalPeminjaman>)
  },
  {
    path: "homelogin",
    element: (<HomeL></HomeL>),
  },
  {
    path: "profile",
    element: (<ShowProfile></ShowProfile>),
  },
  {
    path: "editprofile",
    element: (<EditProfileUser></EditProfileUser>),
  },
  {
    path: "profileadmin",
    element: (<ProfileAdmin></ProfileAdmin>),
  },
  {
    path: "manageakun",
    element: (<ManageAkun></ManageAkun>),
  },
  {
    path: "addaccount",
    element: (<AddAccount></AddAccount>),
  },
  {
    path: "managejadwal",
    element: (<ManageJadwal></ManageJadwal>),
  },
]);
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
