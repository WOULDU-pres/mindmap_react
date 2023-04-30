import React from 'react';
import styles from './Node.module.css';

const AddRightButton = ({ id, onAddNode }) => {
  return (
    <button
      onClick={() => onAddNode(id, 'right')}
      className={`${styles.button} ${styles.addRightButton}`}
    >
      +
    </button>
  );
};

export default AddRightButton;
