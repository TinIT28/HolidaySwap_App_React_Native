// import React from "react";
// import AntDesign from "@expo/vector-icons/AntDesign";

// import {
//   SafeAreaView,
//   Image,
//   StyleSheet,
//   FlatList,
//   View,
//   Text,
//   StatusBar,
//   TouchableOpacity,
//   Dimensions,
// } from "react-native";
// import { ScrollView } from "react-native";

// const { width, height } = Dimensions.get("window");

// const COLORS = { primary: "#fff", black: "#2196F3" };

// const slides = [
//   {
//     id: "1",
//     image: require("../../assets/images/image1.png"),
//     title: "Best travel destinations \n in Vietnam",
//     appName: "HolidaySwap",
//     subtitle: "“Let us guide your adventure.”",
//   },
//   {
//     id: "2",
//     image: require("../../assets/images/image2.png"),
//     title: "Meet the needs of the \n holidays",
//     appName: "HolidaySwap",
//     subtitle: "“Turn every trip into an amazing adventure.”",
//   },
//   {
//     id: "3",
//     image: require("../../assets/images/image3.png"),
//     title: "Go on holiday with a \nsmile",
//     appName: "HolidaySwap",
//     subtitle: "“Easy, fast, and convenient exchange.”",
//   },
//   {
//     id: "4",
//     image: require("../../assets/images/image4.png"),
//     title: "We are here to make your \nholiday easier",
//     appName: "HolidaySwap",
//     subtitle: "“Experience the world through our app.”",
//   },
// ];

// const Slide = ({ item }) => {
//   return (
//     <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
//       <Image
//         source={item?.image}
//         style={{
//           height: "75%",
//           width,
//           borderBottomLeftRadius: 90,
//           borderBottomRightRadius: 90,
//         }}
//       />
//       <View style={{ alignItems: "center" }}>
//         <Text style={styles.title}>{item?.title}</Text>
//         <Text style={styles.appName}>{item?.appName}</Text>
//         <Text style={styles.subtitle}>{item?.subtitle}</Text>
//       </View>
//     </View>
//   );
// };

// const OnboardingScreen = ({ navigation }) => {
//   const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
//   const ref = React.useRef();
//   const updateCurrentSlideIndex = (e) => {
//     const contentOffsetX = e.nativeEvent.contentOffset.x;
//     const currentIndex = Math.round(contentOffsetX / width);
//     setCurrentSlideIndex(currentIndex);
//   };

//   const skip = () => {
//     const lastSlideIndex = slides.length - 1;
//     const offset = lastSlideIndex * width;
//     ref?.current.scrollToOffset({ offset });
//     setCurrentSlideIndex(lastSlideIndex);
//   };

//   const Footer = () => {
//     return (
//       <View
//         style={{
//           height: height * 0.25,
//           justifyContent: "space-between",
//         }}
//       >
//         <ScrollView>
//           <View style={{ marginBottom: 20 }}>
//             {currentSlideIndex == slides.length - 1 ? (
//               <View
//                 style={{
//                   justifyContent: "center",
//                   alignItems: "center",
//                   marginTop: 70,
//                 }}
//               >
//                 <TouchableOpacity
//                   style={{
//                     backgroundColor: "#2196F3",
//                     width: 315,
//                     height: 50,
//                     justifyContent: "center",
//                     alignItems: "center",
//                     borderRadius: 30,
//                   }}
//                   onPress={() => navigation.replace("WelcomeBackScreen")}
//                 >
//                   <Text
//                     style={{
//                       fontWeight: "bold",
//                       fontSize: 15,
//                       color: "white",
//                     }}
//                   >
//                     GET STARTED
//                   </Text>
//                 </TouchableOpacity>
//                 <View className="flex-row mt-5">
//                   <Text style={{ fontSize: 16 }}>Dont’t have an account?</Text>
//                   <TouchableOpacity>
//                     <Text
//                       style={{ fontSize: 16, color: "#2196F3", marginLeft: 3 }}
//                     >
//                       Register
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             ) : (
//               <View className="flex-row justify-between items-center mt-24 px-5">
//                 <View className="flex-row items-center">
//                   <TouchableOpacity
//                     activeOpacity={0.8}
//                     style={[styles.btn]}
//                     onPress={skip}
//                   >
//                     <AntDesign name="right" size={20} color="#fff" />
//                   </TouchableOpacity>
//                   <Text style={{ marginLeft: 10 }}>Skip</Text>
//                 </View>
//                 <View className="flex-row ">
//                   {slides.map((_, index) => (
//                     <View
//                       key={index}
//                       style={[
//                         styles.indicator,
//                         currentSlideIndex == index && {
//                           backgroundColor: COLORS.black,
//                           width: 26,
//                           height: 8,
//                         },
//                       ]}
//                     />
//                   ))}
//                 </View>
//               </View>
//             )}
//           </View>
//         </ScrollView>
//       </View>
//     );
//   };

//   return (
//     <>
//       <ScrollView style={{ flex: 1, backgroundColor: COLORS.primary }}>
//         <StatusBar backgroundColor={COLORS.primary} />
//         <FlatList
//           ref={ref}
//           onMomentumScrollEnd={updateCurrentSlideIndex}
//           contentContainerStyle={{ height: height * 0.75 }}
//           showsHorizontalScrollIndicator={false}
//           horizontal
//           data={slides}
//           pagingEnabled
//           renderItem={({ item }) => <Slide item={item} />}
//         />
//         <Footer />
//       </ScrollView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   subtitle: {
//     color: "#000",
//     fontSize: 16,
//     marginTop: 15,
//     marginBottom: 10,
//   },
//   title: {
//     color: "#000",
//     fontSize: 27,
//     fontWeight: "bold",
//     marginTop: 20,
//     textAlign: "center",
//   },
//   appName: {
//     color: "#2196F3",
//     fontSize: 20,
//     marginTop: 10,
//     textAlign: "center",
//   },
//   image: {
//     height: "100%",
//     width: "100%",
//     resizeMode: "contain",
//   },
//   indicator: {
//     height: 8,
//     width: 8,
//     borderRadius: 100,
//     backgroundColor: "grey",
//     marginHorizontal: 3,
//   },
//   btn: {
//     width: 60,
//     height: 60,
//     borderRadius: 100,
//     backgroundColor: "#2196F3",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
// export default OnboardingScreen;
