import { Client } from "@/interfaces"
import { Employee } from "@/interfaces/employees"

export const fetchByCpf = async (cpf: string) => {
  try {
    const request = await fetch(`http://localhost:3000/clients/?cpf=${cpf}`)
    const response = await request.json()
    
    return response[0] as Client
    
  } catch (error: any) {
    throw new Error(error)
  }
}

export const fetchEmployees = async () => {
  try {
    const request = await fetch(`http://localhost:3000/employees/`)
    const response = await request.json()
    
    return response as Employee[]
    
  } catch (error: any) {
    throw new Error(error)
  }
}