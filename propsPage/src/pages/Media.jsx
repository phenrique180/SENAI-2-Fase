import React from 'react'
import Titulo from '../components/Titulo'
import './Media.css'

function Media() {
  
    let notaUm, notaDois, notaTres, notaQuatro
    let pesoUm, pesoDois, pesoTres, pesoQuatro
    let somaPesos, mediaPonderada

    notaUm = Number(prompt("Digite a primeira nota: "))
    pesoUm = Number(prompt("Digite o primeiro peso: "))
    
    notaDois = Number(prompt("Digite a segunda nota: "))
    pesoDois = Number(prompt("Digite o segundo peso: "))

    notaTres = Number(prompt("Digite a terceira nota: "))
    pesoTres = Number(prompt("Digite o terceiro peso: "))

    notaQuatro = Number(prompt("Digite a quarta nota: "))
    pesoQuatro = Number(prompt("Digite o quarto peso: "))

    somaPesos = pesoUm + pesoDois + pesoTres + pesoQuatro
    mediaPonderada = (notaUm * pesoUm + notaDois * pesoDois + notaTres * pesoTres + notaQuatro * pesoQuatro) / somaPesos

    if(mediaPonderada >= 7){

        alert("ALUNO APROVADO")
    
    }else if(mediaPonderada < 7){

        alert("ALUNO REPROVADO")

    }

    alert("A média ponderada é: " + mediaPonderada.toFixed(2))
  
  
  
  
  
  
    return (
    <div className='media-container'>
      
      <Titulo texto={"Calculadora de Média"} />


    </div>
  )
}

export default Media
