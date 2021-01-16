import React, { Component } from "react";
import styled from "styled-components";

// Adding AWS Amplify Authentication
import Amplify from "aws-amplify";
import config from "../aws-exports";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

// Configure Amplify
Amplify.configure(config);

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: white;
  margin: 0 2em;
  width: 80%;
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

export class ProjectsListPage extends Component {
  render() {
    return (
      <AmplifyAuthenticator>
        <AmplifySignOut />
        <MainContainer>
          <PageTitle>Projects</PageTitle>
          <PageBlurb>Current List of Projects</PageBlurb>
          <Button href="/admin/new-project">Add New Project</Button>

          <Content></Content>
        </MainContainer>
      </AmplifyAuthenticator>
    );
  }
}

export default ProjectsListPage;
