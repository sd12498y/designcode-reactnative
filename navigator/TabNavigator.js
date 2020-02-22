import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import { Ionicons } from "@expo/vector-icons";
import CoursesScreen from "../screens/CoursesScreen";
import ProjectsScreen from "../screens/ProjectsScreen";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const HomeStack = createStackNavigator();
const HomeNavigator = () => (
  <HomeStack.Navigator initialRouteName="Home" headerMode="none" mode="modal">
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Section" component={SectionScreen} />
  </HomeStack.Navigator>
);
var homeStackNavigationOptions = ({ route }) => {
  var tabBarVisible = true;
  try {
    const routeName = route.state.routes[route.state.routes.length - 1].name;
    if (routeName === "Section") {
      tabBarVisible = false;
    }
  } catch (err) {}
  return {
    tabBarVisible: tabBarVisible,
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name="ios-home"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  };
};
const CoursesStack = createStackNavigator();
const CoursesNavigator = () => (
  <CoursesStack.Navigator initialRouteName="Section" headerMode="none">
    <CoursesStack.Screen name="Courses" component={CoursesScreen} />
  </CoursesStack.Navigator>
);

const ProjectsStack = createStackNavigator();
const ProjectsNavigator = () => (
  <ProjectsStack.Navigator initialRouteName="Section" headerMode="none">
    <ProjectsStack.Screen name="Section" component={ProjectsScreen} />
  </ProjectsStack.Navigator>
);
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={homeStackNavigationOptions}
      />
      <Tab.Screen
        name="CoursesNavigator"
        component={CoursesNavigator}
        options={{
          tabBarLabel: "Courses",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-albums"
              size={26}
              color={focused ? activeColor : inactiveColor}
            />
          )
        }}
      />
      <Tab.Screen
        name="ProjectsNavigator"
        component={ProjectsNavigator}
        options={{
          tabBarLabel: "Projects",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-folder"
              size={26}
              color={focused ? activeColor : inactiveColor}
            />
          )
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
export default TabNavigator;
