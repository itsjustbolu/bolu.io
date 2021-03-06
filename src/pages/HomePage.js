import React, { Component } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  height: 100vh;
  // min-height: 100%;
  background-color: white;
  margin-top: 10vh;
`;

const Picture = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 5em;
  margin-top: 1em;
`;

const Hello = styled.div`
  font-size: 1.7em;
  font-family: "Noto Sans JP", sans-serif;
  margin: 0.5em;
`;

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
  background-color: orange;
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
      <div>
        <MainContainer>
          <Picture
            src="https://boluio-blogposts-projects-images.s3.us-east-2.amazonaws.com/boluio_avatar.jpeg"
            alt="bolu avatar"
          />
          <Hello>Hi, I'm Bolu 👋🏿</Hello>
          <Engineer>Cloud & DevOps Engineer. </Engineer>

          <Specialty>
            I build, deploy and maintain readily-available, fault-tolerant
            infrastructure and software in the cloud using automation (IaC)
            combined with CI/CD.
          </Specialty>

          <ButtonContainer>
            <Button href="/blog">Blog</Button>
            <Button href="/projects">Projects</Button>
          </ButtonContainer>
        </MainContainer>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
