import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import styled from 'styled-components/native';
import Button from '../components/Button';
import {cardContentUrl} from '../constants';
import PostCard from '../components/PostCard';
import {useDispatch, useSelector} from "react-redux";

const networkErrorMessage = 'Please check out your network!';

function PostScreen() {
  const [cardList, setCardList] = useState([]);
  const data = useSelector(state => state)
  const retrieveData = useDispatch()

  function storeCard(cardBody) {
    retrieveData({
      type: 'ADD_POST',
      card: cardBody
    })
  }

  /**
   * This log is for testing. So, after all post cards rendering,
   * we could test if posts was rendered in data const.
   */
  // console.log('data', data)

  function fetchCardContentData() {
    fetch(cardContentUrl)
      .then(res => res.json())
      .then(data => setCardList(data))
      .catch(err => alert(`${err}.\n${networkErrorMessage}`));
  }

  useEffect(() => {
    fetchCardContentData();
  }, []);

  return (
    <MainContainer>
      <Button />
      <FlatList
        data={cardList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <PostCard
            storeCard={storeCard}
            title={item.title}
            id={item.userId}
            body={item.body} />
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
