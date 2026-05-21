import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => creates Object => HtmlElement (when rendered)
// Below is how we create React element using React
const header = React.createElement(
    "h1", 
    { id: "heading"}, 
    "Namaste React!");
console.log(header);

//JSX => HTML-like or XML-like syntax
//Below is how we create React element using JSX
//JSX => Babel transpiles it to 'React.createElement' => ReactElement-Js Object => HTMLElement (by render)
const jsxHeading = <h1 id="heading" className="head" tabIndex="1">Namaste React using JSX!</h1> //this jsxHeading is React Element that is Object  
console.log(jsxHeading);

//Func Component returning jsx
const Title = () => {
    return <h1 className="headC" tabIndex="5">Namaste React using JSX</h1>
}

const elem = <span>React Element</span>;
//Normal JSX syntax
const title = (
    <h1 className="head" tabIndex="5">
        {elem}
        Namaste React using JSX
    </h1>
);

//React Functional Component
const HeaderComponent = () => (
    <div id="container">
        <Title />
        <Title></Title>
        {Title()}
        {title}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(header);
//root.render(jsxHeading);
root.render(<HeaderComponent />);