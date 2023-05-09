import React, { useState } from 'react';
import './Calculadora.css';

function Calculadora() {
  const [nome, setNome] = useState('');
  const [percentual, setPercentual] = useState('');
  const [data, setDate] = useState('');

  return (
    <div className='calculadora'>
      <h2>Nossa proposta</h2>
      <form>
        <label>Crédito</label><br />
        <span className='subtitulo'>(valor do bem)</span><br />
        <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} /><br />  
                
        <label>Percentual Pago</label><br />
          
          <span className='subtitulo'>(valor pago em percentual do bem)</span><br />
          <input type="number" value={percentual} onChange={(event) => setPercentual(event.target.value)} /><br />
        
        
        <label>Encerramento do Grupo</label><br />
        <span className='subtitulo'>(faltando até 10 anos para encerrar o grupo)</span><br />
          <input type="date" value={data} onChange={(event) => setDate(event.target.value)} />
        <br/>
        <button type="submit">Calcular</button>
      </form></div>
    );
  }

  export default Calculadora;