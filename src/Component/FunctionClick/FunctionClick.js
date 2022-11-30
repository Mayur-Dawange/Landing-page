import React, { useState } from "react";
import { Container } from "react-bootstrap";
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
      <Container>
        <div>
          <h2>{state} </h2>
        </div>
        <Child greetHandler={greetParent} />
      </Container>
    </div>
  );
};

export default FunctionClick;
