import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home";
import RestaurantList from "../../componants/RestaurantList";
import Menu from "../../componants/Menu";
import dishDetails from "../../screens/dishDetails";
import CategoriesList from "../../componants/categoriesList";
import Cart from "../../screens/Cart";

const Stack = createStackNavigator();

const RestaurantNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RestaurantList" component={Menu} />
      <Stack.Screen name="Menu" component={Menu} />

      <Stack.Screen
        name="DishDetails"
        component={dishDetails}
        options={({ route }) => ({ title: route.params.dish.name })}
      />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default RestaurantNav;

const styles = StyleSheet.create({});
