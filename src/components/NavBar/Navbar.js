import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Sobre from '../../pages/Sobre/Sobre';
import Servicos from '../../pages/Servicos/Servicos';
import Contato from '../../pages/Contato/Contato';
import ParticipacaoRemunerada from '../../pages/ParticipacaoRemunerada/ParticipacaoRemunerada';

import './Navbar.css';


import React from "react";

function Navbar(){
    return (
      <Router>
        <nav className="menu">
          <ul>
            <img className='logo-nav' src="logo-objetiva2.png" alt="Logo Objetiva" />
            <li><Link to="/">Home</Link></li>            
            <li><Link to="/participacaoRemunerada">Programa de parceria remunerada</Link></li>
            <li><Link to="/servicos">Intermediação de cotas canceladas</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="https://objetivascp.com.br/login">Painel SCP</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/participacaoRemunerada" element={<ParticipacaoRemunerada />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Router>
    );    
}

export default Navbar;
