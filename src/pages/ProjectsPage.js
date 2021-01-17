import React, { Component } from "react";
import styled from "styled-components";
import Amplify from "aws-amplify";
import config from "../aws-exports";

import { API, graphqlOperation } from "aws-amplify";
import { listProjects } from "../graphql/queries";
import Footer from "../components/Footer";

Amplify.configure(config);

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

const ContentContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
`;

const CardSection = styled.section`
  display: inline-flex;
  justify-content: center;
  // padding: 0 2em;
  margin: 0.5em;
`;

const Container = styled.div`
  width: 350px;
  border: 2px solid black;
  padding: 1em;
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
  display: flex;
  margin-top: 1em;
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

const CardCategory = styled.div`
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
      <div style={{ marginBottom: "5em", height: "100%" }}>
        <MainContainer>
          <PageTitle>Projects</PageTitle>
          <PageBlurb>Fun stuff I've worked on 🚧</PageBlurb>
        </MainContainer>
        <ContentContainer>
          {this.state.projects.map((proj, i) => (
            <CardSection>
              <Container>
                <CardTitle>{proj.title}</CardTitle>
                <CardBlurb>{proj.summary}</CardBlurb>
                <CardCategory>{proj.category}</CardCategory>
                <CardLinks>
                  <Link href={proj.demo_link} target="_blank">
                    Demo
                  </Link>
                  <Link href={proj.github_link} target="_blank">
                    Github
                  </Link>
                  <Link href={proj.blog_post_link} target="_blank">
                    Blog
                  </Link>
                  <Link href={proj.aws_link} target="_blank">
                    AWS
                  </Link>
                </CardLinks>
              </Container>
            </CardSection>
          ))}
        </ContentContainer>
        
      </div>
    );
  }
}

export default ProjectsPage;
