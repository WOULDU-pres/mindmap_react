import React from 'react';
import styles from './Node.module.css';

const DeleteButton = ({ id, onDeleteNode }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onDeleteNode(id);
      }}
      className={`${styles.button} ${styles.deleteButton}`}
    >
      x
    </button>
  );
};

export default DeleteButton;
