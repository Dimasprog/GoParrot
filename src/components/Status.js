import React from 'react'
import styled from 'styled-components/native';
import Button from "./Button";

function Status(props) {
  let {isActiveStatus, setActiveStatus} = props.route.params

  function pinPost() {
    if (!isActiveStatus) {
      setActiveStatus(true)
    } else {
      alert('Already pinned!')
    }
    props.navigation.goBack()
  }

  function unpinPost() {
    if (isActiveStatus) {
      setActiveStatus(false)
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