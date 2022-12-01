import React, { useState, useEffect } from "react";
import "./homeAbout.scss";
import { Alert, Button, Container } from "react-bootstrap";
import aboutImage from "../../Assets/img/banner3.webp";

const HomeAbout = () => {
  const [state, setState] = useState(0);
  const [Width, setWidth] = useState(window.screen.width);
  const [show, setShow] = useState(null);

  const actualWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", actualWidth);

    return () => {
      window.removeEventListener("resize", actualWidth);
    };
  });

  useEffect(() => {
    document.title = `chats ${state} `;
  });

  return (
    <>
      <section className="home_about">
        <Container>
          <div className="row">
            <div className="left_about_box col-lg-6">
              <div className="inner_left_box">
                <h3>Lorem ipsum dolor sit amet consectetur</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae iste dicta tenetur consectetur
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae iste dicta tenetur consectetur
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae iste dicta tenetur consectetur
                </p>
                <Button onClick={() => setState(state + 1)}>
                  Counter Chat
                </Button>
                <span>{state}</span>
              </div>
            </div>
            <div className="right_about_box col-lg-6">
              <div className="inner_right">
                <img src={aboutImage} alt="aboutImage" />
                {/* <span className="screen_size">
                  Your Screen Size <br /> {Width}px
                </span> */}
              </div>
            </div>
          </div>
          <Alert show={show} variant="success" className="my-5">
            <Alert.Heading>Your Screen Size </Alert.Heading>
            <p className="Width_screen">{Width}</p>

            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close
              </Button>
            </div>
          </Alert>
          <div className="screen_btn">
            {!show && (
              <Button onClick={() => setShow(true)} variant="success">
                Check Your Screen Size
              </Button>
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomeAbout;
