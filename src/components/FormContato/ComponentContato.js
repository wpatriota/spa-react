import './ComponentContato.css';
import React, { useState } from 'react';

function ComponentContato(){
    const [nome, setNome] = useState('');
    const [percentual, setPercentual] = useState('');
    const [data, setDate] = useState('');
  
    const [isCalculado, setIsCalculado] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode fazer algo com os dados do formulário
        console.log('Nome:', nome);
        //console.log('Email:', email);
        console.log('Percentual:', percentual);
        console.log('Data:', data);
        setIsCalculado(true);
      };

    return (
        <form>
          <label>
            Crédito <br />(valor do bem)<br />
            <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
          </label>
          <br />
          <label>
            Percentual Pago<br />(valor pago em percentual do bem)<br />
            <input type="number" value={percentual} onChange={(event) => setPercentual(event.target.value)} />
          </label>
          <br />
          <label>
          Encerramento do Grupo<br />(faltando até 10 anos para encerrar o grupo)<br />
            <input type="date" value={data} onChange={(event) => setDate(event.target.value)} />
          </label><br />
          <button type="submit">Calcular</button>
        </form>
      );
}

export default ComponentContato;