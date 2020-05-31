import {createStore} from "redux";

export const store = createStore((posts=[], action) => {
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
