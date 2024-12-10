// import React from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
// } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import CategoriesList from "../componants/categoriesList";
// import RestaurantList from "../componants/RestaurantList";
// import { useNavigation } from "@react-navigation/native";
// import restaurants from "../data/restaurants";

// const Home = () => {

//   const navigation = useNavigation();
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Header */}
//         <View style={styles.header}>
//           <View>
//             <Text style={styles.headerTitle}>Deliver to</Text>
//             <View style={styles.locationContainer}>
//               <Icon name="map-marker" size={20} color="#9370db" />
//               <Text style={styles.location}>CODED</Text>
//               <Icon name="chevron-down" size={20} color="#9370db" />
//             </View>
//           </View>
//           <TouchableOpacity style={styles.profileButton}>
//             <Icon name="account" size={24} color="#9370db" />
//           </TouchableOpacity>
//         </View>

//         {/* Search Bar */}
//         <View style={styles.searchContainer}>
//           <Icon
//             name="magnify"
//             size={24}
//             color="#9370db"
//             style={styles.searchIcon}
//           />
//           <TextInput
//             placeholder="Search for restaurants or dishes"
//             style={styles.searchInput}
//           />
//         </View>

//         {/* Categories */}
//         <View style={styles.sectionContainer}>
//           <CategoriesList />
//         </View>

//         {/* List of Restaurants */}
//         <View style={styles.sectionContainer}>
//           {restaurants.map((restaurant)=>(
//             <TouchableOpacity>
//               key={restaurant.id}
//               style={styles.restaurantCard}
//               onPress{()=>{
//                 navigation.navigate("RestaurantList",{restaurant})
//               }}
//                 <Text style={styles.restaurantName}>{restaurant.name}</Text>

//           </TouchableOpacity>))}
//           {/* <RestaurantList /> */}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//   },
//   headerTitle: {
//     fontSize: 14,
//     color: "#666",
//   },
//   locationContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 4,
//   },
//   location: {
//     fontSize: 16,
//     fontWeight: "600",
//     marginHorizontal: 4,
//   },
//   profileButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: "#f5f5f5",
//     alignItems: "center",
//     justifyContent: "center",
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

// export default Home;

import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CategoriesList from "../componants/categoriesList";
import { useNavigation } from "@react-navigation/native";
import restaurants from "../data/restaurants";
import { useState } from "react";

const Home = () => {
  const navigation = useNavigation();

  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  const handleSearch = (text) => {
    setSearchInput(text);
    const filtered = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Deliver to</Text>
            <View style={styles.locationContainer}>
              <Icon name="map-marker" size={20} color="#9370db" />
              <Text style={styles.location}>CODED</Text>
              <Icon name="chevron-down" size={20} color="#9370db" />
            </View>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Icon name="account" size={24} color="#9370db" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Icon
            name="magnify"
            size={24}
            color="#9370db"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search for restaurants or dishes"
            style={styles.searchInput}
            value={searchInput}
            onChangeText={handleSearch}
          />
        </View>

        {/* Categories */}
        <View style={styles.sectionContainer}>
          <CategoriesList />
        </View>

        {/* List of Restaurants */}
        <View style={styles.sectionContainer}>
          {filteredRestaurants.map((restaurant) => (
            <TouchableOpacity
              key={restaurant.id}
              style={styles.restaurantCard}
              onPress={() =>
                navigation.navigate("RestaurantList", { restaurant })
              }
            >
              <Image
                source={{ uri: restaurant.image }}
                style={styles.restaurantImage}
              />
              <View style={styles.restaurantInfo}>
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                <View style={styles.restaurantMeta}>
                  <Icon name="star" size={16} color="#9370db" />
                  <Text style={styles.rating}>{restaurant.rating}</Text>
                  <Text style={styles.deliveryTime}>
                    {restaurant.deliveryTime}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 14,
    color: "#666",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  location: {
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 4,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 15,
    marginHorizontal: 20,
    borderRadius: 12,
    marginVertical: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  restaurantCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  restaurantImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  restaurantInfo: {
    flex: 1,
    padding: 12,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  restaurantMeta: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: 4,
    marginRight: 12,
    color: "#666",
  },
  deliveryTime: {
    color: "#666",
  },
});

export default Home;
