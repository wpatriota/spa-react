import React from "react";
import "./VideoBackground.css";
import VideoPlayer from "react-background-video-player";
import video from "../../assets/backvideo-objetiva.mp4"; 

const VideoBackground = () => {
  return (
    <VideoPlayer
        className="video"
        src={
          video
        }
        autoPlay={true}
        muted={true}
        containerWidth="100%"
        containerHeight="100%"
      />
  );
};

export default VideoBackground;
