import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login.js'
import Register from './pages/auth/Register.js'
import NotFound from './pages/NotFound.js'
import Landing from './pages/Landing.js'

function App() {

  return (
    <BrowserRouter future={{  v7_startTransition: true, v7_relativeSplatPath: true 
    }}>
      <Routes>
       
        <Route path="/" element={<Landing />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
