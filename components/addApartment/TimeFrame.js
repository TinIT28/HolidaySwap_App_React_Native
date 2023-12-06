// import React, { useState } from "react";
// import { TouchableOpacity } from "react-native";
// import { StyleSheet } from "react-native";
// import { Text } from "react-native";
// import { View } from "react-native-animatable";
// import { BottomSheet } from "react-native-btr";
// import { AntDesign, EvilIcons, FontAwesome5 } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import { TextInput } from "react-native";
// import { ScrollView } from "react-native";
// import { Image } from "react-native";
// import InputDateComponents from "../dateInput/InputDateComponents";
// import { format } from "date-fns";

// const initialDateRange = {
//   startDate: new Date(),
//   endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
// };

// export default function TimeFrame() {
//   const navigation = useNavigation();
//   const [visible, setVisible] = useState(false);
//   const [searchText, setSearchText] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState(null);
//   const [dateRange, setDateRange] = useState(initialDateRange);

//   const handleDateRange = (value) => {
//     setDateRange(value);
//   };

//   const toggleBottomNavigationView = () => {
//     setVisible(!visible);
//   };

//   return (
//     <View className="">
//       <View style={styles.shadow} className="bg-white rounded-xl px-5 mt-5 ">
//         <TouchableOpacity
//           onPress={() => toggleBottomNavigationView()}
//           className="py-5 flex flex-row justify-between"
//         >
//           <Text>Time:</Text>
//           <Text className="font-bold">
//             {dateRange
//               ? `${format(
//                   new Date(dateRange.startDate),
//                   "E, dd MMM"
//                 )} - ${format(new Date(dateRange.endDate), "E, dd MMM")}`
//               : "Time"}
//           </Text>
//         </TouchableOpacity>
//       </View>
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
//             <View className="flex-1 px-4">
//               <InputDateComponents handleDateRange={handleDateRange} />
//             </View>

//             <View className="pb-4 px-4">
//               <TouchableOpacity
//                 onPress={() => setVisible(!visible)}
//                 className="w-full p-4 bg-sky-500 rounded-md"
//               >
//                 <Text className="text-white text-lg text-center">Apply</Text>
//               </TouchableOpacity>
//             </View>
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
//     height: "80%",
//   },
//   shadow: {
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.27,
//     shadowRadius: 4.65,
//     elevation: 6,
//   },
// });

import { AntDesign } from "@expo/vector-icons";
import React, { Fragment, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import { Dropdown } from "react-native-element-dropdown";

export const type = [
  {
    id: 1,
    type: "DEEDED",
    label: "Owner forever",
  },
  {
    id: 2,
    type: "RIGHT_TO_USE",
    label: "Owner for a period of time",
  },
];

export default function TimeFrame({
  handleChangeTypeValue,
  handleChangeStartDate,
  handleChangeEndDate,
}) {
  const [value, setValue] = useState();

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <Fragment>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={type}
        search
        maxHeight={300}
        labelField="label"
        valueField="type"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={(item) => {
          handleChangeTypeValue(item.type);
          setValue(item.type);
        }}
        renderItem={renderItem}
      />

      {value === "RIGHT_TO_USE" && (
        <View className="flex flex-row px-4 justify-between mt-6">
          <TouchableOpacity>
            <View className="flex-row items-center space-x-2   ">
              <View className="flex-row  items-center py-3 px-5  border border-blue-300 bg-blue-100 rounded-lg">
                <AntDesign name="calendar" size={25} color="#0592D0" />
                <TextInput
                  onChangeText={(text) => handleChangeStartDate(text)}
                  keyboardType="numeric"
                  placeholder="Start year"
                  className="ml-2  text-blue-600"
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex-row items-center space-x-2   ">
              <View className="flex-row  items-center py-3 px-5  border border-blue-300 bg-blue-100 rounded-lg">
                <AntDesign name="calendar" size={25} color="#0592D0" />
                <TextInput
                  onChangeText={(text) => handleChangeEndDate(text)}
                  keyboardType="numeric"
                  placeholder="End year"
                  className="ml-2  text-blue-600"
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </Fragment>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
