import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

const ELEVEN = 11

export default function Home() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = ({target}) => {
    setInput(target.value) 
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    router.push('/users/teste')
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
