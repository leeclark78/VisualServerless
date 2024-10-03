import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import Graph from './components/Graph';

const App: React.FC = () => {
  return (
    <ReactFlowProvider>
      <Graph />
    </ReactFlowProvider>
  );
};

export default App;
