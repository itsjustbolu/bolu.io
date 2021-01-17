import React from "react";
import black_logo from "../assets/bo_black_logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./TopNav.css";

function TopNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          src={black_logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="bolu owolana logo"
        />
      </Navbar.Brand>{" "}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link id="nav_link" href="/about">
            About
          </Nav.Link>
          <Nav.Link id="nav_link" href="/blog">
            Blog
          </Nav.Link>
          <Nav.Link id="nav_link" href="/projects">
            Projects
          </Nav.Link>
          <Nav.Link id="nav_link" href="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNavbar;
