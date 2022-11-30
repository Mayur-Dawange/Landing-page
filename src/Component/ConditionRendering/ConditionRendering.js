import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ConditionRendering = () => {
  const [state, setState] = useState("");
  let isloggedin = true;
  const loggedin = () => {
    if (isloggedin === true) {
      setState("mahesh");
    } else {
      setState("Guest");
    }
  };

  return (
    <div>
      <h2>Welcome {state}</h2>
      <Button onClick={loggedin}>Clicked</Button>
    </div>
  );
};

export default ConditionRendering;
