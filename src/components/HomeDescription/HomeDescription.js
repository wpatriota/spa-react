import React from 'react';
import './HomeDescription.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css'

function HomeDescription(){
    return(
        <div className='HomeDescription'>
          
          <h1>Não venda seu consórcio cancelado <br />sem antes nos consultar</h1>
          
          <ul>
            <li> <AiOutlineCheckCircle /> Pagamento imediato;</li>
            <li> <AiOutlineCheckCircle /> Negociação transparente, segura e sem burocracia;</li>
            <li> <AiOutlineCheckCircle /> Procedimento 100% online;</li>
            <li> <AiOutlineCheckCircle /> Trate sua cota de consórcio como um investimento em ativo de alta liquidez.</li>
            <li> <AiOutlineCheckCircle /> COMPRAMOS COTAS CANCELADAS DESSAS ADMINISTRADORAS</li>
          </ul>
        </div>
    );
}

export default HomeDescription;