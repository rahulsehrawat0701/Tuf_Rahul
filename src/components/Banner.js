import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = ({ isVisible, description, timer, link }) => {
  const [timeLeft, setTimeLeft] = useState(timer);

  useEffect(() => {
    setTimeLeft(timer);
  }, [timer]);

  useEffect(() => {
    if (isVisible && timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timeLeft, isVisible]);

  if (!isVisible) return null;

  const getFullUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return `https://${url}`;
  };

  return (
    <div className="banner">
      <p>{description}</p>
      <p>{`Time left: ${timeLeft}s`}</p>
      {link && (
        <p>
          <a 
            href={getFullUrl(link)} 
            className="banner-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Click here for the link
          </a>
        </p>
      )}
    </div>
  );
};

export default Banner;
