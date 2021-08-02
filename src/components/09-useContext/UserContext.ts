import React, { createContext } from 'react'
export interface User {
    id?: number,
    name?: string,
    age?: number,
}
interface UserProvider {
    user?: User,
    setUser?: any
}

export const UserContext = createContext<UserProvider>({});