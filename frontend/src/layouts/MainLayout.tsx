import { Outlet } from "react-router-dom"
import Header from "../components/main/Header"
import Footer from "../components/main/Footer"

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout