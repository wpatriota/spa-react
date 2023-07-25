import { differenceInMonths, parseISO } from 'date-fns';

const calcularMesesDiferenca = (dataEspecifica) => {
  const dataEspecificaDate = parseISO(dataEspecifica);
  const hoje = new Date();
  const mesesDiferenca = differenceInMonths(dataEspecificaDate, hoje);

  return mesesDiferenca;
};

function customRound(value) {
  if (value > 500) {
    return Math.ceil(value / 1000) * 1000; // Arredonda para cima para o múltiplo de 1000 mais próximo
  } else {
    return Math.floor(value / 100) * 100; // Arredonda para baixo para o múltiplo de 100 mais próximo
  }
}


const calcularResultado = (credito, percentual, dataencerramento) => {
  const valorDoBem = parseFloat(credito);
  //const valorPago = parseFloat(percentual);
  const valorPago = parseFloat(percentual.replace(',', '.'));
  const mesesDiferenca = calcularMesesDiferenca(dataencerramento);
  const valorRecebivel = valorDoBem * (valorPago / 100);
  let resultadoCalculo = 0;
  
  //console.log('valorDoBem', valorDoBem);
  //console.log('valorPago', valorPago);
  //console.log('mesesDiferenca', mesesDiferenca);


  // Cálculo do valor da proposta
  if (mesesDiferenca >= 4 && mesesDiferenca <= 12) {
    resultadoCalculo = valorDoBem * (valorPago * 0.5 / 100);
  } else if (mesesDiferenca >= 13 && mesesDiferenca <= 24) {
    resultadoCalculo = valorDoBem * (valorPago * 0.45 / 100);
  } else if (mesesDiferenca >= 25 && mesesDiferenca <= 36) {
    resultadoCalculo = valorDoBem * (valorPago * 0.4 / 100);
  } else if (mesesDiferenca >= 37 && mesesDiferenca <= 48) {
    resultadoCalculo = valorDoBem * (valorPago * 0.35 / 100);
  } else if (mesesDiferenca >= 49 && mesesDiferenca <= 60) {
    resultadoCalculo = valorDoBem * (valorPago * 0.3 / 100);
  } else if (mesesDiferenca >= 61 && mesesDiferenca <= 72) {
    resultadoCalculo = valorDoBem * (valorPago * 0.25 / 100);
  } else if (mesesDiferenca >= 73 && mesesDiferenca <= 120) {
    resultadoCalculo = valorDoBem * (valorPago * 0.2 / 100);
  }

  //console.log('resultadoCalculo', resultadoCalculo);
  // Cálculo do valor do recebível

  let lucro = 0;
  
  //console.log('valorRecebivel', valorRecebivel);
  if (valorRecebivel <= 9999) {
    lucro = 0;    
  }else{
    lucro = valorRecebivel - resultadoCalculo;
  }

  //console.log('lucro', lucro);

  if(lucro < 5000){
    resultadoCalculo = 0;
  }else{
    resultadoCalculo = customRound(resultadoCalculo);
  }
  
  return resultadoCalculo.toFixed(2);
  
};

export default calcularResultado;
