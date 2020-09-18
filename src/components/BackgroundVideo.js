import React from 'react';
import '../styles/background_video.scss';

const BackgroundVideo = ({image}) => (
  <div className="backgroundvideo">
    <video autoPlay muted loop id="backgroundvideo__video">
        <source src={image} type="video/mp4" />
    </video>
  </div>
);

export default BackgroundVideo;
