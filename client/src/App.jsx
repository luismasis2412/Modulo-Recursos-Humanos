import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'

import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RetrievePage from './pages/RetrievePage.jsx'
import HomePage from './pages/HomePage.jsx'
import JobsPage from './pages/JobsPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'

import ProtectedRoute from './ProtectedRoute.jsx'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/restore-password' element={<RetrievePage/>} />

        <Route element={<ProtectedRoute/>}>
          <Route path='/homepage' element={<HomePage/>} />
          <Route path='/jobs-page' element={<JobsPage/>} />
          <Route path='/profile' element={<ProfilePage/>} />
        </Route>
        </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
