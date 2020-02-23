import "react-native-gesture-handler";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TabNavigator from "./navigator/TabNavigator";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { CONTENTFUL_API_KEY } from "./config.js";

const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/ldcl3ayg0mhx",
  credentials: "same-origin",
  headers: {
    Authorization: CONTENTFUL_API_KEY
  }
});
const initialState = {
  action: "",
  name: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { action: "openMenu" };
    case "CLOSE_MENU":
      return { action: "closeMenu" };
    case "UPDATE_NAME":
      return { name: action.name };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  </ApolloProvider>
);

export default App;
