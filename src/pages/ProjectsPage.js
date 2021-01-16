import React, { Component } from "react";
import styled from "styled-components";
import Amplify from "aws-amplify";
import config from "../aws-exports";

import { API, graphqlOperation } from "aws-amplify";
import { listBlogs, listProjects } from "../graphql/queries";

Amplify.configure(config);

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
  state = { projects: [] };
  async componentDidMount() {
    try {
      const apiData = await API.graphql(graphqlOperation(listProjects));
      const projects = apiData.data.listProjects.items;
      this.setState({ projects });
    } catch (err) {
      console.log("error: ", err);
    }
  }

  render() {
    return (
      <MainContainer>
        <PageTitle>Projects</PageTitle>
        <PageBlurb>Fun stuff I've worked on 🚧</PageBlurb>

        {this.state.projects.map((proj, i) => (
          <ProjectsCards>
            <CardTitle>{proj.title}</CardTitle>
            <CardBlurb>
              {proj.summary}
              {proj.category}
            </CardBlurb>
            <CardLinks>
              <Link href={proj.demo_link}>Demo</Link>
              <Link href={proj.github_link}>Github</Link>
              <Link href={proj.blog_post_link}>Blog</Link>
              <Link href={proj.aws_link}>AWS</Link>
            </CardLinks>
          </ProjectsCards>
        ))}
      </MainContainer>
    );
  }
}

export default ProjectsPage;
