import { Client } from "@/interfaces/client"

export enum ActionTypes {
  SEND_CLIENT = 'SEND CLIENT',
}

export interface ClientAction {
  type: string,
  payload: Client
}

export const sendClientAction = (client: Client) => {
  return {
    type: ActionTypes.SEND_CLIENT,
    payload: {
      id: client.id,
      name: client.name,
      cpf: client.cpf,
      email: client.email,
      car: client.car,
      service: client.service
    },
  }
}