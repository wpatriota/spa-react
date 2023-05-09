import React from "react";
import './Footer.css';

function Footer(){
  return (
    <footer className='footer'>
      <h3>OBJETIVA - SOLUÇÕES EM CONSÓRCIO S/S LTDA</h3>
      <span>CNPJ: 13.282.501/0001-50</span><br/>

      <div className="telefones">
        (11) 3207-6869
        (11) 3207-6869
      </div><br/>
  
      <div className="endereco">
        Rua Espírito Santo, 273 - Aclimação - São Paulo - SP
      </div>

      <div className="redes">
        <a href="/">Facebook</a>
        <a href="/">Instagram</a>
        <a href="/">Linkedin</a>
      </div>
   </footer>
  )  
}

export default Footer;