import React from 'react'
import { useState } from 'react'

function ConceitoNotas() {
  const [inputNota1, setInputNota1] = useState('')
  const [inputNota2, setInputNota2] = useState('')
  
function calcularMedia() {
  const nota1 = Number(inputNota1)
  const nota2 = Number(inputNota2)

  const mediaNotas = (nota1 + nota2) / 2;
    
  let conceito
    if(mediaNotas >= 9 && mediaNotas < 10) {
      
      conceito = 'A'
    
    }else if(mediaNotas >= 7.5 && mediaNotas < 9) {
      
      conceito = 'B'
    
    } else if (mediaNotas >= 6 && mediaNotas < 7.5) {
      
      conceito = 'C'
    
    } else if (mediaNotas >= 4 && mediaNotas < 6) {
      
      conceito = 'D'
    
    } else if (mediaNotas >= 0 && mediaNotas < 4) {
      
      conceito = 'E'
    
    }

    alert(`Média do Aluno: ${mediaNotas}\nConceito ${conceito}\nNota 1: ${nota1}\nNota 2: ${nota2}`)
  } 

  
  
    return (
    <div>
      
    <h1>5.24 - Conceito Notas</h1>
    <p>5.24 – Faça um programa que leia duas notas parciais obtidas por um 
aluno qualquer numa disciplina qualquer ao longo de um semestre 
qualquer, e calcule a sua média. De posse da média, esta deve ser 
convertida em conceito que é o novo hype do momento na educação!
A conversão deve seguir a regra descrita abaixo: <br />
Nota Conceito <br />
Entre ]9.0[ e [10.0] A <br />
Entre ]7.5[ e [9.0] B <br />
Entre ]6.0[ e [7.5] C <br />
Entre ]4.0[ e [6.0] D <br />
Entre [0.0] e [4.0] E <br />
O resultado deste programa deve ser um relatório contendo as notas do 
aluno, sua média e o conceito atingido. </p>


        <div className='from-container'>

            <div className='input-container'>
                <label htmlFor="inpNota1">Nota 1</label>
                <input type="number" id="inpNota1" 
                    value={inputNota1}
                    onChange={(event) => setInputNota1(event.target.value)}
                />
            </div>
            <div className='input-container'>
                <label htmlFor="inpNota2">Nota 2</label>
                <input type="number" id="inpNota2" 
                    value={inputNota2}
                    onChange={(event) => setInputNota2(event.target.value)}
                />
            </div>

        
        </div>

        <button onClick={calcularMedia}>Calcular Média</button>


    </div>
  )
}

export default ConceitoNotas
