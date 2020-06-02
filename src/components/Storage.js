import {createStore} from "redux";
import AsyncStorage from '@react-native-community/async-storage'

export const reduxStore = createStore((posts=[], action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return action.postList
    case 'PIN_POST':
      return posts.map(post => post.id === action.postId ? {...post, isPinned: true} : post)
    case 'UNPIN_POST':
      return posts.map(post => post.id === action.postId ? {...post, isPinned: false} : post)
    default:
      return posts
  }
})

export async function storeLocalPostList (key, value) {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    alert(`Something went wrong!\n${e}`)
  }
}

export async function retrieveLocalPostList(key) {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return value
    }
  } catch (e) {
    alert(`Something went wrong!\n${e}`)
  }
}

export async function removeLocalPostList(key) {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    alert(`Data not deleted!\n${e}`)
  }
}

