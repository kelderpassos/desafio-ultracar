export interface Client {
  id: number,
  name: string,
  cpf: string,
  email: string,
  car: string,
  service: string
}

export interface Service extends Client {
  employee?: string,
  parts?: string,
  date?: Date
}

export interface Action<T> {
  type: string,
  payload: T
}