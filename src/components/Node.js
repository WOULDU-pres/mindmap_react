import React, { useState } from 'react';
import DeleteButton from './DeleteButton';
import AddLeftButton from './AddLeftButton';
import AddRightButton from './AddRightButton';
import BrainstormButton from './BrainstormButton';
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
  generateResponse,
}) => {
  const [hover, setHover] = useState(false);
  const [output, setOutput] = useState([]);

  const handleBrainstorm = async () => {
    const gptResponses = await generateResponse(content);
    setOutput(gptResponses);
  };

  return (
    <div>
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
          className={styles.nodeInput}
          type="text"
          value={content}
          onChange={(e) => onChange(id, e.target.value)}
        />
        {hover && (
          <>
            {id !== 'node-1' && (
              <DeleteButton id={id} onDeleteNode={onDeleteNode} />
            )}
            <AddLeftButton id={id} onAddNode={onAddNode} />
            <AddRightButton id={id} onAddNode={onAddNode} />
            <BrainstormButton handleBrainstorm={handleBrainstorm} />
          </>
        )}
      </div>
      <div
        className={styles.gptResponses}
        style={{
          left: x - 40,
          top: y + 120,
          position: 'absolute',
        }}
      >
        {output.length > 0 && (
          <div>
            <h4>Brainstorming results</h4>
            <ul>
              {output.map((response, index) => (
                <li key={index}>{response}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Node;
