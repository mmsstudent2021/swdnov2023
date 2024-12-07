**React** and **ReactDOM** are two libraries that together form the core of the React ecosystem for building web applications. Here's a breakdown of their roles and how they interact:

---

### **React**
- **Purpose:** React is a JavaScript library used to build user interfaces (UIs). It provides the core API and tools for:
  - Defining UI components.
  - Managing component state and lifecycle.
  - Handling events and updates.
  
- **Key Features:**
  - **JSX Syntax:** Allows you to write HTML-like syntax in JavaScript.
  - **Components:** Encourages a modular, reusable design by encapsulating UI pieces in components.
  - **Virtual DOM:** Efficiently updates the actual DOM by calculating the minimal number of changes needed.

- **Example:**
  ```javascript
  import React from 'react';

  function App() {
      return <h1>Hello, React!</h1>;
  }

  export default App;
  ```

---

### **ReactDOM**
- **Purpose:** ReactDOM is the library responsible for rendering React components into the DOM (Document Object Model). It provides methods for:
  - Rendering components to specific DOM nodes.
  - Managing updates to the DOM efficiently.
  
- **Key Features:**
  - ReactDOM bridges React and the browser.
  - Provides the `render()` method to insert components into the DOM.

- **Example:**
  ```javascript
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';

  ReactDOM.render(<App />, document.getElementById('root'));
  ```

---

### **React vs ReactDOM**
- **React:** Contains the core functionality for building and defining UI components.
- **ReactDOM:** Focuses on rendering and interacting with the browser's DOM.

---

### Modern API: `react-dom/client`
Since React 18, a new API (`react-dom/client`) was introduced for rendering components with features like Concurrent Mode and better performance. Example usage:
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

By separating responsibilities, React ensures scalability and a clean architecture for web applications.