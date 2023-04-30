import React from 'react';
import './Line.css';

const Line = ({ x1, y1, x2, y2 }) => {
  const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
  const transform = `translate(${x1}px, ${y1}px) rotate(${angle}deg)`;

  return (
    <div
      className="Line"
      style={{
        transform: transform,
        width: length,
      }}
    ></div>
  );
};

export default Line;
