import React, { ChangeEvent } from 'react';

interface ToolbarProps {
  onAddNode: (nodeType: string) => void;
  onExport: () => void;
  onImport: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onAddNode, onExport, onImport }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <button onClick={() => onAddNode('lambda')}>Add Lambda</button>
      <button onClick={() => onAddNode('apiGateway')}>Add API Gateway</button>
      <button onClick={() => onAddNode('dynamoDB')}>Add DynamoDB</button>
      <button onClick={onExport}>Export</button>
      <input
        type="file"
        accept=".json"
        onChange={onImport}
        style={{ display: 'none' }}
        id="import-input"
      />
      <label htmlFor="import-input">
        <button onClick={() => document.getElementById('import-input')?.click()}>
          Import
        </button>
      </label>
    </div>
  );
};

export default Toolbar;
