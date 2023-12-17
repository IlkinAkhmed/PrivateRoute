import React, { useContext, useEffect } from 'react'
import { userContext } from '../../context/usercontext'
import { useNavigate } from 'react-router';

function User() {
    const { user, setUser } = useContext(userContext)
    const navigate = useNavigate()

    function handleLogOut() {
        setUser(null)
        navigate('/')
    }
    useEffect(() => {
        localStorage.setItem('user',user)
    }, [user])
    
    localStorage.setItem('user', user)
    return (
        <div>
            <h1>Name: {user.name}</h1>
            <h2>Password: {user.password} </h2>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default User