import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TextUtils2 from "../TextUtils2/TextUtils2";

const About = () => {
  const navigate = useNavigate();
  const GoAhead = () => {
    navigate(+1);
  };
  return (
    <div>
      <TextUtils2 />
      <Button onClick={GoAhead}>Go Ahead </Button>
    </div>
  );
};

export default About;
