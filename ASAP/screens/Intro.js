// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { useState } from "react";
// import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Carousel from "react-native-snap-carousel";

// const Intro = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const { width } = Dimensions.get("window");

//   const carouselItems = [
//     { title: "Featured Restaurants" },
//     { title: "Today's Specials" },
//     { title: "New in Your Area" },
//   ];
//   const renderCarouselItem = ({ item, index }) => (
//     <View style={styles.carouselItem}>
//       <Text style={styles.carouselItemText}>{item.title}</Text>
//     </View>
//   );
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.logoContainer}>
//         <Image
//           source={{
//             uri: "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png",
//           }}
//           style={styles.logo}
//           resizeMode="contain"
//         />
//       </View>

//       <View style={styles.carouselContainer}>
//         <Carousel
//           data={carouselItems}
//           renderItem={renderCarouselItem}
//           sliderWidth={sliderWidth}
//           itemWidth={itemWidth}
//           onSnapToItem={(index) => setActiveSlide(index)}
//         />
//       </View>

//       <View style={styles.paginationContainer}>
//         {carouselItems.map((_, index) => (
//           <View
//             key={index}
//             style={[
//               styles.paginationDot,
//               index === activeSlide ? styles.paginationDotActive : null,
//             ]}
//           />
//         ))}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Intro;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#f8f8f8",
// //   },
// //   logoContainer: {
// //     alignItems: "center",
// //     marginTop: 20,
// //     marginBottom: 20,
// //   },
// //   logo: {
// //     width: 200,
// //     height: 80,
// //   },
// //   carouselContainer: {
// //     flex: 1,
// //     justifyContent: "center",
// //   },
// //   carouselItem: {
// //     backgroundColor: "#fff",
// //     borderRadius: 10,
// //     height: 200,
// //     padding: 20,
// //     marginLeft: 25,
// //     marginRight: 25,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.25,
// //     shadowRadius: 3.84,
// //     elevation: 5,
// //   },
// //   carouselItemText: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //   },
// //   paginationContainer: {
// //     flexDirection: "row",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginBottom: 20,
// //   },
// //   paginationDot: {
// //     width: 10,
// //     height: 10,
// //     borderRadius: 5,
// //     backgroundColor: "#d1d1d1",
// //     margin: 5,
// //   },
// //   paginationDotActive: {
// //     backgroundColor: "#007aff",
// //   },
// // });

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Carousel from 'react-native-snap-carousel';

// // Get screen width for carousel layout
// const { width } = Dimensions.get('window');
// const sliderWidth = width;
// const itemWidth = width - 60; // Adjust this according to your design

// const Intro = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const carouselItems = [
//     { title: 'Featured Restaurants' },
//     { title: 'Today\'s Specials' },
//     { title: 'New in Your Area' },
//   ];

//   const renderCarouselItem = ({ item, index }) => (
//     <View style={styles.carouselItem}>
//       <Text style={styles.carouselItemText}>{item.title}</Text>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.logoContainer}>
//         <Image
//           source={{ uri: 'https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png' }}
//           style={styles.logo}
//           resizeMode="contain"
//         />
//       </View>

//       <View style={styles.carouselContainer}>
//         <Carousel
//           data={carouselItems}
//           renderItem={renderCarouselItem}
//           sliderWidth={sliderWidth}
//           itemWidth={itemWidth}
//           onSnapToItem={(index) => setActiveSlide(index)}
//         />
//       </View>

//       <View style={styles.paginationContainer}>
//         {carouselItems.map((_, index) => (
//           <View
//             key={index}
//             style={[
//               styles.paginationDot,
//               index === activeSlide ? styles.paginationDotActive : null
//             ]}
//           />
//         ))}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Intro;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   logo: {
//     width: 200,
//     height: 80,
//   },
//   carouselContainer: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   carouselItem: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     height: 200,
//     padding: 20,
//     marginLeft: 25,
//     marginRight: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   carouselItemText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   paginationContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   paginationDot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#d1d1d1',
//     margin: 5,
//   },
//   paginationDotActive: {
//     backgroundColor: '#007aff',
//   },
// });

