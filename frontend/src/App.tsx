import { Routes, Route } from 'react-router-dom'
import HomeLayout from '../layout/HomeLayout'
import Interview from '../layout/Interview'
import Dashboard from '../layout/Dashboard'
import NotFound from '../layout/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
