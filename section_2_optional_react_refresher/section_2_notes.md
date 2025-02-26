# React.js Cheat Sheet

## Table of Contents
1. [Introduction to React](#introduction-to-react)
2. [React Basics](#react-basics)
3. [Creating a React Project](#creating-a-react-project)
4. [Importing Modules](#importing-modules)
5. [Components](#components)
6. [Props and State](#props-and-state)
7. [Lifecycle Methods](#lifecycle-methods)
8. [Hooks](#hooks)
9. [React Router](#react-router)
10. [State Management](#state-management)
11. [Debugging React Applications](#debugging-react-applications)
12. [Performance Optimization](#performance-optimization)
13. [Testing](#testing)
14. [Resources](#resources)

---

## Introduction to React

- **React** is a JavaScript library for building user interfaces.
- Developed and maintained by Facebook.
- Uses a **component-based** architecture.
- **Declarative** and efficient.
- Uses a **Virtual DOM** for optimized rendering.

---

## Creating a React Project

### Using Create React App

```sh
npx create-react-app my-app
cd my-app
npm start
```

### Manually Installing React

```sh
npm install react react-dom
```

---

## Importing Modules

- React components and modules must be imported before use.
- Example:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
```

---

## Debugging React Applications

### Using React Developer Tools

- Install React Developer Tools extension for Chrome/Firefox.
- Provides insights into component state and props.

### Debugging with Console Logs

```jsx
console.log('Debugging React');
```

### Using `React.StrictMode`

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

### Handling Errors with Error Boundaries

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

---

## React Basics

### JSX (JavaScript XML)

- A syntax extension for JavaScript.
- Allows writing HTML inside JavaScript.

Example:

```jsx
const element = <h1>Hello, React!</h1>;
```

### Rendering Elements

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, World!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

---

## Components

### Functional Component

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Class Component

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

---

## Props and State

### Props (Properties)

- Passed from **parent to child**.
- Immutable within the child component.

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

### State

- Managed **within** the component.
- Mutable and triggers re-rendering.

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

---

## Resources

- [React Docs](https://react.dev/)
- [React Router Docs](https://reactrouter.com/)
- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [Jest Docs](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)

---

This cheat sheet covers everything from **React basics to advanced topics**. 🚀
