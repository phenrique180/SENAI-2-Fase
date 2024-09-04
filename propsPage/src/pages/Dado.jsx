import { GiPerspectiveDiceSixFacesTwo } from "react-icons/gi";
import { useState } from 'react'
import Titulo from '../components/Titulo'
import './Dado.css'

function Dado() {
    const [dado, setdado] = useState()
  function rodarDado(){

    let numeroSorteado = Math.floor(Math.random()* 6) + 1
    setdado(numeroSorteado)
    

  }
  
  
    return (
    <div className='dado-container'>

    <Titulo texto={"Rode o Dado"} emoji={"🎲"}/>
    <button onClick={rodarDado} className='btn-dado'>Rodar</button>
      <GiPerspectiveDiceSixFacesTwo />
      {dado}
    </div>
  )
}

export default Dado
