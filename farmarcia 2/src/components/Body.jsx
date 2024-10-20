import React, { useState } from 'react';
import './Body.css';
import farmarciaCamisetas from '../assets/images/camisetas.png';

function Body({ fila, filaPreferencial }) {
    
  const [mostrarCamisetas, setMostrarCamisetas] = useState(false);
  const [mostrarHistoria, setMostrarHistoria] = useState(false);

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
          {mostrarCamisetas ? (
            <>
              <button onClick={() => setMostrarCamisetas(false)}>Camisetas da Farmárcia</button>
              <img 
                src={farmarciaCamisetas} 
                alt="Camisetas da Farmárcia" 
                className="imagem-camiseta" 
              />
            </>
          ) : (
            <button onClick={() => setMostrarCamisetas(true)}>Camisetas da Farmárcia</button>
          )}
      </div>

      <div className='historia-farmarcia'>
        <h2>A história da Farmárcia</h2>
        {mostrarHistoria ? (
          <>
            <button onClick={() => setMostrarHistoria(false)}>Conheça nossa História</button>
            <p className="historia-texto">
              Nome: Márcia Maria Mirenda <br /><br />
              Idade: 32 anos <br /><br />
              Márcia possui formação em administração de empresas, com uma paixão especial por empreendedorismo e design. <br /><br />
              Márcia sempre foi uma pessoa determinada e criativa. Ela cresceu em uma família onde o empreendedorismo era valorizado, inspirada pelo sucesso de seu tio Mário, que administrava uma farmácia local. <br /><br />
              Depois de se formar na faculdade, Márcia se casou e começou a trabalhar em uma empresa de marketing, onde pôde desenvolver suas habilidades em design e gestão. No entanto, sua vida pessoal deu uma reviravolta quando seu casamento chegou ao fim após um evento no mínimo estranho. Seu marido saiu para comprar cigarros e nunca mais voltou, deixando Márcia sozinha para lidar com a dor do abandono e o desafio de reconstruir sua vida. <br /><br />
              Decidida a seguir em frente, Márcia viu na farmácia de seu tio Mário uma oportunidade de recomeçar. Ela comprou o negócio e começou a reformá-lo, aplicando suas habilidades em administração e design para transformá-lo em um espaço moderno e acolhedor. <br /><br />
              Enquanto renovava a farmácia, Márcia também decidiu investir em tecnologia para impulsionar o negócio. Ela implementou um sistema de gerenciamento de estoque automatizado e lançou um programa de fidelidade digital para os clientes, proporcionando uma experiência de compra mais conveniente e personalizada. <br /><br />
              Agora, com a farmácia renovada e pronta para competir no mercado, Márcia está determinada a fazer da Farmárcia um sucesso. Ela está em busca de um programador de tecnologia para ajudá-la a desenvolver uma presença online robusta, incluindo um website responsivo e aplicativos móveis que ofereçam aos clientes uma experiência de compra moderna e simplificada. A história de Márcia é um testemunho de resiliência e determinação, mostrando como ela transformou uma adversidade em uma oportunidade de crescimento pessoal e profissional. Ahhh, e ela é muito mais feliz agora :D <br /><br />
            </p>
          </>
        ) : (
          <button onClick={() => setMostrarHistoria(true)}>Conheça nossa História</button>
        )}
      </div>

      
      <div className="senhas-container">
        <h2>Senhas Solicitadas</h2>

        <div>
          <h3>Fila Normal</h3>
          {fila.length === 0 ? (
            <p>Nenhuma senha normal gerada.</p>
          ) : (
            fila.map((senha, index) => (
              <div className="div-senha" key={index}>
                <p>Senha: {senha.numero}</p>
                <p>Tipo: {senha.tipo}</p>
              </div>
            ))
          )}
        </div>

        <div>
          <h3>Fila Preferencial</h3>
          {filaPreferencial.length === 0 ? (
            <p>Nenhuma senha preferencial gerada.</p>
          ) : (
            filaPreferencial.map((senhaPreferencial, index) => (
              <div className="div-senha" key={index}>
                <p>Senha: {senhaPreferencial.numero}</p>
                <p>Tipo: {senhaPreferencial.tipo}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Body;

