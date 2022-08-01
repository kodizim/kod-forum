import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../../constants/Colors/Colors";

import Entries from "../Entries";
import Profile from "../Profile";

const Tab = createMaterialBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      labeled={false}
      activeColor="white"
      inactiveColor={COLORS.darkgreen}
      barStyle={{ backgroundColor: "#16212E" }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
        name="EntriesPage"
        component={Entries}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}
        name="ProfilePage"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Home;
