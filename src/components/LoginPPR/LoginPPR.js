import React, { useState } from 'react';
import './LoginPPR.css';

function LoginPPR() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log('Usuário:', usuario);
    //console.log('Senha:', senha);
  };

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <label>
        Usuário:
        <input
          type="text"
          value={usuario}
          onChange={(event) => setUsuario(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Senha:
        <input
          type="password"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginPPR;
