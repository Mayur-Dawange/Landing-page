import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const HomePage = useNavigate();
  const Home = () => {
    HomePage("/");
  };
  const GoBack = () => {
    HomePage(-1);
  };

  return (
    <div>
      <h1>this is the contact page</h1>
      <Button onClick={Home}>Home</Button>
      <Button onClick={GoBack}>Go Back </Button>
    </div>
  );
};

export default Contact;
