import React from 'react';

interface ToolbarProps {
  onAdd: (nodeType: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onAdd }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <button onClick={() => onAdd('lambda')}>Add Lambda</button>
      <button onClick={() => onAdd('apiGateway')}>Add API Gateway</button>
      <button onClick={() => onAdd('dynamoDB')}>Add DynamoDB</button>
    </div>
  );
};

export default Toolbar;
