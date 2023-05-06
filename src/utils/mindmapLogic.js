const handleDragEnd = (e, nodes, setNodes) => {
    const id = e.target.id;
    const dx = e.clientX - e.target.getBoundingClientRect().left;
    const dy = e.clientY - e.target.getBoundingClientRect().top;
  
    setNodes(
      nodes.map((node) =>
        node.id === id ? { ...node, x: node.x + dx, y: node.y + dy } : node
      )
    );
  };
  
  const handleChange = (id, value, nodes, setNodes) => {
    setNodes(
      nodes.map((node) => (node.id === id ? { ...node, content: value } : node))
    );
  };
  
  const handleAddNode = (parentId, side, nodes, setNodes, connections, setConnections) => {
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
  
  const handleDeleteNode = (id, nodes, setNodes) => {
    setNodes(nodes.filter((node) => node.id !== id));
  };
  

  export { handleDragEnd, handleChange, handleAddNode, handleDeleteNode };