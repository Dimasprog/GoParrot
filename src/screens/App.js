import React from 'react';
import PostScreen from "./PostScreen";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Status from "../components/Status";

const store = createStore((state=[], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return state.concat([action.card])
    case 'ADD_PINNED_POST':
      return state.concat([action.pinned_post])
    default:
      return state
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
