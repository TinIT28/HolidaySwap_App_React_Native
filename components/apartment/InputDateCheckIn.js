// import React, { useState } from "react";
// import { TouchableOpacity } from "react-native";
// import { StyleSheet } from "react-native";
// import { Text } from "react-native";
// import { View } from "react-native-animatable";
// import { BottomSheet } from "react-native-btr";
// import InputDateComponents from "../dateInput/InputDateComponents";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import { TextInput } from "react-native";

// export default function InputDateCheckIn() {
//   const [visible, setVisible] = useState(false);

//   const toggleBottomNavigationView = () => {
//     setVisible(!visible);
//   };
//   return (
//     <View className="">
//       <TouchableOpacity onPress={toggleBottomNavigationView}>
//         <View className="flex-row items-center space-x-2   ">
//           <View className="flex-row  items-center py-3 px-5  border border-blue-300 bg-blue-100 rounded-lg">
//             <AntDesign name="calendar" size={25} color="#0592D0" />
//             <Text className="ml-2  text-blue-600">Check In</Text>
//           </View>
//         </View>
//       </TouchableOpacity>
//       <BottomSheet
//         visible={visible}
//         onBackButtonPress={toggleBottomNavigationView}
//         onBackdropPress={toggleBottomNavigationView}
//       >
//         <View style={styles.bottomNavigationView}>
//           <View
//             style={{
//               flex: 1,
//               flexDirection: "column",
//               justifyContent: "space-between",
//             }}
//           >
//             <View style={{ flex: 1, flexDirection: "row" }}>
//               {/* <InputDateComponents /> */}
//             </View>
//             <View style={{ flex: 1, flexDirection: "row" }}></View>
//           </View>
//         </View>
//       </BottomSheet>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {},
//   bottomNavigationView: {
//     backgroundColor: "#fff",
//     width: "100%",
//     height: 600,
//   },
// });
