import React from 'react'
import styled from 'styled-components/native';
import Button from "./Button";
import {useDispatch} from "react-redux";


function Status(props) {
  const {isPinned, setPinned, id} = props.route.params
  const dispatch = useDispatch()

  function pinPost() {
    if (!isPinned) {
      dispatch({
        type: 'ADD_PINNED_POST',
        pinned_post: { id, isPinned }
      })
      setPinned(true)
    } else {
      alert('Already pinned!')
    }
    props.navigation.goBack()
  }

  function unpinPost() {
    if (isPinned) {
      setPinned(false)
    } else {
      alert('Already unpinned!')
    }
    props.navigation.goBack()
  }

  return (
    <MainContainer>
      <Button title={'PINNED'} onPress={pinPost} />
      <Button title={'UNPINNED'} onPress={unpinPost} />
    </MainContainer>
  )
}

const MainContainer = styled.View`
  background-color: #f2f2f2;
  flex: 1;
`

export default Status;