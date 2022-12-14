import { React, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TextUtils2 = () => {
  const [text, textState] = useState("Enter your text here");

  const onHandelChange = (e) => {
    textState(e.target.value);
  };

  const uppercase = () => {
    let newtext = text.toLocaleUpperCase();
    textState(newtext);
  };

  const Home = useNavigate();
  const goHome = () => {
    Home("/");
  };

  return (
    <>
      <Container className="col-lg-8">
        <Form>
          <h1>text utils 2</h1>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            {/* <Form.Label>Example textarea</Form.Label> */}
            <Form.Control
              as="textarea"
              value={text}
              onChange={onHandelChange}
              rows={6}
            />
          </Form.Group>
          <Button onClick={uppercase}>Convert Uppercase</Button>
          <Button className="mx-2" onClick={goHome}>
            {" "}
            Go Home
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default TextUtils2;
