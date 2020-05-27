import React from "react";
import styled from "styled-components/native";
import {layout} from "../constants";

function Button(props) {
  return (
    <ButtonContainer onPress={() => props.onPress()}>
      <ButtonText>{props.title}</ButtonText>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.TouchableOpacity`
  background-color: black;
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
