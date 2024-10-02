import React from 'react';

interface CodeEditorProps {
  selectedNode: string | null;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ selectedNode }) => {
  return (
    <div className="code-editor">
      <h3>Code Editor</h3>
      {selectedNode ? (
        <textarea placeholder={`Edit code for ${selectedNode}`} />
      ) : (
        <p>Select a node to edit its code</p>
      )}
    </div>
  );
};
