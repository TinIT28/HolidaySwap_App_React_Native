import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-animatable";
import { BottomSheet } from "react-native-btr";
import InputDateComponents from "../dateInput/InputDateComponents";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TextInput } from "react-native";

export default function InputDate() {
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };
  return (
    <View className="">
      <TouchableOpacity onPress={toggleBottomNavigationView}>
        <View className="flex-row items-center space-x-2 px-4  ">
          <View className="flex-row flex-1 items-center p-3  border border-gray-300 bg-slate-100">
            <AntDesign name="calendar" size={25} color="#AAAAAA" />
            <TextInput
              placeholder="Select Date"
              className="ml-2 flex-1 text-slate-600"
            />
            <View className="flex-row items-center space-x-1 bottom-0 border-l-2 pl-2 border-l-gray-300"></View>
          </View>
        </View>
      </TouchableOpacity>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <View style={styles.bottomNavigationView}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <InputDateComponents />
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}></View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 600,
  },
});
