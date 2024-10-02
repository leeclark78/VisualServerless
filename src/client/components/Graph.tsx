import React, { useRef, useEffect, useState } from 'react';
import ForceGraph2D, { NodeObject, LinkObject } from 'react-force-graph-2d';

interface Node extends NodeObject {
  id: string;
  type: 'lambda' | 's3' | 'dynamodb' | 'apigateway';
}

interface Link extends LinkObject {
  source: string;
  target: string;
  type: 'trigger' | 'dataflow';
}

interface GraphData {
  nodes: Node[];
  links: Link[];
}

interface GraphProps {
  onNodeSelect: (nodeId: string | null) => void;
}

export const Graph: React.FC<GraphProps> = ({ onNodeSelect }) => {
  const graphRef = useRef<any>();
  const [graphData, setGraphData] = useState<GraphData>({ nodes: [], links: [] });

  useEffect(() => {
    // Load initial graph data or fetch from API
    setGraphData({
      nodes: [
        { id: 'lambda1', type: 'lambda' },
        { id: 's3bucket', type: 's3' },
      ],
      links: [
        { source: 'lambda1', target: 's3bucket', type: 'dataflow' },
      ],
    });
  }, []);

  const handleNodeClick = (node: Node) => {
    onNodeSelect(node.id);
  };

  return (
    <ForceGraph2D
      ref={graphRef}
      graphData={graphData as any}
      nodeLabel="id"
      nodeAutoColorBy="type"
      onNodeClick={handleNodeClick}
      width={800}
      height={600}
    />
  );
};
