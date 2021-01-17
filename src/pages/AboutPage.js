import React, { Component } from "react";
import styled from "styled-components";
import AWSDeveloper from "../assets/certs/AWS-Certified_Developer_Associate.png";
import AWSArchitect from "../assets/certs/AWS-Certified_Solutions-Architect_Associate.png";
import AWSSysOps from "../assets/certs/AWS-Certified_Sysops-Administrator_Associate.png";
import AzureFundamentals from "../assets/certs/microsoft-certified-azure-fundamentals.png";
import GCEAssociate from "../assets/certs/google_cloud_engineer_associate.png";
import Footer from "../components/Footer";

const Container = styled.div`
  height: 100%;
`;

const MainContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
  margin-left: 2em;
  margin-right: 2em;
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
  margin: 2em 2.5em;
  line-height: 2em;
`;

const Certifications = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 2em;
`;

export class AboutPage extends Component {
  render() {
    return (
      <Container>
        <MainContainer>
          <PageTitle>About Me</PageTitle>
          <PageBlurb>
            "The future belongs to those who believe in their dreams."🔮
          </PageBlurb>
        </MainContainer>
        <Content>
          <p>
            I'm a former Petroleum Geologist and Geophysicist turned Cloud &
            DevOps Engineer that loves building, deploying and maintaining cloud
            resources to ensure maximum uptime, fault-tolerance and
            high-availability.
          </p>
          <p>
            My favorite devops tools are Chef, CloudFormation, Puppet and
            Terraform. I'm also very familiar with version control systems like
            CodeCommit, Git, Github and CI/CD tools like CodeBuild, CodeDeploy,
            CodePipeline and Jenkins. As far as cloud technologies, I feel at
            home with AWS, however I have dabbled in Google Cloud and Azure for
            some projects. I continuously strive to keep abreast of relevant
            emerging technologies and tools that could be more efficient and/or
            provide better workflows.
          </p>
          <p>
            I write a{" "}
            <strong>
              <a href="/blog">blog</a>
            </strong>{" "}
            sharing some of my learnings and also build small{" "}
            <strong>
              <a href="/projects">projects</a>
            </strong>{" "}
            in my spare time to keep my software engineering skills sharp.
          </p>
          <p>
            I am <strong>3x AWS Certified</strong>, and my specialties include
            AWS, Automation via IaC, Bash, CI/CD, Cloud Computing, Container
            Services, DevOps, Git, Linux, Python Serverless Architecture and
            System Administration.{" "}
          </p>
          <p>
            If you've got any questions about my journey or simply want to say
            hi, feel free to{" "}
            <strong>
              <a href="/contact">send me a message</a>
            </strong>
            .
          </p>{" "}
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
            {/* <img
            src={GCEAssociate}
            alt="google cloud engineer associate"
            height="100px"
            width="100px"
          /> */}
          </Certifications>
        </Content>

        {/* <Footer /> */}
      </Container>
    );
  }
}

export default AboutPage;
