import React, { Component } from "react";
import styled from "styled-components";

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

const ProjectsCards = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  max-width: 20em;
  border: 1px solid black;
  border-radius: 5px;
  margin: 2em 0;
`;
const CardText = styled.div`
  display: grid;
  width: 70%;
`;

const CardTitle = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  font-family: "Noto Sans JP", sans-serif;
`;

const CardLinks = styled.div`
  font-size: 0.7em;
  font-family: "Open Sans", sans-serif;
  color: blue;
  font-weight: bold;
  margin: 0.5em 0;
  display: flex;
`;

const Link = styled.a`
  background-color: orange;
  color: black;
  padding: 1em;
  margin: 0 0.5em 0 0;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 5px;
  // font-size: 1em;

  &:hover {
    background-color: black;
    color: white;
    text-decoration: none;
  }
`;

const CardBlurb = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 0.7em;
`;

export class ProjectsPage extends Component {
  render() {
    return (
      <MainContainer>
        <PageTitle>Projects</PageTitle>
        <PageBlurb>Fun stuff I've worked on 🚧</PageBlurb>
        <ProjectsCards>
          <CardTitle>Portfolio Site</CardTitle>
          <CardBlurb>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s.
          </CardBlurb>
          <CardLinks>
            <Link href="/">Demo</Link>
            <Link href="/">Github</Link>
            <Link href="/">Blog</Link>
            <Link href="/">AWS</Link>
          </CardLinks>
        </ProjectsCards>
      </MainContainer>
    );
  }
}

export default ProjectsPage;
