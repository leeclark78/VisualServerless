import React, { useState } from 'react';
import { Graph } from './components/Graph';
import { Toolbar } from './components/Toolbar';
import { CodeEditor } from './components/CodeEditor';
import { DeploymentOptions } from './components/DeploymentOptions';

const App: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  return (
    <div className="app">
      <Toolbar />
      <div className="main-content">
        <Graph onNodeSelect={setSelectedNode} />
        <CodeEditor selectedNode={selectedNode} />
      </div>
      <DeploymentOptions />
    </div>
  );
};

export default App;
