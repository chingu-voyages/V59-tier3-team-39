import { Outlet } from "react-router-dom"
import Header from "../components/interview/Header"
import Footer from "../components/interview/Footer"

const InterviewLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default InterviewLayout