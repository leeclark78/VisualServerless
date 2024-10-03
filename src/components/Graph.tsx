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
import { LambdaNode, ApiGatewayNode, DynamoDBNode } from './CustomNodes';
import Toolbar from './Toolbar';

const nodeTypes = {
  lambda: LambdaNode,
  apiGateway: ApiGatewayNode,
  dynamoDB: DynamoDBNode,
};

const Graph: React.FC = () => {
  const [elements, setElements] = useState<Elements>([]);
  const [rfInstance, setRfInstance] = useState<OnLoadParams | null>(null);

  const onConnect = useCallback((params: Connection) => 
    setElements((els) => addEdge(params, els)), []);

  const onElementsRemove = useCallback((elementsToRemove) => 
    setElements((els) => removeElements(elementsToRemove, els)), []);

  const addNode = useCallback((nodeType: string) => {
    const newNode: Node = {
      id: `${Date.now()}`,
      type: nodeType,
      data: { label: `${nodeType} ${elements.length + 1}` },
      position: { x: Math.random() * 500, y: Math.random() * 500 },
    };
    setElements((els) => els.concat(newNode));
  }, [elements]);

  const onLoad = (reactFlowInstance: OnLoadParams) => {
    setRfInstance(reactFlowInstance);
    reactFlowInstance.fitView();
  };

  return (
    <div>
      <Toolbar onAdd={addNode} />
      <div style={{ height: '80vh', width: '100%' }}>
        <ReactFlow
          elements={elements}
          onConnect={onConnect}
          onElementsRemove={onElementsRemove}
          onLoad={onLoad}
          deleteKeyCode={46}
          nodeTypes={nodeTypes}
        >
          <Controls />
          <MiniMap />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Graph;
