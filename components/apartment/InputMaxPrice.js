import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-animatable";

export default function InputMaxPrice() {
  return (
    <View>
      <View className="flex-row items-center px-3  border border-blue-300 bg-blue-100 rounded-lg">
        <FontAwesome5 name="coins" size={20} color="orange" />
        <TextInput
          keyboardType="numeric"
          placeholder="Max Point"
          className="p-3  text-slate-600"
        />
        <View className="flex-row items-center space-x-1 bottom-0 border-l-2 pl-2 border-l-gray-300"></View>
      </View>
    </View>
  );
}
