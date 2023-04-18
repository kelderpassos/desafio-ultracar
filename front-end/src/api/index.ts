import { Client } from "@/interfaces/client"


export const fetchByCpf = async (cpf: string) => {
  try {
    const request = await fetch(`http://localhost:3000/clients/?cpf=${cpf}`)
    const response = await request.json()
    
    return response[0] as Client
    
  } catch (error: any) {
    throw new Error(error)
  }
}