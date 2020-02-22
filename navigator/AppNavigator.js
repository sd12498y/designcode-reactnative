import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import React from "react";

const Stack = createStackNavigator();
const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" headerMode="none" mode="modal">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Section" component={SectionScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
