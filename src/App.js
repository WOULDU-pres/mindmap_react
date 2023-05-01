import React, { useState } from 'react';
import './App.css';
import Node from './components/Node';
import Connection from './components/Connection';

function App() {
  const [connections, setConnections] = useState([]); // [ { from: 'node-1', to: 'node-2' }
  const [nodes, setNodes] = useState([
    {
      id: "node-1",
      content: "",
      x: window.innerWidth / 2 - 50, // Subtract half of the node's width (assuming it's 100px)
      y: window.innerHeight / 2 - 50, // Subtract half of the node's height (assuming it's 100px)
    },
  ]);

  const handleDrag = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  };

  const handleDragEnd = (e) => {
    const id = e.target.id;
    const dx = e.clientX - e.target.getBoundingClientRect().left;
    const dy = e.clientY - e.target.getBoundingClientRect().top;

    setNodes(
      nodes.map((node) =>
        node.id === id ? { ...node, x: node.x + dx, y: node.y + dy } : node
      )
    );
  };

  const handleChange = (id, value) => {
    setNodes(
      nodes.map((node) => (node.id === id ? { ...node, content: value } : node))
    );
  };

  const handleAddNode = (parentId, side) => {
    const parentNode = nodes.find((node) => node.id === parentId);
    const childNodes = nodes.filter((node) => node.parentId === parentId);
    const newNode = {
      id: `node-${nodes.length + 1}`,
      content: '',
      parentId: parentId,
      side: side,
      x: side === 'left' ? parentNode.x - 350 : parentNode.x + 350,
      y: parentNode.y + 100 * childNodes.length,
    };
  
    setConnections([...connections, { from: parentId, to: newNode.id, side }]);
    setNodes([...nodes, newNode]);
  };
  

  const handleDeleteNode = (id) => {
    setNodes(nodes.filter((node) => node.id !== id));
  };

  

  return (
    <div className="App">
      {nodes.map((node) => (
        <Node
          key={node.id}
          id={node.id}
          content={node.content}
          x={node.x}
          y={node.y}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onChange={handleChange}
          onAddNode={handleAddNode}
          onDeleteNode={handleDeleteNode}
          openaiApiKey={'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'}
        />
      ))}
  
    {connections.map((connection, index) => (
      <Connection key={index} from={connection.from} to={connection.to} side={connection.side} nodes={nodes} />
    ))}

    </div>
  );
}

export default App;