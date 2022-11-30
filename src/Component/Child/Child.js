import React from "react";
import { Button } from "react-bootstrap";

const Child = (props) => {
  return (
    <div>
      <Button onClick={() => props.greetHandler("child test")}>Parent</Button>
    </div>
  );
};

export default Child;
