"use client";
import React from 'react'
import { SessionProvider } from 'next-auth/react'

const Provider = ({ children }) => {
    return (
        <div>
            <SessionProvider>
                {children}
            </SessionProvider>
        </div>
    )
}

<<<<<<< HEAD
export default Provider
=======
export default Provider
>>>>>>> b439a9d0621a3ea8508f611ebf20d98dd894d7a4
