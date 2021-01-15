import React, { Component } from "react";
import styled from "styled-components";
import AWSDeveloper from "../assets/certs/AWS-Certified_Developer_Associate.png";
import AWSArchitect from "../assets/certs/AWS-Certified_Solutions-Architect_Associate.png";
import AWSSysOps from "../assets/certs/AWS-Certified_Sysops-Administrator_Associate.png";
import AzureFundamentals from "../assets/certs/microsoft-certified-azure-fundamentals.png";
import GCEAssociate from "../assets/certs/google_cloud_engineer_associate.png";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: white;
  margin: 0 2em;
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
  font-weight: 600;
`;

const Content = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
  margin: 2em 0;
`;

const Certifications = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 2em 0;
`;

export class AboutPage extends Component {
  render() {
    return (
      <MainContainer>
        <PageTitle>About Me</PageTitle>
        <PageBlurb>
          "The future belongs to those who believe in their dreams."💡
        </PageBlurb>
        <Content>
          <p>
            I'm a former Petroleum Geologist and Geophysicist turned Cloud &
            DevOps Engineer that loves building, deploying and maintaining cloud
            resources to ensure maximum uptime, fault tolerance and high
            availability.
          </p>

          <p>
            I have learned a lot as a Cloud Engineer, and I continuously develop
            and challenge myself to constantly absorb relevant emerging
            technologies. Using programming languages like Python, Javascript
            and Bash, as well as tools Cloudformation and Terraform enables
            automation.
          </p>

          <p>
            I write a{" "}
            <strong>
              <a href="/blog" style={{ color: "orange" }}>
                blog
              </a>
            </strong>{" "}
            sharing some of my learnings and tips as an Engineer, and tend to
            build pet{" "}
            <strong>
              <a href="/projects" style={{ color: "orange" }}>
                projects
              </a>
            </strong>{" "}
            in my spare time to keep my programming and software engineering
            skills sharp.
          </p>

          <p>
            I am <strong>3x AWS Certified</strong>, and my specialties include
            AWS, Automation via IaC, CI/CD, Cloud Computing, Container Services,
            DevOps, Git, Python and Serverless Architecture.{" "}
          </p>

          <p>
            If you've got any questions about my journey or simply want to say
            hi, feel free to{" "}
            <strong>
              <a href="/contact" style={{ color: "orange" }}>
                send me a message
              </a>
            </strong>
            .
          </p>
        </Content>
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
          <img
            src={GCEAssociate}
            alt="google cloud engineer associate"
            height="100px"
            width="100px"
          />
        </Certifications>
      </MainContainer>
    );
  }
}

export default AboutPage;
