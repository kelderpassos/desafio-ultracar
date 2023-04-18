import { Client, Service } from "@/interfaces"

export enum ActionTypes {
  SEND_CLIENT = 'SEND_CLIENT',
  SEND_SERVICE = 'SEND_SERVICE'
}

export const sendClientAction = (data: Client) => {
  const { id, name, cpf, email, car, service } = data

  return {
    type: ActionTypes.SEND_CLIENT,
    payload: {
      id,
      name,
      cpf,
      email,
      car,
      service
    },
  }
}

export const sendServiceAction = (data: Service) => {
  const { id, name, cpf, email, car, service, employee, parts, date } = data
  console.log('action service', data);
  
  return {
    type: ActionTypes.SEND_SERVICE,
    payload: {
      id,
      name,
      cpf,
      email,
      car,
      service,
      employee,
      parts,
      date
    },
  }
}