import React from 'react';
import PostScreen from "./PostScreen";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Status from "../components/Status";

const store = createStore((posts=[], action) => {
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

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName="PostScreen"
            screenOptions={{headerShown: false}}>
          <Stack.Screen name="PostScreen" component={PostScreen} />
          <Stack.Screen name="Status" component={Status} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
