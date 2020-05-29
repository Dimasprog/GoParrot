import React from 'react'
import styled from 'styled-components/native';
import Button from "./Button";
import {useDispatch} from "react-redux";

function Status(props) {
  const postId = props.route.params.id -1
  console.log(postId)
  const dispatch = useDispatch()

  function setPostPinState(type) {
    dispatch({type, postId})
    props.navigation.goBack()
  }

  return (
    <MainContainer>
      <Button title={'PINNED'} onPress={() => setPostPinState('PIN_POST')} />
      <Button title={'UNPINNED'} onPress={() => setPostPinState('UNPIN_POST')} />
    </MainContainer>
  )
}

const MainContainer = styled.View`
  background-color: #f2f2f2;
  flex: 1;
`

export default Status;