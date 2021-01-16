import React, { Component } from "react";
import styled from "styled-components";

// Adding AWS Amplify Authentication
import Amplify from "aws-amplify";
import config from "../aws-exports";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

// Add GraphQL components
import { API, graphqlOperation } from "aws-amplify";
import { createProject } from "../graphql/mutations";

// Configure Amplify
Amplify.configure(config);

// Style Components

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

const BlogForm = styled.form`
  width: 70vw;
  display: flex;
  flex-direction: column;
`;

const BlogInput = styled.input`
  border: none;
  border-bottom: 2px solid gray;
  border-left: 2px solid gray;
  padding: 0.5em;
  margin-bottom: 1.3em;
  font-size: 1em;
`;

const BlogTextarea = styled.textarea`
  padding: 0.5em;
  border: none;
  border-bottom: 2px solid gray;
  font-size: 1em;
  border-left: 2px solid gray;
  margin-bottom: 1.3em;
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

export class NewProjectPage extends Component {
  state = {
    title: "",
    category: "",
    summary: "",
    demo_link: "",
    github_link: "",
    blog_post_link: "",
    aws_link: "",
    projects: [],
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createProject = async () => {
    const {
      title,
      category,
      summary,
      demo_link,
      github_link,
      blog_post_link,
      aws_link,
    } = this.state;
    if (title === "") return;
    try {
      const project = {
        title,
        category,
        summary,
        demo_link,
        github_link,
        blog_post_link,
        aws_link,
      };
      const projects = [...this.state.projects, project];
      this.setState({
        projects,
        title: "",
        category: "",
        summary: "",
        demo_link: "",
        github_link: "",
        blog_post_link: "",
        aws_link: "",
      });
      await API.graphql(graphqlOperation(createProject, { input: project }));
      console.log("project created successfully");
    } catch (err) {
      console.log("error", err);
    }
  };

  render() {
    return (
      <AmplifyAuthenticator>
        <AmplifySignOut />
        <MainContainer>
          <PageTitle>Add New Project</PageTitle>
          <PageBlurb>Enter new project data below</PageBlurb>
          <Content>
            <BlogForm>
              <BlogInput
                onChange={this.onChange}
                value={this.state.title}
                type="text"
                name="title"
                placeholder="Enter title for project"
                required
                autofocus
              />

              <BlogInput
                onChange={this.onChange}
                value={this.state.category}
                type="text"
                name="category"
                placeholder="Enter category"
                required
              />

              <BlogTextarea
                onChange={this.onChange}
                value={this.state.summary}
                type="textarea"
                name="summary"
                placeholder="Summary"
                rows="3"
                cols="25"
                required
              />

              <BlogInput
                onChange={this.onChange}
                value={this.state.demo_link}
                type="url"
                name="demo_link"
                placeholder="Enter link for working demo"
                required
              />

              <BlogInput
                onChange={this.onChange}
                value={this.state.github_link}
                type="url"
                name="github_link"
                placeholder="Enter github repo link"
                required
              />

              <BlogInput
                onChange={this.onChange}
                value={this.state.blog_post_link}
                type="url"
                name="blog_post_link"
                placeholder="Enter blog post link"
                required
              />

              <BlogInput
                onChange={this.onChange}
                value={this.state.aws_link}
                type="url"
                name="aws_link"
                placeholder="Enter aws link"
              />
            </BlogForm>
          </Content>

          <Button onClick={this.createProject}>Add Project</Button>
        </MainContainer>
      </AmplifyAuthenticator>
    );
  }
}

export default NewProjectPage;
