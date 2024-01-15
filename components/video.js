"use client";
import React, { useState } from "react";

import ReactPlayer from "react-player";

//import videoImg from 'assets/video.png';

const VideoOne = ({ id }) => {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        className="react-playerG"
        controls
        width="100%"
        height="100%"
      />
    </>
  );
};

export default VideoOne;
