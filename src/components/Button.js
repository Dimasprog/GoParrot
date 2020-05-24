import React from "react";
import styled from "styled-components/native";
import {layout} from "../constants";

function Button(props) {
  return (
    <ButtonContainer>
      <ButtonText>RESET</ButtonText>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.View`
  background-color: black;
  justifyContent: center;
  height: ${layout.l};
  margin: ${layout.m};
  elevation: 3;
`

const ButtonText = styled.Text`
  color: white;
  textAlign: center;
  display: flex;
  fontSize: 25px;
`

export default Button;
