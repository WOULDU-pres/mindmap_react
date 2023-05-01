
import React from 'react';
import styles from './Node.module.css';

const BrainstormButton = ({ onClick }) => {
  return (
    <button 
        onClick={onClick} 
        className={`${styles.addBrainstormButton}`}
    >
      Brainstorm with AI
    </button>
  );
};

export default BrainstormButton;
