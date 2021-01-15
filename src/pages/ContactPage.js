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

const ContactForm = styled.form`
  max-width: 60vw;
  display: flex;
  flex-direction: column;
`;

const ContactInput = styled.input`
  border: none;
  border-bottom: 2px solid gray;
  width: 300px;
  padding: 0.5em;
  margin-bottom: 1.3em;
  font-size: 1em;
`;

const ContactTextarea = styled.textarea`
  padding: 0.5em;
  border: none;
  border-bottom: 2px solid gray;
  font-size: 1em;
`;

const Button = styled.a`
  background-color: #d1efed;
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

export class ContactPage extends Component {
  render() {
    return (
      <MainContainer>
        <PageTitle>Contact</PageTitle>
        <PageBlurb>Fill in the form or email me at hi@bolu.io</PageBlurb>
        <Content>
          <ContactForm>
            <ContactInput
              type="text"
              name="sender_name"
              placeholder="Name"
              required
              autofocus
            />

            <ContactInput
              type="email"
              name="sender_email"
              placeholder="Email"
              required
            />

            <ContactTextarea
              type="textarea"
              name="sender_message"
              placeholder="Message"
              rows="50"
              cols="50"
              onInput="auto_grow"
              required
            />
          </ContactForm>
        </Content>
        <Button href="">Send</Button>
      </MainContainer>
    );
  }
}

export default ContactPage;
