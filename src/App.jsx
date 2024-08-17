
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AllMembers from './components/AllMembers'
import HomePage from './Pages/HomePage'
import AccountPage from './Pages/AccountPage'
import CategoriesPage from './Pages/CategoriesPage'
import LoginPage from './Pages/LoginPage'
// import Navbar from './components/Navbar'

function App() {

  return (
    <>
    {/* <Navbar /> */}
    
    
    <Routes>
      <Route index element={<Navigate to="/home" replace />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/account' element={<AccountPage />} />
      <Route path='/categories' element={<CategoriesPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/allMembers' element={<AllMembers />} />

    </Routes>
    

    </>
  )
}

export default App
