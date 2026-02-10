import { Outlet } from "react-router-dom"
import Header from "../components/main/Header"
import Footer from "../components/main/Footer"

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
      <div className="bg-secondary-bg-gradient-b border-t-4 border-secondary-stroke-base">
        <Footer />
      </div>
      
    </div>
  )
}

export default MainLayout