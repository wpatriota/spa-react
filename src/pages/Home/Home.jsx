// Home.js
import React from "react";
import Calculadora from "../../components/Calculadora/Calculadora";
import HomeDescription from "../../components/HomeDescription/HomeDescription";
import VideoBackground from "../../components/VideoBackground/VideoBackground";
//import VideoPlayer from "react-background-video-player";
//import video from "../../assets/backvideo-objetiva.mp4";  
import "./Home.css";

function Home() {
  return (
    <section className="sectionHome" style={{ position: "relative" }}>   
      <VideoBackground />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <HomeDescription />
        <div className="area-calculadora"> 
          <div style={{ gridArea: "right" }} className="div-calculadora">
            <Calculadora />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
