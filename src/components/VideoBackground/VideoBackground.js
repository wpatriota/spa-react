// VideoBackground.js
import React from "react";
import "./VideoBackground.css";

const VideoBackground = () => {
  return (
    <video autoPlay loop muted playsInline className="video-background">
      <source src="https://youtu.be/ZrJxWpV--Yw" type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
