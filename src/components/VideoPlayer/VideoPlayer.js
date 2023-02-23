import React from "react";
import { useLocation } from "react-router-dom";
import ReactHlsPlayer from "react-hls-player";

function VideoPlayer() {
  const location = useLocation();

  console.log("location:", location);

  return (
    <>
      <ReactHlsPlayer
        src={location.state?.videoLink}
        autoPlay={true}
        controls={true}
      />
    </>
  );
}

export default VideoPlayer;
