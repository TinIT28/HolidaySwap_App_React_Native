import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";

export default function SpecialReq() {
  const navigation = useNavigation();
  return (
    <View>
      <View className="bg-blue-500 w-full h-[100px]  flex flex-row items-center justify-start px-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text className="ml-8 text-[20px] text-white">
          Special Requirements
        </Text>
      </View>
    </View>
  );
}
