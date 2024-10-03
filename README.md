# VisualServerless

A visual approach to serverless development.

## Features

- Interactive graph visualization of serverless resources
- Custom node types for different serverless components (Lambda, API Gateway, DynamoDB)
- Toolbar for adding specific node types
- Dynamic addition and removal of nodes
- Automatic edge creation between nodes
- Export and import functionality for saving and loading designs

## Getting Started

1. Clone the repository
2. Run `npm install`
3. Run `npm start` to start the development server

## Available Scripts

- `npm start`: Starts the development server
- `npm test`: Runs the test suite
- `npm run build`: Builds the app for production
- `npm run lint`: Runs the linter
- `npm run typecheck`: Runs the TypeScript type checker

## Components

### Graph

The Graph component uses react-flow-renderer to display an interactive visualization of serverless resources and their connections. Users can:

- Add new nodes of specific types (Lambda, API Gateway, DynamoDB) using the toolbar
- Remove nodes by selecting them and pressing the 'Delete' key
- Create connections by dragging from one node's handle to another
- Export the current graph design as a JSON file
- Import a previously saved graph design

### Toolbar

The Toolbar component provides buttons to add different types of serverless resources to the graph, as well as export and import functionality.

### Custom Nodes

Custom node components visually represent different types of serverless resources:
- Lambda Function
- API Gateway
- DynamoDB Table