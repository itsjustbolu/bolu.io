import React, { Component } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 1100vw;
`;

export class BlogAdminPage extends Component {
  render() {
    return (
      <MainContainer>
        <div>Blog Admin</div>
        <button>
          <a href="/blog/new-post">ADD NEW POST</a>{" "}
        </button>
        <form></form>
      </MainContainer>
    );
  }
}

export default BlogAdminPage;
