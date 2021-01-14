import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  background-color: white;
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: 20% 80%;
  border-bottom: purple 3px solid;
`;

const Logo = styled.a`
  font-size: 2em;
  grid-column: 1 / 2;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

const NavlinksContainer = styled.div`
  grid-column: 2 / 2;
  display: flex;
  justify-content: flex-end;
  padding: 0em 4em;
`;

const Navlinks = styled.a`
  font-size: 1em;
  text-decoration: none;
  margin: 1em;
  color: black;
  text-transform: uppercase;

  &:hover {
    color: red;
  }
`;

function TopNavbar() {
  return (
    <NavContainer>
      <div>
        <Logo href="/">BOLU</Logo>
      </div>
      <NavlinksContainer>
        <Navlinks href="/about">About</Navlinks>
        <Navlinks href="/blog">Blog</Navlinks>
        <Navlinks href="/contact">Contact</Navlinks>
        <Navlinks href="/projects">Projects</Navlinks>
      </NavlinksContainer>
    </NavContainer>
  );
}

export default TopNavbar;
