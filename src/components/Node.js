import React, { useState } from 'react';
import DeleteButton from './DeleteButton';
import AddLeftButton from './AddLeftButton';
import AddRightButton from './AddRightButton';
// import BrainstormButton from './BrainstormButton';
import styles from './Node.module.css';

const Node = ({
  id,
  content,
  x,
  y,
  onDrag,
  onDragEnd,
  onChange,
  onAddNode,
  onDeleteNode,
  onBrainstorm,
}) => {
  const [hover, setHover] = useState(false);


  return (
    <div
    className={styles.node}
      id={id}
      draggable
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        left: x,
        top: y,
        position: 'absolute',
      }}
      
    >
      <input
        type="text"
        value={content}
        onChange={(e) => onChange(id, e.target.value)}
      />
      {hover && (
        <>
          {id !== 'node-1' && <DeleteButton id={id} onDeleteNode={onDeleteNode} />}
          <AddLeftButton id={id} onAddNode={onAddNode} />
          <AddRightButton id={id} onAddNode={onAddNode} />
          <button onClick={() => onBrainstorm(content)}>Brainstorm with AI</button>
        </>
      )}
    </div>
  );
};

export default Node;
