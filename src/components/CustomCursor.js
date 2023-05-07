import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY + window.scrollY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
    ></div>
  );
};

export default CustomCursor;
