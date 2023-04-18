import { Client, Service } from "@/interfaces"
import { Employee } from "@/interfaces/"

export const fetchByCpf = async (cpf: string) => {
  try {
    const request = await fetch(`http://localhost:3000/clients/?cpf=${cpf}`)
    const response: Client[] = await request.json()
    
    return response[0]
    
  } catch (error: any) {
    throw new Error(error)
  }
}

export const fetchEmployees = async () => {
  try {
    const request = await fetch(`http://localhost:3000/employees/`)
    const response: Employee[] = await request.json()
    
    return response

  } catch (error: any) {
    throw new Error(error)
  }
}

export const createService = async (data: Service) => {
  try {
    const request = await fetch("http://localhost:3000/services/",{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data)
    })

    const response: Service = await request.json()
    
    return response
    
  } catch (error: any) {
    throw new Error(error)
  }
}