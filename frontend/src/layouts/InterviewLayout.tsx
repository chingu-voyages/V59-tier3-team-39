import { Outlet } from 'react-router-dom'
import Header from '../components/interview/Header'
import Footer from '../components/interview/Footer'

const InterviewLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default InterviewLayout
