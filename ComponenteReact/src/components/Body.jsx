import Ken from './Ken'
import BarbieAriel from './BarbieAriel'
import './Body.css'

function Body() {
  return (
    <div className='body-container'>
      <h2>Barbie Moana</h2>
      <img className="imagens-body" src="./imagens/Barbie Moana.webp" alt="" />

      <BarbieAriel />
      <Ken />
    </div>
  )
}

export default Body
