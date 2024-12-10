import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../../screens/Register";
import Login from "../../screens/Login";

const Stack = createNativeStackNavigator();
const AuthNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNav;

const styles = StyleSheet.create({});
