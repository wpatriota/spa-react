import React from "react";
import './Footer.css';
import { AiFillPhone } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <div className="company-info">
          <h3>OBJETIVA - SOLUÇÕES EM CONSÓRCIO S/S LTDA</h3>
          <span className="cnpj">CNPJ: 13.282.501/0001-50</span>
        </div>

        <div className="contact-info">
          <div className="contact-section">
            <AiFillPhone className="contact-icon" />
            <span>(11) 3207-6869</span>
          </div>
          <div className="contact-section">
            <AiFillPhone className="contact-icon" />
            <span>(11) 3207-6869</span>
          </div>
        </div>

        <div className="address">
          Rua Espírito Santo, 273 - Aclimação - São Paulo - SP
        </div>

        <div className="social-media">
          <a href="/facebook.com">
            <BsFacebook className="social-icon" />
          </a>
          <a href="/">
            <BsInstagram className="social-icon" />
          </a>
          <a href="/">
            <BsLinkedin className="social-icon" />
          </a>
          <a href="/">
            <BsWhatsapp className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
