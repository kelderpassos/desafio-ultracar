import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { fetchByCpf } from '../api'
import { ServiceContext } from '@/context/serviceContext'

const ELEVEN = 11

export default function Home() {
  const [input, setInput] = useState('')
  const { sendClient } = useContext(ServiceContext)
  const router = useRouter()

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = ({target}) => {
    setInput(target.value) 
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    const client = await fetchByCpf(input)    
    sendClient(client)

    router.push(`/clients/${client.id}`)
  }

  const isDisabled = input.length !== ELEVEN

  return (
    <div>
      {/* <img src={ logo } alt="" /> */}
      <form onSubmit={handleSubmit}>
        <h1>Encontre o cliente</h1>
        <input
          id="cpf"
          type="text"
          value={input}
          onChange={handleInput}
          maxLength={ELEVEN}
          placeholder="Insira o seu CPF"/>
        <button id='find' type='submit' disabled={isDisabled}>Encontrar</button>
      </form>
    </div>
  )
}
