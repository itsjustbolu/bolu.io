import React, { Component } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 80%;
  display: grid;
  justify-content: center;
  margin: 2em;
`;

const PageTitle = styled.div`
  font-size: 2em;
`;

const PageBlurb = styled.div`
  font-size: 1em;
`;

export class AboutPage extends Component {
  render() {
    return (
      <MainContainer>
        <PageTitle>About Me</PageTitle>
        <PageBlurb>
          The future belongs to those who believe in bla bla bla
        </PageBlurb>
      </MainContainer>
    );
  }
}

export default AboutPage;
