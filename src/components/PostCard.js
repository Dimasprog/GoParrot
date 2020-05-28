import React, {useEffect, useState} from "react";
import styled from "styled-components/native";
import {layout} from "../constants";

function PostCard(props) {
  let {navigation, storeCard, title, userId, body} = props
  const [isActiveStatus, setActiveStatus] = useState(false)
  const postCard = { title, userId, body, isActiveStatus} // <--Here is stored info about post status
  const statusParams = { isActiveStatus, setActiveStatus }

  function cutText(text, limit) {
    return text.length < limit ? text : text.substring(0, limit - 3) + '...'
  }

  useEffect(() => {
    storeCard(postCard)
  }, [])

  return (
    <CardContainer onPress={() => navigation.navigate('Status', statusParams)}>
      <Header>
        {isActiveStatus ? <Pin>➤</Pin> : null}
        <Title>{cutText(title, 30)}</Title>
        <UserId>{`ID: ${userId}`}</UserId>
      </Header>
      <Body numberOfLines={3}>{cutText(body, 100)}</Body>
    </CardContainer>
  );
}

const CardContainer = styled.TouchableOpacity`
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
const Pin = styled.Text`
  fontSize: 18px;
`
const Title = styled.Text`
  fontWeight: bold;
  fontSize: 18px;
`
const UserId = styled.Text`
  fontSize: 14px;
`
const Body = styled.Text`
  fontSize: 15px;
`

export default PostCard;