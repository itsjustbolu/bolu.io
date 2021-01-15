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

const BlogContainer = styled.div`
  margin: 2em 0;
`;

const BlogCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  border: 1px solid black;
  border-radius: 5px;
  max-width: 40%;
`;
const CardText = styled.div`
  display: grid;
  max-width: 50%;
`;
const CardPic = styled.div`
  max-width: 50%;
  margin: 3em;
`;
const ReadMore = styled.button``;

export class BlogPage extends Component {
  render() {
    return (
      <MainContainer>
        <PageTitle>Blog</PageTitle>
        <PageBlurb>Musings of an always wandering mind.</PageBlurb>
        <BlogContainer>
          <BlogCards>
            <CardText>
              <p>Title of the post</p>
              <p>Date | Time | Views</p>
              <p>Some text explaining post</p>
              <ReadMore>Read more...</ReadMore>
            </CardText>
            <CardPic>photo</CardPic>
          </BlogCards>
        </BlogContainer>
      </MainContainer>
    );
  }
}

export default BlogPage;
