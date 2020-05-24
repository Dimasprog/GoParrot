import React from "react";
import styled from "styled-components/native";
import {layout} from "../constants";

function PostCard(props) {
  const {title, id, body} = props

  function cutText(text, limit) {
    return text.length < limit ? text : text.substring(0, limit - 3) + '...'
  }

  return (
    <CardContainer>
      <Header>
        <Title>{cutText(title, 30)}</Title>
        <Id>{`ID: ${id}`}</Id>
      </Header>
      <Body numberOfLines={3}>{cutText(body, 100)}</Body>
    </CardContainer>
  );
}

const CardContainer = styled.View`
  backgroundColor: white;
  height: 100px;
  display: flex;
  marginHorizontal: ${layout.m};
  marginVertical: ${layout.xs};
  padding: ${layout.s};
  borderRadius: ${layout.border};
  elevation: 3;
`
const Header = styled.View`
  display: flex;
  flexDirection: row;
  flexWrap: wrap;
  alignItems: flex-end;
  justifyContent: space-between;
  height: ${layout.xxxl};
`
const Title = styled.Text`
  fontWeight: bold;
  fontSize: 18px;
`
const Id = styled.Text`
  fontSize: 14px;
`
const Body = styled.Text`
  fontSize: 15px;
`

export default PostCard;
