import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Screens/Login/Login";

import { AppStackParamList } from "./types";

const Stack = createStackNavigator<AppStackParamList>();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

export default AppNavigator;
