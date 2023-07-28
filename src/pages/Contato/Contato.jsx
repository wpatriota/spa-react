import React from "react";
import ComponentContato from "../../components/FormContato/ComponentContato";
import "./Contato.css"; // Import the CSS file for this component

function Contato() {
  return (
    <section className="contato-section">
      <h2 className="contato-title">Entre em Contato</h2>
      <p className="contato-description">
        Preencha o formulário abaixo e entraremos em contato em breve.
      </p>
      <div className="contato-form-container">
        <ComponentContato />
      </div>
    </section>
  );
}

export default Contato;
