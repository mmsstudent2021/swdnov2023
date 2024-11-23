### **Custom Hooks in React**

A **Custom Hook** in React is a reusable function that encapsulates logic using React's built-in hooks (`useState`, `useEffect`, `useContext`, etc.). It allows you to extract and reuse stateful logic between components, making your code more modular and maintainable.

---

### **Why Use Custom Hooks?**

1. **Reusability:** Encapsulate common logic to share across multiple components.
2. **Readability:** Simplify components by moving logic to a separate function.
3. **Maintainability:** Centralize logic so updates are applied consistently across components.
4. **Separation of Concerns:** Separate logic from presentation, making components cleaner.

---

### **Creating a Custom Hook**

#### **Basic Example: Fetching Data**
Here’s a custom hook for fetching data:

```jsx
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
```

---

#### **Using the Custom Hook in a Component**

```jsx
import React from "react";
import useFetch from "./useFetch";

const UserList = () => {
  const { data: users, loading, error } = useFetch("https://api.example.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
```

---

### **Custom Hooks Best Practices**

1. **Start the Name with `use`:**
   - By convention, custom hooks start with the word `use` to signal they follow React’s hook rules.
   - Example: `useFetch`, `useAuth`, `useLocalStorage`.

2. **Follow Hook Rules:**
   - Only call hooks at the top level of your custom hook.
   - Only call hooks inside React components or other custom hooks.

3. **Keep Hooks Focused:**
   - Custom hooks should perform a single, well-defined task.

4. **Parameterization:**
   - Allow custom hooks to accept arguments to make them more flexible.

---

### **More Custom Hook Examples**

#### **1. Local Storage Hook**
Save and retrieve data from `localStorage`:

```jsx
import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
```

#### **Using the Local Storage Hook:**
```jsx
const Counter = () => {
  const [count, setCount] = useLocalStorage("count", 0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

---

#### **2. Window Dimensions Hook**
Track window width and height:

```jsx
import { useState, useEffect } from "react";

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
};

export default useWindowDimensions;
```

#### **Using the Window Dimensions Hook:**
```jsx
const App = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
};
```

---

### **Advantages of Custom Hooks**
1. **Encapsulation:** Encapsulates logic, reducing repetitive code.
2. **Reusability:** Write once, use across multiple components.
3. **Cleaner Components:** Moves complex logic out of components, making them simpler.

### **When to Use Custom Hooks**
- Sharing logic between multiple components.
- Managing side effects like data fetching or subscriptions.
- Abstracting repetitive tasks like local storage access or form handling.

Custom hooks are a powerful way to create scalable, maintainable, and DRY (Don’t Repeat Yourself) React applications.