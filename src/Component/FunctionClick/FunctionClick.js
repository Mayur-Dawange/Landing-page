import React from "react";
import { Button } from "react-bootstrap";

const FunctionClick = () => {
  function FunctionClicked() {
    console.log("FunctionClicked");
  }
  return (
    <div>
      <Button onClick={FunctionClicked}>FunctionClick</Button>
    </div>
  );
};

export default FunctionClick;
