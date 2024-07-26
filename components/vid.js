//
"use client";
import React, { useState } from "react";

import ReactPlayer from "react-player";

//import videoImg from 'assets/video.png';

const Vid = ({ id }) => {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <div className="">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}` || id}
        className="img"
            
        controls
        width="100%"
        height="56.25vw"
      />
    </div>
  );
};

export default Vid;
