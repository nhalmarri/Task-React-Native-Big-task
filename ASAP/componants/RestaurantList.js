// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   Alert,FlatList
// } from "react-native";
// import React from "react";

// import restaurants from "../data/restaurants";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const RestaurantList = ({route}) => {
//   const handlePress = (restaurant) => {
//     Alert.alert(restaurant.name);
//   };
//   const {restaurant} =route.params;
  
//   return (

//     // <View>
//     //   <Text style={styles.sectionTitle}>Available Restaurants</Text>
//     //   {restaurants.map((restaurant) => (
//     //     <TouchableOpacity key={restaurant.id} style={styles.restaurantCard}  onPress={() => handlePress(restaurant)}>
//     //       <Image
//     //         source={{ uri: restaurant.image }}
//     //         style={styles.restaurantImage}
//     //       />
//     //       <View style={styles.restaurantInfo}>
//     //         <Text style={styles.restaurantName}>{restaurant.name}</Text>
//     //         <View style={styles.restaurantMeta}>
//     //           <Icon name="star" size={16} color="#9370db" />
//     //           <Text style={styles.rating}>{restaurant.rating}</Text>
//     //           <Text style={styles.deliveryTime} >
//     //             {restaurant.deliveryTime} min
//     //           </Text>
//     //         </View>
//     //       </View>
//     //     </TouchableOpacity>
//     //   ))}
//     // </View>

//     <View style={styles.container}>
//     <Text style={styles.restaurantName}>{restaurant.name}</Text>
//     <FlatList
//       data={restaurant.menuItems}
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={({ item }) => (
//         <TouchableOpacity style={styles.card}>
//           <Image source={{ uri: item.image }} style={styles.image} />
//           <View style={styles.info}>
//             <Text style={styles.name}>{item.name}</Text>
//             <Text style={styles.price}>{item.price}</Text>
//           </View>
//         </TouchableOpacity>
//       )}
//     />
//   </View>
//   );
// };

// export default RestaurantList;

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   padding: 10,
//   //   backgroundColor: "#fff"
//   // },
//   // card: {
//   //   borderWidth: 1,
//   //   borderColor: "#ccc",
//   //   borderRadius: 10,
//   //   marginBottom: 15,
//   //   overflow: "hidden",
//   //   backgroundColor:"#f8f8f8"
//   // },
//   // image: {
//   //   width: "100%",
//   //   height: 150,
//   // },
//   // info: {
//   //   padding: 10,
//   // },
//   // name: {
//   //   fontSize: 18,
//   //   fontWeight: "bold",
//   // },
//   // category: {
//   //   fontSize: 14,
//   //   color: "#666",
//   // },
//   // rating: {
//   //   fontSize: 14,
//   //   fontWeight: "bold",
//   // },
//   // deliveryTime: {
//   //   fontSize: 14,
//   //   color: "#888",
//   // },

//   sectionContainer: {
//     paddingHorizontal: 20,
//     marginVertical: 15,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: "700",
//     marginBottom: 15,
//   },
//   categoryCard: {
//     alignItems: "center",
//     marginRight: 20,
//   },
//   categoryIcon: {
//     width: 60,
//     height: 60,
//     backgroundColor: "#FFF0EE",
//     borderRadius: 30,
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 8,
//   },
//   categoryName: {
//     fontSize: 14,
//     fontWeight: "500",
//   },
//   restaurantCard: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     marginBottom: 15,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   restaurantImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 12,
//   },
//   restaurantInfo: {
//     flex: 1,
//     padding: 12,
//   },
//   restaurantName: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginBottom: 8,
//   },
//   restaurantMeta: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   rating: {
//     marginLeft: 4,
//     marginRight: 12,
//     color: "#666",
//   },
//   deliveryTime: {
//     color: "#666",
//   },
// });

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const RestaurantList = ({ route }) => {
  const { restaurant } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.restaurantName}>{restaurant.name}</Text>
      <FlatList
        data={restaurant.menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          // Added key and onPress
          <TouchableOpacity
           style={styles.card}
            key={restaurant.id}
            onPress={() => navigation.navigate("RestaurantList", { restaurant })} >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RestaurantList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    backgroundColor: "#f8f8f8",
  },
  image: {
    width: "100%",
    height: 150,
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#777",
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});





