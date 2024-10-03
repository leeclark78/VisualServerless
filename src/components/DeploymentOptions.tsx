import React from 'react';

export const DeploymentOptions: React.FC = () => {
  return (
    <div className="deployment-options">
      <h3>Deployment Options</h3>
      <select>
        <option>AWS SAM</option>
        <option>Serverless Framework</option>
      </select>
      <button>Deploy</button>
    </div>
  );
};
