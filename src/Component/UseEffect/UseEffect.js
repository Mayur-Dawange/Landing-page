import React from "react";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const UseEffect = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    // console.log("Hello UseEffect");
    document.title = `Chats (${count})`;
  });
  //   console.log("out side console");
  return (
    <div className="my-5">
      <Container className="col-lg-8 py-5 bg-info">
        Hello UseEffect Section
        <h4>{count}</h4>
        <Button onClick={() => setcount(count + 1)}>Counter</Button>
      </Container>
    </div>
  );
};

export default UseEffect;
