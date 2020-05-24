import React from "react";
import styled from "styled-components/native";
import PostCard from "../components/PostCard";
import Button from "../components/Button";

function PostScreen(props) {
  return (
    <MainContainer>
      <Button />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </MainContainer>
  );
}

const MainContainer = styled.ScrollView`
  background-color: #f2f2f2;
  flex: 1;
`

export default PostScreen;
