import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {createStore} from "redux";
import styled from 'styled-components/native';
import Button from '../components/Button';
import {cardContentUrl} from '../constants';
import PostCard from '../components/PostCard';

function PostScreen() {
  const [cardList, setCardList] = useState([]);
  const networkErrorMessage = 'Please check out your network!';

  const store = createStore((state=[], action) => {
    return action.type === 'ADD_CARD' ? state.concat([action.text]) : state
  })

  function fetchCardContentData() {
    fetch(cardContentUrl)
      .then(res => res.json())
      .then(data => setCardList(data))
      .catch(err => alert(`${err}.\n${networkErrorMessage}`));
  }

  function storeCards(body) {
    store.dispatch({ type: 'ADD_CARD', body }, ['Post card list'])
  }

  useEffect(() => {
    fetchCardContentData();
    storeCards(cardList)
  }, []);

  return (
    <MainContainer>
      <Button />
      <FlatList
        data={cardList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <PostCard title={item.title} id={item.userId} body={item.body} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={cardList === []}
            onRefresh={() => fetchCardContentData()}
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
