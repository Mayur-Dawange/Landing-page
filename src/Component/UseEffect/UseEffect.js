import React from "react";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const UseEffect = () => {
  const [Count, setCount] = useState(0);

  useEffect = () => {
    window.title = `chats (${Count})`;
  };
  //   console.log("out side console");
  return (
    <div className="my-5">
      <Container className="col-lg-8 py-5 bg-info">
        Hello UseEffect Section
        <h4>{Count}</h4>
        <Button onClick={() => setCount(Count + 1)}>Counter</Button>
      </Container>
    </div>
  );
};

export default UseEffect;
