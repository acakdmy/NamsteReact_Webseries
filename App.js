import React from "react";
import ReactDOM  from "react-dom/client";

// Write simple program using JavaScript

// const heading = document.createElement("h1");

// heading.innerHTML = "I am Hading from JavaScript";

// const root = document.getElementById("root");

// root.appendChild(heading)


// Write a simple program using React CDN 

const heading1 = React.createElement("div",{id:"parent"},[
    React.createElement("h1",{},"I am a good engineer"),
    React.createElement("h2",{},"I am h2 Tag")
])
    const root1 = ReactDOM.createRoot(document.getElementById("root"));
    root1.render(heading1)
