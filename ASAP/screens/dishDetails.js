// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   Button,
//   Alert,
// } from "react-native";
// import React from "react";
// import restaurants from "../data/restaurants";

// const dishDetails = ({ route }) => {
//   const { dish } = route.params;
//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: dish.image }} style={styles.image} />
//       {/* <View style={styles.image}></View> */}
//       <Text style={styles.name}>{dish.name}</Text>
//       <Text style={styles.description}>{dish.description}</Text>
//       <Text style={styles.price}>{dish.price}</Text>
//       <TouchableOpacity
//         style={styles.addButton}
//         onPress={() => Alert.alert(`Added ${dish.name}to cart`)}
//       >
//         <Text style={styles.buttonText}>Add to Cart</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default dishDetails;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f9f9f9",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     padding: 15,
//   },
//   image: {
//     width: "100%",
//     height: 300,
//     borderRadius: 25,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     marginBottom: 50,
//   },
//   name: {
//     fontSize: 26,
//     fontWeight: "700",
//     color: "#333",
//     marginBottom: 5,
//     textAlign: "center",
//   },
//   description: {
//     fontSize: 16,
//     color: "#777",
//     // marginBottom:16,
//     textAlign: "center",
//     paddingHorizontal: 20,
//   },
//   price: {
//     fontSize: 22,
//     fontWeight: "600",
//     marginBottom: 10,
//     color: "#333",
//   },
//   addButton: {
//     backgroundColor: "#9370db",
//     paddingVertical: 12,
//     paddingHorizontal: 40,
//     borderRadius: 30,
//     alignItems: "center",
//     justifyContent: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.2,
//     shadowRadius: 12,
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "700",
//     fontSize: 18,
//   },
// });

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import restaurants from "../data/restaurants";

const DishDetails = ({ route }) => {

  const { dish } = route.params;

  // State to manage the quantity of the dish
  const [quantity, setQuantity] = useState(0);

  // Function to handle adding to cart
  const addToCart = () => {
    if (quantity > 0) {
      Alert.alert("Success", `${quantity}x ${dish.name} added to the cart`);
      setQuantity(0); // Reset quantity after adding to cart
    } else {
      Alert.alert(
        "Error",
        "Please increase the quantity before adding to cart"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: dish.image }} style={styles.image} />
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <Text style={styles.price}>KD {dish.price}</Text>

      {/* Quantity Buttons */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => setQuantity((prev) => Math.max(0, prev - 1))} // Decrease quantity
        >
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityDisplay}>{quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => setQuantity((prev) => prev + 1)} // Increase quantity
        >
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.addButton} onPress={addToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DishDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 15,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    marginBottom: 50,
  },
  name: {
    fontSize: 26,
    fontWeight: "700",
    color: "#333",
    marginBottom: 5,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  price: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
    color: "#333",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: "#9370db",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  quantityText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  quantityDisplay: {
    fontSize: 18,
    fontWeight: "600",
    minWidth: 30,
    textAlign: "center",
  },
  addButton: {
    backgroundColor: "#9370db",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },
});
