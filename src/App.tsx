import React from 'react';
import Graph from './components/Graph';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>VisualServerless</h1>
      <p>Click 'Add Node' to add a new node. Select a node and press 'Delete' to remove it.</p>
      <Graph />
    </div>
  );
};

export default App;
