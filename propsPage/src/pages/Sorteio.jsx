import Titulo from '../components/Titulo'
import './Sorteio.css'

function Sorteio() {
  function sortear(){
    
    let numeroSorteado = Math.floor(Math.random() * (99 - 0) + 0);
    alert(`Numero sorteado: ${numeroSorteado}`)

  
    }

  return (
    <div className='sorteio-container'>
      <Titulo texto={"Sorteio"} emoji={"🎲"} />
      <button onClick={sortear} className='btn-sorteio'>Sortear</button>

    </div>
  )
}

export default Sorteio
