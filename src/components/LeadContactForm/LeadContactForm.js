import React, { useState } from 'react';
import './LeadContactForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function LeadContactForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  
  const notify = () => {
    toast.success('🚀 Cadastrado com sucesso!');    
  };

  const handleSubmit = (event) => {
    event.preventDefault();    
    notify();
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
  <ToastContainer />
  <div className="form-group">
    <label htmlFor="nome">Nome:</label>
    <input type="text" id="nome" value={nome} onChange={(event) => setNome(event.target.value)} required />
  </div>

  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
  </div>

  <div className="form-group">
    <label htmlFor="celular">Celular:</label>
    <input type="text" id="celular" value={celular} onChange={(event) => setCelular(event.target.value)} required />
  </div>

  <button type="submit" className="btnVenderCota">Quero vender meu consórcio cancelado</button>      
</form>
  );
}

export default LeadContactForm;
