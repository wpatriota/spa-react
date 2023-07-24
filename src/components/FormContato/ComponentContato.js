import React, { useState } from 'react';
import './ComponentContato.css';

function ComponentContato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode fazer algo com os dados do formulário, como enviar para o servidor
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Mensagem:', mensagem);
    // Aqui você pode fazer uma chamada a API ou qualquer ação necessária para lidar com os dados do formulário
    // Exemplo fictício de envio para uma API:
    // fetch('URL_DA_SUA_API', {
    //   method: 'POST',
    //   body: JSON.stringify({ nome, email, mensagem }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).then(response => response.json())
    //   .then(data => console.log('Resposta da API:', data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </label>
      <br />
      <label>
        Mensagem:
        <textarea value={mensagem} onChange={(event) => setMensagem(event.target.value)} required />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ComponentContato;
