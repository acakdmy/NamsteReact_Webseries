import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement(object) => HTML Elememnt (render)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namste JavaScript"
// );
// console.log(heading);

// JSX (transpiled before it reachses to the JS)=> parcel=>Babel 
// JSX => bable transile it to React.createElement=>ReactElement(object)=>HTML Element (render)

// React Element-
const Title =()=> <h1 id="heading">I am a JSX</h1>;
// It is end of the day JavaScript object




// React Component
// 1) Class based component
// 2) Functional based component

// React Functioanl component

// First way

// const fn = ()=>{
//   return true
// }

// Second way

// const fn = ()=>true

// bothe are the same code

const FunctionalComponent = ()=>{
 return(
  <div>
  {/* Component comsition */}
  <Title/>
  <h1>Do not panic to see such syntax my dear friesn</h1>
  <h2>We can write multiple things </h2>
  <h3>Write nested element without return keyword</h3>
</div>
  )
}

// const FunctionalComponent = ()=>(<div>
//   <h1>Do not panic to see such syntax my dear friesn</h1>
//   <h2>We can write multiple things </h2>
//   <h3>Write nested element without return keyword</h3>
// </div>)



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent/>);
