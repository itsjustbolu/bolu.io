import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  background-color: gray;
  padding: 2em;
`;

const LogoPlaceholder = styled.div`

`

const Navlinks = styled.a`
  font-size: 2em;
  margin: 2em;
  padding: 2em;
`;

function TopNavbar() {
  return (
    <NavContainer>
      
      <div class="nav-container">
        <div class="nav-links">
          <Navlinks>
            <a href="/about">About</a>
          </Navlinks>
          <Navlinks>
            <a href="/blog">Blog</a>
          </Navlinks>
          <Navlinks>
            <a href="/contact">Contact</a>
          </Navlinks>
          <Navlinks>
            <a href="/projects">Projects</a>
          </Navlinks>
        </div>
      </div>
    </NavContainer>
  );
}

export default TopNavbar;
