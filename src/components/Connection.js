import React from 'react';

const Connection = ({ from, to }) => {
  const fromElement = document.getElementById(from);
  const toElement = document.getElementById(to);
  let x1, y1, x2, y2;

  if (fromElement && toElement) {
    const fromRect = fromElement.getBoundingClientRect();
    const toRect = toElement.getBoundingClientRect();

    x1 = fromRect.x + fromRect.width / 2;
    y1 = fromRect.y + fromRect.height / 2;
    x2 = toRect.x + toRect.width / 2;
    y2 = toRect.y + toRect.height / 2;
  }

  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      {x1 !== undefined && (
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="black"
          strokeWidth="2"
        />
      )}
    </svg>
  );
};

export default Connection;
