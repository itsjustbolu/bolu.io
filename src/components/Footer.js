import React from "react";
import styled from "styled-components";
import white_logo from "../assets/Bo_white_logo.png";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 0.4em;
  background-color: black;
  color: white;
  padding: 1.5em;
  height: 100%;
`;

const Left = styled.div`
  display: flex;
  color: white;
  font-size: 2.5em;
`;

const FontAwesome = styled.div`
  color: white;
  padding: 0.5em;

  &:hover {
    color: orange;
  }
`;

const Center = styled.div`
  text-align: center;
`;

const Right = styled.div`
  font-size: 1.7em;
`;

function Footer() {
  return (
    <FooterContainer>
      <Left>
        <FontAwesome>
          <i class="fab fa-instagram"></i>
        </FontAwesome>
        <FontAwesome>
          <i class="fab fa-linkedin-in"></i>
        </FontAwesome>
        <FontAwesome>
          <i class="fab fa-github"></i>
        </FontAwesome>
        <FontAwesome>
          <i class="fab fa-dev"></i>
        </FontAwesome>
      </Left>
      <Center>
        <img
          src={white_logo}
          alt="bolu owolana logo"
          height="50px"
          width="50px"
        />
      </Center>
      <Right>©2021 All Rights Reserved.</Right>
    </FooterContainer>
  );
}

export default Footer;
