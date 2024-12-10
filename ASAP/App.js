import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

import RestaurantList from "./componants/RestaurantList";
import CategoriesList from "./componants/categoriesList";
import Menu from "./componants/Menu";
import Login from "./screens/Login";
import React from "react";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import AuthNav from "./Auth/AuthNav/AuthNav";
import MenuNav from "./Auth/MenuNav/MenuNav";
import RestaurantNav from "./Auth/RestaurantNav/RestaurantNav";
import Cart from "./screens/Cart";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Intro from "./screens/Intro";
import MainNav from "./Auth/MainNav";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* <Menu /> */}
      {/* <MenuNav/> */}

      {/* <Intro/> */}

      {/* <Home /> */}
      {/* <RestaurantNav /> */}
      {/* <AuthNav /> */}

      <MainNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
