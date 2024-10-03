import React from 'react';
import { Handle, Position } from 'react-flow-renderer';

const nodeStyles = {
  padding: 10,
  borderRadius: 5,
  width: 150,
  fontSize: 12,
  color: '#333',
  textAlign: 'center' as const,
  border: '1px solid #222138',
};

export const LambdaNode: React.FC<{ data: any }> = ({ data }) => (
  <div style={{ ...nodeStyles, background: '#FFCCCB' }}>
    <Handle type="target" position={Position.Top} />
    <div>Lambda Function</div>
    <div>{data.label}</div>
    <Handle type="source" position={Position.Bottom} />
  </div>
);

export const ApiGatewayNode: React.FC<{ data: any }> = ({ data }) => (
  <div style={{ ...nodeStyles, background: '#90EE90' }}>
    <Handle type="target" position={Position.Top} />
    <div>API Gateway</div>
    <div>{data.label}</div>
    <Handle type="source" position={Position.Bottom} />
  </div>
);

export const DynamoDBNode: React.FC<{ data: any }> = ({ data }) => (
  <div style={{ ...nodeStyles, background: '#ADD8E6' }}>
    <Handle type="target" position={Position.Top} />
    <div>DynamoDB Table</div>
    <div>{data.label}</div>
    <Handle type="source" position={Position.Bottom} />
  </div>
);
