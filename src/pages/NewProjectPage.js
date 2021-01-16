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
                type="text"
                name="project_title"
                placeholder="Enter title for project"
                required
                autofocus
              />

              <BlogInput
                type="text"
                name="project_category"
                placeholder="Enter category"
                required
              />

              <BlogTextarea
                type="textarea"
                name="blog_snippet"
                placeholder="Summary"
                rows="3"
                cols="25"
                required
              />

              <BlogInput
                type="url"
                name="project_demo_link"
                placeholder="Enter link for working demo"
                required
              />

              <BlogInput
                type="url"
                name="project_github_link"
                placeholder="Enter github repo link"
                required
              />

              <BlogInput
                type="url"
                name="project_blog_post_link"
                placeholder="Enter blog post link"
                required
              />

              <BlogInput
                type="url"
                name="project_aws_link"
                placeholder="Enter aws link"
              />
            </BlogForm>
          </Content>

          <Button href="">Submit</Button>
        </MainContainer>
      </AmplifyAuthenticator>
    );
  }
}

export default NewProjectPage;
