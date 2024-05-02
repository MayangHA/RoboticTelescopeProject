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
