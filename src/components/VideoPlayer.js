import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function VideoPlayer() {
  return (
    <>
      <div>VideoPlayer</div>
      <Button>
        <Link to="/">HOME</Link>
      </Button>
    </>
  );
}

export default VideoPlayer;
