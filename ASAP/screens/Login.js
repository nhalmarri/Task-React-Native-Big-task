import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = () => {
    Alert.alert("Welcome !");
    console.log("login with:", { username, password });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>

        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("Home"), handleLogin;
          }}
        >
          <Text style={styles.buttonText}> Login</Text>
        </TouchableOpacity>
        <View style={styles.linkContainer}>
          <Text style={styles.prompt}>Don't have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.linkText}>Register Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width:'100%',
    height:'100%',
  },
  formContainer: {
    width: "100%",
    height:'100%',
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    justifyContent:'center',
    // marginBottom:90,
    padding: 20,
  
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#33",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
    fontWeight: "500",
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#f5f5f5",
    color: "#333",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#D1D1D1",
  },
  buttonContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#9370db",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  linkContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  prompt: {
    color: "#333",
    fontSize:14
  },
  linkText: {
    color: "#4b0082",
    fontWeight: "600",
    marginLeft:5
  },
});
