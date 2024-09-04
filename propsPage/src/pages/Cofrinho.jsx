import { useState } from 'react'
import React from 'react'
import './Cofrinho.css'
import Titulo from '../components/Titulo'

function Cofrinho() {
    const [moedas, setmoedas] = useState()

    let totalCofrinho
    let valorProduto = Number(prompt("Qual o valor do produto?"))
    
    
    let quantidadeMoedas1 = Number(prompt("Quantas moedas de 1 real deseja colocar?"))
    let quantidadeMoedas50 = Number(prompt("Quantas moedas de 50 centavos deseja colocar?"))
    let quantidadeMoedas25 = Number(prompt("Quantas moedas de 25 centavos deseja colocar?"))
    let quantidadeMoedas10 = Number(prompt("Quantas moedas de 10 centavos deseja colocar?"))
    let quantidadeMoedas5 = Number(prompt("Quantas moedas de 5 centavos deseja colocar?"))

    totalCofrinho = (quantidadeMoedas1 * 1) + (quantidadeMoedas50 * 0.50) + (quantidadeMoedas25 * 0.25) + (quantidadeMoedas10 * 0.10) + (quantidadeMoedas5 * 0.05)
     
    alert(`Dinheiro total do cofre: R$${totalCofrinho.toFixed(2)}`)
    
    
    if(valorProduto > totalCofrinho){

        alert("Você não tem dinheiro o suficiente para comprar esse produto!")
    
    }else if(valorProduto <= totalCofrinho){

        alert("Você tem dinheiro o suficiente para comprar esse produto!")
    }
    
    
    
    return (
    <div className='cofrinho-container'>
      
      <Titulo texto={"Porquinho"} emoji={"🐷"} />
            
        
    
    </div>
  )
}

export default Cofrinho
