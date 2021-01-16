import React, { Component } from "react";
import styled from "styled-components";

// Adding AWS Amplify Authentication
import Amplify from "aws-amplify";
import config from "../aws-exports";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

// Add GraphQL components
import { API, graphqlOperation } from "aws-amplify";
import { createBlog } from "../graphql/mutations";

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

export class NewPostPage extends Component {
  state = {
    title: "",
    slug: "",
    date: "",
    category: "",
    reading_time: "",
    summary: "",
    content: "",
    blogs: [],
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  

  createBlog = async () => {
    const {
      title,
      slug,
      date,
      category,
      reading_time,
      summary,
      content,
    } = this.state;
    if (title === "") return;
    try {
      const blog = {
        title,
        slug,
        date,
        category,
        reading_time,
        summary,
        content,
      };
      const blogs = [...this.state.blogs, blog];
      this.setState({
        blogs,
        title: "",
        slug: "",
        date: "",
        category: "",
        reading_time: "",
        summary: "",
        content: "",
      });
      await API.graphql(graphqlOperation(createBlog, { input: blog }));
      console.log("blog post created successfully");
    } catch (err) {
      console.log("error", err);
    }
  };

  render() {
    return (
      <AmplifyAuthenticator>
        <AmplifySignOut />
        <MainContainer>
          <PageTitle>Add New Post</PageTitle>
          <PageBlurb>Enter new blog post data below</PageBlurb>
          <Content>
            <BlogForm>
              <BlogInput
                onChange={this.onChange}
                value={this.state.title}
                type="text"
                name="title"
                placeholder="Enter title for blog post"
                required
                autoFocus
              />

              <BlogInput
                onChange={this.onChange}
                value={this.state.slug}
                type="text"
                name="slug"
                placeholder="Enter slug"
                required
              />

              <BlogInput
                onChange={this.onChange}
                value={this.state.date}
                type="number"
                name="date"
                required
              />

              {/* <BlogInput 
                type="file"
                id="file-input"
                accept="image/*"
              
              /> */}

              <BlogInput
                onChange={this.onChange}
                value={this.state.category}
                type="text"
                name="category"
                placeholder="Enter category"
                required
              />

              <BlogInput
                onChange={this.onChange}
                value={this.state.reading_time}
                type="number"
                name="reading_time"
                placeholder="Enter reading time"
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

              <BlogTextarea
                onChange={this.onChange}
                value={this.state.content}
                type="textarea"
                name="content"
                placeholder="Content"
                rows="20"
                cols="25"
                required
              />
            </BlogForm>
          </Content>

          <Button onClick={this.createBlog}>Submit Post</Button>
        </MainContainer>
      </AmplifyAuthenticator>
    );
  }
}

export default NewPostPage;
