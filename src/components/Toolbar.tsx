import React from 'react';

export const Toolbar: React.FC = () => {
  return (
    <div className="toolbar">
      <button>Add Node</button>
      <button>Add Edge</button>
      <button>Export</button>
      <button>Import</button>
    </div>
  );
};
