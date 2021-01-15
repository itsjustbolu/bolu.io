import React, { Component } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 1100vw;
`;

const Title = styled.div`
  font-size: 2em;
`;

const FormContainer = styled.form`
  margin: 2em;
`;

const SubmitButton = styled.button`
  background-color: red;
  padding: 0.5em;
`;

export class NewProjectPage extends Component {
  render() {
    return (
      <MainContainer>
        <Title>Add New Post</Title>
        <FormContainer>
          <div>
            <label for="title">Title: </label>
            <input type="text" id="title" name="title" />
            <br />
            <label>Slug: </label>
            <input type="text" name="slug" />
            <br />
            <label>Date: </label>
            <input type="date" name="date" />
            <br />
            <label>Time: </label>
            <input type="text" name="time" />
            <br />
            <label>Category: </label>
            <input type="text" name="category" />
            <br />
            <label>Content: </label>
            <textarea type="textarea" name="content" rows="10" columns="100" />
            <br />
          </div>
          <div>
            <SubmitButton>SUBMIT POST</SubmitButton>
          </div>
        </FormContainer>
      </MainContainer>
    );
  }
}

export default NewProjectPage;
