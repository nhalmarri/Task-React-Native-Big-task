import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantNav from "./RestaurantNav/RestaurantNav";
import Cart from "../screens/Cart";
import Login from "../screens/Login";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
const MainNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#9370db",
        tabBarInactiveTintColor: "#aaa",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={RestaurantNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="login" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNav;
