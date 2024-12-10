import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import * as ImagePicker from "expo-image-picker";
// import UserContext from "../context/UserContext";
// import { useMutation } from "@tanstack/react-query";
// import { register } from "../api/auth";

const Register = ({ navigation }) => {
  // const [authenticated, setAuthenticated] = UserContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Register = () => {
    Alert.alert("Join US !");
    console.log("login with:", { username, password });
  };

  // const [image, setImage] = useState(null);

  // const { mutate } = useMutation({
  //   mutationFn: () => register(userInfo, image),
  //   onSuccess: () => {
  //     setAuthenticated(true);
  //   },
  // });

  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ["images", "videos"],
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.canceled) {
  //     setImage(result.assets[0].uri);
  //   }
  // };

  // const handleRegister = () => {
  //   mutate();
  // };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Register</Text>

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
        {/* <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("Home"), handleLogin;
          }}
        >

          <Text style={styles.buttonText}> Register</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={{ marginTop: 20 }} onPress={pickImage}>
          <Text style={{ color: colors.white, fontSize: 16 }}>
            Upload Profile Image
          </Text>
        </TouchableOpacity>
{/* 
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 100,
              height: 100,
            }}
          />
        )} */}

        <TouchableOpacity
          style={{
            backgroundColor: colors.white,
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
            alignItems: "center",
          }}
          onPress={handleRegister}
        >
          <Text
            style={{
              color: colors.primary,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
        <View style={styles.linkContainer}>
          <Text style={styles.prompt}>Have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.goBack("Login")}>
            <Text style={styles.linkText}>Login Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  formContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    justifyContent: "center",
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
    fontSize: 14,
  },
  linkText: {
    color: "#4b0082",
    fontWeight: "600",
    marginLeft: 5,
  },
});
