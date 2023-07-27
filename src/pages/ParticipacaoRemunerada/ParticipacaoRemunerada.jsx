import React from 'react';
import LoginPPR from '../../components/LoginPPR/LoginPPR';
import './ParticipacaoRemunerada.css';

function ParticipacaoRemunerada() {
  return (
    <section className='participacao-remunerada'>      
      <div className='description-section'>
        <h2>No momento estamos em manutenção</h2>
        <p>
          Entre em contato através de nossos canais de atendimento para mais informações.
        </p>
      </div>
      <div className='login-section'>
        <LoginPPR />
      </div>
    </section>
  );
}

export default ParticipacaoRemunerada;
