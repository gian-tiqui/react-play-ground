import React, { useState } from "react";

export default function UseState() {
  /*
                  RULES IN USING HOOKS

    1. Cannot be used outside functional components
    2. Cannot be used inside if statements, loops, etc.
    3. Must be in the top level of functional components
  */

  /*
    useState hook:

    - Returns an array that contains two values: [value, function].
    - The num refer to the declaration below, the num is the value and the setNum is the function
    - The useState takes a parameter that initializes the value.
    - The function is responsible for modifying the value
  */

  /*
    GOOD PRACTICES IN REACT
  */

  const [num, setNum] = useState(0);
  const [text, setText] = useState("");

  const increment = () => {
    setNum((prevNum) => prevNum + 1);
  };

  const filterList = (e) => {
    setText(e.target.value);
  };

  /*
    BAD PRACTICES IN REACT
  */

  let n = 0;

  const incrementN = () => {
    n++;
    console.log(n);
  };

  const items = ["Keyboard", "Mouse", "Monitor", "Speaker", "Headset"];

  return (
    <div className="container">
      <div className="row">
        <div className="col bg-success rounded p-4 m-1">
          <h2>This useState</h2>
          <div className="d-flex justify-content-center">
            <button
              className="btn bg-light mx-2"
              onClick={() => {
                setNum((prevNum) => prevNum - 1);
                setNum((prevNum) => prevNum - 1);
              }}
            >
              -
            </button>
            <h3 className="mx-2">{num}</h3>
            <button className="btn bg-light mx-2" onClick={increment}>
              +
            </button>
          </div>
        </div>
        <div className="col bg-danger rounded p-4 m-1">
          <h2>This doesn't useState</h2>
          <div className="d-flex justify-content-center">
            <h3 className="m-2">{num}</h3>
            <button className="btn bg-light m-1" onClick={incrementN}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="bg-dark rounded p-4">
        <ul>
          {items.map((item, index) => (
            <li key={index} className="text-white">
              {item}
            </li>
          ))}
        </ul>
        <input onChange={filterList}></input>
        <ul>
          {items
            .filter((item) => item.toLowerCase().includes(text.toLowerCase()))
            .map((item, index) => (
              <li key={index} className="text-white">
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
