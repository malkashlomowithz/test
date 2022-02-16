import React, { useState } from "react";
import "./styles.css";
import SeeItems from "./SeeItems";
import Array from "./array";

export default function App(array) {
  array = Array;
  const [isCicked, setCicked] = useState(false);

  const showItems = () => setCicked(true);

  return (
    <div className="App">
      <button onClick={showItems}> Try me! </button>
      <div>{isCicked ? <SeeItems items={array} /> : null}</div>
    </div>
  );
}
