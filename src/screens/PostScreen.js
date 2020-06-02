import React, {useEffect} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import styled from 'styled-components/native';
import Button from '../components/Button';
import {postListUrl} from '../constants';
import PostCard from '../components/PostCard';
import {useDispatch, useSelector} from "react-redux";
import {reduxStore, removeLocalPostList, retrieveLocalPostList, storeLocalPostList} from "../components/Storage";

const networkErrorMessage = 'Please check out your network!';

function PostScreen({navigation}) {
  const postList = useSelector(state => state)
  const dispatch = useDispatch()

  function resetPostList() {
    removeLocalPostList('POST_LIST')
      .then(() => fetchCardList())
      .catch((err) => alert(`Error, Something went wrong!\n${err}.`))
  }

  function storePosts(postList) {
    dispatch({
      type: 'FETCH_SUCCESS',
      postList
    })
  }

  function fetchCardList() {
    retrieveLocalPostList('POST_LIST')
      .then(data => storePosts(JSON.parse(data)))
      .catch(() => {
        fetch(postListUrl)
          .then(res => res.json())
          .then(data => storePosts(data))
          .catch(err => alert(`${err}.\n${networkErrorMessage}`));
      })
  }


  useEffect(() => {
    fetchCardList();
    return () => {
      let localPostList = JSON.stringify(reduxStore.getState())
      storeLocalPostList('POST_LIST', localPostList)
    }
  }, []);

  return (
    <MainContainer>
      <Button title={'RESET'} onPress={resetPostList} />
      <FlatList
        data={postList.slice().sort((a, b) => a.isPinned === b.isPinned ? 0 : a.isPinned ? -1 : 1)}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <PostCard
            navigation={navigation}
            title={item.title}
            userId={item.userId}
            id={item.id}
            body={item.body}
            isPinned={item.isPinned}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={postList === []}
            onRefresh={fetchCardList}
          />
        }
      />
    </MainContainer>
  );
}

const MainContainer = styled.View`
  background-color: #f2f2f2;
  flex: 1;
`;

export default PostScreen;
