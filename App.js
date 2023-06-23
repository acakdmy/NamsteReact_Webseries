// const heading = document.createElement("h1");

// heading.innerHTML = "I am Hading from JavaScript";

// const root = document.getElementById("root");

// root.appendChild(heading)



const heading1 = React.createElement("div",{id:"parent"},[
    React.createElement("h1",{},"I am h1 tag"),
    React.createElement("h2",{},"I am h2 Tag")
])
    const root1 = ReactDOM.createRoot(document.getElementById("root"));
    root1.render(heading1)
