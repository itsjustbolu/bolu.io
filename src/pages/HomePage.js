import React, { Component } from "react";
import styled from "styled-components";
import PastelBackground from "../assets/pastel_background_blue_pink.jpg";
import MainPicture from "../assets/jeff bezos.jpg";

const MainContainer = styled.div`
  background-image: url(${PastelBackground});
  height: 110vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
`;

const IntroContent = styled.div`
  display: flex;
  min-width: 50vw;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

const Hello = styled.div`
  max-width: 50%;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.a`
  background-color: orange;
  margin: 1em;
  padding: 1em;
  font-size: 1em;
  text-decoration: none;
  color: black;
  text-transform: uppercase;

  &:hover {
    background-color: white;
  }
`;

const Picture = styled.img`
  height: 30%;
  width: 30%;
`;

export class HomePage extends Component {
  render() {
    return (
      <MainContainer>
        <IntroContent>
          <Hello>
            <div>Hello,</div>
            <div>I'm Bolu.</div>
            <div>Cloud and DevOps Engineer</div>
            <p>
              I specialize building readily-available and fault-tolerant
              infrastructure in the cloud using automation combined with
              Continuous Integration and Delivery.
            </p>
            <p>
              Learn more about me, read some of my musings, and see projects
              I've worked on.
            </p>
            <ButtonContainer>
              <Button href="/blog">Blog</Button>
              <Button href="/projects">Projects</Button>
            </ButtonContainer>
          </Hello>
          <Picture src={MainPicture} alt="bolu owolana picture" />
        </IntroContent>
      </MainContainer>
    );
  }
}

export default HomePage;
