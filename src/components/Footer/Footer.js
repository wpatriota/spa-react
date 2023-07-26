import React from "react";
import './Footer.css';
import {AiFillPhone} from 'react-icons/ai';
import {BsInstagram, BsFacebook, BsLinkedin, BsWhatsapp} from 'react-icons/bs';

function Footer(){
  return (
    <footer className='footer'>
      <h3>OBJETIVA - SOLUÇÕES EM CONSÓRCIO S/S LTDA</h3>
      <div className="redes-sociais">
        <a href="/facebook.com">
          <BsFacebook />
        </a>
        <a href="/">
          <BsInstagram/>
        </a>
        <a href="/">
          <BsLinkedin/>
        </a>
        <a href="/">
          <BsWhatsapp/>
        </a>
      </div>
      <span className="cnpj">CNPJ: 13.282.501/0001-50</span><br/>

      <div className="telefones">
        <AiFillPhone/>(11) 3207-6869 <br/>
        <AiFillPhone/>(11) 3207-6869
      </div><br/>
  
      <div className="endereco">
        Rua Espírito Santo, 273 - Aclimação - São Paulo - SP
      </div>

      
   </footer>
  )  
}

export default Footer;