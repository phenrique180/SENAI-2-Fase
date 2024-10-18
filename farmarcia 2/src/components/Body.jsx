import React, { useState } from 'react';
import './Body.css';
import farmarciaCamisetas from '../assets/images/camisetas.png';

function Body() {
    
  const [mostrarCamisetas, setMostrarCamisetas] = useState(false);

  return (
    <div className='body-container'>
       <h1 className='titulo'>Seja bem-vindo à Farmárcia!</h1>
          
          <p className="subtitulo">
            Compareça à Farmárcia mais perto da sua casa, em todo o Brasil.
          </p>
          <p className="invitation">
            Nós temos os melhores preços e melhores atendimentos do país.
          </p>
          <p className="invitation">
            Aqui sua saúde é garantida.
          </p>

          <div className='conteudos-exclusivos'>
            <h2>Confira nossos conteúdos exclusivos</h2>
              <button onClick={() => setMostrarCamisetas(true)}>Camisetas da Farmárcia</button>

                 {mostrarCamisetas && (
                   <img 
                    src={farmarciaCamisetas} 
                    alt="Camisetas da Farmárcia" 
                    className="imagem-camiseta" 
                  />
                )}
            
            </div>
        
        
        
    </div>
    );
}

export default Body;
