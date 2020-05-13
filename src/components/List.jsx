import React, { useState } from "react";
import { Link } from "@reach/router";

// This is also a functional component
// Is receiving props as parameter
const List = (props) => {
  // Here we define a new constant by getting items from props
  const { items } = props; // This is called Object destructuring

  // The next line is used to handle the state of our component
  const [bangs, setBangs] = useState(0); // useState is a hook, you can only use hooks on functional components

  // This is a function, we used it to handle when our button is clicked
  const handleClick = () => {
    // setBangs updates the value of our bangs constant
    // you can send a new value directly, like this setBags(2)
    // or use an arrow function, this function receive as parameter the current value of bang
    setBangs((current) => current + 1); // We can also do this setBangs(bangs+1)
  };

  return (
    <>
      {/* <> This is a fragment */}
      <ul>
        {/* This is a map function is used to do *something* with each element of the array */}
        {items.map((item) => (
          // When there are similar elements, like on a list, you need to provide a key attribute, should be unique
          <li key={item.id}>{`${item.name}!!!`}</li> // We are using Template literals here
        ))}
      </ul>

      <p>Total of bangs: {bangs}</p>
      <button onClick={handleClick}>Bang!</button>
      <Link to='/corgi'>Link</Link>
    </> // </> Here ends the fragment
  );
};

export default List;
