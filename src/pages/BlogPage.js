import React, { Component } from "react";
import styled from "styled-components";
import Amplify from "aws-amplify";
import config from "../aws-exports";

import { API, graphqlOperation } from "aws-amplify";
import { listBlogs } from "../graphql/queries";
import Footer from "../components/Footer";

Amplify.configure(config);

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
  margin-left: 2em;
  margin-right: 2em;
  margin-bottom: 5em;
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

const CardContainer = styled.div`
  float: left;
`;

const BlogCards = styled.div`
  padding: 1em;
  min-width: 20em;
  border: 1px solid black;
  border-radius: 5px;
`;
const CardText = styled.div`
  width: 100%;
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

// const CardPic = styled.div`
//   margin: 3em;
//   width: 30%;
// `;

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
        <PageBlurb>Just sharing some knowledge 📝</PageBlurb>

        {this.state.blogs.map((post, i) => (
          <CardContainer>
            <BlogCards>
              <CardText>
                <CardTitle>{post.title}</CardTitle>
                <CardDate>{post.createdAt}</CardDate>
                <CardBlurb>{post.summary}</CardBlurb>
              </CardText>
              {/* <CardPic>photo</CardPic> */}
            </BlogCards>
          </CardContainer>
        ))}
      </MainContainer>
      <Footer/>
      </div>
    );
  }
}

export default BlogPage;
