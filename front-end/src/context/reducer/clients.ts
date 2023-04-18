import { Reducer } from "react";
import { ActionTypes, ClientAction } from "./actions";

interface ClientState {
  id: number,
  name: string,
  cpf: string,
  email: string,
  car: string,
  service: string
}

export const clientsReducer = (state: ClientState, action: ClientAction): ClientState => {
  switch (action.type) {
    case ActionTypes.SEND_CLIENT:
      const { id, name, cpf, email, car, service } = state

      return { 
        ...state,
        id,
        name,
        cpf,
        email,
        car,
        service
      }
  
    default:
      return state;
  }
}