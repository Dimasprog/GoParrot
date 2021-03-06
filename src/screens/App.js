import React from 'react';
import PostScreen from "./PostScreen";
import {Provider} from "react-redux";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Status from "../components/Status";
import {reduxStore} from "../components/Storage";

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={reduxStore}>
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
