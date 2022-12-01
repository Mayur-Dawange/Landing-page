import React from "react";
import "./homeAbout.scss";
import { Container } from "react-bootstrap";
import aboutImage from "../../Assets/img/banner3.webp";

const HomeAbout = () => {
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
                <button>Apply Now</button>
              </div>
            </div>
            <div className="left_about_box col-lg-6">
              <img src={aboutImage} alt="aboutImage" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomeAbout;
