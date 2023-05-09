import TextCollapse from "../../components/TextCollapse/TextCollapse";
import './Services.css';

function Servicos() {
    return (
      <section className="services-content">
        {TextCollapse('Quem é o intermediário? ','O intermediário é quem cuida de todo o processo, desde a abordagem do consorciado até a elaboração dos documentos que instrumentalizam a negociação.')}
        {TextCollapse('Intermediação livre ','Nesse modelo o intermediário tem a liberdade de negociar livremente o valor de compra da cota cancelada, correndo por sua conta e risco todas as despesas da negociação.')}
        {TextCollapse('Intermediação vinculada à calculadora ','Segue a mesma rotina prática da intermediação livre, porém o intermediário, obrigatoriamente, precisa negociar com o consorciado com base no valor apurado na calculadora (Proposta de Compra).')}
        {TextCollapse('Disposições Gerais ','s formas de intermediação são independentes e não podem ser misturadas na mesma negociação, ou seja, para a mesma cota')}      
      </section>
    );
  }

  export default Servicos;