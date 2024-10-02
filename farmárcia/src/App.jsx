import { useState } from 'react'
import './App.css'

function App(){
  const [fila, setFila] = useState([])

  function gerarSenha(){
    let senha = {
      numero: Date.now(),
      tipo: "normal",
    }

    setFila([...fila, senha])
  }

  function gerarSenhaPreferencial(){
    let senhaPreferencial = {
      numero: Date.now(),
      tipo: "preferencial",
    }

    setFila([...fila, senhaPreferencial])
  }

  function atender(){
    if(fila.length === 0) {
      alert("Não tem ninguém na fila")
      return
    }

    // Separar senhas preferenciais e normais
    const preferenciais = fila.filter(senha => senha.tipo === "preferencial")
    const normais = fila.filter(senha => senha.tipo === "normal")

    let senhaAtendida

    // Se houver senhas preferenciais, chamar a de menor número
    if(preferenciais.length > 0){
      
      senhaAtendida = preferenciais.sort((a, b) => a.numero - b.numero)[0]
    
    }else{
      // Se não houver preferenciais, chamar a de menor número normal
      senhaAtendida = normais.sort((a, b) => a.numero - b.numero)[0]
    }

    alert(`Atendendo: ${senhaAtendida.numero} (${senhaAtendida.tipo})`)
    
    // Atualizar a fila removendo a senha atendida
    setFila(fila.filter(senha => senha.numero !== senhaAtendida.numero))
  }

  return (
    <>
      
      
      {fila.map((senha) => (
        <div key={senha.numero}>
          <p>{senha.numero}</p>
          <p>{senha.tipo}</p>
        </div>
      ))}
      <div className='container'>

        <div className='topo'>

        </div>


      <button onClick={atender}>Atender</button>
      <button onClick={gerarSenha}>Senha Normal</button>
      <button onClick={gerarSenhaPreferencial}>Senha Preferencial</button>





      </div>
    </>
  )
}

export default App;

