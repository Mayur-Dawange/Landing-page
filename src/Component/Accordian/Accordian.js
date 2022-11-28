import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Accordian = () => {
  const [dark, darkmode] = useState({
    color: " black",
    background: "white",
  });
  const [btnText, setbtnText] = useState("enable dark mode");

  const toggleStyle = () => {
    if (dark.color === "black") {
      darkmode({
        color: "white",
        background: " black",
      });
      setbtnText("enable light mode");
    } else {
      darkmode({
        color: "black",
        background: "white",
      });
      setbtnText("enable dark mode");
    }
  };

  return (
    <>
      <Container style={dark}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header style={dark}>Accordion Item #1</Accordion.Header>
            <Accordion.Body style={dark}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header style={dark}>Accordion Item #2</Accordion.Header>
            <Accordion.Body style={dark}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Button className="my-4" onClick={toggleStyle} style={dark}>
            {btnText}
          </Button>
        </Accordion>
      </Container>
    </>
  );
};

export default Accordian;
