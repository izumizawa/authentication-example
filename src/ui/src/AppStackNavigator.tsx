import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Screens/Login/Login";
import SignIn from "./Screens/SignIn/SignIn";

import { AppStackParamList } from "./types";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator<AppStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
