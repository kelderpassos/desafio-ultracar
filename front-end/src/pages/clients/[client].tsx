import { ChangeEventHandler, useContext, useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import { useRouter } from 'next/router'
import { ServiceContext } from '@/context/serviceContext'
import { createService, fetchEmployees } from '@/api'
import { Employee } from "@/interfaces/"


const initialState = {
	employee: 'Joana',
  parts: ''
}

export default function User() {
  const [input, setInput] = useState<Record<string, string>>(initialState)
  const [employees, setEmployees] = useState<Employee[]>([])
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const { payload, sendService } = useContext(ServiceContext)
  const router = useRouter();

  useEffect(() => {
    fetchEmployees().then((data: Employee[]) => setEmployees(data))
  }, [employees])

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = ({ target: {id, value} }) => {
    setInput((prevState) => ({...prevState, [id]: value}))   
  }

  const handleSelectInput: React.ChangeEventHandler<HTMLSelectElement> = ({ target: {id, value} }) => {
    setInput((prevState) => ({...prevState, [id]: value}))
  }

  const handleCheckbox: ChangeEventHandler<HTMLInputElement> = ({ target: { checked } }) => {
		setIsChecked(checked)
	}

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const { employee, parts } = input
    const newService = {...payload, employee, parts, orderDate: new Date()}
    sendService(newService)

    delete newService['id']
    createService(newService)

    router.push('/confirmation')
  }

  return (
    <div>
      <section>
        <h1>Visualizar dados do cliente</h1>
        <QRCode value={`
          ${payload.name},
          ${payload.cpf},
          ${payload.email},
          ${payload.car},
          ${payload.service}`
        }/>
      </section>

      <form onSubmit={handleSubmit}>
        <label htmlFor="employee">Colaborador designado
          <select id='employee' onChange={handleSelectInput}>{
            employees.map(({id, name}: Employee) => (
              <option key={id} value={name}>{name}</option>              
            ))}
          </select>
        </label>
        <label htmlFor="parts">Necessita de peças?
          <input
            type="checkbox"
            id="parts"
            checked={isChecked}
            onChange={handleCheckbox}
          />
        </label>
        {isChecked ? (<input id='parts' type='text' value={input.parts} onChange={handleInput}/>) : ''}
        <button type='submit'>Fechar serviço</button>
      </form>
    </div>
  )
}