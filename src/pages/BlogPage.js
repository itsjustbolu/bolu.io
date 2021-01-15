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

const BlogCards = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  padding: 1em;
  max-width: 25em;
  border: 1px solid black;
  border-radius: 5px;
  margin: 2em 0;
`;
const CardText = styled.div`
  display: grid;
  width: 70%;
`;

const CardTitle = styled.div`
  font-size: 1em;
  font-weight: bold;
  font-family: "Noto Sans JP", sans-serif;
`;

const CardDate = styled.div`
  font-size: 0.5em;
  font-family: "Open Sans", sans-serif;
  color: blue;
  font-weight: bold;
  margin: 0.5em 0;
`;

const CardBlurb = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 0.7em;
`;

const CardPic = styled.div`
  margin: 3em;
  width: 30%;
`;

export class BlogPage extends Component {
  render() {
    return (
      <MainContainer>
        <PageTitle>Blog</PageTitle>
        <PageBlurb>Just sharing some knowledge 📝</PageBlurb>
        <BlogCards>
          <CardText>
            <CardTitle>AWS Authentication with React</CardTitle>
            <CardDate>January 1, 2020</CardDate>
            <CardBlurb>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </CardBlurb>
          </CardText>
          <CardPic>photo</CardPic>
        </BlogCards>
      </MainContainer>
    );
  }
}

export default BlogPage;
