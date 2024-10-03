# VisualServerless

A visual approach to serverless development.

## Features

- Interactive graph visualization of serverless resources
- Dynamic addition and removal of nodes
- Automatic edge creation between nodes

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

- Add new nodes by clicking the 'Add Node' button
- Remove nodes by selecting them and pressing the 'Delete' key
- Create connections by dragging from one node's handle to another