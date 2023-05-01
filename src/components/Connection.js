import React from 'react';

const Connection = ({ from, to, nodes, side }) => {
  const fromNode = nodes.find((node) => node.id === from);
  const toNode = nodes.find((node) => node.id === to);

  if (!fromNode || !toNode) {
    return null;
  }

  const x1 = side === 'left' ? fromNode.x : fromNode.x + 230;
  const y1 = fromNode.y + 50;
  const x2 = side === 'left' ? toNode.x + 230 : toNode.x;
  const y2 = toNode.y + 50;
  

  const c1x = x1 + (x2 - x1) / 2;
  const c1y = y1;
  const c2x = x1 + (x2 - x1) / 2;
  const c2y = y2;

  const pathData = `M ${x1} ${y1} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`;

  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      {pathData && (
        <path d={pathData} fill="none" stroke="white" strokeWidth="2" />
      )}
    </svg>
  );
};

export default Connection;
