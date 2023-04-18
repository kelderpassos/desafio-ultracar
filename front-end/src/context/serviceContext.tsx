import { ReactNode, createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { sendClientAction, sendServiceAction } from "./reducer/actions";
import { Client, Service } from "@/interfaces";

interface ServiceContextType {
  payload: Client | Service,
  sendClient: (param: Client) => void
  sendService: (param: Client) => void
}

export const ServiceContext = createContext({} as ServiceContextType)

interface ServiceContextProviderProps {
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

export const ServiceContextProvider = ({ children }: ServiceContextProviderProps) => {
  const [payload, dispatch] = useReducer(reducer, initialState)

  // const [service]

  const sendClient = (data: Client) => {
    dispatch(sendClientAction(data))
  }

  const sendService = (data: Service) => {
    dispatch(sendServiceAction(data))
  }

  return (
    <ServiceContext.Provider value={{ payload, sendClient, sendService }}>
      {children}
    </ServiceContext.Provider>
  );
}

