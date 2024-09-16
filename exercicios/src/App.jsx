import { useState } from 'react'
import './App.css'
import ArCondicionado from './pages/ArCondicionado'
import Porquinho from './pages/Porquinho'


function App() {
  const [pagina, setpagina] = useState()

  return (
    <>
      <nav>
        <button onClick={() => setpagina(<ArCondicionado />)}>5.27</button>
        <button onClick={() => setpagina(<Porquinho />)}>5.25</button>
      </nav>
       { pagina }
    
    </>  
    )

}

export default App
