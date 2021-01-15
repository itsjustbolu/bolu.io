import React, { Component } from "react";
import styled from "styled-components";
import MainPicture from "../assets/jeff bezos.jpg";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: white;
  margin: 2em;
`;

const Picture = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 3em;
  margin-top: 1em;
`;

const Hello = styled.div`
  font-size: 1.7em;
  font-family: "Noto Sans JP", sans-serif;
  margin: 0.5em;
`;

// const Building = styled.div`
//   font-size: 2.5em;
//   // font-family: "Open Sans", sans-serif;
//   font-family: "Noto Sans JP", sans-serif;
//   min-width: 60%;
//   text-align: center;
// `;

const Engineer = styled.div`
  font-size: 2.5em;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  text-align: center;
  margin: 0.5em;
`;

const Specialty = styled.div`
  font-family: "Noto Sans JP", sans-serif;
  margin: 1em;
  font-size: 1em;
  text-align: center;
  min-width: 70%;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.a`
  background-color: #d1efed;
  margin: 1em;
  padding: 1em;
  font-size: 1em;
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Noto Sans JP", sans-serif;

  &:hover {
    background-color: black;
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
`;

export class HomePage extends Component {
  render() {
    return (
      <MainContainer>
        <Picture src={MainPicture} alt="bolu owolana picture" />
        <Hello>Hi, I'm Bolu 👋🏿</Hello>
        <Engineer>Cloud / DevOps Engineer </Engineer>
  

        <Specialty>
          I specialize building, deploying, and maintaining readily-available
          and fault-tolerant cloud infrastructure using automation (IaC)
          combined with CI/CD.
        </Specialty>

        <ButtonContainer>
          <Button href="/blog">Blog</Button>
          <Button href="/projects">Projects</Button>
        </ButtonContainer>
      </MainContainer>
    );
  }
}

export default HomePage;
