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

const ButtonContainer = styled.TouchableOpacity`
  background-color: #0059b3;
  justifyContent: center;
  height: ${layout.l};
  margin: ${layout.m};
  borderRadius: ${layout.border};
  elevation: 5;
`

const ButtonText = styled.Text`
  color: white;
  textAlign: center;
  display: flex;
  fontSize: 25px;
`

export default Button;
