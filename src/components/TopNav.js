import React from "react";
import styled from "styled-components";
import blacklogo from "../assets/bo_black_logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// const NavContainer = styled.div`
//   background-color: white;
//   display: grid;
//   width: 100%;
//   align-items: center;
//   grid-template-columns: 20% 80%;
//   border-bottom: purple 3px solid;
//   padding: 0.5em;
// `;

// const Logo = styled.a`
//   grid-column: 1 / 2;
//   display: flex;
//   justify-content: flex-start;
//   margin-left: 5%;
// `;

// const NavlinksContainer = styled.div`
//   grid-column: 2 / 2;
//   display: flex;
//   justify-content: flex-end;
//   padding: 0em 4em;
// `;

// const Navlinks = styled.a`
//   font-size: 1em;
//   text-decoration: none;
//   margin: 1em;
//   color: black;
//   text-transform: uppercase;

//   &:hover {
//     color: red;
//     background-color: black;
//   }
// `;

function TopNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          src={blacklogo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="bolu owolana logo"
        />
      </Navbar.Brand>{" "}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNavbar;
