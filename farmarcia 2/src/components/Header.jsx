import React from 'react'
import './Header.css';


function Header() {
  return (
    <div className="header-container">
      <img src="./farmarcia-logo-pq.png" alt="" />
      <h1>FARMÁRCIA</h1>
      <button onClick='senha'>Retire sua Senha</button>
    </div>
  )
  
}

export default Header
