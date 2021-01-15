import React, { Component } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 1100vw;
`;

export class AdminPage extends Component {
  render() {
    return (
      <MainContainer>
        <div>Admin</div>
        <button>
          <a href="/admin/new-post">ADD NEW POST</a>{" "}
        </button>
        <button>
          <a href="/admin/new-project">ADD NEW PROJECT</a>{" "}
        </button>
        <form></form>
      </MainContainer>
    );
  }
}

export default AdminPage;
