import React, { useState } from "react";
import ReactDOM from "react-dom";
import List from "./components/List";
import Image from "./components/Image";

// This is our root component; all the elements (other components) in our application will be children of this one.
// This is also a functional component.
// We are using an arrow function to define it.
const App = () => {
  const items = [
    { id: 1, name: "Pepe" },
    { id: 2, name: "Juan" },
    { id: 3, name: "Jose" },
  ];

  // Every functional component should return a HTML or React element (only one)
  return (
    <div>
      <header>Holi</header>

      {/* We are passing items through props */}
      <List items={items} />

      <Image />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
