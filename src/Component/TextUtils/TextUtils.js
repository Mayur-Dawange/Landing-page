import { React, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./textutils.scss";

const TextUtils = (props) => {
  const [text, setText] = useState("enter text here");

  const setUpClick = () => {
    // console.log("to upper case cliked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const clearText = () => {
    // console.log("to upper case cliked");
    let newText = "";
    setText(newText);
  };

  const setDwnClick = () => {
    // console.log("to upper case cliked");
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };

  const handleOnChange = (e) => {
    // console.log("on change");
    setText(e.target.value);
  };
  return (
    <>
      <div className="text-utils-container">
        <Container className="col-lg-8">
          <Form className="">
            <h1 className="text-center py-2">{props.heading}</h1>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={8}
                value={text}
                onChange={handleOnChange}
              />
            </Form.Group>
            <Button onClick={setUpClick} className="me-3">
              {props.upercase}
            </Button>
            <Button className="me-3" onClick={clearText}>
              Clear Text
            </Button>
            <Button onClick={setDwnClick}>{props.lowercase}</Button>
          </Form>
          <div className="text-length py-3">
            <h3>{props.subheading}</h3>
            <p>
              {text.split(" ").length} word and {text.length} charachter
            </p>
            <h3>{props.Time} </h3>
            <p> {0.008 * text.split(" ").length} Minutes</p>
          </div>
          <h3>{props.preview}</h3>
          <p>{text}</p>
        </Container>
      </div>
    </>
  );
};

export default TextUtils;
