// VideoBackground.js
import React from 'react';
import './VideoBackground.css'; // Importe o arquivo de estilo que contém a classe .video-background

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src="../../assets/backvideo-objetiva.mp4" type="video/mp4" />
        {/* Adicione outras sources para formatos de vídeo alternativos, se necessário */}
        {/* <source src="../../assets/backvideo-objetiva.webm" type="video/webm" />
        <source src="../../assets/backvideo-objetiva.ogg" type="video/ogg" /> */}
        Seu navegador não suporta a exibição de vídeos em background.
      </video>
    </div>
  );
};

export default VideoBackground;
