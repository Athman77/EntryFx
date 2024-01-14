import React, {useState} from 'react'
import ModalVideo from 'react-modal-video';

function Video() {
    const [videoOpen, setVideoOpen] = useState(true);
    const handleClick = (e) => {
      e.preventDefault();
      setVideoOpen(true);
    };
  return (
    <ModalVideo
        channel="youtube"
        isOpen={videoOpen}
//https://youtu.be/ZbsQPAO3890?si=22MwZ7NYnXhFE7QP
        videoId="B4cnfk27rA4"
        onClose={() => setVideoOpen(false)}
      />
  )
}

export default Video