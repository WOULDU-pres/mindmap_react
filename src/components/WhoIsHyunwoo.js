import React, { useEffect, useState } from 'react';
import './WhoIsHyunwoo.module.css';

const WhoIsHyunwoo = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`who-is-hyunwoo ${visible ? 'visible' : 'hidden'}`}
      onAnimationEnd={() => setVisible(false)}
    ></div>
  );
};

export default WhoIsHyunwoo;
