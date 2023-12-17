import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router'
import { userContext } from '../context/usercontext'

function PrivateRoute() {
  const { user } = useContext(userContext)
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [])
  return (
    user ? <Outlet /> : <Navigate to={'/login'} />
  )
}

export default PrivateRoute