import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "../../componants/Menu";
import dishDetails from "../../screens/dishDetails";
import RestaurantList from "../../componants/RestaurantList";
import Cart from "../../screens/Cart";
import Home from "../../screens/Home";

const Stack = createNativeStackNavigator();

const MenuNav = () => {
  return (
    <Stack.Navigator>
        
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="RestaurantList" component={RestaurantList} /> 
      <Stack.Screen
        name="DishDetails"
        component={dishDetails}
        options={({ route }) => ({ title: route.params.dish.name })}
      />
      
    
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default MenuNav;

const styles = StyleSheet.create({});
