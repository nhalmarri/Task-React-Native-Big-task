// import {
//   Button,
//   FlatList,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ScrollView,
//   Alert,
//   TouchableOpacity,
//   SafeAreaView,
//   TextInput,
// } from "react-native";
// import React, { useState } from "react";
// import { useNavigation } from "@react-navigation/native";
// import restaurants from "../data/restaurants";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// const Menu = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [quantities, setQuantities] = useState({});
//   const navigation = useNavigation();

//   const addQuantity = (item) => {
//     setQuantities((prevQuantities) => {
//       const currentQuantity = prevQuantities[item.id] || 0;
//       return {
//         ...prevQuantities,
//         [item.id]: currentQuantity + 1,
//       };
//     });
//   };
//   const removeFromCart=(item)=>{
//     setQuantities((prevQuantities)=>{
//       const currentQuantity = prevQuantities[item.id]|| 0;
//       return{
//         ...prevQuantities,
//         [item.id]: Math.max(currentQuantity - 1, 0),
//       }

//     })

//   }

//   const addToCart = (item) => {
//     const quantity = quantities[item.id] || 1; // If no quantity set, default to 1
//     if (quantity > 0) {
//       setCartItems((prevCart) => {
//         // Check if item already exists in the cart
//         const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
//         if (existingItem) {
//           // Update quantity of existing item
//           return prevCart.map((cartItem) =>
//             cartItem.id === item.id
//               ? { ...cartItem, quantity: cartItem.quantity + quantity }
//               : cartItem
//           );
//         }
//         return [...prevCart, { ...item, quantity }];
//       });
//       Alert.alert("Success", `${quantity}x ${item.name} added to the cart`);
//       setQuantities((prevQuantities) => ({
//         ...prevQuantities,
//         [item.id]: 0, // Reset the quantity
//       }));
//     } else {
//       Alert.alert("Error", "Please increase the quantity before adding to the cart");
//     }
//   };

//   const goToCart = () => {
//     // Pass cartItems as a parameter when navigating to Cart
//     navigation.navigate("Cart", { cartItems });
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={styles.header}>
//           {/* <View style={styles.searchContainer}>
//             <Icon
//               name="magnify"
//               size={24}
//               color="#9370db"
//               style={styles.searchIcon}
//             />
//             <TextInput
//               placeholder="Search for dishes"
//               style={styles.searchInput}
//             />
//           </View> */}
//         </View>
//         <View style={styles.sectionContainer}>
//           {restaurants.map((restaurant) => (
//             <View key={restaurant.id} style={styles.restaurantSection}>
//               <Text style={styles.restaurantName}>{restaurant.name}</Text>
//               <FlatList
//                 data={restaurant.menuItems}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({ item }) => (
//                   <TouchableOpacity
//                     style={styles.card}
//                     onPress={() =>
//                       navigation.navigate("DishDetails", { dish: item })
//                     }
//                   >
//                     <Image source={{ uri: item.image }} style={styles.image} />
//                     <View style={styles.info}>
//                       <Text style={styles.name}>{item.name}</Text>
//                       <Text style={styles.price}>{item.price} KD</Text>

//                       {/* Quantity & Add-to-Cart Section */}
//                       <View style={styles.quantityRow}>
//                         <TouchableOpacity
//                           style={styles.quantityButton}
//                           onPress={() => removeQuantity(item)}
//                         >
//                           <Icon name="minus-circle" size={20} color="#9370db" />
//                         </TouchableOpacity>
//                         <Text style={styles.quantityDisplay}>
//                           {quantities[item.id] || 0}
//                         </Text>
//                         <TouchableOpacity
//                           style={styles.quantityButton}
//                           onPress={() => addQuantity(item)}
//                         >
//                           <Icon name="plus-circle" size={20} color="#9370db" />
//                         </TouchableOpacity>
//                         <TouchableOpacity
//                           style={styles.cartIcon}
//                           onPress={() => addToCart(item)}
//                         >
//                           <Icon name="cart" size={24} color="#9370db" />
//                         </TouchableOpacity>
//                       </View>
//                     </View>
//                   </TouchableOpacity>
//                 )}
//               />
//             </View>
//           ))}

//           {/* Go to cart Button */}
//           <TouchableOpacity style={styles.cartButton} onPress={goToCart}>
//             <Icon
//               name="cart-arrow-down"
//               size={20}
//               color="#fff"
//               style={{ marginRight: 8 }}
//             />
//             <Text style={styles.cartText}>Go to Cart</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>

//   );
// };

