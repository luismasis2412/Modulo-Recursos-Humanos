import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'

import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/homepage' element={<h1>Home page</h1>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/restore-password' element={<h1>Restore Password</h1>} />
          <Route path='/profile' element={<h1>Profile</h1>} />
        </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
