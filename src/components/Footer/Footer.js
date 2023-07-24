import React from "react";
import './Footer.css';
import {AiFillPhone} from 'react-icons/ai';

function Footer(){
  return (
    <footer className='footer'>
      <h3>OBJETIVA - SOLUÇÕES EM CONSÓRCIO S/S LTDA</h3>
      <span className="cnpj">CNPJ: 13.282.501/0001-50</span><br/>

      <div className="telefones">
        <AiFillPhone/>(11) 3207-6869 <br/>
        <AiFillPhone/>(11) 3207-6869
      </div><br/>
  
      <div className="endereco">
        Rua Espírito Santo, 273 - Aclimação - São Paulo - SP
      </div>

      <div className="redes">
      <a href="/">
        <i className="fab fa-facebook"></i> {/* Ícone do Facebook */}
      </a>
      <a href="/">
        <i className="fab fa-instagram"></i> {/* Ícone do Instagram */}
      </a>
      <a href="/">
        <i className="fab fa-linkedin"></i> {/* Ícone do LinkedIn */}
      </a>
    </div>
   </footer>
  )  
}

export default Footer;