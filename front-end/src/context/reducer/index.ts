import { Action, Client, Service } from "@/interfaces";
import { ActionTypes } from "./actions";

export const reducer = (state: Client | Service, action: Action<Service>) => {
  const { id, name, cpf, email, car, service, employee, parts, date } = action.payload

  switch (action.type) {
    case ActionTypes.SEND_CLIENT:
      return { 
        ...state,
        id,
        name,
        cpf,
        email,
        car,
        service
      }
    
    case ActionTypes.SEND_SERVICE:
      return { 
        ...state,
        id,
        name,
        cpf,
        email,
        car,
        service,
        employee,
        parts,
        date
      }
    
    default:
      return state;
  }
}