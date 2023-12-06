import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-animatable";

export default function ImgHeaderDetail() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ImageFullResort")}>
      <View className="flex flex-col ">
        <View className="flex flex-row gap-1 justify-between">
          <Image
            className="w-[50%] h-[150px] "
            source={require("../../assets/images/landmark1.jpg")}
          />
          <Image
            className="w-[50%] h-[150px] "
            source={require("../../assets/images/landmark2.jpg")}
          />
        </View>
        <View className="flex flex-col mt-1">
          <View className="flex flex-row gap-1  justify-between">
            <Image
              className="w-[33%] h-[100px]"
              source={require("../../assets/images/landmark3.jpg")}
            />
            <Image
              className="w-[33%] h-[100px]"
              source={require("../../assets/images/landmark4.jpg")}
            />
            <View className="w-[33%] flex flex-row items-center justify-center">
              <Image
                className="w-full h-[100px] relative"
                source={require("../../assets/images/landmark.jpg")}
              />
              <Text className="absolute text-[25px] text-white font-bold">
                +140
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
