const reactElement = {
    type: "a",
    props: {
        href: "http://react.com",
        target: "_blank",
    },
    children: "Click to the React component",
};

function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    container.appendChild(domElement);
}

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
