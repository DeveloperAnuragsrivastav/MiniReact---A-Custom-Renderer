function render(reactElement, element) {  
    const domElem = document.createElement(reactElement.type);

  
    for (const prop in reactElement.props) {
        domElem.setAttribute(prop, reactElement.props[prop]);
    }

    if (reactElement.children) {
        const childElem = document.createElement(reactElement.children.type);
        childElem.textContent = reactElement.children.children;
        childElem.setAttribute("style", reactElement.children.props.style); 
        
        domElem.appendChild(childElem);
    }

    element.appendChild(domElem);
}
  
const element = document.getElementById("root");

const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank",
        style: "text-decoration: none; color: inherit;"
    },
    children: {
        type: "p",
        props: { style: "color:red;" },
        children: "Click me"
    }
};

render(reactElement, element);
