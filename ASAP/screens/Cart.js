// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';
// import { useRoute, useNavigation } from '@react-navigation/native'; 

// const Cart = () => {
//   const route = useRoute();
//   const navigation = useNavigation();

//   //I removed > route.params?.cartItems || []
//   const [cartItems, setCartItems] = useState([]);
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     // const newTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     // setTotal(newTotal);
//       // Check if cartItems is defined and is an array
//       if (Array.isArray(cartItems)) {
//         const newTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//         setTotal(newTotal);
//       }
//   }, [cartItems]);


//   const renderItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <Image source={{ uri: item.image }} style={styles.itemImage} />
//       <View style={styles.itemDetails}>
//         <Text style={styles.itemName}>{item.name}</Text>
//         <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
//         <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//     <Text style={styles.title}>Your Cart</Text>
//     <FlatList
//       data={cartItems || []}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id.toString()}
//       ListEmptyComponent={<Text style={styles.emptyCart}>Your cart is empty</Text>}
//     />
//     <View style={styles.totalContainer}>
//       <Text style={styles.totalText}>Total:</Text>
//       <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
//     </View>
//   </SafeAreaView>
//   )
// }

// export default Cart
// import { StyleSheet, Text, View, FlatList } from "react-native";
// import React from "react";

// const Cart = ({ route }) => {
//   const { cartItems } = route.params; // Get the cartItems from route params

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Cart</Text>
//       {cartItems.length === 0 ? (
//         <Text>Your cart is empty</Text>
//       ) : (
//         <FlatList
//           data={cartItems}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <View style={styles.cartItem}>
//               <Text style={styles.name}>{item.name}</Text>
//               <Text style={styles.price}>{item.price}</Text>
//             </View>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// export default Cart;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//     backgroundColor: "#fff",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   cartItem: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ddd",
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: "600",
//   },
//   price: {
//     fontSize: 16,
//     color: "#777",
//   },
// });


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     padding: 20,
//     textAlign: 'center',
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     padding: 15,
//     backgroundColor: 'white',
//     marginBottom: 10,
//     marginHorizontal: 10,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   itemImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//   },
//   itemDetails: {
//     flex: 1,
//     marginLeft: 15,
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   itemPrice: {
//     fontSize: 14,
//     color: '#888',
//     marginTop: 4,
//   },
//   itemQuantity: {
//     fontSize: 14,
//     color: '#888',
//     marginTop: 4,
//   },
//   totalContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20,
//     borderTopWidth: 1,
//     borderTopColor: '#e0e0e0',
//     backgroundColor: 'white',
//   },
//   totalText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   totalAmount: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#4CAF50',
//   },
//   emptyCart: {
//     textAlign: 'center',
//     fontSize: 16,
//     marginTop: 20,
//     color: '#888',
//   },
// })

import { StyleSheet, Text, View, FlatList, Image, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native"; 

const Cart = () => {
  const route = useRoute();

  // Initializing cartItems and total
  const [cartItems, setCartItems] = useState(route.params?.cartItems || []);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate the total price whenever cartItems changes
    if (Array.isArray(cartItems)) {
      const newTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      setTotal(newTotal);
    }
  }, [cartItems]);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={styles.emptyCart}>Your cart is empty</Text>}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmount}>KD {total.toFixed(2)}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
    textAlign: "center",
  },
  itemContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
  },
  itemQuantity: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    backgroundColor: "white",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#9370db",
  },
  emptyCart: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
    color: "#888",
  },
});

