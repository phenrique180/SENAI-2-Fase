import React from 'react'
import './Header.css';
import farmarciaLogo from '../assets/images/farmarcia.png'


const Header  = ({ gerarSenha, gerarPreferencial, atender }) => {
  return (
    <div className="header-container">
      <img src={farmarciaLogo} alt="" />
      <h1>FARMÁRCIA</h1>
      <button onClick={gerarSenha}>Senha Normal</button>
      <button onClick={gerarPreferencial}>Senha Preferencial</button>
      <button onClick={atender}>Atender</button>

    </div>
  )
  
}

export default Header
