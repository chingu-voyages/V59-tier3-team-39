import { Routes, Route } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import Interview from './layout/Interview'
import Dashboard from './layout/Dashboard'
import NotFound from './layout/NotFound'
import CaseStudy from './layout/CaseStudy'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/casestudy' element={<CaseStudy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
