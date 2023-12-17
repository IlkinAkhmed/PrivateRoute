import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../../context/usercontext'
import { useNavigate } from 'react-router'
import User from '../UserPage/User'
import { Link } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const { user, setUser } = useContext(userContext)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')




    function handleSubmit(e) {
        e.preventDefault()
        if (name.length != 0 && password.length != 0) {
            setUser({ name, password })
            navigate('/user')
        } else {
            alert('imput must not be empty')
            return
        }
    }
    function handleChange(e, handleChanger) {
        e.preventDefault()
        handleChanger(e.target.value)
    }
    return (
        <>
            <Link to={'/'}>Back</Link>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">UserName</label>
                <input type="text" onChange={(e) => handleChange(e, setName)} /><br />
                <label htmlFor="">Password</label>
                <input type="text" onChange={(e) => handleChange(e, setPassword)} /><br />
                <button type='submit'>Log in</button>
            </form>
        </>
    )
}

export default Login