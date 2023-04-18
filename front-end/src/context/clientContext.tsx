import { ReactNode, createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { sendClientAction, sendServiceAction } from "./reducer/actions";
import { Client, Service } from "@/interfaces";

interface ClientContextType {
  payload: Client | Service,
  sendClient: (param: Client) => void
  sendService: (param: Client) => void
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
  const [payload, dispatch] = useReducer(reducer, initialState)

  // const [service]

  const sendClient = (data: Client) => {
    dispatch(sendClientAction(data))
  }

  const sendService = (data: Service) => {
    dispatch(sendServiceAction(data))
  }

  return (
    <ClientContext.Provider value={{ payload, sendClient, sendService }}>
      {children}
    </ClientContext.Provider>
  );
}

