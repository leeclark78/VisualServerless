# VisualServerless

VisualServerless is a visual approach to serverless development, where the application is represented as a network of nodes (serverless resources) connected by edges (their relationships).

## Features

- Edit an application by adding nodes and edges following an event-driven design
- Import and export applications in a JSON format
- Choose a runtime and build the application, e.g. using AWS SAM
- Optionally use canary or linear deployments for updates
- Edit templates and code files before deployment
- Take a screenshot of the application architecture

## Project Structure

The project consists of a frontend (React with TypeScript) and a backend (Express.js) component.

### Frontend Components

- Graph visualisation component
- Toolbar
- Code editor
- Deployment options

### Backend Components

- Saving and loading applications
- Building and deploying serverless applications

## Getting Started

### Prerequisites

- Node.js (version 14.x or later)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/VisualServerless.git
   cd VisualServerless
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

1. Start the development server:
   ```
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Running Tests

```
npm test
```

### Linting

```
npm run lint
```

### Type Checking

```
npm run type-check
```

### Building for Production

```
npm run build

This builds the app for production to the `build` folder.

### Contributing

We welcome contributions to the project! Please read our [contributing guidelines](CONTRIBUTING.md) for more details.

License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
```
