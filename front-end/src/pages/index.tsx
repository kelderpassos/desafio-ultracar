import {clientsDatabase} from '../data'

export default function Home() {
  return (
    <div>
      <img src="" alt="" />
      <form action="">
        <h1>Encontre o cliente</h1>
        <label htmlFor="cpf">
          <input id="cpf" type="text" placeholder="Insira o seu CPF"/>
        </label>
        <button id='find' type='submit'>Encontrar</button>
      </form>
    </div>
  )
}
