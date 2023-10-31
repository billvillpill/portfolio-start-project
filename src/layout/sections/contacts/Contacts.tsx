import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                {/*звголовок h2*/}
                <SectionTitle>Contact</SectionTitle>
                {/*форма*/}
                <StyledForm>
                    <Field placeholder={"name"}/>
                    <Field placeholder={"subject"}/>
                    <Field placeholder={"message"} as={"textarea"}/>
                    <Button type={"submit"}>Send message</Button>
                </StyledForm>
            </Container>


        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  
`
const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  
  textarea {
    resize: none; // запрещает растягивать textarea
    height: 155px;
  }
`


const Field = styled.input`
  width: 100%;
  border: 1px solid ${theme.colors.borderColor};
  background-color: ${theme.colors.secondaryBg};
  padding: 7px 15px;

  color: ${theme.colors.font};   //цвет вводимого текста
  &::placeholder {                // цвет placeholder
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }
  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
  
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;
`