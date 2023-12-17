import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import MainLayout from './Layouts/mainLayout'
import Home from './pages/homePage/home'
import Login from './pages/LoginPage/login'
import User from './pages/UserPage/User'
import PrivateRoute from './routes/PrivateRoute'
import ContactPage from './pages/ContactPage/ContactPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route element={<PrivateRoute />}>
            <Route path='/user' element={<User />} />
          </Route>
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
