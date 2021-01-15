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
  render() {
    return (
      <MainContainer>
        <PageTitle>Add New Post</PageTitle>
        <PageBlurb>Enter new blog post data below</PageBlurb>
        <Content>
          <BlogForm>
            <BlogInput
              type="text"
              name="blog_title"
              placeholder="Enter title for blog post"
              required
              autofocus
            />

            <BlogInput
              type="text"
              name="blog_slug"
              placeholder="Enter slug"
              required
            />

            <BlogInput type="date" name="blog_date" required />

            <BlogInput
              type="text"
              name="blog_category"
              placeholder="Enter category"
              required
            />

            <BlogInput
              type="number"
              name="blog_reading time"
              placeholder="Enter reading time"
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

            <BlogTextarea
              type="textarea"
              name="blog_content"
              placeholder="Content"
              rows="20"
              cols="25"
              required
            />
          </BlogForm>
        </Content>

        <Button href="">Submit</Button>
      </MainContainer>
    );
  }
}

export default NewPostPage;
