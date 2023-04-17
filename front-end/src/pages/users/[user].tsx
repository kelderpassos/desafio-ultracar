import { ChangeEventHandler, useState } from 'react'
import QRCode from 'react-qr-code'
import { clientsDatabase, employees } from '../../data'
import { useRouter } from 'next/router'

const initialState = {
	employee: 'Joana',
  parts: ''
}

export default function User() {
  const [input, setInput] = useState<Record<string, string>>(initialState)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const router = useRouter();

  const user = clientsDatabase[0]

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = ({ target: {id, value} }) => {
    setInput((prevState) => ({...prevState, [id]: value}))   
  }

  const handleSelectInput: React.ChangeEventHandler<HTMLSelectElement> = ({ target: {id, value} }) => {
    setInput((prevState) => ({...prevState, [id]: value}))
  }

  const handleCheckbox: ChangeEventHandler<HTMLInputElement> = ({ target: { checked } }) => {
		setIsChecked(checked);
	}

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    router.push('/services')
  }

  return (
    <div>
      <section>
        <h1>Visualizar dados do cliente</h1>
        <QRCode value={`
          ${user.name},
          ${user.cpf},
          ${user.email},
          ${user.car},
          ${user.service}`
        }/>
      </section>

      <form onSubmit={handleSubmit}>
        <label htmlFor="employee">Colaborador designado
          <select id='employee' onChange={handleSelectInput}>{
            employees.map(({id, name}) => (
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