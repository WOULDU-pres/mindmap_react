import React, { useState } from 'react';
import Node from './Node';
import Connection from './Connection';
import { generateResponse } from '../openai';
import {
  handleDragEnd,
  handleChange,
  handleAddNode,
  handleDeleteNode,
} from './utils/mindmapLogic';

function Mindmap() {
  const [connections, setConnections] = useState([]);
  const [nodes, setNodes] = useState([
    {
      id: 'node-1',
      content: '',
      x: window.innerWidth / 2 - 100,
      y: window.innerHeight / 2 - 50,
    },
  ]);

  const handleDrag = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  };

  return (
    <div>
      <div
        style={{
          marginTop: '3vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        <h1>Enter ideas you want to brainstorm!</h1>
        <h1>↓</h1>
      </div>

      {nodes.map((node) => (
        <Node
          key={node.id}
          id={node.id}
          content={node.content}
          x={node.x}
          y={node.y}
          onDrag={handleDrag}
          onDragEnd={(e) => handleDragEnd(e, nodes, setNodes)}
          onChange={(id, value) => handleChange(id, value, nodes, setNodes)}
          onAddNode={(parentId, side) =>
            handleAddNode(
              parentId,
              side,
              nodes,
              setNodes,
              connections,
              setConnections,
            )
          }
          onDeleteNode={(id) => handleDeleteNode(id, nodes, setNodes)}
          generateResponse={generateResponse}
        />
      ))}
      {connections.map((connection, index) => (
        <Connection
          key={index}
          from={connection.from}
          to={connection.to}
          side={connection.side}
          nodes={nodes}
        />
      ))}
    </div>
  );
}

export default Mindmap;
