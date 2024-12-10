import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "./screens/Menu";
import Cart from "./screens/Cart";
// import { CartProvider } from "./context/CartContext";

const Stack = createStackNavigator();

const CartNav = () => {
  return (
    // <CartProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
    //   </CartProvider>
  );
};

export default CartNav;

const styles = StyleSheet.create({});
