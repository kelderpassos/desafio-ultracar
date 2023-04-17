import { ReactNode, createContext, useReducer } from "react";
import { clientsDatabase } from '../data'

export const userContext = createContext({})

interface UserContextProviderProps {
  children: ReactNode
}

export function UserContextProvider({children}: UserContextProviderProps) {
  const [users, dispatch] = useReducer(usersReducer, {
    name: '',
    cpf: '',
    email: '',
    car: '',
    service: ''
  })

  const fetchUsers = () => {
    clientsDatabase
  }

  return (
    <userContext.Provider value={{users}}>
      {children}
    </userContext.Provider>
  );
}