// export default Menu;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: "#fff",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//   },
//   searchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//     paddingHorizontal: 15,
//     marginHorizontal: 20,
//     borderRadius: 12,
//     marginVertical: 15,
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     paddingVertical: 12,
//     fontSize: 16,
//   },
//   sectionContainer: {
//     paddingHorizontal: 20,
//     marginVertical: 15,
//   },
//   restaurantSection: {
//     marginBottom: 30,
//     paddingHorizontal: 20,
//   },
//   restaurantName: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   card: {
//     flexDirection: "row",
//     backgroundColor: "white",
//     borderRadius: 8,
//     marginBottom: 16,
//     padding: 12,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//   },
//   info: {
//     flex: 1,
//     marginLeft: 20,
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 5,
//   },
//   price: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 4,
//     color: "#777",
//   },
//   addButton: {
//     backgroundColor: "#9370db",
//     paddingHorizontal: 20,
//     paddingVertical: 8,
//     borderRadius: 50,
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "500",
//   },
//   List: {
//     paddingBottom: 20,
//   },
//   iconContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   cartIcon: {
//     marginRight: 2,
//     marginLeft: 20,
//   },
//   cartButton: {
//     backgroundColor: "#9370db",
//     paddingVertical: 10,
//     borderRadius: 50,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   cartText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   quantityRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   quantityButton: {
//     marginHorizontal: 10,
//   },
//   quantityDisplay: {
//     fontSize: 18,
//     fontWeight: "600",
//     textAlign: "center",
//     minWidth: 30,
//   },
//   cartIcon: {
//     marginLeft: 20,
//   },
// });

import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import restaurants from "../data/restaurants";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Menu = ({ route }) => {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [modalVisible, setModalVisible] = useState(false); // Modal state
  const [selectedDish, setSelectedDish] = useState(null); // Selected dish state
  const navigation = useNavigation();
  const { restaurant } = route.params;

  console.log(restaurant);

  const addQuantity = (item) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[item.id] || 0;
      return {
        ...prevQuantities,
        [item.id]: currentQuantity + 1,
      };
    });
  };

  const removeQuantity = (item) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[item.id] || 0;
      return {
        ...prevQuantities,
        [item.id]: Math.max(currentQuantity - 1, 0),
      };
    });
  };

  const addToCart = (item) => {
    const quantity = quantities[item.id] || 1;
    if (quantity > 0) {
      setCartItems((prevCart) => {
        const existingItem = prevCart.find(
          (cartItem) => cartItem.id === item.id
        );
        if (existingItem) {
          return prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + quantity }
              : cartItem
          );
        }
        return [...prevCart, { ...item, quantity }];
      });
      Alert.alert("Success", `${quantity}x ${item.name} added to the cart`);
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.id]: 0,
      }));
    } else {
      Alert.alert(
        "Error",
        "Please increase the quantity before adding to the cart"
      );
    }
  };

  const openModal = (dish) => {
    setSelectedDish(dish);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedDish(null);
  };

  const goToCart = () => {
    navigation.navigate("Cart", { cartItems });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sectionContainer}>
          <View key={restaurant.id} style={styles.restaurantSection}>
            <Text style={styles.restaurantName}>{restaurant.name}</Text>
            <FlatList
              data={restaurant.menuItems}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
              numColumns={1} // Display as a single list
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => openModal(item)} // Open modal
                >
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <View style={styles.info}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>{item.price} KD</Text>

                    <View style={styles.quantityRow}>
                      <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => removeQuantity(item)}
                      >
                        <Icon name="minus-circle" size={20} color="#9370db" />
                      </TouchableOpacity>
                      <Text style={styles.quantityDisplay}>
                        {quantities[item.id] || 0}
                      </Text>
                      <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => addQuantity(item)}
                      >
                        <Icon name="plus-circle" size={20} color="#9370db" />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.cartIcon}
                        onPress={() => addToCart(item)}
                      >
                        <Icon name="cart" size={24} color="#9370db" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>

          <TouchableOpacity style={styles.cartButton} onPress={goToCart}>
            <Icon name="cart-arrow-down" size={20} color="#fff" />
            <Text style={styles.cartText}>Go to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedDish && (
              <>
                <Image
                  source={{ uri: selectedDish.image }}
                  style={styles.modalImage}
                />
                <Text style={styles.modalName}>{selectedDish.name}</Text>
                <Text style={styles.modalDescription}>
                  {selectedDish.description || "No description available."}
                </Text>
                {/* <Text style={styles.modalPrice}>{selectedDish.price} KD</Text> */}
              </>
            )}
            {/* <Button  title="Close" onPress={closeModal} /> */}
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Menu;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  restaurantSection: {
    marginBottom: 30,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 16,
    padding: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 10,
    height: 250,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  info: {
    alignItems: "center",
    marginTop: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#777",
  },
  cartIcon: {
    marginTop: 10,
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  modalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#9370db",
    marginBottom: 20,
  },
  cartButton: {
    backgroundColor: "#9370db",
    paddingVertical: 10,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  quantityButton: {
    marginHorizontal: 10,
  },
  quantityDisplay: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    minWidth: 30,
  },
  closeButton: {
    backgroundColor: "#9370db",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
