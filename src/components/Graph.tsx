import React, { useState, useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  addEdge,
  removeElements,
  Elements,
  Connection,
  OnLoadParams,
} from 'react-flow-renderer';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },
];

const Graph: React.FC = () => {
  const [elements, setElements] = useState<Elements>(initialNodes);
  const [rfInstance, setRfInstance] = useState<OnLoadParams | null>(null);

  const onConnect = useCallback((params: Connection) => 
    setElements((els) => addEdge(params, els)), []);

  const onElementsRemove = useCallback((elementsToRemove) => 
    setElements((els) => removeElements(elementsToRemove, els)), []);

  const addNode = useCallback(() => {
    const newNode: Node = {
      id: `${Date.now()}`,
      data: { label: `Node ${elements.length + 1}` },
      position: { x: Math.random() * 500, y: Math.random() * 500 },
    };
    setElements((els) => els.concat(newNode));
  }, [elements]);

  const onLoad = (reactFlowInstance: OnLoadParams) => {
    setRfInstance(reactFlowInstance);
    reactFlowInstance.fitView();
  };

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <ReactFlow
        elements={elements}
        onConnect={onConnect}
        onElementsRemove={onElementsRemove}
        onLoad={onLoad}
        deleteKeyCode={46}
      >
        <Controls />
        <MiniMap />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button onClick={addNode}>Add Node</button>
      </div>
    </div>
  );
};

export default Graph;
