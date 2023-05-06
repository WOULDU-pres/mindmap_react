import React, { useState } from 'react';
import './App.css';
import Node from './components/Node';
import Connection from './components/Connection';
import { generateResponse } from './openai';
import { handleDragEnd, handleChange, handleAddNode, handleDeleteNode } from './utils/mindmapLogic';

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
              onDragEnd={(e) => handleDragEnd(e, nodes, setNodes)}
              onChange={(id, value) => handleChange(id, value, nodes, setNodes)}
              onAddNode={(parentId, side) => handleAddNode(parentId, side, nodes, setNodes, connections, setConnections)}
              onDeleteNode={(id) => handleDeleteNode(id, nodes, setNodes)}
              generateResponse={generateResponse}
            />
          ))}
  
    {connections.map((connection, index) => (
      <Connection key={index} from={connection.from} to={connection.to} side={connection.side} nodes={nodes} />
    ))}

    </div>
  );
}

export default App;