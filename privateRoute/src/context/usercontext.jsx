import React, { createContext, useEffect, useState } from 'react'

export const userContext = createContext()

function UserProvider({ children }) {
    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)



    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider