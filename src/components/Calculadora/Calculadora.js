import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import calcularResultado from '../../utils/calculos';
import './Calculadora.css';
import LeadContactForm from '../LeadContactForm/LeadContactForm';
//import DateInput from '../DateInput/DateInput';

function Calculadora() {
  const [credito, setCredito] = useState('');
  const [percentual, setPercentual] = useState('');
  const [dataEncerramento, setDataEncerramento] = useState('');
  const [isGirando, setIsGirando] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);

  const handleCalcular = (event) => {
    event.preventDefault();

    // Chamamos a função de cálculo e passamos os valores inseridos nos campos
    let resultadoCalculo = calcularResultado(credito, percentual, dataEncerramento);

    
    // Validar os campos antes de calcular
    if (!credito || !percentual || !dataEncerramento) {
      // Exibir a mensagem de erro se algum campo estiver vazio
      setShowErrorMessage(true);
      setShowFailMessage(false);
      setResultado(null);
      setIsGirando(false);
      return;
    }else{
      // Verificamos se o resultado do cálculo é um número antes de continuar
    if (!isNaN(resultadoCalculo)) {
      resultadoCalculo = parseFloat(resultadoCalculo);

      if(resultadoCalculo === 0){        
        setShowFailMessage(true);
        setShowErrorMessage(false);
        setResultado(null);
        setIsGirando(false);
        return;
      }else{
        // Arredondamos o resultado para 2 casas decimais
        const resultadoArredondado = parseFloat(resultadoCalculo).toFixed(2);
        setResultado(resultadoArredondado);
        setIsGirando(true); // Inicia o efeito de girar a calculadora
      }
      
    } else {
      // Caso o resultado não seja um número válido, definimos o resultado como null
      setResultado(null);
      
    }
    }
  };

  const handleVoltar = () => {
    setIsGirando(false); // Define isGirando como falso para mostrar a frente (calculadora)
    setShowErrorMessage(false);
    setShowFailMessage(false); 
    setResultado(null); // Limpa o resultado para permitir um novo cálculo
    setCredito(''); // Limpa o campo de crédito
    setPercentual(''); // Limpa o campo de percentual
    setDataEncerramento(''); // Limpa o campo de data de encerramento
  };

  return (
    <div className={`calculadora ${isGirando ? 'girando' : ''}`}>
      {!isGirando ? (
        <div className="frente">
          {showErrorMessage && <div className="error-message">Por favor, preencha todos os campos corretamente!</div>}
          {showFailMessage && <div className="fail-message">Valores fora dos nossos parâmetros de proposta</div>}
        
          <h3>Nossa Proposta</h3>
          <form>
            <label>Crédito</label><br />
            <span className='subtitulo'>(valor do bem)</span><br />
            <CurrencyInput
              intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
              prefix="R$ "
              decimalsLimit={2}
              groupSeparator="."
              decimalSeparator=","
              value={credito}
              onValueChange={(value, name) => setCredito(value)}
            />
            <br />  
                    
            <label>Percentual Pago</label><br />
            <span className='subtitulo'>(valor pago em percentual do bem)</span><br />
            <CurrencyInput                         
              suffix="%"
              allowDecimals={true}              
              decimalSeparator=","
              allowNegativeValue={false}
              value={percentual}
              decimalScale={4}
              decimalsLimit={4}
              maxLength={7}
              //fixedDecimalLength={4}   
              format="##,####"           
              onValueChange={(value, name) => setPercentual(value)}
            />
            <br />
            
            <label>Encerramento do Grupo</label><br />
            <span className='subtitulo'>(faltando até 10 anos para encerrar o grupo)</span><br />
            <input type="date" value={dataEncerramento} onChange={(event) => setDataEncerramento(event.target.value)} />
            <br/>
            <button className='btnCalcular' type="submit" onClick={handleCalcular}>Calcular</button>
          </form>
        </div>
      ) : (
        <div className="resultado-costas">          
          <div className="resultado-content">
            <h1>Confira nossa proposta</h1>
            <p className="valor-economia">{resultado ? parseFloat(resultado).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '0,00'}</p>                      
          </div>
          <LeadContactForm />          
          <button className='btnVoltar' onClick={handleVoltar}> ↩ Voltar</button>
        </div>
      )}
    </div>
  );
}

export default Calculadora;
