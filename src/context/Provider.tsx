'use client'
import { UserInterface } from '@/components/generic/constant';
import  { createContext, useContext, useState } from 'react';

// Create a context
interface UserContextInterface {
    users: UserInterface[] | undefined,
    setUsers: (value:any)=>void
}
const UserContext = createContext<UserContextInterface | undefined>(undefined)

export const AppContextProvider = ({ children }:any) => {
    const [users,setUsers] = useState<UserInterface[]>([])
  
    return <UserContext.Provider value={{users, setUsers}}>{children}</UserContext.Provider>;
  };

  // Custom hook to access app context
export const useAppContext = () => {
    return useContext(UserContext);
  };
