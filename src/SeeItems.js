import React, { useRef, useState } from "react";
import "./seeItems.css";

export default function SeeItems(props) {
  const { items } = props;
  const [state, setState] = useState({
    isScrolled: false
  });

  const newItems = useRef(20);

  console.log(newItems.current);
  window.addEventListener("scroll", function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setState((prevState) => ({
        ...prevState,
        isScrolled: true
      }));
      newItems.current = newItems.current + 20;

      console.log(newItems.current);
    }
  });

  return (
    <>
      {items.slice(0, 20).map((item, index) => (
        <ul key={index}>
          <li key={index}>{item}</li>
        </ul>
      ))}
      <div>
        {state.isScrolled ? (
          <div>
            {items.slice(20, newItems.current).map((item, index) => (
              <ul key={index}>
                <li>{item}</li>
              </ul>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}
