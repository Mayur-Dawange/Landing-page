import React, { useState } from "react";
import Child from "../Child/Child";
// import { Button } from "react-bootstrap";

const FunctionClick = () => {
  const [state] = useState("Greet");
  const parentName = "Guest";

  function greetParent(child) {
    alert(`hello ${parentName} from ${child}`);
  }
  return (
    <div>
      <div>
        <h2>{state} </h2>
      </div>
      <Child greetHandler={greetParent} />
    </div>
  );
};

export default FunctionClick;
