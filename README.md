# React Notes

## Import Cost

React => 6KB

ReactDOM => 130KB

Total = 136KB

## Reconciliation

React is creating the virtual representation of your UI in the memory, and then ReactDOM receives that and syncs your UI (and the changes to it) to the DOM. This process is called reconciliation.

**Recap**

-   ReactDOM is the glue between React and the DOM.
-   ReactDOM is separate from React because you can write React for native applications.
-   Reconciliation is the process of syncing the Virtual DOM to the actual DOM.

## JSX

**Recap**

-   JSX is a special syntax for React that makes it easier to represent your UI
-   JSX looks similar to HTML but it is not HTML
-   JSX code you write gets transformed into React.createElement
-   JSX is not part of your browser. You need a tool to transform it into valid JavaScript.

## Available Scripts

Learn [React Router v6](https://blog.logrocket.com/react-router-v6-guide)

link: [Repository](https://github.com/codezri/react-router-v6-example/tree/main)

## React Hooks

_1. useState_ : -

The useState hook in React is used to add state to functional components. It allows you to declare state variables in your functional components. It returns an array with two elements: the current state value and a function to update that value.

Here's an example demonstrating the useState hook in action:

```JSX
import React, { useState } from 'react';

const Counter = () => {
  // Declaring a state variable named 'count' and a function to update it, 'setCount'
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;

```

In this example, useState(0) initializes the count state variable with an initial value of 0. The setCount function allows updating the count state variable. When the "Increment" button is clicked, it increases the count by 1, and when the "Decrement" button is clicked, it decreases the count by 1. The count value is displayed within the <p> element using curly braces {count} to showcase the current state.

This hook simplifies state management in functional components by allowing them to manage their state without converting them into class components.

### useEffect

**Question:**
Can you explain the `useEffect` hook in React and provide some common use cases where it's beneficial?

**Answer:**
The `useEffect` hook in React is used to perform side effects in functional components. It allows you to perform tasks that cannot be handled during render, such as data fetching, subscriptions, manual DOM manipulations, and more. It runs after every completed render.

**Use Cases:**

1. **Data Fetching:** One common use case for `useEffect` is fetching data from an API. You can initiate a network request and update the component's state with the retrieved data.

    ```javascript
    useEffect(() => {
        fetch("https://api.example.com/data")
            .then((response) => response.json())
            .then((data) => {
                // Update state with fetched data
                setData(data);
            })
            .catch((error) => {
                // Handle errors
                setError(error);
            });
    }, []);
    ```

2. **Subscriptions and Event Listeners:** Setting up subscriptions or event listeners that need to be managed when a component mounts and removed when it unmounts.

    ```javascript
    useEffect(() => {
        const subscription = someSubscriptionService.subscribe((data) => {
            // Handle incoming subscription data
            handleSubscriptionData(data);
        });

        return () => {
            // Clean up subscription when component unmounts
            subscription.unsubscribe();
        };
    }, []);
    ```

3. **Document Title Updates:** Changing the document title based on the component's state or props.

    ```javascript
    useEffect(() => {
        document.title = `New Title: ${count}`;
    }, [count]);
    ```

4. **Component Lifecycle Events:** Emulating component lifecycle events like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

    ```javascript
    useEffect(() => {
        // componentDidMount
        // Perform initialization tasks here

        return () => {
            // componentWillUnmount
            // Clean up tasks before component unmounts
        };
    }, []);
    ```

The `useEffect` hook helps in managing side effects and keeps the component logic clean by separating concerns related to data fetching, subscriptions, DOM manipulations, and more from the main component rendering process.
