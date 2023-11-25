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
