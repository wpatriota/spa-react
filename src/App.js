import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="container">
    <Router>
      <nav className="menu">
        <ul>
          <li><Link to="/"><img src="logo192.png" alt="Logo Objetiva" class="logo-objetiva" /></Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Parceria Remunerada</Link></li>
          <li><Link to="/servicos">Intermediação de cotas canceladas</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="https://objetivascp.com.br/login">Painel SCP</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
    </div>
  );
}

function Home() {
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}> 
    <div style={{ gridArea: 'left' }}>
      <h1>Não venda seu consórcio cancelado sem antes nos consultar</h1>
      <p>Este é um exemplo básico de um site Single Page Application (SPA).</p>
    </div>
    <div style={{ gridArea: 'right' }} className='calculadora'>
      teste
    </div>
    </section>
  );
}

function Sobre() {
  return (
    <section>
      <h2>Sobre Nós</h2>
      <p>Conheça mais sobre nossa empresa e nossa equipe.</p>
    </section>
  );
}

function Servicos() {
  return (
    <section>
      <h2>Nossos Serviços</h2>
      <p>Conheça nossos serviços e como podemos ajudá-lo.</p>
    </section>
  );
}

function Contato() {
  return (
    <section>
      <h2>Entre em Contato</h2>
      <p>Preencha o formulário abaixo e entraremos em contato em breve.</p>
      <form>
        {/* aqui vem o formulário de contato */}
      </form>
    </section>
  );
}

export default App;
