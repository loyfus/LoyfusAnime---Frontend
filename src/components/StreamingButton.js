import React from 'react';
import './StreamingButton.css';

const StreamingButton = ({ url, site, icon }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="streaming-button">
      <img src={icon} alt={`${site} logo`} className="streaming-icon" />
      <span>{site}</span>
    </a>
  );
};

export default StreamingButton;
