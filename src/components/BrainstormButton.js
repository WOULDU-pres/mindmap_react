import React, { useState } from 'react';
import styles from './BrainstormButton.module.css';

const BrainstormButton = ({ handleBrainstorm, content }) => {
  const [active, setActive] = useState(false);

  const handleClick = async () => {
    if (active) {
      await handleBrainstorm();
    }
  };

  return (
    <button
      className={`${styles.brainstormButton} ${content ? styles.enabled : ''}`}
      onClick={handleClick}
      onMouseEnter={() => {
        if (content) {
          setActive(true);
        }
      }}
      onMouseLeave={() => {
        if (content) {
          setActive(false);
        }
      }}
      style={{ display: content ? 'block' : 'none' }}
    >
      Brainstorm with AI
    </button>
  );
};

export default BrainstormButton;
