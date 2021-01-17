import React, { Component } from "react";
import styled from "styled-components";
import Amplify from "aws-amplify";
import config from "../aws-exports";

import { API, graphqlOperation } from "aws-amplify";
import { listBlogs } from "../graphql/queries";
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

const Container = styled.ul`
  width: 350px;
  border: 2px solid black;
  padding: 1em;
`;

export class BlogPage extends Component {
  state = { blogs: [] };
  async componentDidMount() {
    try {
      const apiData = await API.graphql(graphqlOperation(listBlogs));
      const blogs = apiData.data.listBlogs.items;
      this.setState({ blogs });
    } catch (err) {
      console.log("error: ", err);
    }
  }

  render() {
    return (
      <div>
        <MainContainer>
          <PageTitle>Blog</PageTitle>
          <PageBlurb>Just sharing some things I know 📝</PageBlurb>
        </MainContainer>
        <ContentContainer>
          {this.state.blogs.reverse().map((post, i) => (
            <CardSection>
              <Container
                style={{
                  backgroundColor: "#f8f9fa",
                  // backgroundImage:
                  //   "linear-gradient(180deg, #FFE53B 0%, #FF2525 74%)",
                }}
              >
                <li style={{ listStyleType: "none" }}>
                  <p
                    style={{
                      fontSize: "1em",
                      fontWeight: "bold",
                      marginBottom: "0.2em",
                      textTransform: "capitalize",
                    }}
                  >
                    {post.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.7em",
                      fontStyle: "italic",
                      marginBottom: "1em",
                    }}
                  >
                    {post.summary}
                  </p>
                  <p
                    style={{
                      fontSize: "0.7em",
                      fontWeight: "bold",
                      color: "#017cfe",
                      margin: "0",
                    }}
                  >
                    {post.createdAt}
                  </p>

                  <p
                    style={{
                      backgroundColor: "orange",
                      color: "black",
                      border: "1px solid black",
                      padding: "0.2em",
                      fontSize: "0.7em",
                      fontWeight: "bold",
                      margin: "0.5em 0",
                      width: "max-content",
                    }}
                  >
                    #{post.category}
                  </p>
                </li>
              </Container>
            </CardSection>
          ))}
        </ContentContainer>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default BlogPage;
