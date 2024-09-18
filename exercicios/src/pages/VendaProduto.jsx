import React from 'react'
import { useState } from 'react'

function VendaProduto() {
  
  
  
  
    return (
<div>

        <h1>5.23 - Venda de Produtos</h1>
        <p>5.23 – Um comerciante comprou um produto e quer vendê-lo com lucro de 
45% se o valor da compra for menor que R$20,00; caso contrário, o lucro 
será de 30%. Faça um programa que entre com o valor do produto e mostre 
o valor de venda. </p>
    
    <div className='from-container'>

        <div className='input-container'>
            <label htmlFor="inpProduto">Valor do Produto</label>
            <input type="number" id='inpProduto' 
                value={inputProduto}
                onChange={(event) => setInputProduto(event.target.value)}
            />
        </div>










    </div>
    
    
    
    
    
    
    
    
    
</div>
  )
}

export default VendaProduto
