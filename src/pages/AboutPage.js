import React, { Component } from "react";
import styled from "styled-components";
import AWSDeveloper from "../assets/certs/AWS-Certified_Developer_Associate.png";
import AWSArchitect from "../assets/certs/AWS-Certified_Solutions-Architect_Associate.png";
import AWSSysOps from "../assets/certs/AWS-Certified_Sysops-Administrator_Associate.png";
import AzureFundamentals from "../assets/certs/microsoft-certified-azure-fundamentals.png";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: white;
  margin: 2em;
`;

const PageTitle = styled.div`
  font-size: 2em;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  text-align: left;
  margin: 0.5em;
`;

const PageBlurb = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
  text-align: center;
  min-width: 70%;
`;

const Certifications = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export class AboutPage extends Component {
  render() {
    return (
      <MainContainer>
        <PageTitle>About</PageTitle>
        <PageBlurb>
          The future belongs to those who believe in bla bla bla
        </PageBlurb>
        <Certifications>
          <img
            src={AWSArchitect}
            alt="aws certified solutions architect associate"
            height="100px"
            width="100px"
          />
          <img
            src={AWSDeveloper}
            alt="aws certified developer associate"
            height="100px"
            width="100px"
          />
          <img
            src={AWSSysOps}
            alt="aws certified sysops administrator associate"
            height="100px"
            width="100px"
          />
          <img
            src={AzureFundamentals}
            alt="microsoft azure fundamentals"
            height="100px"
            width="100px"
          />
        </Certifications>
      </MainContainer>
    );
  }
}

export default AboutPage;
