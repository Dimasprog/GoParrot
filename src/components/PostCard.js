import React from "react";
import styled from "styled-components/native";
import {layout} from "../constants";

function PostCard(props) {
  return (
    <CardContainer />
  );
}

const CardContainer = styled.View`
  background-color: white;
  height: 100px;
  display: flex;
  marginHorizontal: ${layout.m};
  marginVertical: ${layout.xs};
  elevation: 3;
`

export default PostCard;
