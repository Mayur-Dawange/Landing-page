import React from "react";
import { Container } from "react-bootstrap";

const Greet = (props) => {
  return (
    <div>
      <Container>
        <h2>
          Hello {props.name} your role is {props.role}
        </h2>
        {props.children}
      </Container>
    </div>
  );
};

export default Greet;
