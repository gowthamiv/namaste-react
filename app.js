   /* const headerElm = React.createElement(
        "h1",
        { id:"heading",xyx: "pqr" },
        "Hello World from React!"
    );

    console.log(headerElm);

    const parent = React.createElement(
        "h1",
        { id:"heading",xyx: "pqr" },
        "Hello World from React!"
    ); */

    /* creating a structure like this as follows ::
        <div id="parent">
            <div id="child1">
                <h1></h1>
                <h2></h2
            </div>
            <div id="child2">
                <h1></h1>
                <h2></h2>
            </div>
        </div>
    */

    import React from "react";
    import ReactDOM from "react-dom/client";
   
    const parent = React.createElement("div", {id:"parent"},[ 
        React.createElement("div", {id:"child1"},[ 
            React.createElement("h1",{},"This is Namaste React."), 
            React.createElement("h2",{},"I am h2") 
        ]), 
        React.createElement("div",{id:"child2"},[ 
            React.createElement("h1",{},"I am h1"), 
            React.createElement("h2",{},"I am h2") 
        ]) 
    ]);

    console.log(parent);

    const rootElm = ReactDOM.createRoot(document.getElementById("root"));
    // rootElm.render(headerElm);
    rootElm.render(parent);