import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TextUtils2 from "../TextUtils2/TextUtils2";

const About = () => {
  const navigate = useNavigate();
  const GoBack = () => {
    navigate("/contact");
  };
  return (
    <div>
      <TextUtils2 />
      <Button onClick={GoBack}>GoBack </Button>
    </div>
  );
};

export default About;
