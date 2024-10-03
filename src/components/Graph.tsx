import React, { useCallback, ChangeEvent } from 'react';
import ReactFlow, {
  Node,
  Edge,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Controls,
  MiniMap,
  Background,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { LambdaNode, ApiGatewayNode, DynamoDBNode } from './CustomNodes';
import Toolbar from './Toolbar';

const Graph: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback((params: Connection) => 
    setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const onElementsRemove = useCallback((elementsToRemove: Node[] | Edge[]) => {
    setNodes((nds) => nds.filter((n) => !elementsToRemove.some((e) => 'id' in e && e.id === n.id)));
    setEdges((eds) => eds.filter((e) => !elementsToRemove.some((el) => 'id' in el && el.id === e.id)));
  }, [setNodes, setEdges]);

  const addNode = useCallback((nodeType: string) => {
    const newNode: Node = {
      id: `${nodeType}-${Date.now()}`,
      type: nodeType,
      data: { label: `${nodeType} node` },
      position: { x: Math.random() * 500, y: Math.random() * 500 },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);

  const onExport = useCallback(() => {
    const flow = { nodes, edges };
    const json = JSON.stringify(flow);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'flow.json';
    link.click();
  }, [nodes, edges]);

  const onImport = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      if (e.target?.result) {
        const flow = JSON.parse(e.target.result as string);
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
      }
    };
    if (event.target.files) {
      fileReader.readAsText(event.target.files[0]);
    }
  }, [setNodes, setEdges]);

  const nodeTypes = {
    lambda: LambdaNode,
    apiGateway: ApiGatewayNode,
    dynamoDB: DynamoDBNode,
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodesDelete={onElementsRemove}
        onEdgesDelete={onElementsRemove}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
      <Toolbar onAddNode={addNode} onExport={onExport} onImport={onImport} />
    </div>
  );
};

export default Graph;
