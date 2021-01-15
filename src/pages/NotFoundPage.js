import React, { Component } from "react";
import styled from "styled-components";
import PageNotFound from "../assets/undraw_page_not_found_su7k.svg";

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
  text-align: center;
`;

const Button = styled.a`
  background-color: orange;
  margin-top: 5em;
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

export class NotFoundPage extends Component {
  render() {
    return (
      <MainContainer>
        <PageTitle>Page Not Found</PageTitle>
        <PageBlurb>Whoops, you've reached a dead end ⛔</PageBlurb>
        <Button href="/">GO HOME</Button>

        <Content>
          <img
            src={PageNotFound}
            width="300em"
            height="300em"
            alt="404 page not found"
          />
        </Content>
      </MainContainer>
    );
  }
}

export default NotFoundPage;
