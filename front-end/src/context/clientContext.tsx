import { ReactNode, createContext, useReducer } from "react";
import { clientsReducer } from "./reducer/clients";
import { sendClientAction } from "./reducer/actions";
import { Client } from "@/interfaces/client";

interface ClientContextType {
  clients: Client,
  sendClient: (param: Client) => void
}

export const ClientContext = createContext({} as ClientContextType)

interface UserContextProviderProps {
  children: ReactNode
}

const initialState = {
  id: 0,
  name: '',
  cpf: '',
  email: '',
  car: '',
  service: ''
}

export const ClientContextProvider = ({ children }: UserContextProviderProps) => {
  const [clients, dispatch] = useReducer(clientsReducer, initialState)

  const sendClient = (data: Client) => {
    dispatch(sendClientAction(data))
  }

  return (
    <ClientContext.Provider value={{ clients, sendClient }}>
      {children}
    </ClientContext.Provider>
  );
}

