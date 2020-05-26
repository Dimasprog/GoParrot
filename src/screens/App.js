import React from 'react';
import PostScreen from "./PostScreen";
import {Provider} from "react-redux";
import {createStore} from "redux";

const store = createStore((state=[], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return state.concat([action.card])
    default:
      return state
  }
})

function App() {
  return (
    <Provider store={store}>
      <PostScreen />
    </Provider>
  );
}

export default App;
