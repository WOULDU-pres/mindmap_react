import React, { useState } from 'react';
import './App.css';
import Node from './components/Node';
import Connection from './components/Connection';
import Line from './components/Line';

function App() {
  const [connections, setConnections] = useState([]);
  const [nodes, setNodes] = useState([{ id: 'node-1', content: '', x: 0, y: 0 }]);

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
      x: side === 'left' ? parentNode.x - 350 : parentNode.x + 350,
      y: parentNode.y + 200 * childNodes.length,
    };
  
    setNodes([...nodes, newNode]);
  };

  const handleDeleteNode = (id) => {
    setNodes(nodes.filter((node) => node.id !== id));
  };

  const renderLines = () => {
    const lines = [];
    nodes.forEach((node) => {
      if (node.parentId) {
        const parentNode = nodes.find((n) => n.id === node.parentId);
        lines.push(
          <Line
            key={`line-${node.id}`}
            x1={parentNode.x + 50}
            y1={parentNode.y + 50}
            x2={node.x + 50}
            y2={node.y + 50}
          />
        );
      }
    });
    return lines;
  };

  return (
    <div className="App">
      {renderLines()}
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
        />
      ))}

      {connections.map((connection, index) => (
        <Connection key={index} from={connection.from} to={connection.to} />
      ))}
    </div>
  );
}

export default App;