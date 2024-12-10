import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import restaurantCategories from "../data/restaurantCategories";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CategoriesList = () => {
  return (
    // <ScrollView
    //   horizontal
    //   showsHorizontalScrollIndicator={false}
    //   style={styles.container}
    // >
    //   {restaurantCategories.map((category) => (
    //     <View key={category.id} style={styles.card}>
    //       <Image
    //         source={{ uri: category.categoryImage }}
    //         style={styles.image}
    //       />
    //       <Text style={styles.text}>{category.categoryName}</Text>
    //     </View>
    //   ))}

    // </ScrollView>

    <View>
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {restaurantCategories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryCard}>
            <View style={styles.iconContainer}>
              <Icon name={category.categoryIcon} size={32} color="#9370db" />
            </View>
            <Text style={styles.categoryName}>{category.categoryName}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  // container: {
  //   padding: 10,
  //   flexDirection: "row",
  // },
  // card: {
  //   marginRight: 10,
  //   alignItems: "center",
  //   borderWidth: 1,
  //   borderColor: "#ccc",
  //   borderRadius: 10,
  //   padding: 10,
  // },
  // image: {
  //   width: 80,
  //   height: 80,
  //   borderRadius: 10,
  // },
  // text: {
  //   margin: 5,
  //   fontSize: 14,
  //   fontWeight: "bold",
  // },
  sectionContainer: {
    margin: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  categoryCard: {
    alignItems: "center",
    marginRight: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  iconContainer: {
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
});
