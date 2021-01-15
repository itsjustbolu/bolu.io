import React, { Component } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  margin: 2em;
`;

const PageTitle = styled.h1`
  font-size: 3em;
`;

const Blurb = styled.h3`
  margin: 2em;
`;

const BlogContainer = styled.div``;
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
        <Blurb>Thoughts of a doer</Blurb>
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
