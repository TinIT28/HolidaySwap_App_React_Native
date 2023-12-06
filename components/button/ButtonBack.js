import React from "react";
import { View, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";

const ButtonBack = ({ navigation }) => {
  return (
    <View className="relative py-6">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute top-4 left-4 bg-[#ECECEC] p-3 rounded-full shadow"
      >
        <Icon.ArrowLeft strokeWidth={3} stroke={"#AAAAAA"} />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonBack;
