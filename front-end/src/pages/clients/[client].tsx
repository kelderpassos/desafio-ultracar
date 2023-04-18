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
    <div className='h-screen flex flex-col items-center justify-center'>
      <section className='bg-[#202b57] text-white rounded-2xl
        h-[50%] w-[40%] flex flex-col items-center justify-center'>
        <h1 className='text-xl font-bold'>Visualizar dados do cliente</h1>
        <div className='my-5'>
          <QRCode value={`
            ${payload.name},
            ${payload.cpf},
            ${payload.email},
            ${payload.car},
            ${payload.service}`
          }/>
        </div>
        <form onSubmit={handleSubmit}
          className='flex flex-col items-center justify-center'
        >
          <label htmlFor="employee" className='font-bold mt-3'>Colaborador designado
            <select id='employee' onChange={handleSelectInput} className='ml-2 p-[4px] text-black'>{
              employees.map(({id, name}: Employee) => (
                <option key={id} value={name}>{name}</option>              
              ))}
            </select>
          </label>
          <label htmlFor="parts" className='font-bold mt-3'>Necessita de peças?
            <input
              type="checkbox"
              id="parts"
              checked={isChecked}
              onChange={handleCheckbox}
              className='ml-2'
            />
          </label>
          {isChecked ? (<input id='parts' type='text' value={input.parts} onChange={handleInput}/>) : ''}
          <button type='submit'
            className='mt-5 bg-[#3ad2d6] text-white py-[1rem] px-7 font-extrabold rounded-2xl'
          >Fechar serviço</button>
        </form>
      </section>
    </div>
  )
}