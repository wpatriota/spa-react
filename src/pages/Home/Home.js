// Home.js
import React from "react";
import VideoBackground from "../../components/VideoBackground/VideoBackground"; // Importe o componente de vídeo de background
import Calculadora from "../../components/Calculadora/Calculadora";
import HomeDescription from "../../components/HomeDescription/HomeDescription";
import './Home.css';

function Home() {
  return (
    <section className='sectionHome' style={{ position: 'relative' }}>
      <VideoBackground /> {/* Adicione o vídeo de background aqui */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <HomeDescription />
        <div>
          <h2>Transforme seu consórcio em dinheiro</h2>
          <div style={{ gridArea: 'right' }} className='div-calculadora'>
            <Calculadora />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
