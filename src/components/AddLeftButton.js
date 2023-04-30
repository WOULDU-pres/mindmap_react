import React from 'react';
import styles from './Node.module.css';

const AddLeftButton = ({ id, onAddNode }) => {
  return (
    <button
      onClick={() => onAddNode(id, 'left')}
      className={`${styles.button} ${styles.addLeftButton}`}
    >
      +
    </button>
  );
};

export default AddLeftButton;
