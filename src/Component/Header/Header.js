import React, { useState } from "react";
import "./header.scss";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import PhoneIcon from "../../Assets/img/icon-call-white.png";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
// import { containerClasses } from "@mui/system";

const Header = () => {
  const [mode, setmode] = useState("navibar");

  const toggleMode = () => {
    if (mode === "navibar") {
      setmode("dark");
      const myElement = document.getElementsByClassName("header");
      myElement.style.backgroundColor = "black";
      const dropdowns = document.getElementsByClassName("show");
      dropdowns.style.backgroundColor = "black";
    } else {
      setmode("navibar");
    }
  };
  return (
    <>
      <div className="topbar">
        <Container>
          <div className="topbar_contact_details">
            <p>Know more? Call now:</p>
            <div>
              <img src={PhoneIcon} alt="" className="trin-trin" />
              +91 97558 23659
            </div>
          </div>
        </Container>
      </div>
      {["lg"].map((expand, index) => (
        <div key={index} className={`header bg-${mode}`}>
          <Container>
            <Navbar
              sticky="top"
              expand={expand}
              className={`sticky-top navbar-${mode}`}
            >
              <div className="navibar">
                <Navbar.Brand href="#">
                  <img
                    src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png"
                    alt=""
                    width={"80px"}
                  />
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <NavLink to="/" className="nav-link">
                        Home
                      </NavLink>
                      <NavLink to="about" className="nav-link">
                        About
                      </NavLink>
                      <NavLink to="service" className="nav-link">
                        Service
                      </NavLink>
                      <NavDropdown
                        title="More Info"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <div className={`bg-${mode}`}>
                          <NavDropdown.Item>
                            <NavLink to="Career" className="nav-link">
                              Career
                            </NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <NavLink to="Blogs" className="nav-link">
                              Blogs
                            </NavLink>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <NavLink to="Blogs" className="nav-link">
                              Something else here
                            </NavLink>
                          </NavDropdown.Item>
                        </div>
                      </NavDropdown>
                      <NavLink to="Contact" className="nav-link">
                        Contact
                      </NavLink>
                    </Nav>
                    {/* <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form> */}
                    <Button onClick={toggleMode}>dark mode</Button>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </div>
            </Navbar>
          </Container>
        </div>
      ))}
    </>
  );
};

export default Header;
