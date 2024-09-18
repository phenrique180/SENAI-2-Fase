import { useState } from 'react'
import './App.css'
import ArCondicionado from './pages/ArCondicionado'
import Porquinho from './pages/Porquinho'
import ConceitoNotas from './pages/ConceitoNotas'
import VendaProduto from './pages/VendaProduto'
import Albergue from './pages/Albergue'


function App() {
  const [pagina, setpagina] = useState()

  return (
    <>
      <nav>
        <button onClick={() => setpagina(<ArCondicionado />)}>5.27</button>
        <button onClick={() => setpagina(<Porquinho />)}>5.25</button>
        <button onClick={() => setpagina(<ConceitoNotas />)}>5.24</button>
        <button onClick={() => setpagina(<VendaProduto />)}>5.23</button>
        <button onClick={() => setpagina(<Albergue />)}>5.7</button>
      </nav>
       { pagina }
    
    </>  
    )

}

export default App
