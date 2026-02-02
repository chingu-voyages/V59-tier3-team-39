import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Interview from './pages/Interview'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import CaseStudy from './pages/CaseStudy'
import MainLayout from './layouts/MainLayout'
import InterviewLayout from './layouts/InterviewLayout'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/casestudy' element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<InterviewLayout />}>
        <Route path="/interview" element={<Interview />} />
      </Route>
    </Routes>
  )
}

export default App
