import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { fetchByCpf } from '../api'
import { ServiceContext } from '@/context/serviceContext'
import Image from 'next/image'
import logo from '../../public/logo.png'

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
    <div className='h-screen flex flex-col items-center justify-center'>
      <div className='mt-[-4rem] flex flex-col items-center justify-center'>      
        <Image
          src={logo}
          alt="Ultracar's logo"
          width={300}
          height={300}
      />
        <form onSubmit={handleSubmit} className='border-[1px] rounded-2xl 
          bg-[#202b57] text-white h-[20rem] w-[30rem] mt-4
          flex flex-col items-center justify-center'
        >
          <h1 className='text-xl font-bold'>Encontre o cliente</h1>
          <input
            id="cpf"
            type="text"
            value={input}
            onChange={handleInput}
            maxLength={ELEVEN}
            placeholder="Insira o seu CPF"
            className='p-3 my-11 rounded-xl text-black'
          />
          <button 
            id='find'
            type='submit'
            disabled={isDisabled}
            className='bg-[#3ad2d6] py-[1rem] px-7 font-extrabold rounded-2xl'
          >
            Encontrar
          </button>
        </form>
      </div>
    </div>
  )
}
