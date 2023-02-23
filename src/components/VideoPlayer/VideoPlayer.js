import React from "react";
import { useLocation } from "react-router-dom";
import ReactHlsPlayer from "react-hls-player";
import './VideoPlayer.css'

function VideoPlayer() {
  const location = useLocation();

  console.log("location:", location);

  return (
    <>
      <div className="video-center">
        <ReactHlsPlayer
          src={location.state?.videoLink}
          autoPlay={true}
          controls={true}
        />
      </div>
    </>
  );
}

export default VideoPlayer;
