import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Entries from "./screens/Entries";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupPage"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EntriesPage"
          component={Entries}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfilePage"
          component={Profile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
