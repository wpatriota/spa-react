import React, { useState } from 'react';
import './ComponentContato.css';

function ComponentContato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log('Nome:', nome);
    //console.log('Email:', email);
    //console.log('Mensagem:', mensagem);
  };

  return (
    <form onSubmit={handleSubmit} className='contact-form'>
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
